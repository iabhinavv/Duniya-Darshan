/* 25-cities — every city on a trip at home, read back out of the day-by-day
   itinerary. The India sheet budgets by state, so a state is the unit that
   carries money; this is the page that answers "which towns, and when?". */
'use strict';

(function () {
  var el = DD.el, S = DD.store;
  var query = '';

  DD.register('cities', {
    title: 'Cities',
    render: render
  });

  /* Flatten every place's itinerary into one list of city-days. */
  function cityDays(t) {
    var sched = S.schedule(t);
    var out = [];
    S.places(t).forEach(function (p) {
      (p.itinerary || []).slice().sort(DD.by('day')).forEach(function (it) {
        var s = sched[p.id];
        out.push({
          place: p, it: it,
          date: s && s.start ? DD.addDays(s.start, Math.max(0, (it.day || 1) - 1)) : ''
        });
      });
    });
    return out;
  }

  function render(host) {
    var t = S.trip();

    if (t.kind !== 'domestic') {
      host.appendChild(DD.emptyState('Cities live on trips at home',
        'This page reads the day-by-day cities out of a domestic trip. Switch to one to see it.',
        'Go to the front page', function () { DD.go('front'); }));
      return;
    }

    var all = cityDays(t);
    if (!all.length) {
      host.appendChild(DD.emptyState('No cities yet',
        'Add a state on the ' + DD.placesLabel() + ' page, then list its cities day by day under Plan.',
        'Open ' + DD.placesLabel(), function () { DD.go('places'); }));
      return;
    }

    /* one entry per distinct city name, so repeats across days collapse */
    var distinct = {};
    all.forEach(function (r) { distinct[r.it.title] = 1; });
    var done = all.filter(function (r) { return r.it.done; }).length;

    host.appendChild(el('p', { class: 'lede' },
      'The route runs through ' + DD.plural(Object.keys(distinct).length, 'town') + ' across '
      + DD.plural(S.places(t).length, 'state') + ' — ' + DD.plural(all.length, 'day')
      + ' in all. Tick them off as you go.'));

    host.appendChild(DD.statStrip([
      DD.stat('Towns', String(Object.keys(distinct).length), 'distinct stops', 'hero'),
      DD.stat('City-days', String(all.length), DD.plural(done, 'ticked off')),
      DD.stat('States', String(S.places(t).length), 'each with its own budget'),
      DD.stat('Budget', DD.money(S.tripBudget(t).total, { compact: true }), 'across the whole route')
    ]));

    var search = el('input', {
      type: 'text', placeholder: 'Find a town, a state, or something to do…', value: query,
      oninput: DD.debounce(function () { query = search.value; paint(); }, 180)
    });
    host.appendChild(DD.sectionHead(t.name, 'Town by town',
      el('span', { class: 'chip', text: DD.plural(all.length, 'day') })));
    host.appendChild(el('div', { style: { marginBottom: '14px' } }, [search]));

    var body = el('div', {});
    host.appendChild(body);

    function paint() {
      DD.clear(body);
      var q = query.trim().toLowerCase();
      var shown = 0;

      S.places(t).forEach(function (p) {
        var rows = (p.itinerary || []).slice().sort(DD.by('day')).filter(function (it) {
          if (!q) return true;
          return (it.title + ' ' + (it.note || '') + ' ' + p.name).toLowerCase().indexOf(q) >= 0;
        });
        if (!rows.length) return;
        shown += rows.length;

        var st = S.placeState(t, p);
        var sched = S.schedule(t)[p.id];
        var card = el('div', { class: 'card', style: { marginBottom: '14px', overflow: 'hidden' } });

        card.appendChild(el('div', { class: 'day-head', style: { borderTop: 0 } }, [
          el('span', { text: p.name }),
          el('span', { class: 'muted', style: { fontWeight: '400', textTransform: 'none', letterSpacing: '0' },
            text: DD.plural(rows.length, 'day') + (sched && sched.start
              ? ' · ' + DD.shortDate(sched.start) + '–' + DD.shortDate(sched.end) : '') }),
          el('span', { class: 'spacer' }),
          el('span', { class: 'num', style: { textTransform: 'none' },
            text: DD.money(st.budget, { compact: true }) }),
          el('button', { class: 'btn xs', onclick: function () { DD.placeEditor(t, p); } }, 'Open')
        ]));

        rows.forEach(function (it) {
          var date = sched && sched.start ? DD.addDays(sched.start, Math.max(0, (it.day || 1) - 1)) : '';
          card.appendChild(el('div', { class: 'list-row city-row' }, [
            el('label', { class: 'inline-check', style: { margin: 0 } }, [
              el('input', { type: 'checkbox', checked: !!it.done,
                onchange: function () { it.done = this.checked; S.save(); paint(); } })
            ]),
            el('span', { class: 'day', text: String(it.day) }),
            el('div', { class: 'grow' }, [
              el('div', { class: 't', style: it.done
                ? { textDecoration: 'line-through', color: 'var(--ink-3)' } : {}, text: it.title }),
              it.note ? el('div', { class: 'city-note', text: it.note }) : null,
              date ? el('div', { class: 's', text: DD.niceDate(date, true) }) : null
            ]),
            el('button', { class: 'btn xs', onclick: function () {
              DD.logForm({ trip: t, placeId: p.id, note: it.title });
            } }, 'Log')
          ]));
        });
        body.appendChild(card);
      });

      if (!shown) {
        body.appendChild(el('div', { class: 'card empty' }, [
          el('p', { style: { margin: 0 }, text: 'Nothing matches “' + query + '”.' })
        ]));
      }
    }
    paint();
  }

  DD.cityDays = cityDays;
})();
