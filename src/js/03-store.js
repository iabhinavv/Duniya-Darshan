/* 03-store — the database, persistence, and every derived number. */
'use strict';

(function () {
  var STORE_KEY = 'duniya.v1';
  var HANDLE_DB = 'duniya-handle';
  var DB = null;
  var fileHandle = null;
  var dirty = false;

  /* ------------------------------------------------------------ loading */
  function deepClone(o) { return JSON.parse(JSON.stringify(o)); }

  function load() {
    var raw = null;
    try { raw = localStorage.getItem(STORE_KEY); } catch (e) { /* private mode */ }
    if (raw) {
      try {
        DB = JSON.parse(raw);
        migrate();
        return 'local';
      } catch (e) { console.warn('stored data unreadable, falling back', e); }
    }
    if (window.DUNIYA_DATA) { DB = deepClone(window.DUNIYA_DATA); migrate(); return 'file'; }
    DB = deepClone(window.DUNIYA_SEED);
    migrate();
    return 'seed';
  }

  /* Fill in anything an older save is missing. Cheap and idempotent. */
  function migrate() {
    if (!DB || typeof DB !== 'object') DB = deepClone(window.DUNIYA_SEED);
    DB.version = 1;
    DB.settings = DB.settings || {};
    var s = DB.settings, seed = window.DUNIYA_SEED.settings;
    if (!s.symbol) s.symbol = '₹';
    if (!s.homeAirport) s.homeAirport = seed.homeAirport;
    if (!s.homeCity) s.homeCity = seed.homeCity;
    if (!s.adults) s.adults = 1;
    s.linkTemplates = s.linkTemplates || deepClone(seed.linkTemplates);
    ['flights', 'stays', 'activities'].forEach(function (k) {
      if (!s.linkTemplates[k]) s.linkTemplates[k] = deepClone(seed.linkTemplates[k]);
    });
    DB.currencies = DB.currencies || deepClone(window.DUNIYA_SEED.currencies);
    DB.people = Array.isArray(DB.people) && DB.people.length ? DB.people
      : [{ id: 'me', name: 'Me', colour: '#0F766E' }];
    DB.trips = Array.isArray(DB.trips) ? DB.trips : [];
    DB.trips.forEach(function (t) {
      t.id = t.id || DD.uid('trip');
      t.kind = t.kind === 'domestic' ? 'domestic' : 'world';
      t.travellerIds = (t.travellerIds || ['me']).filter(function (id) { return personById(id); });
      if (!t.travellerIds.length) t.travellerIds = [DB.people[0].id];
      t.defaultDays = t.defaultDays || 10;
      t.categories = (t.categories && t.categories.length) ? t.categories
        : deepClone(window.DUNIYA_SEED.trips[0].categories);
      t.places = t.places || [];
      t.expenses = t.expenses || [];
      t.places.forEach(function (p, i) {
        p.id = p.id || DD.uid('p');
        p.days = Number(p.days) || t.defaultDays;
        if (p.order === undefined) p.order = i + 1;
        p.budget = p.budget || {};
        p.images = p.images || [];
        p.driveLinks = p.driveLinks || [];
        p.itinerary = p.itinerary || [];
        p.notes = p.notes || '';
        t.categories.forEach(function (c) { if (typeof p.budget[c.id] !== 'number') p.budget[c.id] = 0; });
      });
      t.expenses.forEach(function (x) {
        x.id = x.id || DD.uid('e');
        x.amount = Number(x.amount) || 0;
        x.rate = Number(x.rate) || 1;
        if (typeof x.amountINR !== 'number') x.amountINR = x.amount / (x.rate || 1);
        x.splitMode = x.splitMode || 'equal';
        x.shares = x.shares || {};
        if (x.splitMode !== 'mine' && !Object.keys(x.shares).length) {
          x.shares = equalShares(t);
        }
      });
    });
    if (!DB.trips.length) DB.trips = deepClone(window.DUNIYA_SEED.trips);
    if (!tripById(DB.activeTrip)) DB.activeTrip = DB.trips[0].id;
  }

  /* ------------------------------------------------------------- saving */
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(DB)); }
    catch (e) { DD.toast('Could not save locally — storage may be full', true); }
    dirty = true;
    scheduleFileWrite();
    DD.emit('change');
  }

  var writeTimer = null;
  function scheduleFileWrite() {
    if (!fileHandle) return;
    clearTimeout(writeTimer);
    writeTimer = setTimeout(writeFile, 900);
  }

  function fileText() {
    return '/* Your trips. Written by Duniya Darshan; safe to commit, diff and pull. */\n'
      + 'window.DUNIYA_DATA = ' + JSON.stringify(DB, null, 1) + ';\n';
  }

  function writeFile() {
    if (!fileHandle) return Promise.resolve(false);
    return fileHandle.createWritable().then(function (w) {
      return w.write(fileText()).then(function () { return w.close(); });
    }).then(function () {
      dirty = false;
      DD.emit('filestate');
      return true;
    }).catch(function (e) {
      console.warn('file write failed', e);
      DD.emit('filestate');
      return false;
    });
  }

  /* Remember the file handle between visits (handles cannot go in localStorage). */
  function idb(mode, fn) {
    return new Promise(function (resolve) {
      if (!window.indexedDB) return resolve(null);
      var req = indexedDB.open(HANDLE_DB, 1);
      req.onupgradeneeded = function () { req.result.createObjectStore('h'); };
      req.onerror = function () { resolve(null); };
      req.onsuccess = function () {
        var db = req.result;
        try {
          var tx = db.transaction('h', mode);
          var r = fn(tx.objectStore('h'));
          if (r) { r.onsuccess = function () { resolve(r.result); }; r.onerror = function () { resolve(null); }; }
          else tx.oncomplete = function () { resolve(true); };
        } catch (e) { resolve(null); }
      };
    });
  }

  function rememberHandle(h) { return idb('readwrite', function (st) { st.put(h, 'file'); }); }
  function recallHandle() { return idb('readonly', function (st) { return st.get('file'); }); }
  function forgetHandle() { return idb('readwrite', function (st) { st.delete('file'); }); }

  function canUseFiles() { return typeof window.showSaveFilePicker === 'function'; }

  function connectFile() {
    if (!canUseFiles()) return Promise.resolve(false);
    return window.showSaveFilePicker({
      suggestedName: 'trip-data.js',
      types: [{ description: 'Duniya Darshan data', accept: { 'text/javascript': ['.js'] } }]
    }).then(function (h) {
      fileHandle = h;
      return rememberHandle(h).then(function () { return writeFile(); });
    }).then(function () {
      DD.emit('filestate');
      return true;
    }).catch(function () { return false; });
  }

  function reconnectFile() {
    if (!canUseFiles()) return Promise.resolve(false);
    return recallHandle().then(function (h) {
      if (!h) return false;
      return h.queryPermission({ mode: 'readwrite' }).then(function (p) {
        fileHandle = h;
        DD.emit('filestate');
        return p === 'granted';
      });
    }).catch(function () { return false; });
  }

  function regrantFile() {
    if (!fileHandle) return Promise.resolve(false);
    return fileHandle.requestPermission({ mode: 'readwrite' }).then(function (p) {
      if (p === 'granted') return writeFile().then(function () { return true; });
      return false;
    }).catch(function () { return false; });
  }

  function fileStatus() {
    if (!canUseFiles()) return 'unsupported';
    if (!fileHandle) return 'none';
    return dirty ? 'pending' : 'saved';
  }

  function disconnectFile() {
    fileHandle = null;
    return forgetHandle().then(function () { DD.emit('filestate'); });
  }

  /* -------------------------------------------------------- accessors */
  function db() { return DB; }
  function trips() { return DB.trips; }
  function tripById(id) {
    for (var i = 0; i < DB.trips.length; i++) if (DB.trips[i].id === id) return DB.trips[i];
    return null;
  }
  function trip() { return tripById(DB.activeTrip) || DB.trips[0]; }
  function setTrip(id) { if (tripById(id)) { DB.activeTrip = id; save(); } }
  function personById(id) {
    for (var i = 0; i < DB.people.length; i++) if (DB.people[i].id === id) return DB.people[i];
    return null;
  }
  function travellers(t) {
    t = t || trip();
    return t.travellerIds.map(personById).filter(Boolean);
  }
  function placeById(t, id) {
    t = t || trip();
    for (var i = 0; i < t.places.length; i++) if (t.places[i].id === id) return t.places[i];
    return null;
  }
  function places(t) {
    t = t || trip();
    return t.places.slice().sort(DD.by('order'));
  }
  function catById(t, id) {
    t = t || trip();
    for (var i = 0; i < t.categories.length; i++) if (t.categories[i].id === id) return t.categories[i];
    return null;
  }
  function catLabel(t, id) { var c = catById(t, id); return c ? c.label : id; }

  /* ------------------------------------------------------- derived sums */

  /* Budget for one place. Returns per-category and totals, in "my share" and
     "group" terms. Shared categories divide by head count; personal ones multiply. */
  function placeBudget(t, p) {
    t = t || trip();
    var heads = Math.max(1, t.travellerIds.length);
    var mine = 0, group = 0, byCat = {};
    t.categories.forEach(function (c) {
      var v = Number(p.budget[c.id]) || 0;
      var g = c.shared ? v : v * heads;
      byCat[c.id] = { base: v, mine: v, group: g, shared: !!c.shared };
      mine += v;
      group += g;
    });
    return { mine: mine, group: group, byCat: byCat, heads: heads };
  }

  function tripBudget(t) {
    t = t || trip();
    var mine = 0, group = 0, byCat = {}, days = 0;
    t.categories.forEach(function (c) { byCat[c.id] = 0; });
    t.places.forEach(function (p) {
      var b = placeBudget(t, p);
      mine += b.mine; group += b.group;
      days += Number(p.days) || 0;
      t.categories.forEach(function (c) { byCat[c.id] += b.byCat[c.id].base; });
    });
    return { mine: mine, group: group, byCat: byCat, days: days, places: t.places.length };
  }

  /* What a single expense costs the given person. */
  function shareOf(x, personId, t) {
    t = t || trip();
    var total = Number(x.amountINR) || 0;
    if (x.splitMode === 'mine') return x.paidBy === personId ? total : 0;
    var shares = x.shares || {};
    var keys = Object.keys(shares).filter(function (k) { return Number(shares[k]) > 0; });
    if (!keys.length) {
      var ids = t.travellerIds;
      return ids.indexOf(personId) >= 0 ? total / Math.max(1, ids.length) : 0;
    }
    if (x.splitMode === 'exact') return Number(shares[personId]) || 0;
    var weight = DD.sum(keys, function (k) { return Number(shares[k]) || 0; });
    if (!weight) return 0;
    return total * ((Number(shares[personId]) || 0) / weight);
  }

  function meId() { return DB.people[0] ? DB.people[0].id : 'me'; }

  /* Actual spend, optionally narrowed by place. Returns group total and my share. */
  function actuals(t, placeId) {
    t = t || trip();
    var me = meId();
    var group = 0, mine = 0, byCat = {}, byCatMine = {};
    t.categories.forEach(function (c) { byCat[c.id] = 0; byCatMine[c.id] = 0; });
    t.expenses.forEach(function (x) {
      if (placeId && x.placeId !== placeId) return;
      var v = Number(x.amountINR) || 0;
      var m = shareOf(x, me, t);
      group += v; mine += m;
      if (byCat[x.category] === undefined) { byCat[x.category] = 0; byCatMine[x.category] = 0; }
      byCat[x.category] += v;
      byCatMine[x.category] += m;
    });
    return { group: group, mine: mine, byCat: byCat, byCatMine: byCatMine };
  }

  /* Who owes whom, settled with the fewest transfers. */
  function balances(t) {
    t = t || trip();
    var ids = t.travellerIds.slice();
    var paid = {}, owed = {};
    ids.forEach(function (id) { paid[id] = 0; owed[id] = 0; });
    t.expenses.forEach(function (x) {
      if (paid[x.paidBy] === undefined) return;
      paid[x.paidBy] += Number(x.amountINR) || 0;
      ids.forEach(function (id) { owed[id] += shareOf(x, id, t); });
    });
    var net = ids.map(function (id) {
      return { id: id, paid: paid[id], owed: owed[id], net: paid[id] - owed[id] };
    });
    var cred = net.filter(function (n) { return n.net > 0.5; }).sort(DD.by('net', 'desc'));
    var debt = net.filter(function (n) { return n.net < -0.5; }).sort(DD.by('net'));
    var transfers = [], i = 0, j = 0;
    cred = cred.map(function (c) { return { id: c.id, amt: c.net }; });
    debt = debt.map(function (d) { return { id: d.id, amt: -d.net }; });
    var guard = 0;
    while (i < debt.length && j < cred.length && guard++ < 500) {
      var amt = Math.min(debt[i].amt, cred[j].amt);
      if (amt > 0.5) transfers.push({ from: debt[i].id, to: cred[j].id, amount: amt });
      debt[i].amt -= amt; cred[j].amt -= amt;
      if (debt[i].amt <= 0.5) i++;
      if (cred[j].amt <= 0.5) j++;
    }
    return { net: net, transfers: transfers };
  }

  /* Dates: places run back to back from the trip start, honouring their day counts. */
  function schedule(t) {
    t = t || trip();
    var out = {}, cursor = t.start || '';
    places(t).forEach(function (p) {
      var d = Number(p.days) || 0;
      out[p.id] = { start: cursor, end: cursor ? DD.addDays(cursor, Math.max(0, d - 1)) : '', days: d };
      if (cursor) cursor = DD.addDays(cursor, d);
    });
    return out;
  }

  function tripEnd(t) {
    t = t || trip();
    if (!t.start) return '';
    var total = DD.sum(t.places, function (p) { return Number(p.days) || 0; });
    return total ? DD.addDays(t.start, total - 1) : t.start;
  }

  /* -------------------------------------------------------- mutations */
  function addTrip(rec) {
    var t = {
      id: DD.uid('trip'), name: rec.name || 'New trip', kind: rec.kind || 'world',
      start: rec.start || '', end: '', note: rec.note || '',
      travellerIds: [meId()], defaultDays: rec.defaultDays || (rec.kind === 'domestic' ? 4 : 10),
      categories: deepClone(window.DUNIYA_SEED.trips[0].categories),
      places: [], expenses: []
    };
    DB.trips.push(t);
    DB.activeTrip = t.id;
    save();
    return t;
  }

  function removeTrip(id) {
    DB.trips = DB.trips.filter(function (t) { return t.id !== id; });
    if (!DB.trips.length) DB.trips = deepClone(window.DUNIYA_SEED.trips);
    if (!tripById(DB.activeTrip)) DB.activeTrip = DB.trips[0].id;
    save();
  }

  function addPlace(t, rec) {
    t = t || trip();
    var maxOrder = DD.sum([0]) + t.places.reduce(function (m, p) { return Math.max(m, p.order || 0); }, 0);
    var p = {
      id: DD.uid('p'),
      name: rec.name, country: rec.country || rec.name, city: rec.city || '',
      iso2: rec.iso2 || '', iata: rec.iata || '', currency: rec.currency || 'INR',
      days: Number(rec.days) || t.defaultDays, order: maxOrder + 1, notes: '',
      budget: {}, images: rec.images || [], driveLinks: [], itinerary: []
    };
    t.categories.forEach(function (c) { p.budget[c.id] = Number(rec.budget && rec.budget[c.id]) || 0; });
    t.places.push(p);
    save();
    return p;
  }

  function removePlace(t, id) {
    t = t || trip();
    t.places = t.places.filter(function (p) { return p.id !== id; });
    t.expenses = t.expenses.filter(function (x) { return x.placeId !== id; });
    save();
  }

  function movePlace(t, id, dir) {
    t = t || trip();
    var list = places(t);
    var i = list.findIndex(function (p) { return p.id === id; });
    var j = i + dir;
    if (i < 0 || j < 0 || j >= list.length) return;
    var a = list[i].order, b = list[j].order;
    list[i].order = b; list[j].order = a;
    save();
  }

  /* Everyone on the trip right now, weighted equally. Frozen onto the expense so
     that adding or removing a traveller later never rewrites old entries. */
  function equalShares(t) {
    var out = {};
    t.travellerIds.forEach(function (id) { out[id] = 1; });
    return out;
  }

  function addExpense(t, rec) {
    t = t || trip();
    var code = rec.currency || 'INR';
    var rate = DD.rateFor(code, DB.currencies);
    var mode = rec.splitMode || 'equal';
    var shares = rec.shares && Object.keys(rec.shares).length ? rec.shares : null;
    if (!shares && mode !== 'mine') shares = equalShares(t);
    var x = {
      id: DD.uid('e'),
      placeId: rec.placeId || '', date: rec.date || DD.today(),
      category: rec.category, amount: Number(rec.amount) || 0,
      currency: code, rate: rate,
      amountINR: (Number(rec.amount) || 0) / rate,
      note: rec.note || '', paidBy: rec.paidBy || meId(),
      splitMode: mode, shares: shares || {}
    };
    t.expenses.push(x);
    save();
    return x;
  }

  function updateExpense(t, id, rec) {
    t = t || trip();
    var x = t.expenses.filter(function (e) { return e.id === id; })[0];
    if (!x) return null;
    Object.keys(rec).forEach(function (k) { x[k] = rec[k]; });
    if (x.splitMode !== 'mine' && (!x.shares || !Object.keys(x.shares).length)) {
      x.shares = equalShares(t);
    }
    x.rate = DD.rateFor(x.currency, DB.currencies);
    if (rec.rate) x.rate = rec.rate;
    x.amount = Number(x.amount) || 0;
    x.amountINR = x.amount / (x.rate || 1);
    save();
    return x;
  }

  function removeExpense(t, id) {
    t = t || trip();
    t.expenses = t.expenses.filter(function (e) { return e.id !== id; });
    save();
  }

  function addPerson(name) {
    var used = DB.people.map(function (p) { return p.colour; });
    var p = { id: DD.uid('per'), name: name || 'Traveller', colour: DD.nextColour(used) };
    DB.people.push(p);
    save();
    return p;
  }

  function replaceAll(next) {
    DB = next;
    migrate();
    save();
  }

  window.DD.store = {
    STORE_KEY: STORE_KEY,
    load: load, save: save, db: db, deepClone: deepClone,
    trips: trips, trip: trip, tripById: tripById, setTrip: setTrip,
    personById: personById, travellers: travellers, meId: meId,
    places: places, placeById: placeById, catById: catById, catLabel: catLabel,
    placeBudget: placeBudget, tripBudget: tripBudget, actuals: actuals,
    shareOf: shareOf, balances: balances, schedule: schedule, tripEnd: tripEnd,
    addTrip: addTrip, removeTrip: removeTrip,
    addPlace: addPlace, removePlace: removePlace, movePlace: movePlace,
    addExpense: addExpense, updateExpense: updateExpense, removeExpense: removeExpense,
    addPerson: addPerson, replaceAll: replaceAll,
    canUseFiles: canUseFiles, connectFile: connectFile, reconnectFile: reconnectFile,
    regrantFile: regrantFile, disconnectFile: disconnectFile, fileStatus: fileStatus,
    writeFile: writeFile, fileText: fileText
  };
})();
