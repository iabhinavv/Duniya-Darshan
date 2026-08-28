/* 20-places — the country / city cards and the place editor. */
'use strict';

(function () {
  var el = DD.el, S = DD.store, icon = DD.icon;

  /* Photo on top, the house gradient underneath — so a broken or slow image
     leaves a proper card rather than a grey hole. */
  var GRADIENT = 'linear-gradient(140deg,var(--teal-700),var(--teal-500))';
  function photoLayers(url) {
    return 'url("' + String(url).replace(/"/g, '%22') + '"), ' + GRADIENT;
  }

  DD.register('places', {
    title: function () { return S.trip().kind === 'domestic' ? 'Cities' : 'Countries'; },
    actions: function () {
      return [el('button', {
        class: 'btn pri sm', onclick: function () { addDialog(); }
      }, [icon('plus', 15), S.trip().kind === 'domestic' ? 'Add city' : 'Add country'])];
    },
    render: render
  });

  function render(host) {
    var t = S.trip();
    var list = S.places(t);

    if (!list.length) {
      host.appendChild(DD.emptyState(
        'No places in ' + t.name,
        'Add your first stop. You get a photo, a 10-day starter budget and booking links straight away.',
        t.kind === 'domestic' ? 'Add a city' : 'Add a country', function () { addDialog(); }
      ));
      return;
    }

    var b = S.tripBudget(t);
    var a = S.actuals(t);
    host.appendChild(el('div', { class: 'stats', style: { marginBottom: '16px' } }, [
      DD.stat(t.kind === 'domestic' ? 'Cities' : 'Countries', String(list.length), DD.plural(b.days, 'day') + ' in all'),
      DD.stat('Budgeted', DD.money(b.mine, { compact: true }), DD.money(b.days ? b.mine / b.days : 0) + ' a day'),
      DD.stat('Spent', DD.money(a.mine, { compact: true }), DD.pct(a.mine, b.mine) + '% of budget'),
      DD.stat('Average a place', DD.money(list.length ? b.mine / list.length : 0), '')
    ]));

    var grid = el('div', { class: 'places' });
    list.forEach(function (p, i) { grid.appendChild(card(t, p, i, list.length)); });
    host.appendChild(grid);

    host.appendChild(el('div', { style: { marginTop: '18px', textAlign: 'center' } }, [
      el('button', { class: 'btn', onclick: function () { addDialog(); } },
        [icon('plus', 15), t.kind === 'domestic' ? 'Add another city' : 'Add another country'])
    ]));
  }

  /* ------------------------------------------------------------- card */
  function card(t, p, idx, total) {
    var bud = S.placeBudget(t, p);
    var act = S.actuals(t, p.id);
    var img = p.images && p.images[0];

    var photo = el('div', {
      class: 'place-photo',
      title: 'Open ' + p.name,
      style: img ? { backgroundImage: photoLayers(p.images[0].url) } : {},
      onclick: function () { editor(t, p); }
    }, [
      el('div', { class: 'ord', text: '#' + (idx + 1) }),
      p.iso2 ? el('div', { class: 'flag', text: DD.flagOf(p.iso2) }) : null,
      el('div', { class: 'cap' }, [
        el('div', { class: 'n', text: p.name }),
        el('div', { class: 'c', text: subtitle(p) })
      ])
    ]);

    if (!img) tryPhoto(p, photo);

    var over = act.mine > bud.mine && bud.mine > 0;
    var body = el('div', { class: 'place-body' }, [
      el('div', { class: 'place-nums' }, [
        el('span', { class: 'big', text: DD.money(bud.mine, { compact: true }) }),
        el('span', { class: 'muted small', text: 'budget' }),
        el('span', { class: 'spacer', style: { flex: '1' } }),
        act.mine > 0 ? el('span', {
          class: 'num small', style: { fontWeight: '650', color: over ? 'var(--red)' : 'var(--green)' },
          text: DD.money(act.mine, { compact: true }) + ' spent'
        }) : null
      ]),
      DD.progressBar(act.mine, bud.mine),
      el('div', { class: 'place-meta' }, [
        stepper(t, p),
        el('span', { class: 'chip grey', text: p.currency }),
        el('span', { class: 'chip grey', text: DD.money(p.days ? bud.mine / p.days : 0) + '/day' })
      ]),
      el('div', { class: 'place-acts' }, [
        el('button', { class: 'btn xs', onclick: function () { DD.links.open('flights', p); } }, [icon('plane', 13), DD.links.label('flights')]),
        el('button', { class: 'btn xs', onclick: function () { DD.links.open('stays', p); } }, [icon('bed', 13), DD.links.label('stays')]),
        el('button', { class: 'btn xs', onclick: function () { editor(t, p); } }, [icon('edit', 13), 'Open']),
        idx > 0 ? el('button', { class: 'btn xs ghost', title: 'Move earlier', onclick: function () { S.movePlace(t, p.id, -1); DD.render(); } }, ['↑']) : null,
        idx < total - 1 ? el('button', { class: 'btn xs ghost', title: 'Move later', onclick: function () { S.movePlace(t, p.id, 1); DD.render(); } }, ['↓']) : null
      ])
    ]);

    return el('div', { class: 'place' }, [photo, body]);
  }

  /* Whichever of city / region is not already the card's title. */
  function subtitle(p) {
    var extra = [p.city, p.country].filter(function (v) { return v && v !== p.name; })[0];
    return (extra ? extra + ' \u00b7 ' : '') + DD.plural(p.days, 'day');
  }

  function stepper(t, p) {
    var n = el('span', { class: 'n', text: DD.plural(p.days, 'day') });
    return el('span', { class: 'stepper' }, [
      el('button', { 'aria-label': 'One day fewer', text: '−', onclick: function () {
        p.days = Math.max(1, (Number(p.days) || 1) - 1); n.textContent = DD.plural(p.days, 'day'); S.save();
      } }),
      n,
      el('button', { 'aria-label': 'One day more', text: '+', onclick: function () {
        p.days = (Number(p.days) || 0) + 1; n.textContent = DD.plural(p.days, 'day'); S.save();
      } })
    ]);
  }

  function tryPhoto(p, node) {
    DD.images.ensureLead(p, function (got) {
      if (got && p.images[0]) node.style.backgroundImage = photoLayers(p.images[0].url);
    });
  }

  /* ------------------------------------------------------- add dialog */
  function addDialog() {
    var t = S.trip();
    var isCity = t.kind === 'domestic';
    var nameIn = el('input', { type: 'text', placeholder: isCity ? 'Jaipur' : 'Portugal', autocapitalize: 'words' });
    var cityIn = el('input', { type: 'text', placeholder: isCity ? 'Rajasthan (optional)' : 'Lisbon (optional)' });
    var daysIn = el('input', { type: 'number', min: '1', value: String(t.defaultDays) });
    var curIn = DD.selectOf(currencyOptions(), isCity ? 'INR' : 'INR', null);
    var isoIn = el('input', { type: 'text', maxlength: '2', placeholder: 'PT', style: { textTransform: 'uppercase' } });
    var iataIn = el('input', { type: 'text', maxlength: '3', placeholder: 'LIS', style: { textTransform: 'uppercase' } });

    var body = el('div', {}, [
      DD.field(isCity ? 'City' : 'Country', nameIn),
      DD.field(isCity ? 'State or region' : 'Main city', cityIn),
      el('div', { class: 'grid2' }, [
        DD.field('Days', daysIn),
        DD.field('Currency', curIn)
      ]),
      el('div', { class: 'grid2' }, [
        DD.field(isCity ? 'State code' : 'Country code', isoIn),
        DD.field('Airport', iataIn)
      ]),
      el('p', { class: 'tiny muted', style: { margin: '2px 0 0' } },
        'The country code gives you a flag; the airport code builds the ' + DD.links.label('flights') + ' link. Both optional.')
    ]);

    var m = DD.modal({
      title: isCity ? 'Add a city' : 'Add a country',
      body: body,
      okLabel: 'Add',
      ok: function (close) {
        var name = nameIn.value.trim();
        if (!name) { nameIn.focus(); DD.toast('Give it a name first', true); return; }
        var p = S.addPlace(t, {
          name: name,
          country: isCity ? (cityIn.value.trim() || name) : name,
          city: isCity ? name : cityIn.value.trim(),
          iso2: isoIn.value.trim().toUpperCase(),
          iata: iataIn.value.trim().toUpperCase(),
          currency: curIn.value,
          days: Number(daysIn.value) || t.defaultDays
        });
        close();
        DD.render();
        DD.toast(name + ' added');
        DD.images.ensureLead(p, function (got) { if (got) DD.render(); });
      }
    });
    return m;
  }

  function currencyOptions() {
    var cur = S.db().currencies;
    return Object.keys(cur).sort().map(function (c) { return [c, c + ' — ' + cur[c].name]; });
  }

  /* ---------------------------------------------------------- editor */
  function editor(t, p) {
    var body = el('div', {});
    var tabs = el('div', { class: 'seg', style: { marginBottom: '14px' } });
    var pane = el('div', {});

    var TABS = [['budget', 'Budget'], ['photos', 'Photos'], ['drive', 'Drive'], ['plan', 'Plan'], ['about', 'Details']];
    var activeTab = 'budget';

    function paint() {
      DD.clear(tabs);
      TABS.forEach(function (tb) {
        tabs.appendChild(el('button', {
          class: tb[0] === activeTab ? 'on' : '', text: tb[1],
          onclick: function () { activeTab = tb[0]; paint(); }
        }));
      });
      DD.clear(pane);
      if (activeTab === 'budget') budgetPane(t, p, pane);
      else if (activeTab === 'photos') photosPane(t, p, pane);
      else if (activeTab === 'drive') drivePane(t, p, pane);
      else if (activeTab === 'plan') planPane(t, p, pane);
      else aboutPane(t, p, pane);
    }

    body.appendChild(tabs);
    body.appendChild(pane);
    paint();

    DD.modal({
      title: p.name + (p.city && p.city !== p.name ? ' · ' + p.city : ''),
      body: body, wide: true,
      cancelLabel: 'Done',
      destructive: {
        label: 'Remove place',
        run: function (close) {
          close();
          DD.confirmBox('Remove ' + p.name + '?',
            'Its budget, photos, plan and ' + DD.plural(t.expenses.filter(function (x) { return x.placeId === p.id; }).length, 'logged expense') + ' go with it.',
            function () { S.removePlace(t, p.id); DD.render(); DD.toast(p.name + ' removed'); });
        }
      },
      ok: function (close) { close(); DD.render(); }
    });
  }

  /* ----- budget tab ----- */
  function budgetPane(t, p, host) {
    var heads = Math.max(1, t.travellerIds.length);
    var totalNode = el('span', { class: 'num', style: { fontWeight: '700' } });
    var perDayNode = el('span', { class: 'muted small' });

    function recalc() {
      var b = S.placeBudget(t, p);
      totalNode.textContent = DD.money(b.mine);
      perDayNode.textContent = DD.money(p.days ? b.mine / p.days : 0) + ' a day'
        + (heads > 1 ? ' · group ' + DD.money(b.group) : '');
    }

    var tbl = el('table', { class: 'grid', style: { minWidth: '0' } });
    var tb = el('tbody');
    t.categories.forEach(function (c) {
      var input = el('input', {
        type: 'number', class: 'cell-in', min: '0', step: '100',
        value: String(Number(p.budget[c.id]) || 0),
        oninput: function () {
          p.budget[c.id] = Math.max(0, Number(input.value) || 0);
          recalc();
          saveSoon();
        }
      });
      tb.appendChild(el('tr', {}, [
        el('td', {}, [
          el('span', { class: 'dot', style: { background: DD.charts.colourFor(c.id, t.categories.indexOf(c)), display: 'inline-block', marginRight: '7px' } }),
          c.label,
          c.shared ? el('span', { class: 'chip grey tiny', style: { marginLeft: '7px' }, text: 'shared' }) : null
        ]),
        el('td', { style: { width: '130px' } }, [input])
      ]));
    });
    tbl.appendChild(tb);

    host.appendChild(el('div', { style: { display: 'flex', gap: '10px', alignItems: 'baseline', marginBottom: '10px', flexWrap: 'wrap' } }, [
      el('span', { class: 'lbl-cap', style: { margin: 0 }, text: 'Total' }),
      totalNode, perDayNode
    ]));
    host.appendChild(el('div', { class: 'tbl-wrap' }, [tbl]));

    var daysIn = el('input', {
      type: 'number', min: '1', value: String(p.days),
      oninput: function () { p.days = Math.max(1, Number(daysIn.value) || 1); recalc(); saveSoon(); }
    });
    host.appendChild(el('div', { class: 'grid2', style: { marginTop: '13px' } }, [
      DD.field('Days here', daysIn),
      DD.field('Local currency', DD.selectOf(currencyOptions(), p.currency, function (v) { p.currency = v; S.save(); }))
    ]));

    var act = S.actuals(t, p.id);
    if (act.mine > 0) {
      host.appendChild(el('div', { class: 'banner info', style: { marginTop: '12px' } }, [
        el('div', {}, [
          el('strong', { text: DD.money(act.mine) + ' spent here so far. ' }),
          act.mine > S.placeBudget(t, p).mine
            ? 'That is ' + DD.money(act.mine - S.placeBudget(t, p).mine) + ' over.'
            : DD.money(S.placeBudget(t, p).mine - act.mine) + ' still in hand.'
        ])
      ]));
    }
    recalc();
  }

  var saveSoon = DD.debounce(function () { S.save(); }, 400);

  /* ----- photos tab ----- */
  function photosPane(t, p, host) {
    var gal = el('div', { class: 'gal', style: { marginBottom: '13px' } });

    function paintGal() {
      DD.clear(gal);
      if (!p.images.length) {
        gal.appendChild(el('div', { class: 'muted small', style: { gridColumn: '1/-1' }, text: 'No photos yet.' }));
        return;
      }
      p.images.forEach(function (im, i) {
        gal.appendChild(el('figure', {}, [
          el('img', { src: im.url, alt: im.credit || p.name, loading: 'lazy',
            onerror: function () { this.parentNode.style.display = 'none'; } }),
          el('figcaption', { text: im.credit || '' }),
          el('button', { class: 'x', html: '&times;', title: 'Remove', onclick: function () {
            p.images.splice(i, 1); S.save(); paintGal();
          } })
        ]));
      });
    }
    paintGal();
    host.appendChild(gal);

    var urlIn = el('input', { type: 'url', placeholder: 'https://…  paste any image link' });
    host.appendChild(el('div', { class: 'row', style: { marginBottom: '13px' } }, [
      urlIn,
      el('button', { class: 'btn', style: { flex: '0 0 auto' }, text: 'Add', onclick: function () {
        var u = urlIn.value.trim();
        if (!u) return;
        p.images.push({ url: u, credit: 'Added by you', source: '' });
        S.save(); urlIn.value = ''; paintGal();
      } })
    ]));

    var status = el('div', { class: 'muted small' });
    host.appendChild(el('div', { style: { display: 'flex', gap: '9px', alignItems: 'center', flexWrap: 'wrap' } }, [
      el('button', { class: 'btn', onclick: fetchMore }, [DD.icon('image', 15), 'Find photos of ' + (p.city || p.name)]),
      status
    ]));
    host.appendChild(el('p', { class: 'tiny muted', style: { marginTop: '10px', marginBottom: 0 } },
      DD.images.needsServer()
        ? 'Photo search needs an http:// origin — run python3 serve.py and open http://localhost:4190/. Pasting a URL works either way, and photos already saved keep showing.'
        : 'Photos come from Wikipedia and Wikimedia Commons — freely licensed, credited above. They are stored as links, so you keep them when you commit your data file.'));

    function fetchMore() {
      if (DD.images.needsServer()) {
        status.textContent = 'Opened from disk — run serve.py to search Wikipedia, or paste a URL above.';
        return;
      }
      if (!DD.images.online()) { status.textContent = 'You are offline.'; return; }
      p.noPhoto = false;
      DD.clear(status);
      status.appendChild(el('span', { class: 'spin' }));
      status.appendChild(document.createTextNode(' searching…'));
      var q = DD.images.queryFor(p);
      DD.images.search(q, 8).then(function (found) {
        var have = {};
        p.images.forEach(function (im) { have[im.url] = 1; });
        var added = 0;
        found.forEach(function (im) { if (!have[im.url]) { p.images.push(im); added++; } });
        if (added) { S.save(); paintGal(); }
        status.textContent = added ? added + ' added' : 'Nothing new found for "' + q + '"';
      }).catch(function () { status.textContent = 'Could not reach Wikimedia.'; });
    }
  }

  /* ----- drive tab ----- */
  function drivePane(t, p, host) {
    var list = el('div', { style: { marginBottom: '13px' } });

    function paint() {
      DD.clear(list);
      if (!p.driveLinks.length) {
        list.appendChild(el('div', { class: 'muted small', text: 'No album links yet.' }));
        return;
      }
      p.driveLinks.forEach(function (d, i) {
        var embed = DD.images.driveEmbed(d.url);
        var block = el('div', { class: 'card', style: { marginBottom: '11px', overflow: 'hidden' } });
        block.appendChild(el('div', { class: 'list-row' }, [
          DD.icon('link', 17),
          el('div', { class: 'grow' }, [
            el('div', { class: 't', text: d.label || DD.images.hostOf(d.url) }),
            el('div', { class: 's', text: DD.images.hostOf(d.url) })
          ]),
          el('a', { class: 'btn xs', href: d.url, target: '_blank', rel: 'noopener', text: 'Open' }),
          el('button', { class: 'btn xs ghost', html: '&times;', title: 'Remove', onclick: function () {
            p.driveLinks.splice(i, 1); S.save(); paint();
          } })
        ]));
        if (embed) {
          block.appendChild(el('iframe', {
            class: 'drive-embed', src: embed, loading: 'lazy',
            title: d.label || 'Drive folder', style: { border: 0, display: 'block' }
          }));
        }
        list.appendChild(block);
      });
    }
    paint();
    host.appendChild(list);

    var lbl = el('input', { type: 'text', placeholder: 'Photos from Hanoi' });
    var url = el('input', { type: 'url', placeholder: 'https://drive.google.com/drive/folders/…' });
    host.appendChild(el('div', { class: 'grid2' }, [DD.field('Label', lbl), DD.field('Link', url)]));
    host.appendChild(el('button', { class: 'btn pri', onclick: function () {
      var u = url.value.trim();
      if (!u) { url.focus(); return; }
      p.driveLinks.push({ label: lbl.value.trim() || DD.images.hostOf(u), url: u });
      S.save(); lbl.value = ''; url.value = ''; paint();
    } }, [DD.icon('plus', 15), 'Add link']));
    host.appendChild(el('p', { class: 'tiny muted', style: { marginTop: '11px', marginBottom: 0 } },
      'Google Drive folders and files shared as "anyone with the link" show their contents inline here. Dropbox, OneDrive, iCloud and anything else appear as a link you can open.'));
  }

  /* ----- plan tab ----- */
  function planPane(t, p, host) {
    var list = el('div', { class: 'card list', style: { marginBottom: '13px' } });

    function paint() {
      DD.clear(list);
      var items = (p.itinerary || []).slice().sort(DD.by('day'));
      if (!items.length) {
        list.appendChild(el('div', { class: 'empty', style: { padding: '26px 18px' } }, [
          el('p', { class: 'muted small', style: { margin: 0 }, text: 'Nothing planned for ' + p.name + ' yet.' })
        ]));
        return;
      }
      items.forEach(function (it) {
        list.appendChild(el('div', { class: 'list-row' }, [
          el('label', { class: 'inline-check', style: { margin: 0 } }, [
            el('input', { type: 'checkbox', checked: !!it.done, onchange: function () { it.done = this.checked; S.save(); paint(); } })
          ]),
          el('span', { class: 'chip grey', text: 'Day ' + (it.day || 1) }),
          el('div', { class: 'grow' }, [
            el('div', { class: 't', text: it.title, style: it.done ? { textDecoration: 'line-through', color: 'var(--ink-3)' } : {} }),
            it.note ? el('div', { class: 's', text: it.note }) : null
          ]),
          it.cost ? el('span', { class: 'amt small', text: DD.money(it.cost) }) : null,
          el('button', { class: 'btn xs ghost', html: '&times;', title: 'Remove', onclick: function () {
            p.itinerary = p.itinerary.filter(function (o) { return o !== it; }); S.save(); paint();
          } })
        ]));
      });
    }
    paint();
    host.appendChild(list);

    var day = el('input', { type: 'number', min: '1', max: String(Math.max(1, p.days)), value: '1' });
    var title = el('input', { type: 'text', placeholder: 'Ha Long Bay day cruise' });
    var cost = el('input', { type: 'number', min: '0', step: '100', placeholder: '0' });
    var note = el('input', { type: 'text', placeholder: 'Note (optional)' });

    host.appendChild(el('div', { class: 'grid3' }, [
      DD.field('Day', day), DD.field('Est. cost ₹', cost), DD.field('Note', note)
    ]));
    host.appendChild(DD.field('What', title));
    host.appendChild(el('button', { class: 'btn pri', onclick: add }, [DD.icon('plus', 15), 'Add to plan']));
    title.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); add(); } });

    function add() {
      var v = title.value.trim();
      if (!v) { title.focus(); return; }
      p.itinerary.push({
        id: DD.uid('it'), day: Math.max(1, Number(day.value) || 1), title: v,
        note: note.value.trim(), cost: Number(cost.value) || 0, done: false
      });
      S.save();
      title.value = ''; note.value = ''; cost.value = '';
      paint();
      title.focus();
    }
  }

  /* ----- details tab ----- */
  function aboutPane(t, p, host) {
    var name = el('input', { type: 'text', value: p.name, oninput: function () { p.name = name.value; saveSoon(); } });
    var city = el('input', { type: 'text', value: p.city || '', oninput: function () { p.city = city.value; saveSoon(); } });
    var iso = el('input', { type: 'text', maxlength: '2', value: p.iso2 || '', style: { textTransform: 'uppercase' },
      oninput: function () { p.iso2 = iso.value.toUpperCase(); saveSoon(); } });
    var iata = el('input', { type: 'text', maxlength: '3', value: p.iata || '', style: { textTransform: 'uppercase' },
      oninput: function () { p.iata = iata.value.toUpperCase(); saveSoon(); } });
    var notes = el('textarea', { placeholder: 'Visa notes, who to meet, what to pack…',
      oninput: function () { p.notes = notes.value; saveSoon(); } });
    notes.value = p.notes || '';

    host.appendChild(el('div', { class: 'grid2' }, [
      DD.field(t.kind === 'domestic' ? 'City' : 'Country', name),
      DD.field(t.kind === 'domestic' ? 'State or region' : 'Main city', city)
    ]));
    host.appendChild(el('div', { class: 'grid2' }, [
      DD.field('Country code', iso), DD.field('Airport', iata)
    ]));
    host.appendChild(DD.field('Notes', notes));

    var sched = S.schedule(t)[p.id];
    if (sched && sched.start) {
      host.appendChild(el('div', { class: 'banner info' }, [
        el('div', {}, ['Scheduled ', el('strong', { text: DD.niceDate(sched.start) }), ' to ',
          el('strong', { text: DD.niceDate(sched.end, true) }),
          ' — from the trip start date and the days before this stop.'])
      ]));
    }

    host.appendChild(el('div', { class: 'chip-row', style: { marginTop: '4px' } }, [
      el('a', { class: 'btn sm', href: DD.links.build('flights', p) || '#', target: '_blank', rel: 'noopener' }, [DD.icon('plane', 14), DD.links.label('flights')]),
      el('a', { class: 'btn sm', href: DD.links.build('stays', p) || '#', target: '_blank', rel: 'noopener' }, [DD.icon('bed', 14), DD.links.label('stays')]),
      el('a', { class: 'btn sm', href: DD.links.build('activities', p) || '#', target: '_blank', rel: 'noopener' }, [DD.icon('map', 14), DD.links.label('activities')])
    ]));
  }

  DD.placesAddDialog = addDialog;
  DD.placeEditor = editor;
  DD.currencyOptions = currencyOptions;
})();
