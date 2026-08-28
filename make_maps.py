#!/usr/bin/env python3
"""Turn public-domain map data into SVG paths for Duniya Darshan.

    python3 make_maps.py    ->  src/js/01-maps.js

Sources (both in geodata/, both free to use):
  world.json  Natural Earth 1:110m country boundaries, via world-atlas. Public domain.
  india.json  Indian state boundaries, via the bubble_maps dataset. Public domain.
  iso.json    ISO 3166-1 numeric -> alpha-2, via lukes/ISO-3166-Countries.

The world is drawn on a Robinson projection — the one newspaper atlases use.
India gets a plain Mercator, which is honest enough over 30 degrees of latitude.
"""
import json
import math
import os

HERE = os.path.dirname(os.path.abspath(__file__))
GEO = os.path.join(HERE, "geodata")

# ------------------------------------------------------------------ topojson

def decode_arcs(topo):
    """Undo TopoJSON's quantised delta encoding -> lists of [lon, lat]."""
    scale = topo["transform"]["scale"]
    translate = topo["transform"]["translate"]
    out = []
    for arc in topo["arcs"]:
        x = y = 0
        points = []
        for dx, dy in arc:
            x += dx
            y += dy
            points.append([x * scale[0] + translate[0], y * scale[1] + translate[1]])
        out.append(points)
    return out


def ring_points(arcs, indexes):
    """Stitch a ring together from arc indexes; a negative index means reversed."""
    pts = []
    for i in indexes:
        if i >= 0:
            seg = arcs[i]
        else:
            seg = arcs[~i][::-1]
        pts.extend(seg[1:] if pts else seg)
    return pts


def polygons_of(geom, arcs):
    """Every ring of a Polygon or MultiPolygon, as point lists."""
    t = geom.get("type")
    if t == "Polygon":
        return [ring_points(arcs, ring) for ring in geom["arcs"]]
    if t == "MultiPolygon":
        rings = []
        for poly in geom["arcs"]:
            for ring in poly:
                rings.append(ring_points(arcs, ring))
        return rings
    return []


# ---------------------------------------------------------------- projection

ROBINSON_X = [1, .9986, .9954, .99, .9822, .973, .96, .9427, .9216, .8962,
              .8679, .835, .7986, .7597, .7186, .6732, .6213, .5722, .5322]
ROBINSON_Y = [0, .062, .124, .186, .248, .31, .372, .434, .4958, .5571,
              .6176, .6769, .7346, .7903, .8435, .8936, .9394, .9761, 1]


def robinson(lon, lat):
    lat = max(-89.99, min(89.99, lat))
    a = abs(lat) / 5.0
    i = min(int(a), 17)
    f = a - i
    xs = ROBINSON_X[i] + (ROBINSON_X[i + 1] - ROBINSON_X[i]) * f
    ys = ROBINSON_Y[i] + (ROBINSON_Y[i + 1] - ROBINSON_Y[i]) * f
    x = 0.8487 * xs * math.radians(lon)
    y = 1.3523 * ys * (1 if lat >= 0 else -1)
    return x, -y                      # SVG y grows downward


def mercator(lon, lat):
    lat = max(-85.0, min(85.0, lat))
    x = math.radians(lon)
    y = math.log(math.tan(math.pi / 4 + math.radians(lat) / 2))
    return x, -y


# ------------------------------------------------------------------ building

def simplify(points, tol):
    """Douglas-Peucker. Keeps the shape, drops the points nobody can see."""
    if len(points) < 3:
        return points
    keep = [False] * len(points)
    keep[0] = keep[-1] = True
    stack = [(0, len(points) - 1)]
    while stack:
        lo, hi = stack.pop()
        if hi <= lo + 1:
            continue
        ax, ay = points[lo]
        bx, by = points[hi]
        dx, dy = bx - ax, by - ay
        norm = dx * dx + dy * dy
        worst, at = tol, -1
        for i in range(lo + 1, hi):
            px, py = points[i]
            if norm == 0:
                d = math.hypot(px - ax, py - ay)
            else:
                t = max(0.0, min(1.0, ((px - ax) * dx + (py - ay) * dy) / norm))
                d = math.hypot(px - (ax + t * dx), py - (ay + t * dy))
            if d > worst:
                worst, at = d, i
        if at >= 0:
            keep[at] = True
            stack.append((lo, at))
            stack.append((at, hi))
    return [p for p, k in zip(points, keep) if k]


def build(rings_by_key, project, width, pad, min_area, tol, clip=None):
    """Project, fit to a viewBox of the given width, and emit path strings."""
    projected = {}
    minx = miny = 1e9
    maxx = maxy = -1e9

    for key, rings in rings_by_key.items():
        out = []
        for ring in rings:
            if len(ring) < 4:
                continue
            pts = []
            for lon, lat in ring:
                if clip and not clip(lon, lat):
                    pts = []
                    break
                pts.append(project(lon, lat))
            if len(pts) < 4:
                continue
            out.append(pts)
            for x, y in pts:
                minx = min(minx, x); maxx = max(maxx, x)
                miny = min(miny, y); maxy = max(maxy, y)
        if out:
            projected[key] = out

    span_x = maxx - minx
    span_y = maxy - miny
    k = (width - 2 * pad) / span_x
    height = span_y * k + 2 * pad

    def to_svg(p):
        return ((p[0] - minx) * k + pad, (p[1] - miny) * k + pad)

    paths = {}
    for key, rings in projected.items():
        d = []
        for ring in rings:
            scr = [to_svg(p) for p in ring]
            # drop rings too small to see, and points too close to matter
            if polygon_area(scr) < min_area:
                continue
            cleaned = simplify(scr, tol)
            if len(cleaned) < 3:
                continue
            d.append("M" + "L".join("%.1f %.1f" % p for p in cleaned) + "Z")
        if d:
            paths[key] = "".join(d)

    fit = {"minx": minx, "miny": miny, "k": k, "pad": pad}
    return paths, round(height, 1), fit


def polygon_area(points):
    a = 0.0
    for i in range(len(points)):
        x1, y1 = points[i]
        x2, y2 = points[(i + 1) % len(points)]
        a += x1 * y2 - x2 * y1
    return abs(a) / 2


# --------------------------------------------------------------------- world

def world():
    topo = json.load(open(os.path.join(GEO, "world.json")))
    iso = json.load(open(os.path.join(GEO, "iso.json")))
    num2a2 = {str(int(x["country-code"])): x["alpha-2"] for x in iso}
    arcs = decode_arcs(topo)

    rings, names = {}, {}
    for g in topo["objects"]["countries"]["geometries"]:
        gid = g.get("id")
        if not gid:
            continue
        code = num2a2.get(str(int(gid)))
        if not code:
            continue
        rings[code] = polygons_of(g, arcs)
        names[code] = g["properties"]["name"]

    paths, height, fit = build(rings, robinson, 1000, 6, 3.0, 1.0)
    print("  world : %d countries, %.0f x %.0f" % (len(paths), 1000, height))
    return {"width": 1000, "height": height, "paths": paths, "names": names, "fit": fit}


# --------------------------------------------------------------------- india

STATE_FIXES = {
    "Arunanchal Pradesh": "Arunachal Pradesh",
    "NCT of Delhi": "Delhi",
    "Andaman & Nicobar Island": "Andaman and Nicobar Islands",
    "Dadara & Nagar Havelli": "Dadra and Nagar Haveli",
    "Daman & Diu": "Daman and Diu",
    "Jammu & Kashmir": "Jammu and Kashmir",
}


def india():
    topo = json.load(open(os.path.join(GEO, "india.json")))
    arcs = decode_arcs(topo)
    rings = {}
    for g in topo["objects"]["india"]["geometries"]:
        name = (g.get("properties") or {}).get("name")
        if not name:
            continue
        name = STATE_FIXES.get(name, name)
        rings.setdefault(name, []).extend(polygons_of(g, arcs))

    paths, height, fit = build(rings, mercator, 700, 6, 2.0, 0.8)
    print("  india : %d states, %.0f x %.0f" % (len(paths), 700, height))
    return {"width": 700, "height": height, "paths": paths, "fit": fit}


def main():
    data = {"world": world(), "india": india()}
    out = os.path.join(HERE, "src", "js", "01-maps.js")
    with open(out, "w") as fh:
        fh.write("/* Generated by make_maps.py. Natural Earth + ISO 3166, public domain. */\n")
        fh.write("window.DUNIYA_MAPS = " + json.dumps(data, separators=(",", ":")) + ";\n")
    print("  wrote src/js/01-maps.js  %.0f KB" % (os.path.getsize(out) / 1024))


if __name__ == "__main__":
    main()
