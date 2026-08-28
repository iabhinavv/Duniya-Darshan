/* 10-overview — the dashboard. */
'use strict';

(function () {
  var el = DD.el, S = DD.store;

  DD.register('overview', {
    title: function () { return S.trip().name; },
    actions: function () {
      return [
        el('button', { class: 'btn sm hide-sm', onclick: function () { DD.go('sheet'); } }, [DD.icon('sheet', 15), 'Sheet']),
        el('button', { class: 'btn pri sm', onclick: function () { DD.go('log'); } }, [DD.icon('plus', 15), 'Log spend'])
      ];
    },
    render: render
  });

  function render(host) {
    var t = S.trip();
    var b = S.tripBudget(t);
    var a = S.actuals(t);
    var heads = Math.max(1, t.travellerIds.length);
    var group = heads > 1;

    if (!t.places.length) {
      host.appendChild(DD.emptyState(
        'Nothing planned in ' + t.name + ' yet',
        t.kind === 'domestic'
          ? 'Add the cities you want to visit, set a budget for each, and this page fills in.'
          : 'Add the countries you want to visit, set a budget for each, and this page fills in.',
        'Add a place', function () { DD.go('places'); }
      ));
      return;
    }

    /* ----- headline numbers ----- */
    var budget = b.mine, spent = a.mine, left = budget - spent;
    var stats = el('div', { class: 'stats' });
    stats.appendChild(el('div', { class: 'stat hero' }, [
      el('div', { class: 'k', text: group ? 'My budget' : 'Total budget' }),
      el('div', { class: 'v', text: DD.money(budget) }),
      el('div', { class: 's', text: DD.plural(b.places, 'place') + ' · ' + DD.plural(b.days, 'day') + (group ? ' · group ' + DD.money(b.group, { compact: true }) : '') })
    ]));
    stats.appendChild(DD.stat('Spent so far', DD.money(spent), DD.pct(spent, budget) + '% of budget'));
    stats.appendChild(DD.stat(left >= 0 ? 'Still to spend' : 'Over budget', DD.money(Math.abs(left)),
      left >= 0 ? 'across ' + DD.plural(b.days, 'day') : 'reduce or re-plan', left >= 0 ? 'pos' : 'neg'));
    stats.appendChild(DD.stat('Per day, budgeted', DD.money(b.days ? budget / b.days : 0),
      b.places ? DD.money(budget / b.places) + ' a place' : ''));
    host.appendChild(stats);

    /* ----- progress ----- */
    var prog = el('div', { class: 'card card-pad', style: { marginTop: '14px' } }, [
      el('div', { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px' } }, [
        el('span', { class: 'muted', text: 'Budget used' }),
        el('span', { class: 'num', style: { fontWeight: '650' }, text: DD.money(spent) + ' of ' + DD.money(budget) })
      ]),
      DD.progressBar(spent, budget)
    ]);
    host.appendChild(prog);

    /* ----- where the money goes ----- */
    var catData = t.categories.map(function (c, i) {
      return { id: c.id, label: c.label, value: b.byCat[c.id] || 0, colour: DD.charts.colourFor(c.id, i) };
    }).filter(function (d) { return d.value > 0; }).sort(DD.by('value', 'desc'));

    var spentData = t.categories.map(function (c, i) {
      return { id: c.id, label: c.label, value: a.byCatMine[c.id] || 0, colour: DD.charts.colourFor(c.id, i) };
    }).filter(function (d) { return d.value > 0; }).sort(DD.by('value', 'desc'));

    var showSpent = spentData.length > 0;
    var donutWrap = el('div', { style: { display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' } });

    function paintDonut(which) {
      DD.clear(donutWrap);
      var data = which === 'spent' ? spentData : catData;
      var total = DD.sum(data, function (d) { return d.value; });
      donutWrap.appendChild(el('div', { style: { flex: '0 0 auto', margin: '0 auto' } }, [
        DD.charts.donut(data, {
          centre: DD.money(total, { compact: true }),
          centreSub: which === 'spent' ? 'spent' : 'budget',
          aria: 'Spending by category'
        })
      ]));
      donutWrap.appendChild(el('div', { style: { flex: '1 1 220px', minWidth: '0' } }, [DD.charts.legend(data)]));
    }

    host.appendChild(DD.sectionHead('Where the money goes',
      showSpent ? DD.segmented([['budget', 'Budget'], ['spent', 'Spent']], 'budget', paintDonut) : null));
    var donutCard = el('div', { class: 'card card-pad' }, [donutWrap]);
    paintDonut('budget');
    host.appendChild(donutCard);

    /* ----- running total across the route ----- */
    var pts = [], runB = 0, runA = 0;
    S.places(t).forEach(function (p) {
      runB += S.placeBudget(t, p).mine;
      runA += S.actuals(t, p.id).mine;
      pts.push({ label: p.name, budget: runB, actual: runA });
    });
    host.appendChild(DD.sectionHead('Running total along the route'));
    host.appendChild(el('div', { class: 'card card-pad' }, [
      DD.charts.runningLine(pts, { aria: 'Cumulative budget and actual by place' }),
      el('div', { style: { display: 'flex', gap: '16px', marginTop: '8px', fontSize: '12.5px' } }, [
        el('span', { style: { display: 'flex', alignItems: 'center', gap: '6px' } }, [
          el('span', { style: { width: '13px', height: '2px', background: '#0F766E', display: 'inline-block' } }), 'Budget'
        ]),
        el('span', { style: { display: 'flex', alignItems: 'center', gap: '6px' } }, [
          el('span', { style: { width: '13px', height: '2px', background: '#2563EB', display: 'inline-block' } }), 'Actual'
        ]),
        el('span', { class: 'muted', style: { marginLeft: 'auto' }, text: S.places(t).length + ' stops' })
      ])
    ]));

    /* ----- biggest gaps ----- */
    var rows = S.places(t).map(function (p) {
      return { label: p.name, budget: S.placeBudget(t, p).mine, actual: S.actuals(t, p.id).mine, id: p.id };
    }).filter(function (r) { return r.actual > 0; }).sort(DD.by(function (r) { return r.actual - r.budget; }, 'desc')).slice(0, 6);

    if (rows.length) {
      host.appendChild(DD.sectionHead('Budget vs actual, by place'));
      host.appendChild(el('div', { class: 'card card-pad' }, [DD.charts.compareBars(rows)]));
    }

    /* ----- next up ----- */
    var sched = S.schedule(t);
    var upcoming = [];
    S.places(t).forEach(function (p) {
      (p.itinerary || []).forEach(function (it) {
        upcoming.push({ place: p, it: it, date: sched[p.id] && sched[p.id].start ? DD.addDays(sched[p.id].start, Math.max(0, (it.day || 1) - 1)) : '' });
      });
    });
    upcoming = upcoming.filter(function (u) { return !u.it.done; }).slice(0, 5);
    if (upcoming.length) {
      host.appendChild(DD.sectionHead('Coming up', el('button', {
        class: 'btn ghost sm', text: 'All of it', onclick: function () { DD.go('itinerary'); }
      })));
      var list = el('div', { class: 'card list' });
      upcoming.forEach(function (u) {
        list.appendChild(el('div', { class: 'list-row' }, [
          el('span', { class: 'chip grey', text: u.date ? DD.shortDate(u.date) : 'Day ' + (u.it.day || 1) }),
          el('div', { class: 'grow' }, [
            el('div', { class: 't', text: u.it.title }),
            el('div', { class: 's', text: u.place.name + (u.it.note ? ' · ' + u.it.note : '') })
          ]),
          u.it.cost ? el('span', { class: 'amt', text: DD.money(u.it.cost) }) : null
        ]));
      });
      host.appendChild(list);
    }

    /* ----- recent spend ----- */
    var recent = t.expenses.slice().sort(DD.by('date', 'desc')).slice(0, 6);
    if (recent.length) {
      host.appendChild(DD.sectionHead('Recent spend', el('button', {
        class: 'btn ghost sm', text: 'Log another', onclick: function () { DD.go('log'); }
      })));
      var rlist = el('div', { class: 'card list' });
      recent.forEach(function (x) { rlist.appendChild(DD.expenseRow(t, x)); });
      host.appendChild(rlist);
    }
  }
})();
