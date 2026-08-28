/* 60-itinerary — the whole trip, day by day. */
'use strict';

(function () {
  var el = DD.el, S = DD.store;

  DD.register('itinerary', {
    title: 'Itinerary',
    actions: function () {
      return [el('button', { class: 'btn sm', onclick: setDates }, [DD.icon('cal', 15), 'Trip dates'])];
    },
    render: render
  });

  function render(host) {
    var t = S.trip();
    var list = S.places(t);

    if (!list.length) {
      host.appendChild(DD.emptyState('No route yet',
        'Add places and set how many days you spend in each. The itinerary lays itself out from there.',
        'Add a place', function () { DD.go('places'); }));
      return;
    }

    var sched = S.schedule(t);
    var totalDays = DD.sum(list, function (p) { return Number(p.days) || 0; });
    var planned = DD.sum(list, function (p) { return (p.itinerary || []).length; });
    var done = DD.sum(list, function (p) { return (p.itinerary || []).filter(function (i) { return i.done; }).length; });

    host.appendChild(el('div', { class: 'stats', style: { marginBottom: '15px' } }, [
      DD.stat('Stops', String(list.length), t.kind === 'domestic' ? 'cities' : 'countries'),
      DD.stat('Days', String(totalDays), t.start ? DD.dateSpan(t.start, S.tripEnd(t)) : 'no start date set'),
      DD.stat('Planned', String(planned), done + ' ticked off'),
      DD.stat('Planned cost', DD.money(DD.sum(list, function (p) {
        return DD.sum(p.itinerary || [], function (i) { return Number(i.cost) || 0; });
      })), 'from the plan items')
    ]));

    if (!t.start) {
      host.appendChild(el('div', { class: 'banner' }, [
        el('div', {}, ['No start date, so the plan shows relative days. ',
          el('button', { class: 'btn xs', text: 'Set a start date', onclick: setDates })])
      ]));
    }

    list.forEach(function (p) {
      var s = sched[p.id] || {};
      var bud = S.placeBudget(t, p);
      var act = S.actuals(t, p.id);

      var head = el('div', { class: 'day-head', style: { borderRadius: 'var(--r-lg) var(--r-lg) 0 0' } }, [
        p.iso2 ? el('span', { text: DD.flagOf(p.iso2), style: { fontSize: '15px' } }) : null,
        el('span', { style: { fontSize: '14px' }, text: p.name }),
        el('span', { class: 'muted', style: { fontWeight: '400' },
          text: s.start ? DD.shortDate(s.start) + ' – ' + DD.shortDate(s.end) : DD.plural(p.days, 'day') }),
        el('span', { class: 'spacer' }),
        el('span', { class: 'num tiny muted', text: DD.money(act.mine, { compact: true }) + ' / ' + DD.money(bud.mine, { compact: true }) }),
        el('button', { class: 'btn xs', text: 'Edit', onclick: function () { DD.placeEditor(t, p); } })
      ]);

      var card = el('div', { class: 'card', style: { marginBottom: '13px', overflow: 'hidden' } }, [head]);
      var items = (p.itinerary || []).slice().sort(DD.by('day'));

      if (!items.length) {
        card.appendChild(el('div', { style: { padding: '15px 16px' } }, [
          el('span', { class: 'muted small', text: 'Nothing planned. ' }),
          el('button', { class: 'btn xs', text: 'Add something', onclick: function () { DD.placeEditor(t, p); } })
        ]));
      } else {
        var lastDay = null;
        items.forEach(function (it) {
          if (it.day !== lastDay) {
            lastDay = it.day;
            var date = s.start ? DD.addDays(s.start, Math.max(0, it.day - 1)) : '';
            card.appendChild(el('div', {
              style: { padding: '7px 16px', background: '#FBFCFB', borderTop: '1px solid var(--rule-2)',
                       fontSize: '12px', fontWeight: '650', color: 'var(--ink-3)', letterSpacing: '.05em', textTransform: 'uppercase' },
              text: 'Day ' + it.day + (date ? '  ·  ' + DD.niceDate(date) : '')
            }));
          }
          card.appendChild(el('div', { class: 'list-row' }, [
            el('label', { class: 'inline-check', style: { margin: 0 } }, [
              el('input', { type: 'checkbox', checked: !!it.done, onchange: function () { it.done = this.checked; S.save(); DD.render(); } })
            ]),
            el('div', { class: 'grow' }, [
              el('div', { class: 't', text: it.title, style: it.done ? { textDecoration: 'line-through', color: 'var(--ink-3)' } : {} }),
              it.note ? el('div', { class: 's', text: it.note }) : null
            ]),
            it.cost ? el('span', { class: 'amt small', text: DD.money(it.cost) }) : null
          ]));
        });
      }
      host.appendChild(card);
    });
  }

  function setDates() {
    var t = S.trip();
    var startIn = el('input', { type: 'date', value: t.start || '' });
    var noteIn = el('input', { type: 'text', value: t.note || '', placeholder: 'Optional note about the trip' });
    var preview = el('p', { class: 'small muted', style: { margin: '0' } });

    function paint() {
      var total = DD.sum(t.places, function (p) { return Number(p.days) || 0; });
      if (!startIn.value) { preview.textContent = 'Without a date the plan just counts days.'; return; }
      preview.textContent = DD.plural(total, 'day') + ' across ' + DD.plural(t.places.length, 'stop')
        + ' — ' + DD.niceDate(startIn.value, true) + ' to ' + DD.niceDate(DD.addDays(startIn.value, Math.max(0, total - 1)), true) + '.';
    }
    startIn.addEventListener('change', paint);
    paint();

    DD.modal({
      title: 'Trip dates',
      body: el('div', {}, [
        DD.field('Start date', startIn),
        DD.field('Note', noteIn),
        preview,
        el('p', { class: 'tiny muted', style: { marginTop: '10px', marginBottom: 0 } },
          'Each place runs straight after the one before it, for however many days you gave it. Reorder places on the Places screen.')
      ]),
      okLabel: 'Save',
      ok: function (close) {
        t.start = startIn.value;
        t.note = noteIn.value.trim();
        S.save(); close(); DD.render();
      }
    });
  }

  DD.tripDates = setDates;
})();
