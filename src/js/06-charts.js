/* 06-charts — small inline-SVG charts. No library, no canvas. */
'use strict';

(function () {
  var NS = 'http://www.w3.org/2000/svg';
  function s(tag, attrs) {
    var n = document.createElementNS(NS, tag);
    for (var k in attrs) if (attrs[k] !== null && attrs[k] !== undefined) n.setAttribute(k, attrs[k]);
    return n;
  }

  var CAT_COLOURS = {
    flights: '#0F766E', transport: '#2563EB', lodging: '#B45309', food: '#DC2626',
    activities: '#9333EA', carRental: '#0891B2', visa: '#65A30D', misc: '#64748B'
  };
  var FALLBACK = ['#0F766E', '#2563EB', '#B45309', '#DC2626', '#9333EA', '#0891B2', '#65A30D', '#DB2777', '#4F46E5', '#EA580C'];

  function colourFor(id, i) { return CAT_COLOURS[id] || FALLBACK[i % FALLBACK.length]; }

  /* Donut with a centred label. data = [{label, value, colour}] */
  function donut(data, opts) {
    var o = opts || {};
    var size = o.size || 168, thick = o.thick || 26, r = (size - thick) / 2, c = size / 2;
    var total = DD.sum(data, function (d) { return d.value; });
    var svg = s('svg', { viewBox: '0 0 ' + size + ' ' + size, width: size, height: size, role: 'img' });
    svg.setAttribute('aria-label', o.aria || 'Breakdown');

    svg.appendChild(s('circle', { cx: c, cy: c, r: r, fill: 'none', stroke: '#EDF1EF', 'stroke-width': thick }));

    if (total > 0) {
      var circ = 2 * Math.PI * r, offset = 0;
      data.forEach(function (d, i) {
        if (d.value <= 0) return;
        var frac = d.value / total;
        var arc = s('circle', {
          cx: c, cy: c, r: r, fill: 'none',
          stroke: d.colour || colourFor(d.id, i), 'stroke-width': thick,
          'stroke-dasharray': (circ * frac - 1.5) + ' ' + (circ * (1 - frac) + 1.5),
          'stroke-dashoffset': -circ * offset,
          transform: 'rotate(-90 ' + c + ' ' + c + ')'
        });
        arc.appendChild(s('title', {})).textContent = d.label + ' — ' + DD.money(d.value);
        svg.appendChild(arc);
        offset += frac;
      });
    }

    if (o.centre) {
      var t1 = s('text', { x: c, y: c - 2, 'text-anchor': 'middle', 'font-size': 19, 'font-weight': 680, fill: '#0F1D1B' });
      t1.textContent = o.centre;
      svg.appendChild(t1);
      if (o.centreSub) {
        var t2 = s('text', { x: c, y: c + 16, 'text-anchor': 'middle', 'font-size': 11, fill: '#6B807D' });
        t2.textContent = o.centreSub;
        svg.appendChild(t2);
      }
    }
    return svg;
  }

  function legend(data) {
    var wrap = DD.el('div', { style: { display: 'flex', flexDirection: 'column', gap: '7px', minWidth: '0' } });
    var total = DD.sum(data, function (d) { return d.value; });
    data.forEach(function (d, i) {
      if (d.value <= 0) return;
      wrap.appendChild(DD.el('div', { style: { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' } }, [
        DD.el('span', { class: 'dot', style: { background: d.colour || colourFor(d.id, i) } }),
        DD.el('span', { style: { flex: '1', minWidth: '0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }, text: d.label }),
        DD.el('span', { class: 'num muted tiny', text: DD.pct(d.value, total) + '%' }),
        DD.el('span', { class: 'num', style: { fontWeight: '600', minWidth: '74px', textAlign: 'right' }, text: DD.money(d.value, { compact: true }) })
      ]));
    });
    if (!wrap.children.length) wrap.appendChild(DD.el('div', { class: 'muted small', text: 'Nothing logged yet.' }));
    return wrap;
  }

  /* Two-series step line: cumulative budget vs cumulative actual across places. */
  function runningLine(points, opts) {
    var o = opts || {};
    var w = o.width || 640, h = o.height || 190, padL = 8, padR = 8, padT = 12, padB = 26;
    var svg = s('svg', { viewBox: '0 0 ' + w + ' ' + h, width: '100%', height: h, preserveAspectRatio: 'none', role: 'img' });
    svg.setAttribute('aria-label', o.aria || 'Running total');
    if (!points.length) return svg;

    var maxY = 0;
    points.forEach(function (p) { maxY = Math.max(maxY, p.budget, p.actual); });
    if (maxY <= 0) maxY = 1;
    var iw = w - padL - padR, ih = h - padT - padB;
    var xs = function (i) { return padL + (points.length === 1 ? iw / 2 : (i / (points.length - 1)) * iw); };
    var ys = function (v) { return padT + ih - (v / maxY) * ih; };

    [0.25, 0.5, 0.75, 1].forEach(function (f) {
      svg.appendChild(s('line', { x1: padL, x2: w - padR, y1: ys(maxY * f), y2: ys(maxY * f), stroke: '#EDF1EF', 'stroke-width': 1 }));
    });

    function path(key) {
      return points.map(function (p, i) { return (i ? 'L' : 'M') + xs(i).toFixed(1) + ' ' + ys(p[key]).toFixed(1); }).join(' ');
    }

    var area = path('budget') + ' L' + xs(points.length - 1) + ' ' + ys(0) + ' L' + xs(0) + ' ' + ys(0) + ' Z';
    svg.appendChild(s('path', { d: area, fill: 'rgba(15,118,110,.07)', stroke: 'none' }));
    svg.appendChild(s('path', { d: path('budget'), fill: 'none', stroke: '#0F766E', 'stroke-width': 2, 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke' }));
    svg.appendChild(s('path', { d: path('actual'), fill: 'none', stroke: '#2563EB', 'stroke-width': 2, 'stroke-dasharray': '4 3', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke' }));

    points.forEach(function (p, i) {
      var g = s('circle', { cx: xs(i), cy: ys(p.budget), r: 2.6, fill: '#0F766E' });
      var ttl = s('title', {});
      ttl.textContent = p.label + ' — budget ' + DD.money(p.budget) + ', actual ' + DD.money(p.actual);
      g.appendChild(ttl);
      svg.appendChild(g);
    });
    return svg;
  }

  /* Horizontal budget-vs-actual bars, one row per item. */
  function compareBars(rows, opts) {
    var o = opts || {};
    var wrap = DD.el('div', { style: { display: 'flex', flexDirection: 'column', gap: '11px' } });
    var max = 0;
    rows.forEach(function (r) { max = Math.max(max, r.budget, r.actual); });
    if (max <= 0) max = 1;
    rows.forEach(function (r) {
      var over = r.actual > r.budget && r.budget > 0;
      wrap.appendChild(DD.el('div', {}, [
        DD.el('div', { style: { display: 'flex', gap: '8px', alignItems: 'baseline', marginBottom: '4px' } }, [
          DD.el('span', { style: { fontSize: '13.5px', fontWeight: '550', flex: '1', minWidth: '0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }, text: r.label }),
          DD.el('span', { class: 'num tiny', style: { color: over ? 'var(--red)' : 'var(--ink-3)' }, text: DD.money(r.actual, { compact: true }) + ' / ' + DD.money(r.budget, { compact: true }) })
        ]),
        DD.el('div', { style: { position: 'relative', height: '15px' } }, [
          DD.el('div', { style: { position: 'absolute', inset: '4px 0', background: '#EDF1EF', borderRadius: '99px' } }),
          DD.el('div', { style: { position: 'absolute', top: '4px', bottom: '4px', left: '0', width: (r.budget / max * 100) + '%', background: 'var(--teal-100)', borderRadius: '99px' } }),
          DD.el('div', { style: { position: 'absolute', top: '1px', bottom: '1px', left: '0', width: (Math.min(r.actual, max) / max * 100) + '%', background: over ? 'var(--red)' : 'var(--teal-600)', borderRadius: '99px' } })
        ])
      ]));
    });
    if (!rows.length) wrap.appendChild(DD.el('div', { class: 'muted small', text: o.empty || 'Nothing to compare yet.' }));
    return wrap;
  }

  DD.charts = { donut: donut, legend: legend, runningLine: runningLine, compareBars: compareBars, colourFor: colourFor };
})();
