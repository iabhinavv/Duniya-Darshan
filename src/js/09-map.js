/* 09-map — the world and India maps.
   Boundaries are Natural Earth / public-domain data baked into 01-maps.js by
   make_maps.py; nothing is fetched at runtime. A country is filled when the trip
   goes there, and the fill deepens once money has actually been spent. */
'use strict';

(function () {
  var el = DD.el, S = DD.store;
  var NS = 'http://www.w3.org/2000/svg';

  function s(tag, attrs) {
    var n = document.createElementNS(NS, tag);
    for (var k in attrs) if (attrs[k] !== null && attrs[k] !== undefined) n.setAttribute(k, attrs[k]);
    return n;
  }

  /* ------------------------------------------------------- projections */
  var ROB_X = [1, .9986, .9954, .99, .9822, .973, .96, .9427, .9216, .8962,
               .8679, .835, .7986, .7597, .7186, .6732, .6213, .5722, .5322];
  var ROB_Y = [0, .062, .124, .186, .248, .31, .372, .434, .4958, .5571,
               .6176, .6769, .7346, .7903, .8435, .8936, .9394, .9761, 1];

  function robinson(lon, lat) {
    lat = Math.max(-89.99, Math.min(89.99, lat));
    var a = Math.abs(lat) / 5, i = Math.min(Math.floor(a), 17), f = a - i;
    var xs = ROB_X[i] + (ROB_X[i + 1] - ROB_X[i]) * f;
    var ys = ROB_Y[i] + (ROB_Y[i + 1] - ROB_Y[i]) * f;
    return [0.8487 * xs * lon * Math.PI / 180, -(1.3523 * ys * (lat >= 0 ? 1 : -1))];
  }

  function mercator(lon, lat) {
    lat = Math.max(-85, Math.min(85, lat));
    return [lon * Math.PI / 180, -Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360))];
  }

  /* Same fit the generator used, so dots land on their countries. */
  function toScreen(kind, lon, lat) {
    var m = window.DUNIYA_MAPS[kind];
    var p = (kind === 'world' ? robinson : mercator)(lon, lat);
    return [(p[0] - m.fit.minx) * m.fit.k + m.fit.pad, (p[1] - m.fit.miny) * m.fit.k + m.fit.pad];
  }

  /* ---------------------------------------------------------- matching */
  function norm(v) {
    return String(v || '').toLowerCase().replace(/&/g, 'and').replace(/[^a-z]/g, '');
  }

  /* Which map shape does this place sit on? ISO code abroad, state name at home. */
  function keyFor(kind, place) {
    var m = window.DUNIYA_MAPS[kind];
    if (kind === 'world') {
      var iso = String(place.iso2 || '').toUpperCase();
      if (m.paths[iso]) return iso;
      var want = norm(place.country || place.name);
      for (var k in m.names) if (norm(m.names[k]) === want) return k;
      return '';
    }
    var target = [place.country, place.city, place.name];
    for (var i = 0; i < target.length; i++) {
      var t = norm(target[i]);
      if (!t) continue;
      for (var key in m.paths) if (norm(key) === t) return key;
    }
    return '';
  }

  /* Every place in scope, with its map key and how far along it is. */
  function entries(kind, trips) {
    var out = [];
    trips.forEach(function (t) {
      if (kind === 'world' && t.kind === 'domestic') return;
      if (kind === 'india' && t.kind !== 'domestic') return;
      t.places.forEach(function (p) {
        out.push({ trip: t, place: p, key: keyFor(kind, p), st: S.placeState(t, p) });
      });
    });
    return out;
  }

  /* -------------------------------------------------------------- draw */
  function render(opts) {
    var kind = opts.kind || 'world';
    var m = window.DUNIYA_MAPS[kind];
    var list = entries(kind, opts.trips || [S.trip()]);

    var byKey = {};
    list.forEach(function (e) {
      if (!e.key) return;
      var cur = byKey[e.key];
      /* If two stops share a shape, the furthest-along one wins the colour. */
      if (!cur || rank(e.st.state) > rank(cur.st.state)) byKey[e.key] = e;
    });

    var wrap = el('div', { class: 'mapwrap' + (m.height > m.width ? ' tall' : '') });
    var tip = el('div', { class: 'map-tip' });

    var svg = s('svg', {
      viewBox: '0 0 ' + m.width + ' ' + m.height,
      role: 'img', 'aria-label': kind === 'world' ? 'World map of the trip' : 'Map of India'
    });

    svg.appendChild(defs());
    var stage = s('g', { class: 'map-stage' });
    svg.appendChild(stage);

    Object.keys(m.paths).forEach(function (key) {
      var e = byKey[key];
      var cls = 'map-land' + (e ? ' in-trip ' + e.st.state : '');
      var path = s('path', { d: m.paths[key], class: cls });
      if (e) {
        path.addEventListener('click', function () { pick(e); });
        bindTip(path, e);
      } else if (kind === 'world' && key === 'IN' && opts.onIndia) {
        path.classList.add('map-home');
        path.addEventListener('click', function () { opts.onIndia(); });
        attach(path, 'India', 'Open your travels at home');
      } else if (opts.onBlank) {
        path.style.cursor = 'crosshair';
        path.addEventListener('click', function () {
          opts.onBlank(key, (m.names && m.names[key]) || key);
        });
        bindTipBlank(path, (m.names && m.names[key]) || key);
      }
      stage.appendChild(path);
    });

    /* Dots for anywhere too small to fill — Singapore, the Faroes, any city. */
    list.forEach(function (e) {
      var p = e.place;
      if (typeof p.lat !== 'number' || typeof p.lon !== 'number') return;
      if (kind === 'world' && e.key && bigEnough(m, e.key)) return;
      var xy = toScreen(kind, p.lon, p.lat);
      var r = kind === 'world' ? 4 : 5.5;
      var dot = s('circle', { cx: xy[0].toFixed(1), cy: xy[1].toFixed(1), r: r,
        class: 'map-dot ' + e.st.state });
      dot.addEventListener('click', function () { pick(e); });
      bindTip(dot, e);
      stage.appendChild(dot);
    });

    wrap.appendChild(svg);
    wrap.appendChild(tip);
    wrap.appendChild(zoomable(wrap, svg, stage, m));
    wrap.appendChild(legend(list));

    function pick(e) {
      if (opts.onPick) opts.onPick(e);
    }

    function bindTip(node, e) {
      var st = e.st;
      var label = e.place.name;
      var line = st.count
        ? DD.money(st.spent) + ' spent of ' + DD.money(st.budget)
        : DD.money(st.budget) + ' budgeted · not started';
      attach(node, label, line + (opts.trips && opts.trips.length > 1 ? ' · ' + e.trip.name : ''));
    }
    function bindTipBlank(node, name) {
      attach(node, name, 'Click to add to this trip');
    }
    function attach(node, title, sub) {
      node.addEventListener('mousemove', function (ev) {
        var r = wrap.getBoundingClientRect();
        DD.clear(tip);
        tip.appendChild(el('b', { text: title }));
        tip.appendChild(document.createTextNode(sub));
        tip.classList.add('on');
        var x = ev.clientX - r.left + 14, y = ev.clientY - r.top + 14;
        tip.style.left = Math.min(x, r.width - tip.offsetWidth - 8) + 'px';
        tip.style.top = Math.min(y, r.height - tip.offsetHeight - 8) + 'px';
      });
      node.addEventListener('mouseleave', function () { tip.classList.remove('on'); });
    }

    return wrap;
  }

  /* Pan and zoom. Wheel or pinch to scale about the pointer, drag to pan,
     buttons for anyone who would rather not. Purely visual — the underlying
     coordinates never change. */
  function zoomable(wrap, svg, stage, m) {
    var k = 1, tx = 0, ty = 0;
    var MIN = 1, MAX = 14;

    function apply() {
      clampPan();
      stage.setAttribute('transform', 'translate(' + tx.toFixed(2) + ' ' + ty.toFixed(2) + ') scale(' + k.toFixed(4) + ')');
      wrap.classList.toggle('zoomed', k > 1.01);
      reset.disabled = k <= 1.01;
    }

    /* Keep the map inside its frame: at k=1 it is pinned, beyond that it may
       slide but never past an edge. */
    function clampPan() {
      k = Math.max(MIN, Math.min(MAX, k));
      var maxX = 0, minX = m.width - m.width * k;
      var maxY = 0, minY = m.height - m.height * k;
      tx = Math.max(minX, Math.min(maxX, tx));
      ty = Math.max(minY, Math.min(maxY, ty));
    }

    /* Pointer position in viewBox units, allowing for the letterboxing that
       preserveAspectRatio adds when the frame is a different shape. */
    function toBox(clientX, clientY) {
      var r = svg.getBoundingClientRect();
      var sc = Math.min(r.width / m.width, r.height / m.height);
      return [(clientX - r.left - (r.width - m.width * sc) / 2) / sc,
              (clientY - r.top - (r.height - m.height * sc) / 2) / sc];
    }

    function zoomAt(cx, cy, factor) {
      var before = k;
      k = Math.max(MIN, Math.min(MAX, k * factor));
      var f = k / before;
      tx = cx - (cx - tx) * f;
      ty = cy - (cy - ty) * f;
      apply();
    }

    svg.addEventListener('wheel', function (ev) {
      ev.preventDefault();
      var pt = toBox(ev.clientX, ev.clientY);
      zoomAt(pt[0], pt[1], ev.deltaY < 0 ? 1.16 : 1 / 1.16);
    }, { passive: false });

    /* Drag to pan, two fingers to pinch.

       The pointer is captured LAZILY — only once a drag is really under way.
       Capturing on pointerdown retargets every later event, the click included,
       from the country to the <svg>, so the country's own handler never runs
       and nothing opens when you click the map. */
    var pointers = {}, last = null, pinchGap = 0, moved = 0, dragging = false;
    var DRAG_SLOP = 5;

    svg.addEventListener('pointerdown', function (ev) {
      pointers[ev.pointerId] = { x: ev.clientX, y: ev.clientY };
      var ids = Object.keys(pointers);
      if (ids.length === 1) {
        moved = 0;
        dragging = false;
        last = toBox(ev.clientX, ev.clientY);
      } else if (ids.length === 2) {
        pinchGap = gap(ids);
      }
    });

    svg.addEventListener('pointermove', function (ev) {
      if (!pointers[ev.pointerId]) return;
      var prev = pointers[ev.pointerId];
      moved += Math.abs(ev.clientX - prev.x) + Math.abs(ev.clientY - prev.y);
      pointers[ev.pointerId] = { x: ev.clientX, y: ev.clientY };
      var ids = Object.keys(pointers);

      if (ids.length >= 2) {
        var now = gap(ids);
        if (pinchGap > 0 && now > 0) {
          var mid = midpoint(ids);
          var pt = toBox(mid[0], mid[1]);
          zoomAt(pt[0], pt[1], now / pinchGap);
        }
        pinchGap = now;
        ev.preventDefault();
        return;
      }

      if (ids.length === 1 && last && k > 1.01 && moved > DRAG_SLOP) {
        if (!dragging) {
          dragging = true;
          try { svg.setPointerCapture(ev.pointerId); } catch (e) { /* fine without it */ }
        }
        var p = toBox(ev.clientX, ev.clientY);
        tx += (p[0] - last[0]) * k;
        ty += (p[1] - last[1]) * k;
        last = p;
        apply();
        ev.preventDefault();
      }
    });

    function release(ev) {
      if (dragging) {
        try { svg.releasePointerCapture(ev.pointerId); } catch (e) { /* already gone */ }
      }
      delete pointers[ev.pointerId];
      if (!Object.keys(pointers).length) { last = null; pinchGap = 0; dragging = false; }
    }
    svg.addEventListener('pointerup', release);
    svg.addEventListener('pointercancel', release);

    /* A real drag should not also count as a click on whatever is underneath. */
    svg.addEventListener('click', function (ev) {
      if (moved > 10) { ev.stopPropagation(); ev.preventDefault(); }
      moved = 0;
    }, true);

    function gap(ids) {
      var a = pointers[ids[0]], b = pointers[ids[1]];
      return Math.hypot(a.x - b.x, a.y - b.y);
    }
    function midpoint(ids) {
      var a = pointers[ids[0]], b = pointers[ids[1]];
      return [(a.x + b.x) / 2, (a.y + b.y) / 2];
    }

    /* The buttons zoom about whatever is in the middle of the frame. */
    function centreZoom(factor) {
      var r = svg.getBoundingClientRect();
      var pt = toBox(r.left + r.width / 2, r.top + r.height / 2);
      zoomAt(pt[0], pt[1], factor);
    }

    var reset = el('button', { class: 'btn xs', title: 'Reset the view', text: 'Reset',
      onclick: function () { k = 1; tx = 0; ty = 0; apply(); } });

    var controls = el('div', { class: 'map-zoom' }, [
      el('button', { class: 'btn xs', 'aria-label': 'Zoom in', text: '+',
        onclick: function () { centreZoom(1.5); } }),
      el('button', { class: 'btn xs', 'aria-label': 'Zoom out', text: '\u2212',
        onclick: function () { centreZoom(1 / 1.5); } }),
      reset
    ]);

    apply();
    return controls;
  }

  function rank(state) {
    return state === 'over' ? 4 : state === 'done' ? 3 : state === 'active' ? 2 : 1;
  }

  /* A rough area test — below this the shape is a speck, so use a dot instead. */
  function bigEnough(m, key) {
    var d = m.paths[key];
    return d && d.length > 260;
  }

  function defs() {
    var d = s('defs', {});
    [['ddGradActive', '#a9c8f7', '#0b529b'],
     ['ddGradDone', '#0b529b', '#00163a'],
     ['ddGradOver', '#f4569b', '#db0b69']].forEach(function (g) {
      var lg = s('linearGradient', { id: g[0], x1: '0', y1: '0', x2: '1', y2: '1' });
      lg.appendChild(s('stop', { offset: '0%', 'stop-color': g[1] }));
      lg.appendChild(s('stop', { offset: '100%', 'stop-color': g[2] }));
      d.appendChild(lg);
    });
    return d;
  }

  function legend(list) {
    var counts = { planned: 0, active: 0, done: 0, over: 0 };
    list.forEach(function (e) { counts[e.st.state] = (counts[e.st.state] || 0) + 1; });
    var wrap = el('div', { class: 'map-legend' });
    [['planned', 'Planned', 'var(--brand-300)'],
     ['active', 'Under way', 'linear-gradient(135deg,#a9c8f7,#0b529b)'],
     ['done', 'Done', 'linear-gradient(135deg,#0b529b,#00163a)'],
     ['over', 'Over budget', 'linear-gradient(135deg,#f4569b,#db0b69)']
    ].forEach(function (row) {
      if (!counts[row[0]] && row[0] === 'over') return;
      wrap.appendChild(el('span', {}, [
        el('i', { style: { background: row[2], border: row[0] === 'planned' ? '1px solid var(--brand-300)' : '0' } }),
        row[1] + ' (' + (counts[row[0]] || 0) + ')'
      ]));
    });
    return wrap;
  }

  DD.map = { render: render, keyFor: keyFor, entries: entries, toScreen: toScreen };
})();
