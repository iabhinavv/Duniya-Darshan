/* 10-front — the front page: the whole ledger at a glance, the world map,
   and the trips themselves. Opening a trip takes you to its places. */
'use strict';

(function () {
  var el = DD.el, S = DD.store;

  DD.register('front', { title: 'Front Page', render: render });

  function render(host) {
    var db = S.db();
    var all = db.trips;

    /* ---- everything, added up ---- */
    var budget = 0, spent = 0, places = 0, days = 0, entries = 0, started = 0;
    all.forEach(function (t) {
      var b = S.tripBudget(t), a = S.actuals(t);
      budget += b.total; spent += a.total; places += b.places; days += b.days;
      entries += a.count;
      t.places.forEach(function (p) { if (S.placeState(t, p).count) started++; });
    });

    host.appendChild(el('p', { class: 'lede' }, [
      places
        ? 'Across ' + DD.plural(all.length, 'trip') + ' there are ' + DD.plural(places, 'destination')
          + ', ' + DD.money(budget) + ' budgeted over ' + DD.plural(days, 'day') + '. '
        : 'Nothing is planned yet. ',
      entries
        ? DD.money(spent) + ' has gone out across ' + DD.plural(entries, 'entry', 'entries')
          + ', and ' + started + ' of ' + places + ' places are under way.'
        : 'No spending logged yet — the map below fills in as you go.'
    ]));

    host.appendChild(DD.statStrip([
      DD.stat('Budgeted', DD.money(budget, { compact: true }), DD.plural(days, 'day') + ' in all', 'hero'),
      DD.stat('Spent', DD.money(spent, { compact: true }), DD.pct(spent, budget) + '% of budget'),
      DD.stat(spent > budget ? 'Over by' : 'Remaining', DD.money(Math.abs(budget - spent), { compact: true }),
        started ? started + ' places under way' : 'nothing started', spent > budget ? 'neg' : 'pos'),
      DD.stat('Per day', DD.money(days ? budget / days : 0), 'across the whole plan')
    ]));

    /* ---- where you are today, if a trip is running ---- */
    var live = null;
    all.forEach(function (t) {
      if (live) return;
      var w = S.whereToday(t);
      if (w) live = { trip: t, where: w };
    });
    if (live) host.appendChild(todayPanel(live.trip, live.where));

    /* ---- pacing: are you spending faster than the plan? ---- */
    var paceTrip = live ? live.trip : S.trip();
    var pace = S.pacing(paceTrip);
    if (pace && pace.state !== 'before') {
      host.appendChild(DD.sectionHead(paceTrip.name, 'Are you on budget?'));
      host.appendChild(paceBar(paceTrip, pace));
    }

    /* ---- the map ---- */
    var worldTrips = all.filter(function (t) { return t.kind !== 'domestic'; });
    if (worldTrips.length) {
      host.appendChild(DD.sectionHead('The world, so far', 'Where the money goes',
        el('span', { class: 'chip teal', text: DD.plural(started, 'place') + ' under way' })));
      host.appendChild(el('p', { class: 'deck' },
        'Filled countries are on the itinerary. They deepen once you start spending there — click any one to open it.'));
      host.appendChild(DD.map.render({
        kind: 'world',
        trips: worldTrips,
        onPick: function (e) { openPlace(e); },
        onIndia: openHomeTrip,
        onBlank: function (key, name) { offerAdd(key, name); }
      }));
      host.appendChild(el('p', { class: 'tiny muted', style: { marginTop: '8px' } },
        'Scroll or pinch to zoom, drag to move around. India opens your travels at home.'));
    }

    /* ---- trips ---- */
    host.appendChild(DD.sectionHead('The trips', 'Editions',
      el('button', { class: 'btn sm pri', onclick: newTrip }, [DD.icon('plus', 14), 'New trip'])));

    var grid = el('div', {
      style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(290px,1fr))', gap: '16px' }
    });
    all.forEach(function (t) { grid.appendChild(tripCard(t)); });
    host.appendChild(grid);

    /* ---- category split for the open trip ---- */
    var t = S.trip();
    var tb = S.tripBudget(t), ta = S.actuals(t);
    if (tb.places) {
      host.appendChild(DD.sectionHead(t.name, 'Where it is budgeted',
        el('button', { class: 'btn sm', onclick: function () { DD.go('sheet'); } }, 'Open the sheet')));

      var mode = ta.count ? 'spent' : 'budget';
      var body = el('div', { class: 'card card-pad' });
      var inner = el('div', { style: { display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' } });

      function paint(which) {
        DD.clear(inner);
        var src = which === 'spent' ? ta.byCat : tb.byCat;
        var data = t.categories.map(function (c, i) {
          return { id: c.id, label: c.label, value: src[c.id] || 0, colour: DD.charts.colourFor(c.id, i) };
        }).filter(function (d) { return d.value > 0; }).sort(DD.by('value', 'desc'));
        inner.appendChild(el('div', { style: { flex: '0 0 auto', margin: '0 auto' } }, [
          DD.charts.donut(data, {
            centre: DD.money(DD.sum(data, function (d) { return d.value; }), { compact: true }),
            centreSub: which === 'spent' ? 'spent' : 'budget'
          })
        ]));
        inner.appendChild(el('div', { style: { flex: '1 1 240px', minWidth: '0' } }, [DD.charts.legend(data)]));
      }
      paint(mode);
      DD.append(body, ta.count
        ? el('div', { style: { marginBottom: '14px' } }, [
            DD.segmented([['budget', 'Budget'], ['spent', 'Spent']], mode, paint)])
        : null);
      body.appendChild(inner);
      host.appendChild(body);
    }

    /* ---- recent spending, across every trip ---- */
    var recent = [];
    all.forEach(function (tr) {
      tr.expenses.forEach(function (x) { recent.push({ trip: tr, x: x }); });
    });
    recent.sort(DD.by(function (r) { return r.x.date; }, 'desc'));
    if (recent.length) {
      host.appendChild(DD.sectionHead('Latest', 'Money out',
        el('button', { class: 'btn sm', onclick: function () { DD.logForm(); } }, [DD.icon('plus', 14), 'Log spend'])));
      var list = el('div', { class: 'card list' });
      recent.slice(0, 7).forEach(function (r) {
        list.appendChild(DD.expenseRow(r.trip, r.x, { showTrip: all.length > 1 }));
      });
      host.appendChild(list);
    }

    /* ---- next few things planned ---- */
    var up = [];
    all.forEach(function (tr) {
      var sched = S.schedule(tr);
      tr.places.forEach(function (p) {
        (p.itinerary || []).forEach(function (it) {
          if (it.done) return;
          up.push({
            trip: tr, place: p, it: it,
            date: sched[p.id] && sched[p.id].start ? DD.addDays(sched[p.id].start, Math.max(0, (it.day || 1) - 1)) : ''
          });
        });
      });
    });
    if (up.length) {
      up.sort(DD.by('date'));
      host.appendChild(DD.sectionHead('Ahead', 'On the itinerary',
        el('button', { class: 'btn sm', onclick: function () { DD.go('itinerary'); } }, 'All of it')));
      var ul = el('div', { class: 'card list' });
      up.slice(0, 5).forEach(function (u) {
        ul.appendChild(el('div', { class: 'list-row' }, [
          el('span', { class: 'chip', text: u.date ? DD.shortDate(u.date) : 'Day ' + (u.it.day || 1) }),
          el('div', { class: 'grow' }, [
            el('div', { class: 't', text: u.it.title }),
            el('div', { class: 's', text: u.place.name + ' · ' + u.trip.name })
          ]),
          u.it.cost ? el('span', { class: 'amt', text: DD.money(u.it.cost) }) : null
        ]));
      });
      host.appendChild(ul);
    }
  }

  /* ----------------------------------------------------------- today */
  function todayPanel(t, w) {
    var st = S.placeState(t, w.place);
    var left = st.budget - st.spent;
    var daysLeftHere = w.daysHere - w.dayInPlace + 1;
    var todaysPlan = (w.place.itinerary || []).filter(function (i) { return i.day === w.dayInPlace; });

    var cols = el('div', { class: 'today-cols' }, [
      el('div', { class: 'today-col' }, [
        el('div', { class: 'k', text: 'Day' }),
        el('div', { class: 'v', text: w.dayInPlace + ' of ' + w.daysHere }),
        el('div', { class: 's', text: DD.plural(daysLeftHere, 'day') + ' left here' })
      ]),
      el('div', { class: 'today-col' }, [
        el('div', { class: 'k', text: left >= 0 ? 'Left here' : 'Over here' }),
        el('div', { class: 'v', style: { color: left >= 0 ? 'var(--green)' : 'var(--red)' },
          text: DD.money(Math.abs(left)) }),
        el('div', { class: 's', text: daysLeftHere > 0
          ? DD.money(Math.max(0, left) / daysLeftHere) + ' a day from here'
          : 'last day' })
      ]),
      el('div', { class: 'today-col' }, [
        el('div', { class: 'k', text: 'Next' }),
        el('div', { class: 'v', style: { fontSize: '17px' }, text: w.next ? w.next.name : 'Home' }),
        el('div', { class: 's', text: w.next ? DD.plural(w.next.days, 'day') + ' there' : 'end of the trip' })
      ])
    ]);

    var panel = el('div', { class: 'today' }, [
      el('div', { class: 'today-mark' }, [
        el('div', { class: 'k', text: 'Today · day ' + w.dayOfTrip + ' of ' + t.name }),
        el('h3', { text: w.place.name }),
        el('div', { class: 's', text: (w.place.city && w.place.city !== w.place.name ? w.place.city + ' · ' : '')
          + DD.niceDate(DD.today()) })
      ]),
      cols
    ]);

    var wrap = el('div', {}, [
      DD.sectionHead('Where you are', 'Today',
        el('button', {
          class: 'btn sm pri',
          onclick: function () { S.setTrip(t.id); DD.logForm({ trip: t, placeId: w.place.id }); }
        }, [DD.icon('plus', 14), 'Log spend here'])),
      panel
    ]);

    if (todaysPlan.length) {
      var list = el('div', { class: 'card list', style: { borderTop: '0' } });
      todaysPlan.forEach(function (it) {
        list.appendChild(el('div', { class: 'list-row' }, [
          el('label', { class: 'inline-check', style: { margin: 0 } }, [
            el('input', { type: 'checkbox', checked: !!it.done,
              onchange: function () { it.done = this.checked; S.save(); DD.render(); } })
          ]),
          el('div', { class: 'grow' }, [
            el('div', { class: 't', text: it.title,
              style: it.done ? { textDecoration: 'line-through', color: 'var(--ink-3)' } : {} }),
            it.note ? el('div', { class: 's city-note', text: it.note }) : null
          ]),
          it.cost ? el('span', { class: 'amt small', text: DD.money(it.cost) }) : null
        ]));
      });
      wrap.appendChild(list);
    }
    return wrap;
  }

  /* ---------------------------------------------------------- pacing */
  function paceBar(t, pace) {
    var ahead = pace.delta <= 0;
    var scale = Math.max(pace.budget, pace.actual, pace.expected) || 1;
    var over = pace.actual > pace.expected;

    return el('div', { class: 'pace' }, [
      el('div', { class: 'pace-head' }, [
        el('span', { class: 'verdict ' + (ahead ? 'ahead' : 'behind'),
          text: pace.state === 'after'
            ? (ahead ? 'Came in under budget' : 'Finished over budget')
            : (ahead ? DD.money(Math.abs(pace.delta)) + ' in hand' : DD.money(pace.delta) + ' ahead of the plan') }),
        el('span', { class: 'muted small', style: { fontStyle: 'italic' },
          text: pace.state === 'after'
            ? 'The ' + DD.plural(pace.days, 'day') + ' are up.'
            : 'By day ' + pace.elapsed + ' of ' + pace.days + ' you would expect to have spent '
              + DD.money(pace.expected) + '. You have spent ' + DD.money(pace.actual) + '.' })
      ]),
      el('div', { class: 'pace-track' }, [
        el('div', { class: 'rail' }),
        el('div', { class: 'fill' + (over ? ' over' : ''),
          style: { width: Math.min(100, pace.actual / scale * 100) + '%' } }),
        el('div', { class: 'marker', 'data-label': 'on plan',
          style: { left: Math.min(99, pace.expected / scale * 100) + '%' } })
      ]),
      el('div', { class: 'pace-foot' }, [
        el('span', { text: DD.money(pace.perDay) + ' a day so far' }),
        el('span', { text: 'at this rate, ' + DD.money(pace.projected) + ' by the end' }),
        el('span', { text: 'budget ' + DD.money(pace.budget) })
      ])
    ]);
  }

  /* Clicking India on the world map is a doorway to the trip at home. */
  function openHomeTrip() {
    var home = S.db().trips.filter(function (t) { return t.kind === 'domestic'; })[0];
    if (!home) {
      DD.toast('No trip at home yet — make one from the trips below', true);
      return;
    }
    S.setTrip(home.id);
    DD.go('places');
    DD.toast('Within India');
  }

  /* --------------------------------------------------------- trip card */
  function tripCard(t) {
    var b = S.tripBudget(t), a = S.actuals(t);
    var active = t.id === S.trip().id;
    var lead = null;
    for (var i = 0; i < t.places.length && !lead; i++) {
      if (t.places[i].images && t.places[i].images[0]) lead = t.places[i].images[0].url;
    }
    var noun = t.kind === 'domestic' ? ['city', 'cities'] : ['country', 'countries'];

    var hero = el('div', {
      class: 'trip-hero' + (lead ? ' photo' : ''),
      style: lead ? { backgroundImage: 'url("' + lead.replace(/"/g, '%22') + '")' } : {}
    }, [
      el('div', { class: 'k', text: t.kind === 'domestic' ? 'At home' : 'Abroad' }),
      el('h3', { text: t.name }),
      el('div', { class: 's', text: DD.plural(t.places.length, noun[0], noun[1]) + ' · ' + DD.plural(b.days, 'day') })
    ]);

    var card = el('div', {
      class: 'trip-card' + (active ? ' on' : ''),
      'data-trip': t.id,
      onclick: function (e) {
        if (e.target.closest('button')) return;
        S.setTrip(t.id);
        DD.go('places');
      }
    }, [
      hero,
      el('div', { class: 'trip-body' }, [
        el('div', { class: 'place-nums' }, [
          el('span', { class: 'big', text: DD.money(b.total, { compact: true }) }),
          el('span', { class: 'muted tiny sans', text: 'budget' }),
          el('span', { style: { flex: '1' } }),
          a.total ? el('span', { class: 'num', style: { fontWeight: '700' }, text: DD.money(a.total, { compact: true }) + ' spent' }) : null
        ]),
        DD.progressBar(a.total, b.total),
        el('div', { class: 'place-meta' }, [
          el('span', { class: 'chip', text: DD.plural(a.count, 'entry', 'entries') }),
          t.start ? el('span', { class: 'chip', text: DD.shortDate(t.start) }) : null,
          active ? el('span', { class: 'chip teal', text: 'Open' }) : null
        ]),
        el('div', { class: 'place-acts' }, [
          el('button', { class: 'btn xs pri', onclick: function () { S.setTrip(t.id); DD.go('places'); } },
            'Open ' + (t.kind === 'domestic' ? 'cities' : 'countries')),
          el('button', { class: 'btn xs', onclick: function () { editTrip(t); } }, 'Edit'),
          el('button', { class: 'btn xs ghost', onclick: function () { duplicate(t); } }, 'Duplicate')
        ])
      ])
    ]);
    return card;
  }

  /* Clicking a country on the map: switch to its trip and open the place. */
  function openPlace(e) {
    if (e.trip.id !== S.trip().id) S.setTrip(e.trip.id);
    DD.placeEditor(e.trip, e.place);
  }

  function offerAdd(key, name) {
    var t = S.trip();
    if (t.kind === 'domestic') return;
    DD.confirmBox('Add ' + name + '?',
      'It goes on to ' + t.name + ' with ' + DD.plural(t.defaultDays, 'day') + ' and an empty budget, ready for you to fill in.',
      function () {
        var p = S.addPlace(t, { name: name, country: name, iso2: key, days: t.defaultDays, currency: 'INR' });
        DD.render();
        DD.toast(name + ' added to ' + t.name);
        DD.images.ensureLead(p, function (got) { if (got) DD.render(); });
      }, 'Add it');
  }

  /* -------------------------------------------------------------- trips */
  function newTrip() {
    var nameIn = el('input', { type: 'text', placeholder: 'Southeast Asia 2027' });
    var kind = 'world';
    var startIn = el('input', { type: 'date' });
    var daysIn = el('input', { type: 'number', min: '1', value: '10' });

    DD.modal({
      title: 'New trip',
      body: el('div', {}, [
        DD.field('Trip name', nameIn),
        el('span', { class: 'lbl-cap', text: 'Kind' }),
        el('div', { style: { marginBottom: '14px' } }, [
          DD.segmented([['world', 'Abroad — by country'], ['domestic', 'At home — by city']], 'world', function (v) {
            kind = v;
            daysIn.value = v === 'domestic' ? '4' : '10';
          })
        ]),
        el('div', { class: 'grid2' }, [
          DD.field('Start date', startIn),
          DD.field('Default days per stop', daysIn)
        ])
      ]),
      okLabel: 'Create',
      ok: function (close) {
        var n = nameIn.value.trim();
        if (!n) { nameIn.focus(); DD.toast('Give the trip a name', true); return; }
        S.addTrip({ name: n, kind: kind, start: startIn.value, defaultDays: Number(daysIn.value) || 10 });
        close();
        DD.go('places');
        DD.toast(n + ' created');
      }
    });
  }

  function editTrip(t) {
    var nameIn = el('input', { type: 'text', value: t.name });
    var startIn = el('input', { type: 'date', value: t.start || '' });
    var daysIn = el('input', { type: 'number', min: '1', value: String(t.defaultDays) });
    var noteIn = el('textarea', {});
    noteIn.value = t.note || '';

    DD.modal({
      title: 'Edit trip',
      body: el('div', {}, [
        DD.field('Name', nameIn),
        el('div', { class: 'grid2' }, [
          DD.field('Start date', startIn),
          DD.field('Default days per stop', daysIn)
        ]),
        DD.field('Note', noteIn)
      ]),
      okLabel: 'Save',
      destructive: S.db().trips.length > 1 ? {
        label: 'Delete trip',
        run: function (close) {
          close();
          DD.confirmBox('Delete ' + t.name + '?',
            'Its ' + DD.plural(t.places.length, 'place') + ' and ' + DD.plural(t.expenses.length, 'expense') + ' go too.',
            function () { S.removeTrip(t.id); DD.render(); DD.toast('Trip deleted'); });
        }
      } : null,
      ok: function (close) {
        t.name = nameIn.value.trim() || t.name;
        t.start = startIn.value;
        t.defaultDays = Number(daysIn.value) || t.defaultDays;
        t.note = noteIn.value.trim();
        S.save(); close(); DD.render();
      }
    });
  }

  function duplicate(t) {
    var copy = S.deepClone(t);
    copy.id = DD.uid('trip');
    copy.name = t.name + ' (copy)';
    copy.expenses = [];
    copy.places.forEach(function (p) {
      p.id = DD.uid('p');
      p.itinerary = (p.itinerary || []).map(function (i) {
        var c = S.deepClone(i); c.id = DD.uid('it'); c.done = false; return c;
      });
    });
    S.db().trips.push(copy);
    S.db().activeTrip = copy.id;
    S.save();
    DD.render();
    DD.toast('Copied — places and budget kept, spending cleared');
  }

  DD.newTrip = newTrip;
  DD.openHomeTrip = openHomeTrip;
  DD.paceBar = paceBar;
  DD.todayPanel = todayPanel;
})();
