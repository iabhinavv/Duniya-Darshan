/* 70-trips — the trip list: world tours and trips at home. */
'use strict';

(function () {
  var el = DD.el, S = DD.store;

  DD.register('trips', {
    title: 'Trips',
    actions: function () {
      return [el('button', { class: 'btn pri sm', onclick: function () { newTrip(); } }, [DD.icon('plus', 15), 'New trip'])];
    },
    render: render
  });

  function render(host) {
    var db = S.db();
    var active = S.trip();

    host.appendChild(el('p', { class: 'muted small', style: { marginTop: '-2px' } },
      'A trip holds its own places, budget, travellers and expenses. Keep the world tour separate from a long weekend at home.'));

    var grid = el('div', { class: 'places', style: { marginTop: '14px' } });
    db.trips.forEach(function (t) {
      var b = S.tripBudget(t);
      var a = S.actuals(t);
      var isActive = t.id === active.id;
      var lead = null;
      for (var i = 0; i < t.places.length && !lead; i++) {
        if (t.places[i].images && t.places[i].images[0]) lead = t.places[i].images[0].url;
      }

      var photo = el('div', {
        class: 'place-photo',
        style: lead ? { backgroundImage: 'url("' + lead.replace(/"/g, '%22') + '"), linear-gradient(140deg,var(--teal-700),var(--teal-500))' } : {},
        onclick: function () { S.setTrip(t.id); DD.go('overview'); }
      }, [
        el('div', { class: 'ord', text: t.kind === 'domestic' ? 'At home' : 'World' }),
        isActive ? el('div', { class: 'flag', style: { fontSize: '13px' } }, [
          el('span', { class: 'chip', style: { background: '#fff', borderColor: '#fff' }, text: 'Current' })
        ]) : null,
        el('div', { class: 'cap' }, [
          el('div', { class: 'n', text: t.name }),
          el('div', { class: 'c', text: DD.plural(t.places.length, t.kind === 'domestic' ? 'city' : 'country', t.kind === 'domestic' ? 'cities' : 'countries') + ' · ' + DD.plural(b.days, 'day') })
        ])
      ]);

      var body = el('div', { class: 'place-body' }, [
        el('div', { class: 'place-nums' }, [
          el('span', { class: 'big', text: DD.money(b.mine, { compact: true }) }),
          el('span', { class: 'muted small', text: 'budget' }),
          el('span', { style: { flex: '1' } }),
          a.mine ? el('span', { class: 'num small', style: { fontWeight: '650' }, text: DD.money(a.mine, { compact: true }) + ' spent' }) : null
        ]),
        DD.progressBar(a.mine, b.mine),
        el('div', { class: 'place-meta' }, [
          el('span', { class: 'chip grey', text: DD.plural(t.travellerIds.length, 'traveller') }),
          el('span', { class: 'chip grey', text: DD.plural(t.expenses.length, 'entry', 'entries') }),
          t.start ? el('span', { class: 'chip grey', text: DD.shortDate(t.start) }) : null
        ]),
        el('div', { class: 'place-acts' }, [
          isActive
            ? el('button', { class: 'btn xs pri', onclick: function () { DD.go('overview'); } }, ['Open'])
            : el('button', { class: 'btn xs', onclick: function () { S.setTrip(t.id); DD.go('overview'); DD.toast('Switched to ' + t.name); } }, ['Switch to this']),
          el('button', { class: 'btn xs', onclick: function () { editTrip(t); } }, [DD.icon('edit', 13), 'Edit']),
          el('button', { class: 'btn xs ghost', onclick: function () { duplicate(t); } }, ['Duplicate'])
        ])
      ]);

      grid.appendChild(el('div', { class: 'place', style: isActive ? { outline: '2px solid var(--teal-600)', outlineOffset: '-1px' } : {} }, [photo, body]));
    });
    host.appendChild(grid);

    host.appendChild(el('div', { style: { marginTop: '18px', textAlign: 'center' } }, [
      el('button', { class: 'btn', onclick: function () { newTrip(); } }, [DD.icon('plus', 15), 'New trip'])
    ]));
  }

  function newTrip() {
    var nameIn = el('input', { type: 'text', placeholder: 'Southeast Asia 2027' });
    var kind = 'world';
    var startIn = el('input', { type: 'date' });
    var daysIn = el('input', { type: 'number', min: '1', value: '10' });

    var body = el('div', {}, [
      DD.field('Trip name', nameIn),
      el('span', { class: 'lbl-cap', text: 'Kind' }),
      el('div', { style: { marginBottom: '13px' } }, [
        DD.segmented([['world', 'Abroad — by country'], ['domestic', 'At home — by city']], 'world', function (v) {
          kind = v;
          daysIn.value = v === 'domestic' ? '4' : '10';
        })
      ]),
      el('div', { class: 'grid2' }, [
        DD.field('Start date', startIn),
        DD.field('Default days per stop', daysIn)
      ]),
      el('p', { class: 'tiny muted', style: { margin: 0 } },
        'Default days is just the starting number for each new place — change it per place any time.')
    ]);

    DD.modal({
      title: 'New trip', body: body, okLabel: 'Create',
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
    var noteIn = el('textarea', { placeholder: 'Anything worth remembering about this trip' });
    noteIn.value = t.note || '';
    var daysIn = el('input', { type: 'number', min: '1', value: String(t.defaultDays) });

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
            'Its ' + DD.plural(t.places.length, 'place') + ' and ' + DD.plural(t.expenses.length, 'expense') + ' go too. This cannot be undone.',
            function () { S.removeTrip(t.id); DD.render(); DD.toast('Trip deleted'); });
        }
      } : null,
      ok: function (close) {
        t.name = nameIn.value.trim() || t.name;
        t.start = startIn.value;
        t.note = noteIn.value.trim();
        t.defaultDays = Number(daysIn.value) || t.defaultDays;
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
    DD.toast('Copied — budget and places kept, expenses cleared');
  }

  DD.newTrip = newTrip;
})();
