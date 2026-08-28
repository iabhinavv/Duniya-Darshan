/* 40-log — logging real spend, and the shared expense row widget. */
'use strict';

(function () {
  var el = DD.el, S = DD.store;
  var filterPlace = '';
  var filterCat = '';

  DD.register('log', {
    title: 'Spending',
    actions: function () {
      return [el('button', { class: 'btn pri sm', onclick: function () { form(); } }, [DD.icon('plus', 15), 'New entry'])];
    },
    render: render
  });

  /* --------------------------------------------------------- the row */
  function expenseRow(t, x) {
    var p = S.placeById(t, x.placeId);
    var payer = S.personById(x.paidBy);
    var sharers = t.travellerIds.filter(function (id) { return S.shareOf(x, id, t) > 0.5; });
    var multi = t.travellerIds.length > 1;

    return el('div', {
      class: 'list-row', style: { cursor: 'pointer' },
      onclick: function () { form(x); }
    }, [
      el('span', { class: 'dot', style: { background: DD.charts.colourFor(x.category, 0) }, title: S.catLabel(t, x.category) }),
      el('div', { class: 'grow' }, [
        el('div', { class: 't' }, [
          x.note || S.catLabel(t, x.category),
          x.note ? el('span', { class: 'muted', style: { fontWeight: '400' }, text: ' · ' + S.catLabel(t, x.category) }) : null
        ]),
        el('div', { class: 's' },
          [DD.shortDate(x.date), p ? p.name : 'No place', x.currency !== 'INR' ? DD.fmtLocal(x.amount, x.currency) : null]
            .filter(Boolean).join(' · '))
      ]),
      multi ? el('div', { class: 'avatar-stack' }, sharers.slice(0, 4).map(function (id) {
        return DD.avatar(S.personById(id), true);
      })) : null,
      el('div', { style: { textAlign: 'right' } }, [
        el('div', { class: 'amt', text: DD.money(x.amountINR) }),
        multi ? el('div', { class: 'tiny muted', text: 'you ' + DD.money(S.shareOf(x, S.meId(), t)) }) : null
      ]),
      payer && multi ? el('span', { class: 'tiny muted nowrap', text: payer.id === S.meId() ? 'you paid' : payer.name + ' paid' }) : null
    ]);
  }

  /* -------------------------------------------------------- the list */
  function render(host) {
    var t = S.trip();

    if (!t.places.length) {
      host.appendChild(DD.emptyState('Add a place first',
        'Expenses attach to a country or city, so start there.', 'Go to places', function () { DD.go('places'); }));
      return;
    }

    var a = S.actuals(t), b = S.tripBudget(t);
    host.appendChild(el('div', { class: 'stats', style: { marginBottom: '15px' } }, [
      DD.stat('Logged', DD.money(a.mine), DD.plural(t.expenses.length, 'entry', 'entries')),
      DD.stat('Budget', DD.money(b.mine), DD.pct(a.mine, b.mine) + '% used'),
      DD.stat(a.mine > b.mine ? 'Over' : 'Left', DD.money(Math.abs(b.mine - a.mine)), '', a.mine > b.mine ? 'neg' : 'pos'),
      t.travellerIds.length > 1 ? DD.stat('Group total', DD.money(a.group, { compact: true }), DD.plural(t.travellerIds.length, 'traveller')) : DD.stat('Places used', String(new Set(t.expenses.map(function (x) { return x.placeId; })).size), 'of ' + t.places.length)
    ]));

    host.appendChild(el('button', { class: 'btn pri block', style: { marginBottom: '15px' }, onclick: function () { form(); } },
      [DD.icon('plus', 16), 'Log an expense']));

    if (!t.expenses.length) {
      host.appendChild(el('div', { class: 'card empty' }, [
        el('h3', { text: 'Nothing logged yet' }),
        el('p', { text: 'Every entry you add here flows into the Overview, the Sheet and the Split. Amounts can be in the local currency — they convert to ₹ automatically.' })
      ]));
      return;
    }

    /* filters */
    var placeOpts = [['', 'All places']].concat(S.places(t).map(function (p) { return [p.id, p.name]; }));
    var catOpts = [['', 'All categories']].concat(t.categories.map(function (c) { return [c.id, c.label]; }));
    host.appendChild(el('div', { class: 'row', style: { marginBottom: '13px' } }, [
      DD.selectOf(placeOpts, filterPlace, function (v) { filterPlace = v; DD.render(); }),
      DD.selectOf(catOpts, filterCat, function (v) { filterCat = v; DD.render(); })
    ]));

    var rows = t.expenses.filter(function (x) {
      return (!filterPlace || x.placeId === filterPlace) && (!filterCat || x.category === filterCat);
    }).sort(DD.by('date', 'desc'));

    if (!rows.length) {
      host.appendChild(el('div', { class: 'card empty' }, [el('p', { text: 'Nothing matches that filter.' })]));
      return;
    }

    var card = el('div', { class: 'card', style: { overflow: 'hidden' } });
    var lastDate = null;
    rows.forEach(function (x) {
      if (x.date !== lastDate) {
        lastDate = x.date;
        var dayTotal = rows.filter(function (o) { return o.date === x.date; })
          .reduce(function (s, o) { return s + S.shareOf(o, S.meId(), t); }, 0);
        card.appendChild(el('div', { class: 'day-head' }, [
          el('span', { text: DD.niceDate(x.date, true) }),
          el('span', { class: 'spacer' }),
          el('span', { class: 'num', text: DD.money(dayTotal) })
        ]));
      }
      card.appendChild(expenseRow(t, x));
    });
    host.appendChild(card);

    host.appendChild(el('div', { style: { marginTop: '14px', display: 'flex', gap: '9px', flexWrap: 'wrap' } }, [
      el('button', { class: 'btn sm', onclick: exportCSV }, [DD.icon('down', 15), 'Export these to CSV'])
    ]));
  }

  /* -------------------------------------------------------- the form */
  function form(existing) {
    var t = S.trip();
    var x = existing || null;
    var people = S.travellers(t);
    var multi = people.length > 1;

    var defaultPlace = x ? x.placeId : (filterPlace || (S.places(t)[0] || {}).id || '');
    var place = S.placeById(t, defaultPlace);

    var amountIn = el('input', { type: 'number', step: '0.01', min: '0', inputmode: 'decimal',
      placeholder: '0', value: x ? String(x.amount) : '' });
    var curSel = DD.selectOf(currencyShortlist(t, place), x ? x.currency : (place ? place.currency : 'INR'), function () { previewINR(); });
    var placeSel = DD.selectOf(S.places(t).map(function (p) { return [p.id, p.name]; }), defaultPlace, function (v) {
      var np = S.placeById(t, v);
      if (np && !x) { curSel.value = np.currency; }
      previewINR();
    });
    var catSel = DD.selectOf(t.categories.map(function (c) { return [c.id, c.label]; }), x ? x.category : 'food');
    var dateIn = el('input', { type: 'date', value: x ? x.date : DD.today() });
    var noteIn = el('input', { type: 'text', placeholder: 'Optional — what was it?', value: x ? x.note : '' });
    var conv = el('div', { class: 'tiny muted', style: { marginTop: '-8px', marginBottom: '13px', minHeight: '17px' } });

    function previewINR() {
      var code = curSel.value;
      var amt = Number(amountIn.value) || 0;
      if (!amt) { conv.textContent = ''; return; }
      if (code === 'INR') { conv.textContent = DD.money(amt); return; }
      var rate = DD.rateFor(code, S.db().currencies);
      conv.textContent = DD.num(amt, 2) + ' ' + code + '  =  ' + DD.money(amt / rate)
        + '   (1 ₹ = ' + DD.num(rate, rate < 1 ? 4 : 2) + ' ' + code + ')';
    }
    amountIn.addEventListener('input', previewINR);
    previewINR();

    var body = el('div', {});
    body.appendChild(el('div', { class: 'row' }, [
      el('label', { class: 'field', style: { flex: '2' } }, [el('span', { class: 'lbl-cap', text: 'Amount' }), amountIn]),
      el('label', { class: 'field', style: { flex: '1' } }, [el('span', { class: 'lbl-cap', text: 'Currency' }), curSel])
    ]));
    body.appendChild(conv);
    body.appendChild(el('div', { class: 'grid2' }, [
      DD.field('Category', catSel),
      DD.field(t.kind === 'domestic' ? 'City' : 'Country', placeSel)
    ]));
    body.appendChild(el('div', { class: 'grid2' }, [
      DD.field('Date', dateIn),
      DD.field('Note', noteIn)
    ]));

    /* --- split --- */
    var paidSel = null, splitMode = x ? x.splitMode : 'equal', shareState = {};
    people.forEach(function (pr) {
      shareState[pr.id] = x && x.shares && x.shares[pr.id] !== undefined
        ? Number(x.shares[pr.id]) : 1;
    });
    if (x && x.splitMode === 'mine') { /* keep */ }

    if (multi) {
      paidSel = DD.selectOf(people.map(function (pr) { return [pr.id, pr.id === S.meId() ? 'Me' : pr.name]; }),
        x ? x.paidBy : S.meId(), null);
      body.appendChild(DD.field('Paid by', paidSel));

      var whoWrap = el('div', { style: { marginBottom: '11px' } });
      var modeWrap = el('div', { style: { marginBottom: '10px' } }, [
        DD.segmented([['equal', 'Split equally'], ['exact', 'Exact amounts'], ['mine', 'Just the payer']], splitMode, function (v) {
          splitMode = v; paintWho();
        })
      ]);
      body.appendChild(el('span', { class: 'lbl-cap', text: 'Shared between' }));
      body.appendChild(modeWrap);
      body.appendChild(whoWrap);

      function paintWho() {
        DD.clear(whoWrap);
        if (splitMode === 'mine') {
          whoWrap.appendChild(el('div', { class: 'muted small', text: 'The whole amount sits with whoever paid.' }));
          return;
        }
        people.forEach(function (pr) {
          if (splitMode === 'equal') {
            var on = shareState[pr.id] > 0;
            whoWrap.appendChild(el('label', { class: 'inline-check' }, [
              el('input', { type: 'checkbox', checked: on, onchange: function () { shareState[pr.id] = this.checked ? 1 : 0; } }),
              DD.avatar(pr, true),
              el('span', { text: pr.id === S.meId() ? 'Me' : pr.name })
            ]));
          } else {
            var inp = el('input', { type: 'number', min: '0', step: '1', value: String(shareState[pr.id] || 0),
              oninput: function () { shareState[pr.id] = Number(inp.value) || 0; } });
            whoWrap.appendChild(el('div', { style: { display: 'flex', gap: '9px', alignItems: 'center', marginBottom: '8px' } }, [
              DD.avatar(pr, true),
              el('span', { style: { flex: '1' }, text: pr.id === S.meId() ? 'Me' : pr.name }),
              el('div', { style: { width: '120px' } }, [inp])
            ]));
          }
        });
        if (splitMode === 'exact') {
          whoWrap.appendChild(el('div', { class: 'tiny muted', text: 'Amounts in the currency chosen above. They should add up to the total.' }));
        }
      }
      paintWho();
    }

    var m = DD.modal({
      title: x ? 'Edit expense' : 'Log an expense',
      body: body,
      okLabel: x ? 'Save' : 'Add',
      destructive: x ? {
        label: 'Delete', run: function (close) {
          close();
          S.removeExpense(t, x.id);
          DD.render();
          DD.toast('Entry deleted');
        }
      } : null,
      ok: function (close) {
        var amt = Number(amountIn.value);
        if (!amt || amt <= 0) { amountIn.focus(); DD.toast('Enter an amount', true); return; }
        var shares = {};
        if (multi) {
          if (splitMode === 'mine') shares = {};
          else if (splitMode === 'exact') {
            var rate = DD.rateFor(curSel.value, S.db().currencies);
            people.forEach(function (pr) { shares[pr.id] = (Number(shareState[pr.id]) || 0) / rate; });
          } else {
            people.forEach(function (pr) { if (shareState[pr.id] > 0) shares[pr.id] = 1; });
            if (!Object.keys(shares).length) { DD.toast('Pick at least one person', true); return; }
          }
        }
        var rec = {
          placeId: placeSel.value, date: dateIn.value || DD.today(),
          category: catSel.value, amount: amt, currency: curSel.value,
          note: noteIn.value.trim(),
          paidBy: multi ? paidSel.value : S.meId(),
          splitMode: multi ? splitMode : 'equal',
          shares: shares
        };
        if (x) S.updateExpense(t, x.id, rec);
        else S.addExpense(t, rec);
        close();
        DD.render();
        DD.toast(x ? 'Saved' : DD.money(rec.amount / DD.rateFor(rec.currency, S.db().currencies)) + ' logged');
      }
    });

    setTimeout(function () { amountIn.focus(); }, 60);
    amountIn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); noteIn.focus(); }
    });
    return m;
  }

  /* Put the place's own currency and INR at the top; the rest follow. */
  function currencyShortlist(t, place) {
    var cur = S.db().currencies;
    var first = [];
    if (place && place.currency && place.currency !== 'INR') first.push(place.currency);
    first.push('INR');
    var rest = Object.keys(cur).filter(function (c) { return first.indexOf(c) < 0; }).sort();
    return first.concat(rest).map(function (c) { return [c, c + ' — ' + cur[c].name]; });
  }

  function exportCSV() {
    var t = S.trip();
    var rows = [['Date', 'Place', 'Category', 'Amount', 'Currency', 'INR', 'My share', 'Paid by', 'Note']];
    t.expenses.slice().sort(DD.by('date')).forEach(function (x) {
      var p = S.placeById(t, x.placeId), payer = S.personById(x.paidBy);
      rows.push([x.date, p ? p.name : '', S.catLabel(t, x.category), x.amount, x.currency,
        Math.round(x.amountINR), Math.round(S.shareOf(x, S.meId(), t)), payer ? payer.name : '', x.note || '']);
    });
    DD.downloadFile(DD.slug(t.name) + '-expenses-' + DD.today() + '.csv', DD.csvOf(rows), 'text/csv;charset=utf-8');
    DD.toast('CSV downloaded');
  }

  DD.expenseRow = expenseRow;
  DD.logForm = form;
})();
