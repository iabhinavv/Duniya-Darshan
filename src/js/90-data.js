/* 90-data — backup, the data file, currencies, categories and link templates. */
'use strict';

(function () {
  var el = DD.el, S = DD.store;

  DD.register('data', {
    title: 'Data & settings',
    render: render
  });

  function render(host) {
    var db = S.db();

    /* ------------------------------------------------------ data file */
    host.appendChild(DD.sectionHead('Your data'));
    var state = S.fileStatus();
    var fileCard = el('div', { class: 'card card-pad' });

    if (state === 'unsupported') {
      fileCard.appendChild(el('p', {}, [
        'This browser cannot write files in place. Use ',
        el('strong', { text: 'Download data file' }),
        ' below and drop the result into the ', el('code', { text: 'data/' }), ' folder whenever you want to commit. ',
        'Everything is saved in this browser as you work either way.'
      ]));
    } else if (state === 'none') {
      fileCard.appendChild(el('p', {}, [
        'Your trips live in this browser right now. Connect ', el('code', { text: 'data/trip-data.js' }),
        ' and every change is also written to that file — so it commits, diffs and pulls with the repo.'
      ]));
      fileCard.appendChild(el('button', { class: 'btn pri', onclick: function () {
        S.connectFile().then(function (ok) {
          DD.render();
          DD.toast(ok ? 'Connected — changes now write to the file' : 'Not connected', !ok);
        });
      } }, [DD.icon('link', 16), 'Connect data file']));
    } else {
      fileCard.appendChild(el('div', { style: { display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' } }, [
        DD.icon(state === 'saved' ? 'check' : 'edit', 18),
        el('strong', { text: state === 'saved' ? 'Writing to your data file' : 'Unsaved changes to the file' }),
        el('span', { style: { flex: '1' } }),
        state === 'pending' ? el('button', { class: 'btn sm', text: 'Allow writing again', onclick: function () {
          S.regrantFile().then(function (ok) { DD.render(); DD.toast(ok ? 'Saved' : 'Permission refused', !ok); });
        } }) : null,
        el('button', { class: 'btn sm ghost', text: 'Disconnect', onclick: function () {
          S.disconnectFile().then(function () { DD.render(); });
        } })
      ]));
      fileCard.appendChild(el('p', { class: 'small muted', style: { margin: '9px 0 0' } },
        'Browsers sometimes ask again for write access after a restart. If they do, the button above returns.'));
    }

    fileCard.appendChild(el('div', { style: { display: 'flex', gap: '9px', flexWrap: 'wrap', marginTop: '13px' } }, [
      el('button', { class: 'btn sm', onclick: function () {
        DD.downloadFile('trip-data.js', S.fileText(), 'text/javascript;charset=utf-8');
        DD.toast('Downloaded — put it in data/');
      } }, [DD.icon('down', 15), 'Download data file']),
      el('button', { class: 'btn sm', onclick: function () {
        DD.downloadFile('duniya-backup-' + DD.today() + '.json', JSON.stringify(S.db(), null, 2), 'application/json');
        DD.toast('Backup downloaded');
      } }, [DD.icon('down', 15), 'JSON backup']),
      el('button', { class: 'btn sm', onclick: importJSON }, [DD.icon('link', 15), 'Restore from backup'])
    ]));
    host.appendChild(fileCard);

    /* ---------------------------------------------------------- you */
    host.appendChild(DD.sectionHead('You'));
    var me = S.personById(S.meId());
    var nameIn = el('input', { type: 'text', value: me.name, oninput: DD.debounce(function () {
      me.name = nameIn.value.trim() || 'Me'; S.save();
    }, 400) });
    var homeIn = el('input', { type: 'text', value: db.settings.homeCity || '', maxlength: '40',
      oninput: DD.debounce(function () { db.settings.homeCity = homeIn.value.trim(); S.save(); }, 400) });
    var airIn = el('input', { type: 'text', value: db.settings.homeAirport || '', maxlength: '3',
      style: { textTransform: 'uppercase' },
      oninput: DD.debounce(function () { db.settings.homeAirport = airIn.value.trim().toUpperCase(); S.save(); }, 400) });
    host.appendChild(el('div', { class: 'card card-pad' }, [
      el('div', { class: 'grid3' }, [
        DD.field('Your name', nameIn),
        DD.field('Home city', homeIn),
        DD.field('Home airport', airIn)
      ]),
      el('p', { class: 'tiny muted', style: { margin: 0 } }, 'Your home airport is the departure end of every flight link.')
    ]));

    /* ------------------------------------------------- link templates */
    host.appendChild(DD.sectionHead('Booking links'));
    host.appendChild(el('p', { class: 'small muted', style: { marginTop: '-6px' } }, [
      'Swap in whichever site you prefer. These tokens get filled in: ',
      el('span', { class: 'chip-row', style: { display: 'inline-flex', verticalAlign: 'middle', marginLeft: '4px' } },
        DD.links.TOKENS.map(function (tk) { return el('span', { class: 'chip grey tiny', text: tk }); }))
    ]));

    var linkCard = el('div', { class: 'card card-pad' });
    [['flights', 'Flights'], ['stays', 'Stays'], ['activities', 'Things to do']].forEach(function (row) {
      var tpl = db.settings.linkTemplates[row[0]];
      var lab = el('input', { type: 'text', value: tpl.label, oninput: DD.debounce(function () {
        tpl.label = lab.value.trim() || row[1]; S.save();
      }, 400) });
      var url = el('input', { type: 'text', value: tpl.url, oninput: DD.debounce(function () {
        tpl.url = url.value.trim(); S.save();
      }, 400) });
      linkCard.appendChild(el('div', { style: { marginBottom: '14px' } }, [
        el('span', { class: 'lbl-cap', text: row[1] }),
        el('div', { class: 'row' }, [
          el('div', { style: { flex: '0 0 150px' } }, [lab]),
          el('div', { style: { flex: '1' } }, [url])
        ])
      ]));
    });
    linkCard.appendChild(el('button', { class: 'btn sm ghost', text: 'Reset to Skyscanner and Booking.com', onclick: function () {
      db.settings.linkTemplates = S.deepClone(window.DUNIYA_SEED.settings.linkTemplates);
      S.save(); DD.render(); DD.toast('Link templates reset');
    } }));
    host.appendChild(linkCard);

    /* ---------------------------------------------------- categories */
    var t = S.trip();
    host.appendChild(DD.sectionHead('Categories in ' + t.name));
    var catCard = el('div', { class: 'card list' });
    t.categories.forEach(function (c, i) {
      var lab = el('input', { type: 'text', value: c.label, style: { border: '1px solid transparent', background: 'transparent' },
        oninput: DD.debounce(function () { c.label = lab.value.trim() || c.id; S.save(); }, 400) });
      catCard.appendChild(el('div', { class: 'list-row' }, [
        el('span', { class: 'dot', style: { background: DD.charts.colourFor(c.id, i) } }),
        el('div', { class: 'grow' }, [lab]),
        DD.segmented([['shared', 'Shared'], ['each', 'Per person']], c.shared ? 'shared' : 'each', function (v) {
          c.shared = (v === 'shared'); S.save();
        }),
        t.categories.length > 2 ? el('button', { class: 'btn xs ghost', html: '&times;', title: 'Remove category', onclick: function () {
          var used = t.expenses.filter(function (x) { return x.category === c.id; }).length;
          DD.confirmBox('Remove ' + c.label + '?',
            used ? DD.plural(used, 'expense') + ' uses it — they keep the amount but lose the label.' : 'It comes off every place in this trip.',
            function () {
              t.categories = t.categories.filter(function (o) { return o.id !== c.id; });
              t.places.forEach(function (p) { delete p.budget[c.id]; });
              S.save(); DD.render();
            }, 'Remove');
        } }) : null
      ]));
    });
    host.appendChild(catCard);
    host.appendChild(el('button', { class: 'btn sm', style: { marginTop: '10px' }, onclick: function () {
      var n = el('input', { type: 'text', placeholder: 'Shopping' });
      DD.modal({ title: 'New category', body: DD.field('Name', n), okLabel: 'Add', ok: function (close) {
        var v = n.value.trim();
        if (!v) return;
        var id = DD.slug(v) || DD.uid('c');
        t.categories.push({ id: id, label: v, shared: false });
        t.places.forEach(function (p) { p.budget[id] = 0; });
        S.save(); close(); DD.render();
      } });
    } }, [DD.icon('plus', 15), 'Add category']));

    /* ---------------------------------------------------- currencies */
    host.appendChild(DD.sectionHead('Exchange rates'));
    host.appendChild(el('p', { class: 'small muted', style: { marginTop: '-6px' } },
      'How many units of each currency you get for one rupee — the same way your spreadsheet had it. Editing a rate never changes an expense you already logged; each entry keeps the rate it was booked at.'));

    var curWrap = el('div', { class: 'card', style: { overflow: 'hidden' } });
    var search = el('input', { type: 'text', placeholder: 'Find a currency', style: { border: 0, borderRadius: 0, borderBottom: '1px solid var(--rule-2)' } });
    curWrap.appendChild(search);
    var curList = el('div', { class: 'list', style: { maxHeight: '380px', overflowY: 'auto' } });
    curWrap.appendChild(curList);

    function paintCur() {
      DD.clear(curList);
      var q = search.value.trim().toLowerCase();
      var codes = Object.keys(db.currencies).sort().filter(function (code) {
        return !q || code.toLowerCase().indexOf(q) >= 0 || db.currencies[code].name.toLowerCase().indexOf(q) >= 0;
      });
      codes.forEach(function (code) {
        var c = db.currencies[code];
        var inp = el('input', {
          type: 'number', step: 'any', min: '0', class: 'cell-in', value: String(c.perINR),
          style: { textAlign: 'right', border: '1px solid var(--rule)', maxWidth: '130px' },
          onchange: function () {
            var v = Number(inp.value);
            if (v > 0) { c.perINR = v; S.save(); DD.toast(code + ' rate updated'); }
            else inp.value = String(c.perINR);
          }
        });
        curList.appendChild(el('div', { class: 'list-row' }, [
          el('div', { class: 'grow' }, [
            el('div', { class: 't', text: code }),
            el('div', { class: 's', text: c.name + '  ·  1 ' + code + ' = ' + DD.money(1 / c.perINR) })
          ]),
          el('span', { class: 'tiny muted nowrap', text: 'per ₹1' }),
          inp
        ]));
      });
      if (!codes.length) curList.appendChild(el('div', { class: 'empty', style: { padding: '22px' } }, [el('p', { style: { margin: 0 }, text: 'No match.' })]));
    }
    search.addEventListener('input', paintCur);
    paintCur();
    host.appendChild(curWrap);

    var codeIn = el('input', { type: 'text', placeholder: 'AUD', maxlength: '4', style: { textTransform: 'uppercase' } });
    var cnameIn = el('input', { type: 'text', placeholder: 'Australian Dollar' });
    var rateIn = el('input', { type: 'number', step: 'any', min: '0', placeholder: '0.018' });
    host.appendChild(el('div', { class: 'card card-pad', style: { marginTop: '11px' } }, [
      el('div', { class: 'grid3' }, [
        DD.field('Code', codeIn), DD.field('Name', cnameIn), DD.field('Units per ₹1', rateIn)
      ]),
      el('button', { class: 'btn sm', onclick: function () {
        var code = codeIn.value.trim().toUpperCase();
        var r = Number(rateIn.value);
        if (!code || !r || r <= 0) { DD.toast('Need a code and a positive rate', true); return; }
        db.currencies[code] = { name: cnameIn.value.trim() || code, perINR: r };
        S.save(); DD.render(); DD.toast(code + ' added');
      } }, [DD.icon('plus', 15), 'Add currency'])
    ]));

    /* -------------------------------------------------------- danger */
    host.appendChild(DD.sectionHead('Start again'));
    host.appendChild(el('div', { class: 'card card-pad' }, [
      el('p', { class: 'small', style: { marginTop: 0 } },
        'Reset wipes what is in this browser and reloads the 36 countries from your spreadsheet. Take a JSON backup first if you are unsure.'),
      el('button', { class: 'btn danger sm', onclick: function () {
        DD.confirmBox('Reset everything?', 'Every trip, expense, photo and plan item in this browser goes. The original spreadsheet import comes back.', function () {
          try { localStorage.removeItem(S.STORE_KEY); } catch (e) { /* ignore */ }
          location.reload();
        }, 'Reset');
      } }, [DD.icon('trash', 15), 'Reset to the spreadsheet import'])
    ]));

    host.appendChild(el('p', { class: 'tiny muted', style: { marginTop: '22px', textAlign: 'center' } },
      'Duniya Darshan runs entirely in this browser. Nothing is uploaded, there is no account, and the only network calls are the optional photo lookups on Wikipedia.'));
  }

  function importJSON() {
    var input = el('input', { type: 'file', accept: '.json,application/json', style: { display: 'none' } });
    document.body.appendChild(input);
    input.addEventListener('change', function () {
      var f = input.files && input.files[0];
      if (!f) { input.remove(); return; }
      var reader = new FileReader();
      reader.onload = function () {
        try {
          var next = JSON.parse(reader.result);
          if (!next || !Array.isArray(next.trips)) throw new Error('not a Duniya Darshan backup');
          DD.confirmBox('Restore this backup?',
            'It replaces everything currently in this browser with ' + DD.plural(next.trips.length, 'trip') + '.',
            function () {
              S.replaceAll(next);
              DD.render();
              DD.toast('Restored');
            }, 'Restore');
        } catch (e) {
          DD.toast('That file is not a backup: ' + e.message, true);
        }
        input.remove();
      };
      reader.readAsText(f);
    });
    input.click();
  }
})();
