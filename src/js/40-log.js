/* 40-log — logging spend. There is no Log section any more: expenses belong to
   a trip, and you reach them from a place or from the trip's own ledger. */
'use strict';

(function () {
  var el = DD.el, S = DD.store;

  /* ------------------------------------------------------------ the row */
  function expenseRow(t, x, opts) {
    opts = opts || {};
    var p = S.placeById(t, x.placeId);
    return el('div', {
      class: 'list-row', style: { cursor: 'pointer' },
      onclick: function () { form({ trip: t, expense: x }); }
    }, [
      el('span', { class: 'dot', style: { background: DD.charts.colourFor(x.category, 0) },
        title: S.catLabel(t, x.category) }),
      el('div', { class: 'grow' }, [
        el('div', { class: 't', text: x.note || S.catLabel(t, x.category) }),
        el('div', { class: 's', text: [
          DD.shortDate(x.date),
          S.catLabel(t, x.category),
          p ? p.name : null,
          opts.showTrip ? t.name : null,
          x.currency !== 'INR' ? DD.fmtLocal(x.amount, x.currency) : null
        ].filter(Boolean).join('  ·  ') })
      ]),
      el('span', { class: 'amt', text: DD.money(x.amountINR) })
    ]);
  }

  /* ------------------------------------------------- a trip's whole ledger */
  function ledger(t, opts) {
    opts = opts || {};
    var wrap = el('div', {});
    var rows = t.expenses.slice();
    if (opts.placeId) rows = rows.filter(function (x) { return x.placeId === opts.placeId; });
    rows.sort(DD.by('date', 'desc'));

    if (!rows.length) {
      wrap.appendChild(el('div', { class: 'card empty', style: { padding: '30px 20px' } }, [
        el('p', { style: { margin: '0 0 14px' }, text: opts.placeId
          ? 'Nothing logged here yet.'
          : 'Nothing logged on this trip yet. Every entry feeds the sheet, the map and the totals.' }),
        el('button', { class: 'btn pri sm', onclick: function () {
          form({ trip: t, placeId: opts.placeId });
        } }, [DD.icon('plus', 14), 'Log the first one'])
      ]));
      return wrap;
    }

    var card = el('div', { class: 'card', style: { overflow: 'hidden' } });
    var last = null;
    rows.forEach(function (x) {
      if (x.date !== last) {
        last = x.date;
        var dayTotal = DD.sum(rows.filter(function (o) { return o.date === x.date; }),
          function (o) { return o.amountINR; });
        card.appendChild(el('div', { class: 'day-head' }, [
          el('span', { text: DD.niceDate(x.date, true) }),
          el('span', { class: 'spacer' }),
          el('span', { class: 'num', text: DD.money(dayTotal) })
        ]));
      }
      card.appendChild(expenseRow(t, x));
    });
    wrap.appendChild(card);

    if (!opts.placeId) {
      wrap.appendChild(el('div', { style: { marginTop: '12px', display: 'flex', gap: '9px', flexWrap: 'wrap' } }, [
        el('button', { class: 'btn sm', onclick: function () { exportCSV(t); } }, [DD.icon('down', 14), 'Export to CSV'])
      ]));
    }
    return wrap;
  }

  /* --------------------------------------------------------------- form */
  function form(opts) {
    opts = opts || {};
    var t = opts.trip || S.trip();
    var x = opts.expense || null;

    if (!t.places.length) {
      DD.toast('Add a place first — expenses hang off one', true);
      return null;
    }

    var startPlace = x ? x.placeId : (opts.placeId || (S.places(t)[0] || {}).id || '');
    var place = S.placeById(t, startPlace);

    var amountIn = el('input', { type: 'number', step: '0.01', min: '0', inputmode: 'decimal',
      placeholder: '0', value: x ? String(x.amount) : '' });
    var curSel = DD.selectOf(currencyShortlist(place), x ? x.currency : (place ? place.currency : 'INR'),
      function () { preview(); });
    var placeSel = DD.selectOf(S.places(t).map(function (p) { return [p.id, p.name]; }), startPlace, function (v) {
      var np = S.placeById(t, v);
      if (np && !x) curSel.value = np.currency;
      preview();
    });
    var catSel = DD.selectOf(t.categories.map(function (c) { return [c.id, c.label]; }), x ? x.category : 'food');
    var dateIn = el('input', { type: 'date', value: x ? x.date : DD.today() });
    var noteIn = el('input', { type: 'text', placeholder: 'What was it?',
      value: x ? x.note : (opts.note || '') });
    var conv = el('div', { class: 'tiny muted sans',
      style: { marginTop: '-9px', marginBottom: '14px', minHeight: '17px', letterSpacing: '.03em' } });

    function preview() {
      var code = curSel.value, amt = Number(amountIn.value) || 0;
      if (!amt) { conv.textContent = ''; return; }
      if (code === 'INR') { conv.textContent = DD.money(amt); return; }
      var rate = DD.rateFor(code, S.db().currencies);
      conv.textContent = DD.num(amt, 2) + ' ' + code + '  =  ' + DD.money(amt / rate)
        + '   (1 ₹ = ' + DD.num(rate, rate < 1 ? 4 : 2) + ' ' + code + ')';
    }
    amountIn.addEventListener('input', preview);
    preview();

    var body = el('div', {}, [
      el('div', { class: 'row' }, [
        el('label', { class: 'field', style: { flex: '2' } }, [el('span', { text: 'Amount' }), amountIn]),
        el('label', { class: 'field', style: { flex: '1' } }, [el('span', { text: 'Currency' }), curSel])
      ]),
      conv,
      el('div', { class: 'grid2' }, [
        DD.field('Category', catSel),
        DD.field(t.kind === 'domestic' ? 'City' : 'Country', placeSel)
      ]),
      el('div', { class: 'grid2' }, [
        DD.field('Date', dateIn),
        DD.field('Note', noteIn)
      ])
    ]);

    var m = DD.modal({
      title: x ? 'Edit entry' : 'Log spend · ' + t.name,
      body: body,
      okLabel: x ? 'Save' : 'Add',
      destructive: x ? {
        label: 'Delete', run: function (close) {
          close(); S.removeExpense(t, x.id); DD.render(); DD.toast('Entry deleted');
        }
      } : null,
      ok: function (close) {
        var amt = Number(amountIn.value);
        if (!amt || amt <= 0) { amountIn.focus(); DD.toast('Enter an amount', true); return; }
        var rec = {
          placeId: placeSel.value, date: dateIn.value || DD.today(),
          category: catSel.value, amount: amt, currency: curSel.value,
          note: noteIn.value.trim()
        };
        if (x) S.updateExpense(t, x.id, rec);
        else S.addExpense(t, rec);
        close();
        DD.render();
        if (opts.after) opts.after();
        DD.toast(x ? 'Saved' : DD.money(amt / DD.rateFor(rec.currency, S.db().currencies)) + ' logged');
      }
    });

    setTimeout(function () { amountIn.focus(); }, 60);
    return m;
  }

  /* The place's own currency first, then rupees, then the rest. */
  function currencyShortlist(place) {
    var cur = S.db().currencies;
    var first = [];
    if (place && place.currency && place.currency !== 'INR') first.push(place.currency);
    first.push('INR');
    var rest = Object.keys(cur).filter(function (c) { return first.indexOf(c) < 0; }).sort();
    return first.concat(rest).map(function (c) { return [c, c + ' — ' + cur[c].name]; });
  }

  function exportCSV(t) {
    var rows = [['Date', 'Place', 'Category', 'Amount', 'Currency', 'INR', 'Note']];
    t.expenses.slice().sort(DD.by('date')).forEach(function (x) {
      var p = S.placeById(t, x.placeId);
      rows.push([x.date, p ? p.name : '', S.catLabel(t, x.category), x.amount, x.currency,
        Math.round(x.amountINR), x.note || '']);
    });
    DD.downloadFile(DD.slug(t.name) + '-spending-' + DD.today() + '.csv', DD.csvOf(rows), 'text/csv;charset=utf-8');
    DD.toast('CSV downloaded');
  }

  DD.expenseRow = expenseRow;
  DD.expenseLedger = ledger;
  DD.logForm = form;
})();
