/* 05-ui — the broadsheet furniture: masthead, section bar, modals, toasts. */
'use strict';

(function () {
  var el = DD.el, $ = DD.$;
  var listeners = {};
  var route = 'front';
  var screens = {};
  var modalStack = [];

  function on(evt, fn) { (listeners[evt] = listeners[evt] || []).push(fn); }
  function emit(evt, arg) { (listeners[evt] || []).forEach(function (f) { f(arg); }); }
  function register(name, def) { screens[name] = def; }

  /* Front page first, then the sections of whichever trip is open. */
  var NAV = [
    { id: 'front', label: 'Front Page' },
    { id: 'places', label: 'Places', trip: true },
    { id: 'sheet', label: 'The Sheet', trip: true },
    { id: 'itinerary', label: 'Itinerary', trip: true },
    { id: 'data', label: 'Almanac' }
  ];

  function placesLabel() {
    return DD.store.trip().kind === 'domestic' ? 'Cities' : 'Countries';
  }

  function go(name, arg) {
    if (!screens[name]) name = 'front';
    route = name;
    render(arg);
    try { history.replaceState(null, '', '#' + name); } catch (e) { /* file:// */ }
    window.scrollTo(0, 0);
  }
  function current() { return route; }

  function render(arg) {
    var host = $('#screen');
    if (!host) return;
    DD.clear(host);
    var def = screens[route];
    paintMasthead();
    paintNav();
    def.render(host, arg);
    document.body.classList.toggle('wide', !!def.wide);
  }

  /* ------------------------------------------------------------ shell */
  function buildShell() {
    var app = $('#app');
    DD.clear(app);

    var paper = el('div', { id: 'paper' }, [
      el('header', { id: 'masthead' }),
      el('nav', { id: 'sections' }),
      el('div', { id: 'screen' })
    ]);
    app.appendChild(paper);

    var tabs = el('div', { id: 'tabbar' });
    app.appendChild(tabs);
    app.appendChild(el('div', { id: 'toast' }));
  }

  function paintMasthead() {
    var head = $('#masthead');
    if (!head) return;
    DD.clear(head);
    var compact = route !== 'front';
    head.className = compact ? 'compact' : '';

    var title = el('h1', {
      class: 'mast-title', text: 'Duniya Darshan',
      style: { cursor: 'pointer' },
      onclick: function () { go('front'); }
    });

    if (compact) {
      head.appendChild(title);
      head.appendChild(el('div', { class: 'runhead' }, [
        el('div', { text: sectionTitle() }),
        el('div', { style: { opacity: '.7' }, text: DD.store.trip().name })
      ]));
      head.appendChild(el('hr', { class: 'rule', style: { flexBasis: '100%', marginTop: '10px' } }));
      return;
    }

    var db = DD.store.db();
    var totalTrips = db.trips.length;
    var logged = DD.sum(db.trips, function (t) { return t.expenses.length; });

    head.appendChild(el('hr', { class: 'rule thick' }));
    head.appendChild(el('div', { class: 'mast-line' }, [
      el('span', { text: DD.niceDate(DD.today(), true) }),
      el('span', { class: 'mid', text: DD.plural(totalTrips, 'trip') + ' · ' + DD.plural(logged, 'entry', 'entries') }),
      el('span', { class: 'end', text: 'Price: free' })
    ]));
    head.appendChild(el('hr', { class: 'rule hair' }));
    head.appendChild(title);
    head.appendChild(el('div', { class: 'mast-sub', text: 'A ledger of roads taken and money spent' }));
    head.appendChild(el('hr', { class: 'rule double' }));
  }

  function sectionTitle() {
    var def = screens[route] || {};
    return typeof def.title === 'function' ? def.title() : (def.title || '');
  }

  function paintNav() {
    var nav = $('#sections');
    if (nav) {
      DD.clear(nav);
      NAV.forEach(function (n, i) {
        if (n.id === 'data') nav.appendChild(el('span', { class: 'sep' }));
        nav.appendChild(el('a', {
          class: route === n.id ? 'on' : '',
          'data-route': n.id,
          onclick: function () { go(n.id); }
        }, n.id === 'places' ? placesLabel() : n.label));
      });
      nav.appendChild(el('span', { class: 'sep' }));
      nav.appendChild(el('span', { class: 'trip-name', text: DD.store.trip().name }));
    }

    var tabs = $('#tabbar');
    if (!tabs) return;
    DD.clear(tabs);
    [['front', 'Front', 'home'], ['places', placesLabel(), 'map'],
     ['__log', 'Log', 'plus'], ['sheet', 'Sheet', 'sheet'], ['data', 'More', 'more']
    ].forEach(function (n) {
      var fab = n[0] === '__log';
      tabs.appendChild(el('button', {
        class: (fab ? 'fab' : '') + (route === n[0] ? ' on' : ''),
        'aria-label': n[1],
        onclick: function () {
          if (fab) { if (DD.logForm) DD.logForm(); }
          else if (n[0] === 'data') moreSheet();
          else go(n[0]);
        }
      }, [DD.icon(n[2], fab ? 22 : 19), el('span', { text: n[1] })]));
    });
  }

  function moreSheet() {
    var body = el('div', { class: 'list' });
    [['itinerary', 'Itinerary', 'The route, day by day'],
     ['sheet', 'The Sheet', 'Budget, actual and variance'],
     ['data', 'Almanac', 'Rates, categories, links, backup']
    ].forEach(function (r) {
      body.appendChild(el('button', {
        class: 'list-row',
        style: { border: 0, background: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' },
        onclick: function () { closeModal(); go(r[0]); }
      }, [
        el('div', { class: 'grow' }, [
          el('div', { class: 't', text: r[1] }),
          el('div', { class: 's', text: r[2] })
        ]),
        DD.icon('next', 15)
      ]));
    });
    modal({ title: 'More', body: body, noPad: true });
  }

  /* ------------------------------------------------------------- modal */
  function modal(opts) {
    var scrim = el('div', { class: 'scrim' });
    var box = el('div', { class: 'modal' + (opts.wide ? ' lg' : '') });

    box.appendChild(el('div', { class: 'modal-head' }, [
      el('h2', { text: opts.title || '' }),
      el('button', { class: 'x-btn', 'aria-label': 'Close', html: '&times;', onclick: close })
    ]));

    var body = el('div', { class: 'modal-body' });
    if (opts.noPad) body.style.padding = '0';
    DD.append(body, opts.body);
    box.appendChild(body);

    if (opts.footer !== false) {
      var foot = el('div', { class: 'modal-foot' });
      if (opts.destructive) {
        foot.appendChild(el('button', {
          class: 'btn danger sm', text: opts.destructive.label,
          onclick: function () { opts.destructive.run(close); }
        }));
      }
      foot.appendChild(el('div', { class: 'spacer' }));
      foot.appendChild(el('button', { class: 'btn', text: opts.cancelLabel || 'Cancel', onclick: close }));
      if (opts.ok) {
        foot.appendChild(el('button', {
          class: 'btn pri', text: opts.okLabel || 'Save',
          onclick: function () { opts.ok(close); }
        }));
      }
      box.appendChild(foot);
    }

    scrim.appendChild(box);
    scrim.addEventListener('mousedown', function (e) { if (e.target === scrim) close(); });
    document.body.appendChild(scrim);
    document.body.style.overflow = 'hidden';
    modalStack.push(scrim);

    var first = box.querySelector('input:not([type=checkbox]),select,textarea');
    if (first && window.innerWidth > 900) setTimeout(function () { first.focus(); first.select && first.select(); }, 40);

    function close() {
      var i = modalStack.indexOf(scrim);
      if (i >= 0) modalStack.splice(i, 1);
      scrim.remove();
      if (!modalStack.length) document.body.style.overflow = '';
    }
    return { close: close, box: box, body: body };
  }

  function closeModal() {
    var top = modalStack.pop();
    if (top) { top.remove(); if (!modalStack.length) document.body.style.overflow = ''; }
  }

  function confirmBox(title, message, onYes, yesLabel) {
    var m = modal({
      title: title,
      body: el('p', { text: message, style: { margin: 0, color: 'var(--ink-2)' } }),
      okLabel: yesLabel || 'Delete',
      ok: function (close) { close(); onYes(); }
    });
    var btn = m.box.querySelector('.modal-foot .btn.pri');
    if (btn) { btn.classList.remove('pri'); btn.classList.add('danger'); }
  }

  function toast(msg, bad) {
    var host = $('#toast');
    if (!host) return;
    var t = el('div', { class: 'toast' + (bad ? ' bad' : ''), text: msg });
    host.appendChild(t);
    setTimeout(function () {
      t.style.transition = 'opacity .3s'; t.style.opacity = '0';
      setTimeout(function () { t.remove(); }, 320);
    }, bad ? 3800 : 2200);
  }

  /* ----------------------------------------------------------- widgets */
  function stat(k, v, sub, cls) {
    return el('div', { class: 'stat ' + (cls || '') }, [
      el('span', { class: 'k', text: k }),
      el('div', { class: 'v', text: v }),
      sub ? el('div', { class: 's', text: sub }) : null
    ]);
  }

  function statStrip(items) {
    return el('div', { class: 'stats' }, items);
  }

  function progressBar(spent, budget) {
    var over = spent > budget && budget > 0;
    var bar = el('div', { class: 'bar' });
    if (over) {
      bar.appendChild(el('i', { class: 'b', style: { width: (budget / spent * 100) + '%' } }));
      bar.appendChild(el('i', { class: 'o', style: { width: (100 - budget / spent * 100) + '%' } }));
    } else {
      bar.appendChild(el('i', { class: 'b', style: { width: (budget > 0 ? Math.min(100, spent / budget * 100) : 0) + '%' } }));
    }
    return bar;
  }

  function emptyState(title, msg, actionLabel, action) {
    return el('div', { class: 'card empty' }, [
      el('h3', { text: title }),
      el('p', { text: msg }),
      actionLabel ? el('button', { class: 'btn pri', text: actionLabel, onclick: action }) : null
    ]);
  }

  function field(label, input) {
    return el('label', { class: 'field' }, [el('span', { text: label }), input]);
  }

  function selectOf(options, value, onchange, attrs) {
    var sel = el('select', attrs || {});
    options.forEach(function (o) {
      var v = Array.isArray(o) ? o[0] : o.value;
      var l = Array.isArray(o) ? o[1] : o.label;
      sel.appendChild(el('option', { value: v, selected: String(v) === String(value) }, l));
    });
    if (onchange) sel.addEventListener('change', function () { onchange(sel.value); });
    return sel;
  }

  function segmented(options, value, onpick) {
    var wrap = el('div', { class: 'seg' });
    options.forEach(function (o) {
      var v = Array.isArray(o) ? o[0] : o.value;
      var l = Array.isArray(o) ? o[1] : o.label;
      wrap.appendChild(el('button', {
        class: String(v) === String(value) ? 'on' : '', text: l,
        onclick: function () {
          DD.$$('button', wrap).forEach(function (b) { b.classList.remove('on'); });
          this.classList.add('on');
          onpick(v);
        }
      }));
    });
    return wrap;
  }

  function sectionHead(kicker, title, right) {
    return el('div', { class: 'section-head' }, [
      el('div', {}, [
        kicker ? el('div', { class: 'kicker', text: kicker }) : null,
        el('h2', { text: title })
      ]),
      el('div', { class: 'spacer' }),
      right
    ]);
  }

  /* -------------------------------------------------------------- keys */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalStack.length) { closeModal(); return; }
    var tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select' || modalStack.length) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var k = e.key.toLowerCase();
    if (k === 'l') { e.preventDefault(); if (DD.logForm) DD.logForm(); }
    else if (k === 'p') { e.preventDefault(); go('places'); }
    else if (k === 'f') { e.preventDefault(); go('front'); }
    else if (k === 's') { e.preventDefault(); go('sheet'); }
    else if (k === 'i') { e.preventDefault(); go('itinerary'); }
  });

  DD.on = on; DD.emit = emit; DD.go = go; DD.route = current; DD.register = register;
  DD.buildShell = buildShell; DD.render = render; DD.modal = modal; DD.closeModal = closeModal;
  DD.confirmBox = confirmBox; DD.toast = toast; DD.stat = stat; DD.statStrip = statStrip;
  DD.progressBar = progressBar; DD.emptyState = emptyState; DD.field = field;
  DD.selectOf = selectOf; DD.segmented = segmented; DD.sectionHead = sectionHead;
  DD.placesLabel = placesLabel; DD.NAV = NAV;
})();
