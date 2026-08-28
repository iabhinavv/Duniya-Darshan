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
    delete DB.people;
    DB.trips = Array.isArray(DB.trips) ? DB.trips : [];
    DB.trips.forEach(function (t) {
      t.id = t.id || DD.uid('trip');
      t.kind = t.kind === 'domestic' ? 'domestic' : 'world';
      delete t.travellerIds;
      t.defaultDays = t.defaultDays || 10;
      t.categories = (t.categories && t.categories.length) ? t.categories
        : deepClone(window.DUNIYA_SEED.trips[0].categories);
      t.categories.forEach(function (c) { delete c.shared; });
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
        delete x.splitMode; delete x.shares; delete x.paidBy;
      });
    });
    if (!DB.trips.length) DB.trips = deepClone(window.DUNIYA_SEED.trips);
    if (!tripById(DB.activeTrip)) DB.activeTrip = DB.trips[0].id;
  }

  /* ------------------------------------------------------------- saving */
  var warnedStorage = false;
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(DB)); }
    catch (e) {
      /* Full quota, or a browser with site data switched off. Say so once —
         not on every keystroke — and keep working in memory. */
      if (!warnedStorage) {
        warnedStorage = true;
        DD.toast('Cannot save in this browser — use Data \u2192 JSON backup before you close the tab', true);
      }
    }
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

  /* Budget for one place: the per-category figures and their total. */
  function placeBudget(t, p) {
    t = t || trip();
    var total = 0, byCat = {};
    t.categories.forEach(function (c) {
      var v = Number(p.budget[c.id]) || 0;
      byCat[c.id] = v;
      total += v;
    });
    return { total: total, byCat: byCat, days: Number(p.days) || 0 };
  }

  function tripBudget(t) {
    t = t || trip();
    var total = 0, byCat = {}, days = 0;
    t.categories.forEach(function (c) { byCat[c.id] = 0; });
    t.places.forEach(function (p) {
      var b = placeBudget(t, p);
      total += b.total;
      days += Number(p.days) || 0;
      t.categories.forEach(function (c) { byCat[c.id] += b.byCat[c.id]; });
    });
    return { total: total, byCat: byCat, days: days, places: t.places.length };
  }

  /* Actual spend, optionally narrowed to one place. */
  function actuals(t, placeId) {
    t = t || trip();
    var total = 0, byCat = {}, count = 0;
    t.categories.forEach(function (c) { byCat[c.id] = 0; });
    t.expenses.forEach(function (x) {
      if (placeId && x.placeId !== placeId) return;
      var v = Number(x.amountINR) || 0;
      total += v;
      count++;
      if (byCat[x.category] === undefined) byCat[x.category] = 0;
      byCat[x.category] += v;
    });
    return { total: total, byCat: byCat, count: count };
  }

  /* How a place stands: untouched, under way, or done and dusted.
     Anything with logged spend counts as started — that is what colours the map. */
  function placeState(t, p) {
    var b = placeBudget(t, p).total;
    var a = actuals(t, p.id);
    if (!a.count) return { state: 'planned', budget: b, spent: 0, ratio: 0, count: 0 };
    var ratio = b > 0 ? a.total / b : 1;
    var state = ratio > 1.02 ? 'over' : (ratio >= 0.9 ? 'done' : 'active');
    return { state: state, budget: b, spent: a.total, ratio: ratio, count: a.count };
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
      defaultDays: rec.defaultDays || (rec.kind === 'domestic' ? 4 : 10),
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
      lat: typeof rec.lat === 'number' ? rec.lat : null,
      lon: typeof rec.lon === 'number' ? rec.lon : null,
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

  function addExpense(t, rec) {
    t = t || trip();
    var code = rec.currency || 'INR';
    var rate = DD.rateFor(code, DB.currencies);
    var x = {
      id: DD.uid('e'),
      placeId: rec.placeId || '', date: rec.date || DD.today(),
      category: rec.category, amount: Number(rec.amount) || 0,
      currency: code, rate: rate,
      amountINR: (Number(rec.amount) || 0) / rate,
      note: rec.note || ''
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

  function replaceAll(next) {
    DB = next;
    migrate();
    save();
  }

  window.DD.store = {
    STORE_KEY: STORE_KEY,
    load: load, save: save, db: db, deepClone: deepClone,
    trips: trips, trip: trip, tripById: tripById, setTrip: setTrip,
    places: places, placeById: placeById, catById: catById, catLabel: catLabel,
    placeBudget: placeBudget, tripBudget: tripBudget, actuals: actuals,
    placeState: placeState, schedule: schedule, tripEnd: tripEnd,
    addTrip: addTrip, removeTrip: removeTrip,
    addPlace: addPlace, removePlace: removePlace, movePlace: movePlace,
    addExpense: addExpense, updateExpense: updateExpense, removeExpense: removeExpense,
    replaceAll: replaceAll,
    canUseFiles: canUseFiles, connectFile: connectFile, reconnectFile: reconnectFile,
    regrantFile: regrantFile, disconnectFile: disconnectFile, fileStatus: fileStatus,
    writeFile: writeFile, fileText: fileText
  };
})();
