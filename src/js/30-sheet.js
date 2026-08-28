/* 30-sheet — the spreadsheet view: places down, categories across. */
'use strict';

(function () {
  var el = DD.el, S = DD.store;
  var mode = 'budget';   /* budget | actual | variance */

  DD.register('sheet', {
    title: 'Budget vs actual',
    wide: true,
    render: render
  });

  /* The mode switch lives in the page, not the topbar: on a phone it is wide
     enough to squeeze the title out of existence. */
  function toolbar() {
    return el('div', {
      style: { display: 'flex', gap: '9px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '13px' }
    }, [
      DD.segmented([['budget', 'Budget'], ['actual', 'Actual'], ['variance', 'Variance']], mode, function (v) {
        mode = v; DD.render();
      }),
      el('div', { style: { flex: '1' } }),
      el('button', { class: 'btn sm', onclick: exportCSV }, [DD.icon('down', 15), 'CSV'])
    ]);
  }

  function valueFor(t, p, catId) {
    var b = S.placeBudget(t, p);
    var a = S.actuals(t, p.id);
    if (mode === 'budget') return b.byCat[catId];
    if (mode === 'actual') return a.byCat[catId] || 0;
    return (a.byCat[catId] || 0) - b.byCat[catId];
  }

  function render(host) {
    var t = S.trip();
    var list = S.places(t);
    host.appendChild(el('p', { class: 'deck' },
      'Every figure in rupees. Budget cells are typed in; actual and variance are worked out from the ledger.'));
    host.appendChild(toolbar());
    if (!list.length) {
      host.appendChild(DD.emptyState('Nothing to tabulate', 'Add a place and its budget shows up here.', 'Add a place', function () { DD.go('places'); }));
      return;
    }

    if (mode === 'budget') {
      host.appendChild(el('div', { class: 'banner info' }, [
        el('div', {}, ['Type straight into any cell to change the budget. ',
          el('strong', { text: 'Actual' }), ' and ', el('strong', { text: 'Variance' }),
          ' are worked out from what you log and cannot be typed over.'])
      ]));
    }

    var table = el('table', { class: 'grid' });

    /* head */
    var hr = el('tr', {}, [el('th', { text: t.kind === 'domestic' ? 'City' : 'Country' }), el('th', { text: 'Days' })]);
    t.categories.forEach(function (c) { hr.appendChild(el('th', { text: c.label })); });
    hr.appendChild(el('th', { text: 'Total' }));
    hr.appendChild(el('th', { text: 'Per day' }));
    if (mode === 'budget') hr.appendChild(el('th', { text: 'Running' }));
    table.appendChild(el('thead', {}, [hr]));

    /* body */
    var tb = el('tbody');
    var running = 0;
    var colTotals = {};
    t.categories.forEach(function (c) { colTotals[c.id] = 0; });
    var grand = 0, grandDays = 0;

    list.forEach(function (p) {
      var tr = el('tr', {});
      tr.appendChild(el('td', { title: p.name }, [
        p.iso2 ? el('span', { style: { marginRight: '6px' }, text: DD.flagOf(p.iso2) }) : null,
        el('button', {
          style: { border: 0, background: 'none', padding: 0, cursor: 'pointer', font: 'inherit', color: 'inherit', textDecoration: 'underline', textDecorationColor: 'var(--rule)' },
          text: p.name, onclick: function () { DD.placeEditor(t, p); }
        })
      ]));
      tr.appendChild(el('td', { class: 'n' }, String(p.days)));

      var rowTotal = 0;
      t.categories.forEach(function (c) {
        var v = valueFor(t, p, c.id);
        rowTotal += v;
        colTotals[c.id] += v;
        if (mode === 'budget') {
          var input = el('input', {
            type: 'number', class: 'cell-in', min: '0', step: '100',
            value: String(Math.round(v)),
            onchange: function () {
              p.budget[c.id] = Math.max(0, Number(input.value) || 0);
              S.save();
              DD.render();
            }
          });
          tr.appendChild(el('td', { style: { minWidth: '106px' } }, [input]));
        } else {
          var cls = 'n' + (v === 0 ? ' zero' : '') + (mode === 'variance' ? (v > 0 ? ' over' : (v < 0 ? ' under' : '')) : '');
          tr.appendChild(el('td', { class: cls }, fmt(v)));
        }
      });

      grand += rowTotal;
      grandDays += Number(p.days) || 0;
      tr.appendChild(el('td', { class: 'n' + (mode === 'variance' ? (rowTotal > 0 ? ' over' : (rowTotal < 0 ? ' under' : '')) : ''), style: { fontWeight: '650' } }, fmt(rowTotal)));
      tr.appendChild(el('td', { class: 'n muted' }, fmt(p.days ? rowTotal / p.days : 0)));
      if (mode === 'budget') {
        running += rowTotal;
        tr.appendChild(el('td', { class: 'n muted' }, DD.money(running, { compact: true })));
      }
      tb.appendChild(tr);
    });
    table.appendChild(tb);

    /* foot */
    var fr = el('tr', {}, [el('td', { text: 'All ' + list.length }), el('td', { class: 'n' }, String(grandDays))]);
    t.categories.forEach(function (c) {
      fr.appendChild(el('td', { class: 'n' + (mode === 'variance' ? (colTotals[c.id] > 0 ? ' over' : (colTotals[c.id] < 0 ? ' under' : '')) : '') }, fmt(colTotals[c.id])));
    });
    fr.appendChild(el('td', { class: 'n' }, fmt(grand)));
    fr.appendChild(el('td', { class: 'n' }, fmt(grandDays ? grand / grandDays : 0)));
    if (mode === 'budget') fr.appendChild(el('td', { class: 'n' }, DD.money(grand, { compact: true })));
    table.appendChild(el('tfoot', {}, [fr]));

    host.appendChild(el('div', { class: 'tbl-wrap' }, [table]));

    /* summary strip */
    var b = S.tripBudget(t), a = S.actuals(t);
    host.appendChild(el('div', { style: { marginTop: '18px' } }, [DD.statStrip([
      DD.stat('Budget', DD.money(b.total), DD.money(b.days ? b.total / b.days : 0) + ' a day', 'hero'),
      DD.stat('Actual', DD.money(a.total), DD.plural(a.count, 'entry', 'entries')),
      DD.stat(a.total > b.total ? 'Over by' : 'Under by', DD.money(Math.abs(a.total - b.total)),
        DD.pct(a.total, b.total) + '% of budget used', a.total > b.total ? 'neg' : 'pos'),
      DD.stat('Places', String(list.length), DD.plural(b.days, 'day'))
    ])]));

  }

  function fmt(v) {
    if (!v) return '—';
    var s = DD.groupIN(Math.abs(Math.round(v)));
    return (v < 0 ? '−' : '') + s;
  }

  function exportCSV() {
    var t = S.trip();
    var rows = [];
    rows.push([t.name + ' — ' + mode, 'all figures in INR']);
    rows.push([]);
    var head = [t.kind === 'domestic' ? 'City' : 'Country', 'City', 'Currency', 'Days'];
    t.categories.forEach(function (c) { head.push(c.label); });
    head.push('Total', 'Per day');
    rows.push(head);
    S.places(t).forEach(function (p) {
      var r = [p.name, p.city || '', p.currency, p.days];
      var tot = 0;
      t.categories.forEach(function (c) { var v = valueFor(t, p, c.id); tot += v; r.push(Math.round(v)); });
      r.push(Math.round(tot), Math.round(p.days ? tot / p.days : 0));
      rows.push(r);
    });
    DD.downloadFile(DD.slug(t.name) + '-' + mode + '-' + DD.today() + '.csv', DD.csvOf(rows), 'text/csv;charset=utf-8');
    DD.toast('CSV downloaded');
  }
})();
