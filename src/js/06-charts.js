/* 06-charts — small inline-SVG charts. No library, no canvas. */
'use strict';

(function () {
  var NS = 'http://www.w3.org/2000/svg';
  function s(tag, attrs) {
    var n = document.createElementNS(NS, tag);
    for (var k in attrs) if (attrs[k] !== null && attrs[k] !== undefined) n.setAttribute(k, attrs[k]);
    return n;
  }

  /* Inks that sit properly on newsprint — muted, not screen-bright. */
  /* Everything is navy, blue or magenta — the five-colour palette, no strays. */
  var CAT_COLOURS = {
    flights: '#00254a', transport: '#75a7f1', lodging: '#db0b69', food: '#0b529b',
    activities: '#a9c8f7', carRental: '#f4569b', visa: '#003a75', misc: '#667c92',
    railway: '#00254a', intercity: '#75a7f1', petrol: '#f4569b'
  };
  var FALLBACK = ['#00254a', '#75a7f1', '#db0b69', '#0b529b', '#a9c8f7', '#f4569b',
                  '#003a75', '#667c92', '#4b83c9', '#8f1247', '#c8dcf9', '#ff8fbb'];

  function colourFor(id, i) { return CAT_COLOURS[id] || FALLBACK[i % FALLBACK.length]; }

  /* Merging two trips puts Flights beside Flights & Rail, and Transportation
     beside Intercity Travel — pairs that share a colour, so the chart reads as
     one navy mass. Hand out the preferred colour first, then the next unused
     one, so every slice in a combined chart is told apart. */
  function distinctColours(ids) {
    var taken = {}, out = {};
    ids.forEach(function (id) {
      var want = CAT_COLOURS[id];
      if (want && !taken[want]) { taken[want] = 1; out[id] = want; }
    });
    ids.forEach(function (id) {
      if (out[id]) return;
      for (var i = 0; i < FALLBACK.length; i++) {
        if (!taken[FALLBACK[i]]) { taken[FALLBACK[i]] = 1; out[id] = FALLBACK[i]; return; }
      }
      out[id] = CAT_COLOURS[id] || FALLBACK[0];
    });
    return out;
  }

  /* Donut with a centred label. Hovering a slice — or its legend row — swaps the
     centre for that slice's own figure and lifts it out of the ring.
     data = [{id, label, value, colour}] */
  function donut(data, opts) {
    var o = opts || {};
    var size = o.size || 168, thick = o.thick || 26, r = (size - thick) / 2, c = size / 2;
    var total = DD.sum(data, function (d) { return d.value; });
    var svg = s('svg', { viewBox: '0 0 ' + size + ' ' + size, width: size, height: size,
      role: 'img', class: 'donut' });
    svg.setAttribute('aria-label', o.aria || 'Breakdown');

    svg.appendChild(s('circle', { cx: c, cy: c, r: r, fill: 'none', stroke: '#d8e7fb', 'stroke-width': thick }));

    var t1 = s('text', { x: c, y: c - 2, 'text-anchor': 'middle', 'font-size': 20, 'font-weight': 800, fill: '#00254a' });
    var t2 = s('text', { x: c, y: c + 16, 'text-anchor': 'middle', 'font-size': 10.5, fill: '#667c92' });
    var t3 = s('text', { x: c, y: c + 30, 'text-anchor': 'middle', 'font-size': 10.5, fill: '#667c92' });

    function rest() {
      t1.textContent = o.centre || DD.money(total, { compact: true });
      t1.setAttribute('fill', '#00254a');
      t2.textContent = o.centreSub || '';
      t3.textContent = '';
    }

    var arcs = [];
    if (total > 0) {
      var circ = 2 * Math.PI * r, offset = 0;
      data.forEach(function (d, i) {
        if (d.value <= 0) return;
        var frac = d.value / total;
        var colour = d.colour || colourFor(d.id, i);
        /* A slice under about 0.4% made (circ * frac - 1.5) negative. An invalid
           dash array is treated as "none", so that arc drew a full circle over
           the whole chart and the donut came out one flat colour. */
        var seg = Math.max(0.8, circ * frac - 1.5);
        var arc = s('circle', {
          cx: c, cy: c, r: r, fill: 'none', class: 'donut-arc',
          stroke: colour, 'stroke-width': thick,
          'stroke-dasharray': seg.toFixed(2) + ' ' + Math.max(0, circ - seg).toFixed(2),
          'stroke-dashoffset': -circ * offset,
          transform: 'rotate(-90 ' + c + ' ' + c + ')'
        });
        arc.appendChild(s('title', {})).textContent = d.label + ' — ' + DD.money(d.value);
        arc.addEventListener('mouseenter', function () { focus(d, colour); });
        arc.addEventListener('mouseleave', blur);
        svg.appendChild(arc);
        arcs.push({ node: arc, d: d, colour: colour, thick: thick });
        offset += frac;
      });
    }

    function focus(d, colour) {
      arcs.forEach(function (a) {
        var on = a.d === d;
        a.node.setAttribute('stroke-width', on ? thick + 7 : thick);
        a.node.style.opacity = on ? '1' : '.35';
      });
      t1.textContent = DD.money(d.value, { compact: true });
      t1.setAttribute('fill', colour);
      t2.textContent = d.label;
      t3.textContent = DD.pct(d.value, total) + '% of ' + DD.money(total, { compact: true });
    }

    function blur() {
      arcs.forEach(function (a) {
        a.node.setAttribute('stroke-width', thick);
        a.node.style.opacity = '1';
      });
      rest();
    }

    svg.appendChild(t1);
    svg.appendChild(t2);
    svg.appendChild(t3);
    rest();

    /* Let a legend drive the same highlight. */
    svg.ddFocus = function (id) {
      var hit = arcs.filter(function (a) { return a.d.id === id; })[0];
      if (hit) focus(hit.d, hit.colour); else blur();
    };
    svg.ddBlur = blur;
    return svg;
  }

  function legend(data, linked) {
    var wrap = DD.el('div', { style: { display: 'flex', flexDirection: 'column', gap: '7px', minWidth: '0' } });
    var total = DD.sum(data, function (d) { return d.value; });
    data.forEach(function (d, i) {
      if (d.value <= 0) return;
      wrap.appendChild(DD.el('div', {
        class: 'legend-row',
        onmouseenter: function () { if (linked && linked.ddFocus) linked.ddFocus(d.id); },
        onmouseleave: function () { if (linked && linked.ddBlur) linked.ddBlur(); },
        style: { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' } }, [
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
      svg.appendChild(s('line', { x1: padL, x2: w - padR, y1: ys(maxY * f), y2: ys(maxY * f), stroke: '#d8e7fb', 'stroke-width': 1 }));
    });

    function path(key) {
      return points.map(function (p, i) { return (i ? 'L' : 'M') + xs(i).toFixed(1) + ' ' + ys(p[key]).toFixed(1); }).join(' ');
    }

    var area = path('budget') + ' L' + xs(points.length - 1) + ' ' + ys(0) + ' L' + xs(0) + ' ' + ys(0) + ' Z';
    svg.appendChild(s('path', { d: area, fill: 'rgba(117,167,241,.18)', stroke: 'none' }));
    svg.appendChild(s('path', { d: path('budget'), fill: 'none', stroke: '#00254a', 'stroke-width': 2, 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke' }));
    svg.appendChild(s('path', { d: path('actual'), fill: 'none', stroke: '#db0b69', 'stroke-width': 2, 'stroke-dasharray': '4 3', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke' }));

    points.forEach(function (p, i) {
      var g = s('circle', { cx: xs(i), cy: ys(p.budget), r: 2.6, fill: '#00254a' });
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
          DD.el('div', { style: { position: 'absolute', inset: '4px 0', background: '#e3edfc', borderRadius: '2px' } }),
          DD.el('div', { style: { position: 'absolute', top: '4px', bottom: '4px', left: '0', width: (r.budget / max * 100) + '%', background: 'var(--brand-100)', borderRadius: '2px' } }),
          DD.el('div', { style: { position: 'absolute', top: '1px', bottom: '1px', left: '0', width: (Math.min(r.actual, max) / max * 100) + '%', background: over ? 'var(--pink)' : 'linear-gradient(90deg,var(--brand-800),var(--brand-500))', borderRadius: '2px' } })
        ])
      ]));
    });
    if (!rows.length) wrap.appendChild(DD.el('div', { class: 'muted small', text: o.empty || 'Nothing to compare yet.' }));
    return wrap;
  }

  /* Vertical budget-vs-actual bars, with a rupee scale down the left and the
     figures on hover. rows = [{id, label, budget, actual}] */
  function verticalCompareBars(rows, opts) {
    var o = opts || {};
    var H = o.height || 210;

    var wrap = DD.el('div', { class: 'vbars' });
    if (!rows.length) {
      wrap.appendChild(DD.el('div', { class: 'muted small', text: o.empty || 'Nothing to compare yet.' }));
      return wrap;
    }

    var max = 0;
    rows.forEach(function (r) { max = Math.max(max, r.budget, r.actual); });
    if (max <= 0) max = 1;
    max = niceTop(max);

    var colours = o.colours || {};
    var tip = DD.el('div', { class: 'vbars-tip' });

    /* the rupee scale */
    var axis = DD.el('div', { class: 'vbars-axis', style: { height: H + 'px' } });
    var ticks = [1, 0.75, 0.5, 0.25, 0];
    ticks.forEach(function (f) {
      axis.appendChild(DD.el('span', { class: 'vbars-tick', text: f ? DD.money(max * f, { compact: true }) : '₹0' }));
    });

    var plot = DD.el('div', { class: 'vbars-plot', style: { height: H + 'px' } });
    ticks.forEach(function (f) {
      plot.appendChild(DD.el('i', { class: 'vbars-grid' + (f ? '' : ' base'), style: { bottom: (f * 100) + '%' } }));
    });

    var lane = DD.el('div', { class: 'vbars-lane' });
    rows.forEach(function (r, i) {
      var colour = colours[r.id] || (r.id ? colourFor(r.id, i) : '#00254a');
      var over = r.actual > r.budget && r.budget > 0;

      var bBar = DD.el('i', { class: 'vb b',
        style: { height: pctOf(r.budget, max), background: colour, opacity: '.34' } });
      var aBar = DD.el('i', { class: 'vb a' + (over ? ' over' : ''),
        style: { height: pctOf(r.actual, max), background: over ? 'var(--pink)' : colour } });

      var col = DD.el('div', { class: 'vbars-col', tabindex: '0' }, [
        DD.el('div', { class: 'vbars-stack' }, [bBar, r.actual > 0 ? aBar : null]),
        DD.el('div', { class: 'vbars-name', title: r.label, text: r.label })
      ]);

      function show() {
        col.classList.add('on');
        DD.clear(tip);
        tip.appendChild(DD.el('b', { text: r.label }));
        tip.appendChild(DD.el('span', {}, ['Budget ', DD.el('b', { class: 'num', text: DD.money(r.budget) })]));
        if (r.actual > 0) {
          tip.appendChild(DD.el('span', {}, ['Spent ', DD.el('b', {
            class: 'num', style: { color: over ? 'var(--pink)' : 'var(--brand-500)' },
            text: DD.money(r.actual) })]));
          tip.appendChild(DD.el('span', { class: over ? 'over' : '' },
            (over ? DD.money(r.actual - r.budget) + ' over' : DD.money(r.budget - r.actual) + ' left')
            + ' · ' + DD.pct(r.actual, r.budget) + '% used'));
        } else {
          tip.appendChild(DD.el('span', { class: 'muted', text: 'nothing logged yet' }));
        }
        tip.classList.add('on');
        var pr = plot.getBoundingClientRect(), cr = col.getBoundingClientRect();
        tip.style.left = Math.round(cr.left - pr.left + cr.width / 2) + 'px';
      }
      function hide() { col.classList.remove('on'); tip.classList.remove('on'); }

      col.addEventListener('mouseenter', show);
      col.addEventListener('focus', show);
      col.addEventListener('mouseleave', hide);
      col.addEventListener('blur', hide);
      lane.appendChild(col);
    });

    plot.appendChild(lane);
    plot.appendChild(tip);
    wrap.appendChild(axis);
    wrap.appendChild(plot);
    return wrap;
  }

  function pctOf(v, max) { return Math.max(v > 0 ? 1.5 : 0, (v / max) * 100) + '%'; }

  /* Round the top of the scale up to something a person would draw. */
  function niceTop(v) {
    var mag = Math.pow(10, Math.floor(Math.log(v) / Math.LN10));
    var n = v / mag;
    var step = n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10;
    return step * mag;
  }

  DD.charts = { donut: donut, legend: legend, runningLine: runningLine, compareBars: compareBars,
    verticalCompareBars: verticalCompareBars, colourFor: colourFor, distinctColours: distinctColours };
})();
