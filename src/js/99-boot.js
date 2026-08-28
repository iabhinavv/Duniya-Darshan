/* 99-boot — start the thing. */
'use strict';

(function () {
  function start() {
    DD.store.load();
    DD.buildShell();

    var hash = (location.hash || '').replace('#', '');
    DD.go(hash || 'front');

    DD.store.reconnectFile().then(function (granted) {
      paintFileState();
      if (!granted && DD.store.fileStatus() === 'pending') {
        DD.toast('Data file needs write access again — see Data');
      }
    });

    DD.on('change', paintFileState);
    DD.on('filestate', paintFileState);
    paintFileState();

    if (!seenBefore()) {
      markSeen();
      setTimeout(welcome, 320);
    }
  }

  var SEEN = 'duniya.seen';
  function seenBefore() {
    try { return !!localStorage.getItem(SEEN); } catch (e) { return true; }
  }
  function markSeen() {
    try { localStorage.setItem(SEEN, DD.today()); } catch (e) { /* ignore */ }
  }

  function paintFileState() {
    var node = DD.$('#file-state');
    if (!node) return;
    var s = DD.store.fileStatus();
    var txt = s === 'saved' ? 'Saved to your data file'
      : s === 'pending' ? 'Not yet written to the file'
      : s === 'none' ? 'Saved in this browser'
      : 'Saved in this browser';
    node.textContent = txt;
  }

  function welcome() {
    var t = DD.store.trip();
    var b = DD.store.tripBudget(t);
    var body = DD.el('div', {}, [
      DD.el('p', {}, [
        'Your spreadsheet is already in here: ',
        DD.el('strong', { text: DD.plural(t.places.length, 'country', 'countries') }),
        ', ', DD.el('strong', { text: DD.money(b.total) }),
        ' budgeted, ten days apiece. Change any of it — nothing is fixed.'
      ]),
      DD.el('div', { class: 'card list', style: { margin: '14px 0' } }, [
        row('Places', 'Add or remove countries, set the days, pull in photos, keep your Drive albums.'),
        row('The map', 'Countries fill in as you plan them and deepen as you spend.'),
        row('Log', 'Type what you actually spent, in dong or baht or rupees. It converts.'),
        row('The Sheet', 'Your grid — budget, actual and the variance between them.')
      ]),
      DD.el('p', { class: 'small muted', style: { marginBottom: 0 } },
        'Everything saves in this browser as you go. Go to Data to also write it into the repo file so it commits.')
    ]);

    function row(t1, t2) {
      return DD.el('div', { class: 'list-row' }, [
        DD.el('div', { class: 'grow' }, [
          DD.el('div', { class: 't', text: t1 }),
          DD.el('div', { class: 's', style: { whiteSpace: 'normal' }, text: t2 })
        ])
      ]);
    }

    DD.modal({
      title: 'Duniya Darshan',
      body: body,
      cancelLabel: 'Have a look around',
      ok: function (close) { close(); DD.go('places'); },
      okLabel: 'Open my countries'
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
