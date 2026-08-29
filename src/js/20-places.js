/* 20-places — Countries abroad, Cities at home. Each trip's map, its places,
   and its ledger of spending all live on this one page. */
'use strict';

(function () {
  var el = DD.el, S = DD.store, icon = DD.icon;

  /* Filter and sort are remembered while the app is open, per trip kind, so
     switching to the sheet and back does not lose your place. */
  var view = { query: '', by: 'order', dir: 'asc' };

  var GRADIENT = 'linear-gradient(160deg,var(--brand-900),var(--brand-700) 60%,var(--brand-600))';
  function photoLayers(url) {
    return 'url("' + String(url).replace(/"/g, '%22') + '"), ' + GRADIENT;
  }

  DD.register('places', {
    title: function () { return DD.placesLabel(); },
    render: render
  });

  function render(host) {
    var t = S.trip();
    /* A domestic place is a state: that is the level the India sheet budgets at
       and the level the map fills at. Its towns live on the Cities page. */
    var isCity = t.kind === 'domestic';
    var list = S.places(t);
    var noun = isCity ? ['state', 'states'] : ['country', 'countries'];

    if (!list.length) {
      if (isCity) host.appendChild(viewToggle('places'));
      host.appendChild(el('p', { class: 'lede' },
        'Nothing on ' + t.name + ' yet. Add the ' + noun[1] + ' you mean to visit — each one gets a photo, '
        + 'a starter budget of ' + DD.plural(t.defaultDays, 'day') + ', and booking links.'));
      host.appendChild(DD.emptyState('No ' + noun[1] + ' yet', '', 'Add a ' + noun[0], addDialog));
      return;
    }

    if (isCity) host.appendChild(viewToggle('places'));

    var b = S.tripBudget(t), a = S.actuals(t);
    var started = list.filter(function (p) { return S.placeState(t, p).count; }).length;

    host.appendChild(DD.statStrip([
      DD.stat('Budgeted', DD.money(b.total, { compact: true }),
        DD.plural(b.days, 'day') + ' · ' + DD.money(b.days ? b.total / b.days : 0) + ' a day', 'hero'),
      DD.stat('Spent', DD.money(a.total, { compact: true }), DD.pct(a.total, b.total) + '% of budget'),
      DD.stat(a.total > b.total ? 'Over by' : 'Remaining', DD.money(Math.abs(b.total - a.total), { compact: true }),
        '', a.total > b.total ? 'neg' : 'pos'),
      DD.stat(isCity ? 'States' : 'Countries', String(list.length), started + ' under way')
    ]));

    var pace = S.pacing(t);
    if (pace && pace.state !== 'before' && DD.paceBar) {
      host.appendChild(el('div', { style: { marginTop: '16px' } }, [DD.paceBar(t, pace)]));
    }

    var w = S.whereToday(t);
    if (w) {
      host.appendChild(el('div', { class: 'banner info', style: { marginTop: '16px' } }, [
        el('div', {}, ['You are in ', el('strong', { text: w.place.name }), ' today — day ',
          String(w.dayInPlace), ' of ', String(w.daysHere), '. ',
          el('button', { class: 'btn xs', onclick: function () { editor(t, w.place); } }, 'Open it')])
      ]));
    }

    /* ---- the trip's own map ---- */
    var kind = isCity ? 'india' : 'world';
    host.appendChild(DD.sectionHead(t.name, isCity ? 'The route through India' : 'The route',
      el('button', { class: 'btn sm pri', onclick: addDialog }, [icon('plus', 14), 'Add ' + noun[0]])));
    host.appendChild(el('p', { class: 'deck' }, isCity
      ? 'States you are stopping in are filled; a dot marks each city. Colour deepens once you spend there.'
      : 'Countries on the itinerary are filled, and deepen as you spend. Click an empty one to add it.'));
    host.appendChild(DD.map.render({
      kind: kind,
      trips: [t],
      onPick: function (e) { editor(t, e.place); },
      onIndia: kind === 'world' ? DD.openHomeTrip : null,
      onBlank: kind === 'world' ? function (key, name) { offerAdd(t, key, name); } : null
    }));
    host.appendChild(el('p', { class: 'tiny muted', style: { marginTop: '8px' } },
      'Scroll or pinch to zoom, drag to move around.'
      + (kind === 'world' ? ' India opens your travels at home.' : '')));

    /* ---- trip level charts ---- */
    if (b.total > 0) {
      host.appendChild(DD.sectionHead('Overview', 'Category breakdown'));
      var tripMode = a.total > 0 ? 'spent' : 'budget';
      var tripBody = el('div', { class: 'card card-pad', style: { marginBottom: '16px' } });
      var tripInner = el('div', { style: { display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' } });
      
      var paintTrip = function(which) {
        DD.clear(tripInner);
        var src = which === 'spent' ? a.byCat : b.byCat;
        var data = t.categories.map(function(c, i) {
          return { id: c.id, label: c.label, value: src[c.id] || 0, colour: DD.charts.colourFor(c.id, i) };
        }).filter(function(d) { return d.value > 0; }).sort(DD.by('value', 'desc'));
        
        tripInner.appendChild(el('div', { style: { flex: '0 0 auto', margin: '0 auto' } }, [
          DD.charts.donut(data, {
            centre: DD.money(DD.sum(data, function (d) { return d.value; }), { compact: true }),
            centreSub: which === 'spent' ? 'spent' : 'budget'
          })
        ]));
        
        var barsData = t.categories.map(function(c) {
          return { id: c.id, label: c.label, budget: b.byCat[c.id] || 0, actual: a.byCat[c.id] || 0 };
        }).filter(function(r) { return r.budget > 0 || r.actual > 0; });
        
        var detailsCol = el('div', { style: { flex: '1 1 240px', minWidth: '0' } });
        detailsCol.appendChild(DD.charts.verticalCompareBars(barsData));
        tripInner.appendChild(detailsCol);
      };
      
      paintTrip(tripMode);
      if (a.total > 0) {
        DD.append(tripBody, el('div', { style: { marginBottom: '14px' } }, [
          DD.segmented([['budget', 'Budget'], ['spent', 'Spent']], tripMode, paintTrip)
        ]));
      }
      tripBody.appendChild(tripInner);
      host.appendChild(tripBody);
    }


    /* ---- the places ---- */
    /* The grid repaints itself as you type or re-sort. A full DD.render() would
       rebuild the page, throw away the focused search box and jump back to the
       top of the page on every keystroke. */
    var countChip = el('span', { class: 'chip' });
    var headNode = DD.sectionHead('In order', isCity ? 'The states' : 'The countries', countChip);
    host.appendChild(headNode);

    var bar = sortBar(t, list, noun, repaint);
    host.appendChild(bar.node);

    var gridWrap = el('div', {});
    host.appendChild(gridWrap);
    repaint();

    function repaint() {
      var shown = arrange(t, list);
      var kicker = headNode.querySelector('.kicker');
      if (kicker) kicker.textContent = view.by === 'order' ? 'In order' : 'Sorted';
      countChip.textContent = shown.length === list.length
        ? DD.plural(list.length, noun[0], noun[1])
        : shown.length + ' of ' + list.length;
      bar.refresh();

      DD.clear(gridWrap);
      if (!shown.length) {
        gridWrap.appendChild(el('div', { class: 'card empty' }, [
          el('p', { style: { margin: 0 }, text: 'Nothing matches \u201c' + view.query + '\u201d.' })
        ]));
        return;
      }
      var grid = el('div', { class: 'places' });
      shown.forEach(function (p) { grid.appendChild(card(t, p, list.indexOf(p), list.length)); });
      gridWrap.appendChild(grid);
      if (view.by === 'order') {
        makeSortable(grid, t);
        gridWrap.appendChild(el('p', { class: 'drag-hint', style: { marginTop: '9px' } },
          'Drag a card to reorder the route. The arrows do the same thing on a phone.'));
      } else {
        gridWrap.appendChild(el('p', { class: 'drag-hint', style: { marginTop: '9px' } },
          'Sorted view \u2014 switch back to route order to drag cards around.'));
      }
    }

    host.appendChild(el('div', { style: { marginTop: '16px', textAlign: 'center' } }, [
      el('button', { class: 'btn', onclick: addDialog }, [icon('plus', 14), 'Add another ' + noun[0]])
    ]));

    /* ---- this trip's ledger ---- */
    host.appendChild(DD.sectionHead('The ledger', 'What ' + t.name + ' actually cost',
      el('button', { class: 'btn sm pri', onclick: function () { DD.logForm({ trip: t }); } },
        [icon('plus', 14), 'Log spend'])));
    host.appendChild(DD.expenseLedger(t));
  }

  /* A trip at home has two views of the same route: the states that carry the
     budget, and the towns you pass through. */
  function viewToggle(current) {
    return el('div', { style: { marginBottom: '16px' } }, [
      DD.segmented([['places', 'States'], ['cities', 'Cities']], current, function (v) {
        if (v !== current) DD.go(v);
      })
    ]);
  }

  /* Drag a card on to another to slot it in there. Touch keeps the arrows. */
  function makeSortable(grid, t) {
    var dragId = null;

    DD.$$('.place', grid).forEach(function (node) {
      node.draggable = true;

      node.addEventListener('dragstart', function (ev) {
        dragId = node.dataset.place;
        node.classList.add('dragging');
        ev.dataTransfer.effectAllowed = 'move';
        try { ev.dataTransfer.setData('text/plain', dragId); } catch (e) { /* IE-ism */ }
      });

      node.addEventListener('dragend', function () {
        dragId = null;
        DD.$$('.place', grid).forEach(function (n) {
          n.classList.remove('dragging', 'drop-before', 'drop-after');
        });
      });

      node.addEventListener('dragover', function (ev) {
        if (!dragId || node.dataset.place === dragId) return;
        ev.preventDefault();
        ev.dataTransfer.dropEffect = 'move';
        var r = node.getBoundingClientRect();
        var after = (ev.clientX - r.left) > r.width / 2;
        node.classList.toggle('drop-after', after);
        node.classList.toggle('drop-before', !after);
      });

      node.addEventListener('dragleave', function () {
        node.classList.remove('drop-before', 'drop-after');
      });

      node.addEventListener('drop', function (ev) {
        ev.preventDefault();
        if (!dragId || node.dataset.place === dragId) return;
        var list = S.places(t);
        var to = list.findIndex(function (p) { return p.id === node.dataset.place; });
        var from = list.findIndex(function (p) { return p.id === dragId; });
        if (to < 0 || from < 0) return;
        if (node.classList.contains('drop-after') && from > to) to += 1;
        if (node.classList.contains('drop-before') && from < to) to -= 1;
        if (S.reorderPlace(t, dragId, to)) {
          DD.render();
          DD.toast('Route reordered');
        }
      });
    });
  }

  /* ------------------------------------------------------ filter & sort */

  /* What you can rank a place by. Categories come from the trip, so the India
     trip offers Petrol and the world trip offers Visa. */
  function metrics(t) {
    var out = [
      { id: 'order', label: 'Route order' },
      { id: 'total', label: 'Total budget' },
      { id: 'perDay', label: 'Cost a day' },
      { id: 'days', label: 'Days' },
      { id: 'spent', label: 'Actually spent' },
      { id: 'left', label: 'Left to spend' }
    ];
    t.categories.forEach(function (c) { out.push({ id: 'cat:' + c.id, label: c.label }); });
    return out;
  }

  function valueOf(t, p, by) {
    var b = S.placeBudget(t, p);
    if (by === 'total') return b.total;
    if (by === 'perDay') return p.days ? b.total / p.days : 0;
    if (by === 'days') return Number(p.days) || 0;
    if (by === 'spent') return S.placeState(t, p).spent;
    if (by === 'left') return b.total - S.placeState(t, p).spent;
    if (by.indexOf('cat:') === 0) return Number(p.budget[by.slice(4)]) || 0;
    return Number(p.order) || 0;
  }

  /* Categories differ between trips — the world has Visa, India has Petrol — so
     a sort carried over from the other trip may not exist here. Fall back. */
  function normalise(t) {
    var ok = metrics(t).some(function (m) { return m.id === view.by; });
    if (!ok) { view.by = 'order'; view.dir = 'asc'; }
    return view.by;
  }

  function arrange(t, list) {
    normalise(t);
    var q = view.query.trim().toLowerCase();
    var out = list.filter(function (p) {
      if (!q) return true;
      return (p.name + ' ' + (p.city || '') + ' ' + (p.country || '') + ' ' + p.currency)
        .toLowerCase().indexOf(q) >= 0;
    });
    if (view.by === 'order') return out;
    var sign = view.dir === 'desc' ? -1 : 1;
    return out.slice().sort(function (a, b) {
      var d = (valueOf(t, a, view.by) - valueOf(t, b, view.by)) * sign;
      return d || (a.order - b.order);
    });
  }

  function sortBar(t, list, noun, repaint) {
    normalise(t);
    var search = el('input', {
      type: 'text', value: view.query,
      placeholder: 'Find a ' + noun[0] + '\u2026',
      oninput: DD.debounce(function () { view.query = search.value; repaint(); }, 180)
    });

    var sel = DD.selectOf(metrics(t).map(function (m) { return [m.id, m.label]; }), view.by,
      function (v) { view.by = v; repaint(); });

    var dirWrap = el('div', { class: 'sb-dir' });
    var clearWrap = el('div', { class: 'sb-clear' });
    var summary = el('span', { class: 'drag-hint' });

    var node = el('div', { class: 'sortbar' }, [
      el('div', { class: 'sortbar-row' }, [
        el('div', { class: 'sb-find' }, [search]),
        el('label', { class: 'sb-by' }, [el('span', { class: 'lbl-cap', text: 'Sort by' }), sel]),
        dirWrap,
        clearWrap
      ]),
      summary
    ]);

    /* Only the bits that depend on the sort get rebuilt, so the search box
       keeps its focus and caret while you type. */
    function refresh() {
      DD.clear(dirWrap);
      if (view.by !== 'order') {
        dirWrap.appendChild(DD.segmented([['asc', 'Cheapest first'], ['desc', 'Priciest first']],
          view.dir, function (v) { view.dir = v; repaint(); }));
      }

      DD.clear(clearWrap);
      if (view.query || view.by !== 'order') {
        clearWrap.appendChild(el('button', { class: 'btn xs ghost', text: 'Clear', onclick: function () {
          view.query = ''; view.by = 'order'; view.dir = 'asc';
          search.value = '';
          repaint();
        } }));
      }

      summary.textContent = '';
      if (view.by !== 'order') {
        var m = metrics(t).filter(function (x) { return x.id === view.by; })[0];
        var top = arrange(t, list)[0];
        if (m && top) {
          summary.textContent = (view.dir === 'asc' ? 'Cheapest' : 'Dearest') + ' on '
            + m.label.toLowerCase() + ': ' + top.name + ' at ' + DD.money(valueOf(t, top, view.by));
        }
      }
    }

    return { node: node, refresh: refresh };
  }

  /* --------------------------------------------------------------- card */
  function card(t, p, idx, total) {
    var bud = S.placeBudget(t, p);
    var st = S.placeState(t, p);
    var img = p.images && p.images[0];

    var photo = el('div', {
      class: 'place-photo',
      title: 'Open ' + p.name,
      style: img ? { backgroundImage: photoLayers(img.url) } : {},
      onclick: function () { editor(t, p); }
    }, [
      el('div', { class: 'ord', text: String(idx + 1).padStart(2, '0') }),
      st.count
        ? el('div', { class: 'state ' + st.state,
            text: st.state === 'over' ? 'Over budget' : st.state === 'done' ? 'Done' : 'Under way' })
        : (p.iso2 ? el('div', { class: 'flag', text: DD.flagOf(p.iso2) }) : null),
      el('div', { class: 'cap' }, [
        el('div', { class: 'n', text: p.name }),
        el('div', { class: 'c', text: subtitle(p) })
      ])
    ]);
    if (!img) tryPhoto(p, photo);

    var body = el('div', { class: 'place-body' }, [
      el('div', { class: 'place-nums' }, [
        el('span', { class: 'big', text: DD.money(bud.total, { compact: true }) }),
        el('span', { class: 'muted tiny sans', text: 'budget' }),
        el('span', { style: { flex: '1' } }),
        st.count ? el('span', {
          class: 'num', style: { fontWeight: '700', color: st.state === 'over' ? 'var(--red)' : 'var(--brand-800)' },
          text: DD.money(st.spent, { compact: true })
        }) : null
      ]),
      DD.progressBar(st.spent, bud.total),
      el('div', { class: 'place-meta' }, [
        stepper(t, p),
        el('span', { class: 'chip', text: p.currency }),
        el('span', { class: 'chip', text: DD.money(p.days ? bud.total / p.days : 0) + '/day' })
      ]),
      fxLine(p),
      el('div', { class: 'place-acts' }, [
        el('button', { class: 'btn xs pri', onclick: function () { DD.logForm({ trip: t, placeId: p.id }); } },
          [icon('plus', 12), 'Log']),
        el('button', { class: 'btn xs', onclick: function () { editor(t, p); } }, 'Open'),
        el('button', { class: 'btn xs', onclick: function () { DD.links.open('flights', p); } }, DD.links.label('flights')),
        el('button', { class: 'btn xs', onclick: function () { DD.links.open('stays', p); } }, DD.links.label('stays')),
        idx > 0 ? el('button', { class: 'btn xs ghost', title: 'Move earlier',
          onclick: function () { S.movePlace(t, p.id, -1); DD.render(); } }, '↑') : null,
        idx < total - 1 ? el('button', { class: 'btn xs ghost', title: 'Move later',
          onclick: function () { S.movePlace(t, p.id, 1); DD.render(); } }, '↓') : null
      ])
    ]);

    return el('div', { class: 'place', 'data-place': p.id }, [photo, body]);
  }

  /* The mental-arithmetic line: what ₹100 buys, for use at a counter. */
  function fxLine(p) {
    if (!p.currency || p.currency === 'INR') return null;
    var rate = DD.rateFor(p.currency, S.db().currencies);
    if (!rate || rate === 1) return null;
    var hundred = 100 * rate;
    /* Going the other way, one dong is worth ₹0.004 — useless. Step the unit up
       by powers of ten until the rupee figure is a number you can hold in mind. */
    var unit = 1 / rate, mult = 1;
    while (unit * mult < 1 && mult < 1000000) mult *= 10;
    var back = unit * mult;
    return el('div', { class: 'fx-line' }, [
      '₹100 = ', el('b', { text: DD.num(hundred, hundred < 10 ? 2 : 0) + ' ' + p.currency }),
      '   ·   ' + DD.num(mult) + ' ' + p.currency + ' = ',
      el('b', { text: '₹' + DD.num(back, back < 100 ? 2 : 0) })
    ]);
  }

  /* Whichever of city / region is not already the card's title. */
  function subtitle(p) {
    var extra = [p.city, p.country].filter(function (v) { return v && v !== p.name; })[0];
    return (extra ? extra + ' · ' : '') + DD.plural(p.days, 'day');
  }

  function stepper(t, p) {
    var n = el('span', { class: 'n', text: DD.plural(p.days, 'day') });
    return el('span', { class: 'stepper' }, [
      el('button', { 'aria-label': 'One day fewer', text: '−', onclick: function () {
        p.days = Math.max(1, (Number(p.days) || 1) - 1); n.textContent = DD.plural(p.days, 'day'); S.save();
      } }),
      n,
      el('button', { 'aria-label': 'One day more', text: '+', onclick: function () {
        p.days = (Number(p.days) || 0) + 1; n.textContent = DD.plural(p.days, 'day'); S.save();
      } })
    ]);
  }

  function tryPhoto(p, node) {
    DD.images.ensureLead(p, function (got) {
      if (got && p.images[0]) node.style.backgroundImage = photoLayers(p.images[0].url);
    });
  }

  function offerAdd(t, key, name) {
    DD.confirmBox('Add ' + name + '?',
      'It joins ' + t.name + ' with ' + DD.plural(t.defaultDays, 'day') + ' and an empty budget.',
      function () {
        var p = S.addPlace(t, { name: name, country: name, iso2: key, days: t.defaultDays, currency: 'INR' });
        DD.render();
        DD.toast(name + ' added');
        DD.images.ensureLead(p, function (got) { if (got) DD.render(); });
      }, 'Add it');
  }

  /* --------------------------------------------------------- add dialog */
  function addDialog() {
    var t = S.trip();
    var isCity = t.kind === 'domestic';
    var nameIn = el('input', { type: 'text', placeholder: isCity ? 'Rajasthan' : 'Portugal', autocapitalize: 'words' });
    var cityIn = el('input', { type: 'text', placeholder: isCity ? 'Jaipur' : 'Lisbon' });
    var daysIn = el('input', { type: 'number', min: '1', value: String(t.defaultDays) });
    var curIn = DD.selectOf(currencyOptions(), 'INR', null);
    var isoIn = el('input', { type: 'text', maxlength: '2', placeholder: 'PT', style: { textTransform: 'uppercase' } });
    var iataIn = el('input', { type: 'text', maxlength: '3', placeholder: 'LIS', style: { textTransform: 'uppercase' } });

    DD.modal({
      title: isCity ? 'Add a state' : 'Add a country',
      body: el('div', {}, [
        DD.field(isCity ? 'State — this fills the map' : 'Country', nameIn),
        DD.field(isCity ? 'Gateway city' : 'Main city', cityIn),
        el('div', { class: 'grid2' }, [DD.field('Days', daysIn), DD.field('Currency', curIn)]),
        el('div', { class: 'grid2' }, [
          DD.field(isCity ? 'Country code' : 'Country code', isoIn),
          DD.field('Airport', iataIn)
        ]),
        el('p', { class: 'tiny muted', style: { margin: '2px 0 0' } }, isCity
          ? 'The state name fills that part of the India map; the gateway city places the dot and finds a photo. Add the towns day by day under Plan.'
          : 'The country code fills the map and gives you a flag; the airport code builds the flight link.')
      ]),
      okLabel: 'Add',
      ok: function (close) {
        var name = nameIn.value.trim();
        if (!name) { nameIn.focus(); DD.toast('Give it a name first', true); return; }
        var p = S.addPlace(t, {
          name: name,
          country: name,
          city: cityIn.value.trim() || name,
          iso2: isoIn.value.trim().toUpperCase() || (isCity ? 'IN' : ''),
          iata: iataIn.value.trim().toUpperCase(),
          currency: curIn.value,
          days: Number(daysIn.value) || t.defaultDays
        });
        close();
        DD.render();
        DD.toast(name + ' added');
        DD.images.ensureLead(p, function (got) { if (got) DD.render(); });
      }
    });
  }

  function currencyOptions() {
    var cur = S.db().currencies;
    return Object.keys(cur).sort().map(function (c) { return [c, c + ' — ' + cur[c].name]; });
  }

  /* ------------------------------------------------------------- editor */
  function editor(t, p) {
    var body = el('div', {});
    var tabs = el('div', { class: 'seg', style: { marginBottom: '16px', flexWrap: 'wrap' } });
    var pane = el('div', {});
    var TABS = [['budget', 'Budget'], ['spend', 'Spending'], ['photos', 'Photos'],
                ['drive', 'Albums'], ['plan', 'Plan'], ['about', 'Details']];
    var activeTab = 'budget';

    function paint() {
      DD.clear(tabs);
      TABS.forEach(function (tb) {
        tabs.appendChild(el('button', {
          class: tb[0] === activeTab ? 'on' : '', text: tb[1],
          onclick: function () { activeTab = tb[0]; paint(); }
        }));
      });
      DD.clear(pane);
      ({ budget: budgetPane, spend: spendPane, photos: photosPane,
         drive: drivePane, plan: planPane, about: aboutPane })[activeTab](t, p, pane);
    }
    body.appendChild(tabs);
    body.appendChild(pane);
    paint();

    DD.modal({
      title: p.name + (p.city && p.city !== p.name ? ' · ' + p.city : ''),
      body: body, wide: true, cancelLabel: 'Done',
      destructive: {
        label: 'Remove',
        run: function (close) {
          close();
          DD.confirmBox('Remove ' + p.name + '?',
            'Its budget, photos, plan and ' + DD.plural(
              t.expenses.filter(function (x) { return x.placeId === p.id; }).length, 'logged expense')
            + ' go with it.',
            function () { S.removePlace(t, p.id); DD.render(); DD.toast(p.name + ' removed'); });
        }
      },
      ok: function (close) { close(); DD.render(); }
    });
  }

  var saveSoon = DD.debounce(function () { S.save(); }, 400);

  /* ----- budget ----- */
  function budgetPane(t, p, host) {
    var totalNode = el('span', { class: 'num', style: { fontWeight: '800', fontSize: '21px' } });
    var perDayNode = el('span', { class: 'muted small' });

    function recalc() {
      var b = S.placeBudget(t, p);
      totalNode.textContent = DD.money(b.total);
      perDayNode.textContent = DD.money(p.days ? b.total / p.days : 0) + ' a day';
    }

    var tbl = el('table', { class: 'grid', style: { minWidth: '0' } });
    var tb = el('tbody');
    t.categories.forEach(function (c, i) {
      var input = el('input', {
        type: 'number', class: 'cell-in', min: '0', step: '100',
        value: String(Number(p.budget[c.id]) || 0),
        oninput: function () {
          p.budget[c.id] = Math.max(0, Number(input.value) || 0);
          recalc(); saveSoon();
        }
      });
      tb.appendChild(el('tr', {}, [
        el('td', {}, [
          el('span', { class: 'dot', style: { background: DD.charts.colourFor(c.id, i),
            display: 'inline-block', marginRight: '8px' } }),
          c.label
        ]),
        el('td', { style: { width: '132px' } }, [input])
      ]));
    });
    tbl.appendChild(tb);

    host.appendChild(el('div', { style: { display: 'flex', gap: '12px', alignItems: 'baseline',
      marginBottom: '12px', flexWrap: 'wrap' } }, [
      el('span', { class: 'lbl-cap', style: { margin: 0 }, text: 'Total' }), totalNode, perDayNode
    ]));
    host.appendChild(el('div', { class: 'tbl-wrap' }, [tbl]));

    var daysIn = el('input', { type: 'number', min: '1', value: String(p.days),
      oninput: function () { p.days = Math.max(1, Number(daysIn.value) || 1); recalc(); saveSoon(); } });
    host.appendChild(el('div', { class: 'grid2', style: { marginTop: '14px' } }, [
      DD.field('Days here', daysIn),
      DD.field('Local currency', DD.selectOf(currencyOptions(), p.currency,
        function (v) { p.currency = v; S.save(); }))
    ]));

    var st = S.placeState(t, p);
    if (st.count) {
      host.appendChild(el('div', { class: st.state === 'over' ? 'banner' : 'banner info',
        style: { marginTop: '14px' } }, [
        el('div', {}, [
          el('strong', { text: DD.money(st.spent) + ' spent here. ' }),
          st.spent > st.budget
            ? DD.money(st.spent - st.budget) + ' over budget.'
            : DD.money(st.budget - st.spent) + ' still in hand.'
        ])
      ]));
    }
    recalc();
  }

  /* ----- spending ----- */
  function spendPane(t, p, host) {
    var st = S.placeState(t, p);
    host.appendChild(DD.statStrip([
      DD.stat('Budget', DD.money(st.budget), ''),
      DD.stat('Spent', DD.money(st.spent), DD.plural(st.count, 'entry', 'entries')),
      DD.stat(st.spent > st.budget ? 'Over' : 'Left', DD.money(Math.abs(st.budget - st.spent)), '',
        st.spent > st.budget ? 'neg' : 'pos')
    ]));

    var pB = S.placeBudget(t, p);
    if (pB.total > 0) {
      var pChartMode = st.spent > 0 ? 'spent' : 'budget';
      var pChartWrap = el('div', { class: 'card card-pad', style: { margin: '20px 0' } });
      var placeCharts = el('div', { style: { display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' } });
      
      var paintPlace = function(which) {
        DD.clear(placeCharts);
        var src = which === 'spent' ? st.byCat : p.budget;
        var totalVal = which === 'spent' ? st.spent : pB.total;
        var placeData = t.categories.map(function(c, i) {
          return { id: c.id, label: c.label, value: src[c.id] || 0, colour: DD.charts.colourFor(c.id, i) };
        }).filter(function(d) { return d.value > 0; }).sort(DD.by('value', 'desc'));
        
        placeCharts.appendChild(el('div', { style: { flex: '0 0 auto', margin: '0 auto' } }, [
          DD.charts.donut(placeData, {
            centre: DD.money(totalVal, { compact: true }),
            centreSub: which === 'spent' ? 'spent' : 'budget'
          })
        ]));
        
        var pBarsData = t.categories.map(function(c) {
          return { id: c.id, label: c.label, budget: p.budget[c.id] || 0, actual: st.byCat[c.id] || 0 };
        }).filter(function(r) { return r.budget > 0 || r.actual > 0; });
        
        var pDetailsCol = el('div', { style: { flex: '1 1 240px', minWidth: '0' } });
        pDetailsCol.appendChild(DD.charts.verticalCompareBars(pBarsData));
        placeCharts.appendChild(pDetailsCol);
      };
      
      paintPlace(pChartMode);
      if (st.spent > 0) {
        DD.append(pChartWrap, el('div', { style: { marginBottom: '14px' } }, [
          DD.segmented([['budget', 'Budget'], ['spent', 'Spent']], pChartMode, paintPlace)
        ]));
      }
      pChartWrap.appendChild(placeCharts);
      host.appendChild(pChartWrap);
    }
    host.appendChild(el('div', { style: { margin: '14px 0' } }, [
      el('button', { class: 'btn pri block', onclick: function () {
        DD.logForm({ trip: t, placeId: p.id, after: function () { spendRefresh(t, p, host); } });
      } }, [icon('plus', 15), 'Log spend in ' + p.name])
    ]));
    host.appendChild(DD.expenseLedger(t, { placeId: p.id }));
  }

  function spendRefresh(t, p, host) {
    DD.clear(host);
    spendPane(t, p, host);
  }

  /* ----- photos ----- */
  function photosPane(t, p, host) {
    var gal = el('div', { class: 'gal', style: { marginBottom: '14px' } });

    function paintGal() {
      DD.clear(gal);
      if (!p.images.length) {
        gal.appendChild(el('div', { class: 'muted small', style: { gridColumn: '1/-1' }, text: 'No photos yet.' }));
        return;
      }
      p.images.forEach(function (im, i) {
        gal.appendChild(el('figure', {}, [
          el('img', { src: im.url, alt: im.credit || p.name, loading: 'lazy',
            onerror: function () { this.parentNode.style.display = 'none'; } }),
          el('figcaption', { text: im.credit || '' }),
          el('button', { class: 'x', html: '&times;', title: 'Remove',
            onclick: function () { p.images.splice(i, 1); S.save(); paintGal(); } })
        ]));
      });
    }
    paintGal();
    host.appendChild(gal);

    var urlIn = el('input', { type: 'url', placeholder: 'https://…  paste any image link' });
    host.appendChild(el('div', { class: 'row', style: { marginBottom: '14px' } }, [
      urlIn,
      el('button', { class: 'btn', style: { flex: '0 0 auto' }, text: 'Add', onclick: function () {
        var u = urlIn.value.trim();
        if (!u) return;
        p.images.push({ url: u, credit: 'Added by you', source: '' });
        S.save(); urlIn.value = ''; paintGal();
      } })
    ]));

    var status = el('div', { class: 'muted small' });
    host.appendChild(el('div', { style: { display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' } }, [
      el('button', { class: 'btn', onclick: fetchMore }, [icon('image', 14), 'Find photos of ' + (p.city || p.name)]),
      status
    ]));
    host.appendChild(el('p', { class: 'tiny muted', style: { marginTop: '11px', marginBottom: 0 } },
      DD.images.needsServer()
        ? 'Photo search needs an http:// origin — run python3 serve.py and open http://localhost:4190/. Pasting a URL works either way.'
        : 'Photos come from Wikipedia and Wikimedia Commons — freely licensed, credited above, stored as links.'));

    function fetchMore() {
      if (DD.images.needsServer()) {
        status.textContent = 'Opened from disk — run serve.py to search, or paste a URL above.';
        return;
      }
      if (!DD.images.online()) { status.textContent = 'You are offline.'; return; }
      p.noPhoto = false;
      DD.clear(status);
      status.appendChild(el('span', { class: 'spin' }));
      status.appendChild(document.createTextNode(' searching…'));
      var q = DD.images.queryFor(p);
      DD.images.search(q, 8).then(function (found) {
        var have = {};
        p.images.forEach(function (im) { have[im.url] = 1; });
        var added = 0;
        found.forEach(function (im) { if (!have[im.url]) { p.images.push(im); added++; } });
        if (added) { S.save(); paintGal(); }
        status.textContent = added ? added + ' added' : 'Nothing new found for "' + q + '"';
      }).catch(function () { status.textContent = 'Could not reach Wikimedia.'; });
    }
  }

  /* ----- albums ----- */
  function drivePane(t, p, host) {
    var list = el('div', { style: { marginBottom: '14px' } });

    function paint() {
      DD.clear(list);
      if (!p.driveLinks.length) {
        list.appendChild(el('div', { class: 'muted small', text: 'No album links yet.' }));
        return;
      }
      p.driveLinks.forEach(function (d, i) {
        var embed = DD.images.driveEmbed(d.url);
        var block = el('div', { class: 'card', style: { marginBottom: '12px', overflow: 'hidden' } });
        block.appendChild(el('div', { class: 'list-row' }, [
          icon('link', 16),
          el('div', { class: 'grow' }, [
            el('div', { class: 't', text: d.label || DD.images.hostOf(d.url) }),
            el('div', { class: 's', text: DD.images.hostOf(d.url) })
          ]),
          el('a', { class: 'btn xs', href: d.url, target: '_blank', rel: 'noopener', text: 'Open' }),
          el('button', { class: 'btn xs ghost', html: '&times;', title: 'Remove',
            onclick: function () { p.driveLinks.splice(i, 1); S.save(); paint(); } })
        ]));
        if (embed) {
          block.appendChild(el('iframe', { class: 'drive-embed', src: embed, loading: 'lazy',
            title: d.label || 'Album', style: { border: 0, display: 'block' } }));
        }
        list.appendChild(block);
      });
    }
    paint();
    host.appendChild(list);

    var lbl = el('input', { type: 'text', placeholder: 'Photos from Hanoi' });
    var url = el('input', { type: 'url', placeholder: 'https://drive.google.com/drive/folders/…' });
    host.appendChild(el('div', { class: 'grid2' }, [DD.field('Label', lbl), DD.field('Link', url)]));
    host.appendChild(el('button', { class: 'btn pri', onclick: function () {
      var u = url.value.trim();
      if (!u) { url.focus(); return; }
      p.driveLinks.push({ label: lbl.value.trim() || DD.images.hostOf(u), url: u });
      S.save(); lbl.value = ''; url.value = ''; paint();
    } }, [icon('plus', 14), 'Add link']));
    host.appendChild(el('p', { class: 'tiny muted', style: { marginTop: '12px', marginBottom: 0 } },
      'Google Drive folders and files shared as "anyone with the link" show their contents inline. Dropbox, OneDrive, iCloud and the rest appear as a link you can open.'));
  }

  /* ----- plan ----- */
  function planPane(t, p, host) {
    var list = el('div', { class: 'card list', style: { marginBottom: '14px' } });

    function paint() {
      DD.clear(list);
      var items = (p.itinerary || []).slice().sort(DD.by('day'));
      if (!items.length) {
        list.appendChild(el('div', { class: 'empty', style: { padding: '26px 18px' } }, [
          el('p', { class: 'muted small', style: { margin: 0 }, text: 'Nothing planned for ' + p.name + ' yet.' })
        ]));
        return;
      }
      items.forEach(function (it) {
        list.appendChild(el('div', { class: 'list-row' }, [
          el('label', { class: 'inline-check', style: { margin: 0 } }, [
            el('input', { type: 'checkbox', checked: !!it.done,
              onchange: function () { it.done = this.checked; S.save(); paint(); } })
          ]),
          el('span', { class: 'chip', text: 'Day ' + (it.day || 1) }),
          el('div', { class: 'grow' }, [
            el('div', { class: 't', text: it.title,
              style: it.done ? { textDecoration: 'line-through', color: 'var(--ink-3)' } : {} }),
            it.note ? el('div', { class: 's', text: it.note }) : null
          ]),
          it.cost ? el('span', { class: 'amt small', text: DD.money(it.cost) }) : null,
          el('button', { class: 'btn xs ghost', html: '&times;', title: 'Remove',
            onclick: function () {
              p.itinerary = p.itinerary.filter(function (o) { return o !== it; }); S.save(); paint();
            } })
        ]));
      });
    }
    paint();
    host.appendChild(list);

    var day = el('input', { type: 'number', min: '1', value: '1' });
    var title = el('input', { type: 'text', placeholder: 'Ha Long Bay day cruise' });
    var cost = el('input', { type: 'number', min: '0', step: '100', placeholder: '0' });
    var note = el('input', { type: 'text', placeholder: 'Optional' });

    host.appendChild(el('div', { class: 'grid3' }, [
      DD.field('Day', day), DD.field('Est. cost ₹', cost), DD.field('Note', note)
    ]));
    host.appendChild(DD.field('What', title));
    host.appendChild(el('button', { class: 'btn pri', onclick: add }, [icon('plus', 14), 'Add to plan']));
    title.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); add(); } });

    function add() {
      var v = title.value.trim();
      if (!v) { title.focus(); return; }
      p.itinerary.push({ id: DD.uid('it'), day: Math.max(1, Number(day.value) || 1), title: v,
        note: note.value.trim(), cost: Number(cost.value) || 0, done: false });
      S.save();
      title.value = ''; note.value = ''; cost.value = '';
      paint(); title.focus();
    }
  }

  /* ----- details ----- */
  function aboutPane(t, p, host) {
    var isCity = t.kind === 'domestic';
    /* For a domestic place the name IS the state, and the map matches on it —
       so keep p.country in step or a rename would stop filling the shape. */
    var name = el('input', { type: 'text', value: p.name, oninput: function () {
      p.name = name.value;
      if (isCity) p.country = name.value;
      saveSoon();
    } });
    var city = el('input', { type: 'text', value: p.city || '', oninput: function () { p.city = city.value; saveSoon(); } });
    var iso = el('input', { type: 'text', maxlength: '2', value: p.iso2 || '', style: { textTransform: 'uppercase' },
      oninput: function () { p.iso2 = iso.value.toUpperCase(); saveSoon(); } });
    var iata = el('input', { type: 'text', maxlength: '3', value: p.iata || '', style: { textTransform: 'uppercase' },
      oninput: function () { p.iata = iata.value.toUpperCase(); saveSoon(); } });
    var lat = el('input', { type: 'number', step: 'any', value: p.lat === null || p.lat === undefined ? '' : String(p.lat),
      oninput: function () { p.lat = lat.value === '' ? null : Number(lat.value); saveSoon(); } });
    var lon = el('input', { type: 'number', step: 'any', value: p.lon === null || p.lon === undefined ? '' : String(p.lon),
      oninput: function () { p.lon = lon.value === '' ? null : Number(lon.value); saveSoon(); } });
    var notes = el('textarea', { placeholder: 'Visa notes, who to meet, what to pack…',
      oninput: function () { p.notes = notes.value; saveSoon(); } });
    notes.value = p.notes || '';

    host.appendChild(el('div', { class: 'grid2' }, [
      DD.field(isCity ? 'State — fills the map' : 'Country', name),
      DD.field(isCity ? 'Gateway city' : 'Main city', city)
    ]));
    host.appendChild(el('div', { class: 'grid2' }, [
      DD.field('Country code', iso), DD.field('Airport', iata)
    ]));
    host.appendChild(el('div', { class: 'grid2' }, [
      DD.field('Latitude', lat), DD.field('Longitude', lon)
    ]));
    host.appendChild(el('p', { class: 'tiny muted', style: { marginTop: '-6px' } },
      'Coordinates put the dot on the map. They are filled in automatically when a photo is found.'));
    host.appendChild(DD.field('Notes', notes));

    var sched = S.schedule(t)[p.id];
    if (sched && sched.start) {
      host.appendChild(el('div', { class: 'banner info' }, [
        el('div', {}, ['Scheduled ', el('strong', { text: DD.niceDate(sched.start) }), ' to ',
          el('strong', { text: DD.niceDate(sched.end, true) }), '.'])
      ]));
    }

    host.appendChild(el('div', { class: 'chip-row', style: { marginTop: '6px' } }, [
      el('a', { class: 'btn sm', href: DD.links.build('flights', p) || '#', target: '_blank', rel: 'noopener' }, DD.links.label('flights')),
      el('a', { class: 'btn sm', href: DD.links.build('stays', p) || '#', target: '_blank', rel: 'noopener' }, DD.links.label('stays')),
      el('a', { class: 'btn sm', href: DD.links.build('activities', p) || '#', target: '_blank', rel: 'noopener' }, DD.links.label('activities'))
    ]));
  }

  DD.placesViewToggle = viewToggle;
  DD.placesAddDialog = addDialog;
  DD.placeEditor = editor;
  DD.currencyOptions = currencyOptions;
})();
