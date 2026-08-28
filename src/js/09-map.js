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

    Object.keys(m.paths).forEach(function (key) {
      var e = byKey[key];
      var cls = 'map-land' + (e ? ' in-trip ' + e.st.state : '');
      var path = s('path', { d: m.paths[key], class: cls });
      if (e) {
        path.addEventListener('click', function () { pick(e); });
        bindTip(path, e);
      } else if (opts.onBlank) {
        path.style.cursor = 'crosshair';
        path.addEventListener('click', function () {
          opts.onBlank(key, (m.names && m.names[key]) || key);
        });
        bindTipBlank(path, (m.names && m.names[key]) || key);
      }
      svg.appendChild(path);
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
      svg.appendChild(dot);
    });

    wrap.appendChild(svg);
    wrap.appendChild(tip);
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
    [['ddGradActive', '#7FD6C9', '#158F82'],
     ['ddGradDone', '#158F82', '#0B3B37'],
     ['ddGradOver', '#C86A6A', '#9B2C2C']].forEach(function (g) {
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
    [['planned', 'Planned', 'var(--teal-100)'],
     ['active', 'Under way', 'linear-gradient(135deg,#7FD6C9,#158F82)'],
     ['done', 'Done', 'linear-gradient(135deg,#158F82,#0B3B37)'],
     ['over', 'Over budget', 'linear-gradient(135deg,#C86A6A,#9B2C2C)']
    ].forEach(function (row) {
      if (!counts[row[0]] && row[0] === 'over') return;
      wrap.appendChild(el('span', {}, [
        el('i', { style: { background: row[2], border: row[0] === 'planned' ? '1px solid var(--teal-300)' : '0' } }),
        row[1] + ' (' + (counts[row[0]] || 0) + ')'
      ]));
    });
    return wrap;
  }

  DD.map = { render: render, keyFor: keyFor, entries: entries, toScreen: toScreen };
})();
