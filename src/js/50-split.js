/* 50-split — fellow travellers, per-head shares, and settling up. */
'use strict';

(function () {
  var el = DD.el, S = DD.store;

  DD.register('split', {
    title: 'Travellers & split',
    actions: function () {
      return [el('button', { class: 'btn pri sm', onclick: addTraveller }, [DD.icon('plus', 15), 'Add traveller'])];
    },
    render: render
  });

  function render(host) {
    var t = S.trip();
    var people = S.travellers(t);
    var heads = people.length;

    /* ----- who is on this trip ----- */
    host.appendChild(DD.sectionHead('On this trip', el('span', { class: 'chip grey', text: DD.plural(heads, 'traveller') })));
    var card = el('div', { class: 'card list' });
    people.forEach(function (pr) {
      var isMe = pr.id === S.meId();
      card.appendChild(el('div', { class: 'list-row' }, [
        DD.avatar(pr),
        el('div', { class: 'grow' }, [
          el('div', { class: 't', text: pr.name + (isMe ? ' (you)' : '') }),
          el('div', { class: 's', text: isMe ? 'Every "my share" figure in the app is yours' : 'Shares trip costs with you' })
        ]),
        el('button', { class: 'btn xs', text: 'Rename', onclick: function () { rename(pr); } }),
        isMe ? null : el('button', {
          class: 'btn xs ghost', html: '&times;', title: 'Remove from trip',
          onclick: function () { removeFromTrip(t, pr); }
        })
      ]));
    });
    host.appendChild(card);

    var others = S.db().people.filter(function (pr) { return t.travellerIds.indexOf(pr.id) < 0; });
    if (others.length) {
      host.appendChild(el('div', { style: { marginTop: '11px' } }, [
        el('span', { class: 'lbl-cap', text: 'Add someone you have travelled with before' }),
        el('div', { class: 'chip-row' }, others.map(function (pr) {
          return el('button', { class: 'btn sm', onclick: function () {
            t.travellerIds.push(pr.id); S.save(); DD.render();
          } }, [DD.avatar(pr, true), pr.name]);
        }))
      ]));
    }

    if (heads === 1) {
      host.appendChild(el('div', { class: 'banner info', style: { marginTop: '15px' } }, [
        el('div', {}, ['Travelling alone, so every rupee is yours. Add a fellow traveller and the app starts splitting: ',
          'shared categories get divided, personal ones are counted per head, and each expense you log can be split like Splitwise.'])
      ]));
    }

    /* ----- how categories split ----- */
    host.appendChild(DD.sectionHead('How each category splits'));
    host.appendChild(el('p', { class: 'small muted', style: { marginTop: '-6px' } },
      'Shared means one bill for the group — a hotel room, a hire car. Per-person means everyone needs their own — a flight seat, a visa, a plate of food.'));

    var catCard = el('div', { class: 'card list' });
    t.categories.forEach(function (c) {
      var base = 0;
      t.places.forEach(function (p) { base += Number(p.budget[c.id]) || 0; });
      catCard.appendChild(el('div', { class: 'list-row' }, [
        el('span', { class: 'dot', style: { background: DD.charts.colourFor(c.id, t.categories.indexOf(c)) } }),
        el('div', { class: 'grow' }, [
          el('div', { class: 't', text: c.label }),
          el('div', { class: 's', text: c.shared
            ? 'One bill, split ' + heads + ' ways — group ' + DD.money(base)
            : 'Each person pays their own — group ' + DD.money(base * heads) })
        ]),
        el('span', { class: 'amt', text: DD.money(base) }),
        DD.segmented([['shared', 'Shared'], ['each', 'Per person']], c.shared ? 'shared' : 'each', function (v) {
          c.shared = (v === 'shared');
          S.save();
          DD.render();
        })
      ]));
    });
    host.appendChild(catCard);

    var b = S.tripBudget(t);
    host.appendChild(el('div', { class: 'stats', style: { marginTop: '14px' } }, [
      DD.stat('My budget', DD.money(b.mine), 'what you personally carry'),
      DD.stat('Group budget', DD.money(b.group), DD.plural(heads, 'traveller')),
      DD.stat('Group, per head', DD.money(heads ? b.group / heads : 0), 'average across everyone')
    ]));

    if (heads === 1) return;

    /* ----- settle up ----- */
    var bal = S.balances(t);
    host.appendChild(DD.sectionHead('Settle up'));

    if (!t.expenses.length) {
      host.appendChild(el('div', { class: 'card empty' }, [
        el('p', { style: { margin: 0 }, text: 'Log some expenses and the balances appear here.' })
      ]));
      return;
    }

    if (!bal.transfers.length) {
      host.appendChild(el('div', { class: 'card card-pad' }, [
        el('div', { style: { display: 'flex', gap: '10px', alignItems: 'center' } }, [
          DD.icon('check', 20), el('strong', { text: 'All square. Nobody owes anybody.' })
        ])
      ]));
    } else {
      var tw = el('div', { class: 'card card-pad' });
      bal.transfers.forEach(function (tr) {
        var from = S.personById(tr.from), to = S.personById(tr.to);
        tw.appendChild(el('div', { class: 'owes' }, [
          DD.avatar(from, true),
          el('strong', { text: from.id === S.meId() ? 'You' : from.name }),
          el('span', { class: 'muted', text: 'pay' }),
          DD.avatar(to, true),
          el('strong', { text: to.id === S.meId() ? 'you' : to.name }),
          el('span', { class: 'spacer', style: { flex: '1' } }),
          el('span', { class: 'num', style: { fontWeight: '700' }, text: DD.money(tr.amount) })
        ]));
      });
      tw.appendChild(el('p', { class: 'tiny muted', style: { margin: '8px 0 0' } },
        'The fewest transfers that clear every balance.'));
      host.appendChild(tw);
    }

    /* ----- per person ----- */
    host.appendChild(DD.sectionHead('Per person'));
    var pcard = el('div', { class: 'card card-pad' });
    bal.net.forEach(function (n) {
      var pr = S.personById(n.id);
      if (!pr) return;
      pcard.appendChild(el('div', { class: 'split-line' }, [
        DD.avatar(pr, true),
        el('span', { style: { flex: '1', fontWeight: '550' }, text: pr.id === S.meId() ? 'Me' : pr.name }),
        el('span', { class: 'tiny muted nowrap', text: 'paid ' + DD.money(n.paid, { compact: true }) }),
        el('span', { class: 'tiny muted nowrap', text: 'owes ' + DD.money(n.owed, { compact: true }) }),
        el('span', {
          class: 'num nowrap', style: { fontWeight: '700', minWidth: '92px', textAlign: 'right', color: n.net >= 0 ? 'var(--green)' : 'var(--red)' },
          text: (n.net >= 0 ? '+' : '−') + DD.money(Math.abs(n.net))
        })
      ]));
    });
    host.appendChild(pcard);
    host.appendChild(el('p', { class: 'tiny muted', style: { marginTop: '8px' } },
      'A plus means the trip owes them; a minus means they owe the trip.'));
  }

  function addTraveller() {
    var nameIn = el('input', { type: 'text', placeholder: 'Their name', autocapitalize: 'words' });
    DD.modal({
      title: 'Add a fellow traveller',
      body: el('div', {}, [
        DD.field('Name', nameIn),
        el('p', { class: 'small muted', style: { margin: 0 } },
          'They join this trip straight away. New expenses default to an equal split between everyone here; you can change the split on any single expense.')
      ]),
      okLabel: 'Add',
      ok: function (close) {
        var n = nameIn.value.trim();
        if (!n) { nameIn.focus(); return; }
        var t = S.trip();
        var pr = S.addPerson(n);
        t.travellerIds.push(pr.id);
        S.save();
        close();
        DD.render();
        DD.toast(n + ' added to ' + t.name);
      }
    });
    nameIn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); DD.$('.scrim:last-child .modal-foot .btn.pri').click(); }
    });
  }

  function rename(pr) {
    var nameIn = el('input', { type: 'text', value: pr.name });
    DD.modal({
      title: 'Rename', body: DD.field('Name', nameIn), okLabel: 'Save',
      ok: function (close) {
        pr.name = nameIn.value.trim() || pr.name;
        S.save(); close(); DD.render();
      }
    });
  }

  function removeFromTrip(t, pr) {
    var involved = t.expenses.filter(function (x) {
      return x.paidBy === pr.id || (x.shares && x.shares[pr.id]);
    }).length;
    var msg = involved
      ? pr.name + ' is on ' + DD.plural(involved, 'expense') + '. Those stay as they are, but ' + pr.name + ' drops out of new splits and the settle-up.'
      : pr.name + ' comes off this trip. Nothing else changes.';
    DD.confirmBox('Remove ' + pr.name + '?', msg, function () {
      t.travellerIds = t.travellerIds.filter(function (id) { return id !== pr.id; });
      S.save();
      DD.render();
      DD.toast(pr.name + ' removed');
    }, 'Remove');
  }
})();
