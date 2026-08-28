/* 00-core — helpers every other module leans on. No dependencies. */
'use strict';

var DD = window.DD || (window.DD = {});

/* ------------------------------------------------------------------ dom */
function $(sel, root) { return (root || document).querySelector(sel); }
function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

function el(tag, attrs, kids) {
  var n = document.createElement(tag), k;
  if (attrs) for (k in attrs) {
    if (!Object.prototype.hasOwnProperty.call(attrs, k)) continue;
    var v = attrs[k];
    if (v === null || v === undefined || v === false) continue;
    if (k === 'class') n.className = v;
    else if (k === 'html') n.innerHTML = v;
    else if (k === 'text') n.textContent = v;
    else if (k === 'style' && typeof v === 'object') { for (var s in v) n.style[s] = v[s]; }
    else if (k.slice(0, 2) === 'on' && typeof v === 'function') n.addEventListener(k.slice(2), v);
    else if (v === true) n.setAttribute(k, '');
    else n.setAttribute(k, v);
  }
  append(n, kids);
  return n;
}

function append(parent, kids) {
  if (kids === null || kids === undefined || kids === false) return parent;
  if (Array.isArray(kids)) { kids.forEach(function (c) { append(parent, c); }); return parent; }
  parent.appendChild(kids.nodeType ? kids : document.createTextNode(String(kids)));
  return parent;
}

function clear(node) { while (node && node.firstChild) node.removeChild(node.firstChild); return node; }
function esc(s) {
  return String(s === null || s === undefined ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/* ---------------------------------------------------------------- icons */
var ICON_PATHS = {
  home: 'M3 10.5 12 3l9 7.5M5.5 9.5V20h13V9.5',
  map: 'M9 3 3 5.5v15L9 18l6 3 6-2.5v-15L15 6 9 3zm0 0v15m6-12v15',
  sheet: 'M3 4.5h18v15H3zM3 9.5h18M3 14.5h18M9 4.5v15M15 4.5v15',
  plus: 'M12 5v14M5 12h14',
  wallet: 'M3 7.5A2.5 2.5 0 0 1 5.5 5H18v3M3 7.5V18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3M3 7.5h16a2 2 0 0 1 2 2V15m0 0h-4a2 2 0 0 1 0-4h4',
  users: 'M16 20v-1.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V20M9 10.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM22 20v-1.5a4 4 0 0 0-3-3.87M16 3.6a4 4 0 0 1 0 7.75',
  route: 'M6 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM8.5 17.5h6a3.5 3.5 0 0 0 0-7h-5a3.5 3.5 0 0 1 0-7h6',
  db: 'M12 7.5c4.4 0 8-1.1 8-2.25S16.4 3 12 3 4 4.1 4 5.25 7.6 7.5 12 7.5zM20 5.25v13.5C20 19.9 16.4 21 12 21s-8-1.1-8-2.25V5.25M20 12c0 1.15-3.6 2.25-8 2.25S4 13.15 4 12',
  trips: 'M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3.5 7h17A1.5 1.5 0 0 1 22 8.5v10a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-10A1.5 1.5 0 0 1 3.5 7z',
  more: 'M5 12h.01M12 12h.01M19 12h.01',
  back: 'M15 5l-7 7 7 7',
  next: 'M9 5l7 7-7 7',
  edit: 'M4 20h4L19 9a2.1 2.1 0 0 0-3-3L5 17v3z',
  trash: 'M4 6.5h16M9.5 6.5V4.5h5v2M6.5 6.5V20h11V6.5M10 10.5v6M14 10.5v6',
  image: 'M3.5 5h17v14h-17zM3.5 15.5 9 10.5l4.5 4M14 13l2.5-2 4 3.5M15.5 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  link: 'M10 13a4 4 0 0 0 5.66 0l3-3A4 4 0 0 0 13 4.34l-1.5 1.5M14 11a4 4 0 0 0-5.66 0l-3 3A4 4 0 0 0 11 19.66l1.5-1.5',
  down: 'M12 4v12m0 0 4.5-4.5M12 16l-4.5-4.5M4.5 20h15',
  check: 'M4.5 12.5 9.5 17.5 20 7',
  plane: 'M21 15.5 3 20l4.5-4.5V9L3 4.5 21 9v6.5z',
  bed: 'M3 18v-6.5h13a4 4 0 0 1 4 4V18M3 18v-7.5M3 18h18M6.5 11.5v-3h5v3',
  cal: 'M7 3v3M17 3v3M3.5 8.5h17M4.5 5.5h15v14h-15z',
  search: 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM16.5 16.5 21 21',
  settings: 'M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-2.9 1.2V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-2.9-1.2l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 3 15H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.2-2.9l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 10 4.6V4a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 2.9 1.2l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0 1.2 2.87H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1.03z'
};

function icon(name, size) {
  var d = ICON_PATHS[name];
  if (!d) return null;
  var s = size || 17;
  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', s); svg.setAttribute('height', s);
  svg.setAttribute('fill', 'none'); svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '1.7');
  svg.setAttribute('stroke-linecap', 'round'); svg.setAttribute('stroke-linejoin', 'round');
  d.split(' M').forEach(function (part, i) {
    var p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    p.setAttribute('d', (i === 0 ? '' : 'M') + part);
    svg.appendChild(p);
  });
  return svg;
}

/* --------------------------------------------------------------- format */
function money(n, opts) {
  n = Number(n) || 0;
  var o = opts || {};
  var sign = n < 0 ? '-' : '';
  var v = Math.abs(n);
  if (o.compact && v >= 100000) {
    if (v >= 10000000) return sign + '₹' + trimZero((v / 10000000).toFixed(2)) + ' Cr';
    return sign + '₹' + trimZero((v / 100000).toFixed(2)) + ' L';
  }
  return sign + '₹' + groupIN(Math.round(v));
}

/* Indian digit grouping: 12,34,567 */
function groupIN(n) {
  var s = String(Math.abs(Math.round(n)));
  if (s.length <= 3) return s;
  var last3 = s.slice(-3), rest = s.slice(0, -3);
  return rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + last3;
}

function trimZero(s) { return String(s).replace(/\.?0+$/, ''); }

function num(n, dp) {
  n = Number(n) || 0;
  return n.toLocaleString('en-IN', { maximumFractionDigits: dp === undefined ? 0 : dp });
}

function pct(part, whole) {
  if (!whole) return 0;
  return Math.round((part / whole) * 100);
}

function plural(n, one, many) { return n + ' ' + (n === 1 ? one : (many || one + 's')); }

/* ----------------------------------------------------------------- date */
function today() { return toISO(new Date()); }
function toISO(d) {
  return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate());
}
function pad2(n) { return (n < 10 ? '0' : '') + n; }
function fromISO(s) {
  if (!s) return null;
  var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(s);
  if (!m) return null;
  return new Date(+m[1], +m[2] - 1, +m[3]);
}
var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function niceDate(s, withYear) {
  var d = fromISO(s);
  if (!d) return '';
  var out = DAYS[d.getDay()] + ' ' + d.getDate() + ' ' + MONTHS[d.getMonth()];
  if (withYear) out += ' ' + d.getFullYear();
  return out;
}
function shortDate(s) {
  var d = fromISO(s);
  if (!d) return '';
  return d.getDate() + ' ' + MONTHS[d.getMonth()];
}
/* "10 Jan → 4 Jan '28" — the year only when the span crosses one. */
function dateSpan(a, b) {
  if (!a || !b) return '';
  var x = fromISO(a), y = fromISO(b);
  if (!x || !y) return '';
  var out = shortDate(a) + ' \u2192 ' + shortDate(b);
  if (x.getFullYear() !== y.getFullYear()) out += " '" + String(y.getFullYear()).slice(2);
  return out;
}

function addDays(iso, n) {
  var d = fromISO(iso);
  if (!d) return '';
  d.setDate(d.getDate() + n);
  return toISO(d);
}
function daysBetween(a, b) {
  var x = fromISO(a), y = fromISO(b);
  if (!x || !y) return 0;
  return Math.round((y - x) / 86400000);
}
function yymmdd(iso) {
  var d = fromISO(iso);
  if (!d) return '';
  return String(d.getFullYear()).slice(2) + pad2(d.getMonth() + 1) + pad2(d.getDate());
}

/* ------------------------------------------------------------------ ids */
function uid(prefix) {
  return (prefix || 'x') + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

/* --------------------------------------------------------------- colour */
/* The whole app draws from five colours. Charts pick from here. */
var PALETTE = ['#00254a', '#75a7f1', '#db0b69', '#0b529b', '#a9c8f7',
               '#f4569b', '#003a75', '#667c92', '#00163a', '#c8dcf9'];

/* Regional-indicator flag from an ISO-3166 alpha-2 code. */
function flagOf(iso2) {
  if (!iso2 || iso2.length !== 2) return '';
  var cp = iso2.toUpperCase().split('').map(function (c) { return 0x1F1E6 + c.charCodeAt(0) - 65; });
  try { return String.fromCodePoint(cp[0], cp[1]); } catch (e) { return ''; }
}

/* ------------------------------------------------------------------- fx */
/* Rates are stored as "units of the foreign currency per 1 INR", matching the sheet. */
function toINR(amount, code, rates) {
  amount = Number(amount) || 0;
  if (!code || code === 'INR') return amount;
  var r = rates && rates[code] ? Number(rates[code].perINR) : 0;
  if (!r) return amount;
  return amount / r;
}
function rateFor(code, rates) {
  if (!code || code === 'INR') return 1;
  var r = rates && rates[code] ? Number(rates[code].perINR) : 0;
  return r || 1;
}
function fmtLocal(amount, code) {
  if (!code || code === 'INR') return money(amount);
  return num(amount, Math.abs(amount) < 10 ? 2 : 0) + ' ' + code;
}

/* ----------------------------------------------------------------- misc */
function clamp(n, lo, hi) { return Math.max(lo, Math.min(hi, n)); }
function sum(arr, fn) {
  var t = 0;
  for (var i = 0; i < arr.length; i++) t += Number(fn ? fn(arr[i], i) : arr[i]) || 0;
  return t;
}
function by(key, dir) {
  var d = dir === 'desc' ? -1 : 1;
  return function (a, b) {
    var x = typeof key === 'function' ? key(a) : a[key];
    var y = typeof key === 'function' ? key(b) : b[key];
    if (x === y) return 0;
    if (x === null || x === undefined) return 1;
    if (y === null || y === undefined) return -1;
    return (x > y ? 1 : -1) * d;
  };
}
function debounce(fn, ms) {
  var t;
  return function () {
    var self = this, args = arguments;
    clearTimeout(t);
    t = setTimeout(function () { fn.apply(self, args); }, ms || 250);
  };
}
function slug(s) {
  return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
function downloadFile(name, text, mime) {
  var blob = new Blob([text], { type: mime || 'text/plain;charset=utf-8' });
  var url = URL.createObjectURL(blob);
  var a = el('a', { href: url, download: name });
  document.body.appendChild(a);
  a.click();
  setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 400);
}
function csvCell(v) {
  var s = String(v === null || v === undefined ? '' : v);
  return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}
function csvOf(rows) {
  return rows.map(function (r) { return r.map(csvCell).join(','); }).join('\n');
}

DD.$ = $; DD.$$ = $$; DD.el = el; DD.append = append; DD.clear = clear; DD.esc = esc;
DD.icon = icon; DD.money = money; DD.groupIN = groupIN; DD.num = num; DD.pct = pct;
DD.plural = plural; DD.today = today; DD.toISO = toISO; DD.fromISO = fromISO;
DD.niceDate = niceDate; DD.shortDate = shortDate; DD.addDays = addDays;
DD.daysBetween = daysBetween; DD.dateSpan = dateSpan; DD.yymmdd = yymmdd; DD.uid = uid; DD.PALETTE = PALETTE; DD.flagOf = flagOf;
DD.toINR = toINR; DD.rateFor = rateFor; DD.fmtLocal = fmtLocal; DD.clamp = clamp;
DD.sum = sum; DD.by = by; DD.debounce = debounce; DD.slug = slug;
DD.downloadFile = downloadFile; DD.csvOf = csvOf; DD.MONTHS = MONTHS; DD.DAYS = DAYS;
