/* 09-map — the world and India maps.
   Boundaries are Natural Earth / public-domain data baked into 01-maps.js by
   make_maps.py; nothing is fetched at runtime. A country is filled when the trip
   goes there, and the fill deepens once money has actually been spent. */
'use strict';

(function () {
  var el = DD.el, S = DD.store;
  var NS = 'http://www.w3.org/2000/svg';

  /* A map pin, drawn with its point at the origin. */
  var PIN = 'M0 0C-1.4-2.6-6-7.2-6-10.6A6 6 0 1 1 6-10.6C6-7.2 1.4-2.6 0 0Z';

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

  /* Extent of a whole path, in map units — used to decide whether a label can
     sit inside the country at the current zoom. */
  function pathBox(d) {
    var nums = d.match(/-?\d+\.?\d*/g);
    if (!nums || nums.length < 4) return null;
    var minx = Infinity, maxx = -Infinity, miny = Infinity, maxy = -Infinity;
    for (var i = 0; i < nums.length; i += 2) {
      var x = +nums[i], y = +nums[i + 1];
      if (x < minx) minx = x;
      if (x > maxx) maxx = x;
      if (y < miny) miny = y;
      if (y > maxy) maxy = y;
    }
    return { w: maxx - minx, h: maxy - miny };
  }

  /* Centre of the biggest ring in a path — good enough to hang a label on. */
  function pathCentre(d) {
    var best = null, bestN = 0;
    d.split('Z').forEach(function (ring) {
      var nums = ring.match(/-?\d+\.?\d*/g);
      if (!nums || nums.length < 6) return;
      var n = nums.length / 2;
      if (n <= bestN) return;
      var sx = 0, sy = 0;
      for (var i = 0; i < nums.length; i += 2) { sx += +nums[i]; sy += +nums[i + 1]; }
      bestN = n;
      best = [sx / n, sy / n];
    });
    return best;
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

    /* A pin marks every place we have coordinates for — and stands in entirely
       for anywhere too small to fill, like Singapore or the Faroes. */
    var pins = s('g', { class: 'map-pins' });
    var pinNodes = [];
    list.forEach(function (e) {
      var p = e.place;
      if (typeof p.lat !== 'number' || typeof p.lon !== 'number') return;
      if (kind === 'world' && e.key && bigEnough(m, e.key)) return;
      var xy = toScreen(kind, p.lon, p.lat);
      var g = s('g', { class: 'map-pin ' + e.st.state });
      g.appendChild(s('path', { class: 'pin-body', d: PIN }));
      g.appendChild(s('circle', { class: 'pin-eye', cx: 0, cy: -9.4, r: 2.2 }));
      g.addEventListener('click', function () { pick(e); });
      bindTip(g, e);
      pins.appendChild(g);
      pinNodes.push({ node: g, x: xy[0], y: xy[1] });
    });
    stage.appendChild(pins);

    var labels = labelLayer(kind, m, list, byKey);
    stage.appendChild(labels.node);

    wrap.appendChild(svg);
    wrap.appendChild(tip);
    wrap.appendChild(zoomable(wrap, svg, stage, m, labels, pinNodes));
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
  function zoomable(wrap, svg, stage, m, labels, pinNodes) {
    var k = 1, tx = 0, ty = 0;
    var MIN = 1, MAX = 14;

    function apply() {
      clampPan();
      stage.setAttribute('transform', 'translate(' + tx.toFixed(2) + ' ' + ty.toFixed(2) + ') scale(' + k.toFixed(4) + ')');
      wrap.classList.toggle('zoomed', k > 1.01);
      reset.disabled = k <= 1.01;
      paintPins();
      paintLabels();
    }

    /* Pins keep their size on screen, so they are scaled against the zoom. */
    function paintPins() {
      if (!pinNodes) return;
      var inv = (1 / k).toFixed(4);
      for (var i = 0; i < pinNodes.length; i++) {
        pinNodes[i].node.setAttribute('transform',
          'translate(' + pinNodes[i].x.toFixed(1) + ' ' + pinNodes[i].y.toFixed(1) + ') scale(' + inv + ')');
      }
    }

    /* Nothing at rest; a name once you lean in; the money and the detail as you
       keep going — but never more than the country itself has room for. */
    function paintLabels() {
      if (!labels) return;
      var want = k >= 5.5 ? 4 : k >= 3.6 ? 3 : k >= 2.2 ? 2 : k >= 1.4 ? 1 : 0;
      labels.node.style.display = want ? '' : 'none';
      if (!want) return;

      measure(labels.items);
      var inv = (1 / k).toFixed(4);

      labels.items.forEach(function (it) {
        it.inner.setAttribute('transform', 'scale(' + inv + ')');
        var room = it.box.w * k;          /* the country's width, in map units at font-size 10 */
        var tall = it.box.h * k;
        var level = 0;
        for (var L = want; L >= 1; L--) {
          var need = widestUpTo(it.w, L) + PAD_X * 2;
          var high = TOP + 7 + (L - 1) * LINE_H + PAD_Y + 4;
          if (room >= need && tall >= high + 6) { level = L; break; }
        }
        it.node.style.display = level ? '' : 'none';
        if (!level) return;

        for (var i = 0; i < it.lines.length; i++) {
          it.lines[i].style.display = i < level ? '' : 'none';
        }
        var w = widestUpTo(it.w, level) + PAD_X * 2;
        var h = (level - 1) * LINE_H + 10 + PAD_Y * 2;
        it.paper.setAttribute('x', (-w / 2).toFixed(1));
        it.paper.setAttribute('y', TOP.toFixed(1));
        it.paper.setAttribute('width', w.toFixed(1));
        it.paper.setAttribute('height', h.toFixed(1));
        it.rule.setAttribute('x1', (-w / 2).toFixed(1));
        it.rule.setAttribute('x2', (w / 2).toFixed(1));
        it.rule.setAttribute('y1', (TOP + 10.5).toFixed(1));
        it.rule.setAttribute('y2', (TOP + 10.5).toFixed(1));
        it.rule.style.display = level > 1 ? '' : 'none';
      });
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

    /* A continuous factor from the wheel delta, so a trackpad glides instead of
       jumping a notch at a time. Line-mode wheels are scaled up to match. */
    svg.addEventListener('wheel', function (ev) {
      ev.preventDefault();
      var d = ev.deltaY * (ev.deltaMode === 1 ? 16 : ev.deltaMode === 2 ? 100 : 1);
      var f = Math.pow(1.0022, -Math.max(-160, Math.min(160, d)));
      var pt = toBox(ev.clientX, ev.clientY);
      /* The transition stays on here: a mouse notch eases, and a trackpad's
         stream of small deltas is smoothed into one glide. Dragging turns it
         off instead, where any lag would feel like the map sticking. */
      zoomAt(pt[0], pt[1], f);
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
        wrap.classList.add('panning');
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
          wrap.classList.add('panning');
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
      if (!Object.keys(pointers).length) {
        last = null; pinchGap = 0; dragging = false;
        wrap.classList.remove('panning');
      }
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

  /* Labels that earn their place as you zoom. Each one is a little notepad
     slip, and it only appears once the country is big enough on screen to hold
     it — so nothing ever spills over a border or sits on the sea. */
  var LINE_H = 8.6, PAD_X = 5, PAD_Y = 4, TOP = -11;

  function labelLayer(kind, m, list, byKey) {
    var g = s('g', { class: 'map-labels' });
    var items = [];

    list.forEach(function (e) {
      var at = null, box = null;
      if (e.key && m.paths[e.key]) {
        box = pathBox(m.paths[e.key]);
        if (byKey[e.key] && byKey[e.key] !== e) return;   /* one label per shape */
      }
      if (typeof e.place.lat === 'number' && typeof e.place.lon === 'number') {
        at = toScreen(kind, e.place.lon, e.place.lat);
      } else if (e.key && m.paths[e.key]) {
        at = pathCentre(m.paths[e.key]);
      }
      if (!at) return;
      /* Nothing to sit inside, so allow a modest patch of its own. */
      if (!box || !box.w) box = { w: 18, h: 18 };

      var st = e.st;
      var texts = [
        e.place.name,
        DD.money(st.budget, { compact: true }) + ' budget',
        st.count
          ? DD.money(st.spent, { compact: true }) + ' spent · ' + DD.plural(st.count, 'entry', 'entries')
          : 'not started · ' + DD.plural(e.place.days, 'day'),
        st.count
          ? DD.plural(e.place.days, 'day') + ' · ' + DD.pct(st.spent, st.budget) + '% used'
          : DD.money(e.place.days ? st.budget / e.place.days : 0) + ' a day'
      ];

      /* Outer group carries the position, inner group the counter-scale, so the
         slip stays the same size on screen however far in you zoom. */
      var node = s('g', { class: 'map-label ' + st.state,
        transform: 'translate(' + at[0].toFixed(1) + ' ' + at[1].toFixed(1) + ')' });
      var inner = s('g', { class: 'lbl-inner' });
      var paper = s('rect', { class: 'lbl-paper', rx: 1.5 });
      var rule = s('line', { class: 'lbl-rule' });
      inner.appendChild(paper);
      inner.appendChild(rule);

      var lines = texts.map(function (txt, i) {
        var t = s('text', { class: i ? 'l' + (i + 1) : 'nm', x: 0,
          y: (TOP + 7 + i * LINE_H).toFixed(1), 'text-anchor': 'middle' });
        t.textContent = txt;
        inner.appendChild(t);
        return t;
      });

      node.appendChild(inner);
      g.appendChild(node);
      items.push({ node: node, inner: inner, paper: paper, rule: rule, lines: lines, box: box, w: null });
    });

    return { node: g, items: items };
  }

  /* Widths are measured once, at a known font size, in map units. The label is
     drawn at font-size 10/k, so its width in map units is constant — which makes
     the fit test a straight comparison against the country's own width. */
  function measure(items) {
    items.forEach(function (it) {
      if (it.w) return;
      it.w = it.lines.map(function (t) {
        try { return t.getComputedTextLength(); } catch (e) { return t.textContent.length * 5; }
      });
    });
  }

  function widestUpTo(w, level) {
    var max = 0;
    for (var i = 0; i < level; i++) max = Math.max(max, w[i]);
    return max;
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
