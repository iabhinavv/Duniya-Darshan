/* 05-ui — shell, routing, modals, toasts, and the small shared widgets. */
'use strict';

(function () {
  var el = DD.el, $ = DD.$, icon = DD.icon;
  var listeners = {};
  var route = 'overview';
  var screens = {};
  var modalStack = [];

  function on(evt, fn) { (listeners[evt] = listeners[evt] || []).push(fn); }
  function emit(evt, arg) { (listeners[evt] || []).forEach(function (f) { f(arg); }); }

  function register(name, def) { screens[name] = def; }

  var NAV = [
    { id: 'overview', label: 'Overview', icon: 'home', tab: true },
    { id: 'places', label: 'Places', icon: 'map', tab: true },
    { id: 'log', label: 'Log', icon: 'plus', tab: 'fab' },
    { id: 'sheet', label: 'Sheet', icon: 'sheet' },
    { id: 'itinerary', label: 'Itinerary', icon: 'route', tab: true },
    { id: 'split', label: 'Split', icon: 'users', tab: true },
    { id: 'trips', label: 'Trips', icon: 'trips' },
    { id: 'data', label: 'Data', icon: 'db' }
  ];

  function go(name, arg) {
    if (!screens[name]) name = 'overview';
    route = name;
    render(arg);
    try { history.replaceState(null, '', '#' + name); } catch (e) { /* file:// */ }
    var main = $('#main');
    if (main) main.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  function current() { return route; }

  function render(arg) {
    var host = $('#screen');
    if (!host) return;
    DD.clear(host);
    var def = screens[route];
    var title = typeof def.title === 'function' ? def.title() : (def.title || def.label || '');
    $('#page-title').textContent = title;
    DD.clear($('#topbar-actions'));
    if (def.actions) DD.append($('#topbar-actions'), def.actions());
    def.render(host, arg);
    paintNav();
    document.body.classList.toggle('wide', !!def.wide);
  }

  function paintNav() {
    DD.$$('#rail .nav-btn').forEach(function (b) {
      b.classList.toggle('on', b.dataset.route === route);
    });
    DD.$$('#tabbar button').forEach(function (b) {
      b.classList.toggle('on', b.dataset.route === route);
    });
    var rt = $('#rail-trip-name');
    if (rt) {
      var t = DD.store.trip();
      rt.textContent = t.name;
    }
  }

  /* ------------------------------------------------------------- shell */
  function buildShell() {
    var app = $('#app');
    DD.clear(app);

    var rail = el('div', { id: 'rail' });
    rail.appendChild(el('div', { class: 'brand' }, [
      el('div', { class: 'brand-mark', text: 'दु' }),
      el('div', {}, [
        el('div', { class: 'brand-name', text: 'Duniya Darshan' }),
        el('div', { class: 'brand-sub', text: 'Travel budget' })
      ])
    ]));

    rail.appendChild(el('button', {
      class: 'rail-trip', onclick: function () { go('trips'); }
    }, [
      el('div', { class: 'lbl', text: 'Current trip' }),
      el('div', { class: 'val' }, [el('span', { id: 'rail-trip-name', text: '—' })])
    ]));

    NAV.forEach(function (n, i) {
      if (n.id === 'trips') rail.appendChild(el('div', { class: 'nav-sep' }));
      var b = el('button', {
        class: 'nav-btn', 'data-route': n.id,
        onclick: function () { go(n.id); }
      }, [icon(n.icon), el('span', { text: n.label })]);
      rail.appendChild(b);
    });

    rail.appendChild(el('div', { class: 'rail-foot' }, [
      el('div', { id: 'rail-file-state', text: '' })
    ]));
    app.appendChild(rail);

    var main = el('div', { id: 'main' });
    var top = el('div', { id: 'topbar' }, [
      el('div', { id: 'mobtop' }, [
        el('button', {
          class: 'btn ghost sm', 'aria-label': 'Trips',
          onclick: function () { go('trips'); }
        }, [icon('trips', 18)])
      ]),
      el('h1', { id: 'page-title', text: '' }),
      el('div', { class: 'spacer' }),
      el('div', { id: 'topbar-actions', style: { display: 'flex', gap: '8px', alignItems: 'center' } })
    ]);
    main.appendChild(top);
    main.appendChild(el('div', { id: 'screen' }));
    app.appendChild(main);

    var tabs = el('div', { id: 'tabbar' });
    NAV.filter(function (n) { return n.tab; }).forEach(function (n) {
      tabs.appendChild(el('button', {
        class: n.tab === 'fab' ? 'fab' : '', 'data-route': n.id,
        'aria-label': n.label,
        onclick: function () { go(n.id); }
      }, [icon(n.icon, n.tab === 'fab' ? 22 : 20), el('span', { text: n.label })]));
    });
    tabs.appendChild(el('button', {
      'data-route': 'data', 'aria-label': 'More',
      onclick: function () { openMore(); }
    }, [icon('more', 20), el('span', { text: 'More' })]));
    app.appendChild(tabs);

    app.appendChild(el('div', { id: 'toast' }));
  }

  function openMore() {
    var body = el('div', { class: 'list' });
    [['sheet', 'Sheet', 'The budget-vs-actual grid'],
     ['trips', 'Trips', 'Switch or create a trip'],
     ['data', 'Data & settings', 'Backup, currencies, categories, links']
    ].forEach(function (r) {
      body.appendChild(el('button', {
        class: 'list-row', style: { border: 0, background: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' },
        onclick: function () { closeModal(); go(r[0]); }
      }, [
        icon(NAV.filter(function (n) { return n.id === r[0]; })[0].icon, 19),
        el('div', { class: 'grow' }, [
          el('div', { class: 't', text: r[1] }),
          el('div', { class: 's', text: r[2] })
        ]),
        icon('next', 16)
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
          onclick: function () { if (opts.ok(close) !== false) { /* ok may close itself */ } }
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
    var top = modalStack[modalStack.length - 1];
    if (top) {
      modalStack.pop();
      top.remove();
      if (!modalStack.length) document.body.style.overflow = '';
    }
  }

  function confirmBox(title, message, onYes, yesLabel) {
    modal({
      title: title,
      body: el('p', { text: message, style: { margin: 0, color: 'var(--ink-2)' } }),
      okLabel: yesLabel || 'Delete',
      ok: function (close) { close(); onYes(); }
    });
    var btn = document.querySelector('.scrim:last-child .modal-foot .btn.pri');
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
  function stat(k, v, s, cls) {
    return el('div', { class: 'stat ' + (cls || '') }, [
      el('div', { class: 'k', text: k }),
      el('div', { class: 'v', text: v }),
      s ? el('div', { class: 's', text: s }) : null
    ]);
  }

  function progressBar(spent, budget) {
    var over = spent > budget && budget > 0;
    var w = budget > 0 ? Math.min(100, (spent / budget) * 100) : 0;
    var bar = el('div', { class: 'bar' });
    if (over) {
      bar.appendChild(el('i', { class: 'b', style: { width: (budget / spent * 100) + '%' } }));
      bar.appendChild(el('i', { class: 'o', style: { width: (100 - budget / spent * 100) + '%' } }));
    } else {
      bar.appendChild(el('i', { class: 'b', style: { width: w + '%' } }));
    }
    return bar;
  }

  function avatar(person, small) {
    return el('div', {
      class: 'avatar' + (small ? ' sm' : ''),
      style: { background: person.colour },
      title: person.name,
      text: DD.initials(person.name)
    });
  }

  function emptyState(title, msg, actionLabel, action) {
    return el('div', { class: 'card empty' }, [
      el('h3', { text: title }),
      el('p', { text: msg }),
      actionLabel ? el('button', { class: 'btn pri', text: actionLabel, onclick: action }) : null
    ]);
  }

  function field(label, input) {
    return el('label', { class: 'field' }, [el('span', { class: 'lbl-cap', text: label }), input]);
  }

  function selectOf(options, value, onchange, attrs) {
    var s = el('select', attrs || {});
    options.forEach(function (o) {
      var v = Array.isArray(o) ? o[0] : o.value;
      var l = Array.isArray(o) ? o[1] : o.label;
      s.appendChild(el('option', { value: v, selected: String(v) === String(value) }, l));
    });
    if (onchange) s.addEventListener('change', function () { onchange(s.value); });
    return s;
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

  function sectionHead(title, right) {
    return el('div', { class: 'section-head' }, [
      el('h2', { text: title }), el('div', { class: 'spacer' }), right
    ]);
  }

  /* ------------------------------------------------------------- keys */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalStack.length) { closeModal(); return; }
    var tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select' || modalStack.length) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var k = e.key.toLowerCase();
    if (k === 'l') { e.preventDefault(); go('log'); }
    else if (k === 'p') { e.preventDefault(); go('places'); }
    else if (k === 'o') { e.preventDefault(); go('overview'); }
    else if (k === 's') { e.preventDefault(); go('sheet'); }
    else if (k === '?') { e.preventDefault(); shortcutHelp(); }
  });

  function shortcutHelp() {
    var rows = [['O', 'Overview'], ['P', 'Places'], ['S', 'Sheet'], ['L', 'Log an expense'], ['Esc', 'Close a dialog']];
    var list = el('div', { class: 'list' });
    rows.forEach(function (r) {
      list.appendChild(el('div', { class: 'list-row' }, [
        el('span', { class: 'kbd', text: r[0] }),
        el('div', { class: 'grow' }, [el('div', { class: 't', text: r[1] })])
      ]));
    });
    modal({ title: 'Keyboard', body: list, noPad: true, footer: true });
  }

  DD.on = on; DD.emit = emit; DD.go = go; DD.route = current; DD.register = register;
  DD.buildShell = buildShell; DD.render = render; DD.modal = modal; DD.closeModal = closeModal;
  DD.confirmBox = confirmBox; DD.toast = toast; DD.stat = stat; DD.progressBar = progressBar;
  DD.avatar = avatar; DD.emptyState = emptyState; DD.field = field; DD.selectOf = selectOf;
  DD.segmented = segmented; DD.sectionHead = sectionHead; DD.NAV = NAV;
})();
