/* 08-links — booking deep links built from editable templates. */
'use strict';

(function () {
  var TOKENS = ['{city}', '{country}', '{iata}', '{home}', '{homecity}', '{in}', '{out}', '{yymmdd}', '{adults}', '{days}'];

  function build(kind, place, t) {
    t = t || DD.store.trip();
    var db = DD.store.db();
    var tpl = db.settings.linkTemplates[kind];
    if (!tpl || !tpl.url) return '';
    var sched = DD.store.schedule(t)[place.id] || {};
    var start = sched.start || t.start || '';
    var end = sched.end ? DD.addDays(sched.end, 1) : '';
    var map = {
      '{city}': place.city || place.country || place.name,
      '{country}': place.country || place.name,
      '{iata}': place.iata || '',
      '{home}': db.settings.homeAirport || '',
      '{homecity}': db.settings.homeCity || '',
      '{in}': start,
      '{out}': end,
      '{yymmdd}': start ? DD.yymmdd(start) : '',
      '{adults}': String(Math.max(1, Number(db.settings.adults) || 1)),
      '{days}': String(place.days || '')
    };
    var url = tpl.url;
    TOKENS.forEach(function (tok) {
      url = url.split(tok).join(encodeURIComponent(map[tok] === undefined ? '' : map[tok]));
    });
    return tidy(url);
  }

  /* A trip with no start date leaves date tokens empty. Rather than ship
     ".../DEL/JAI//?checkin=&checkout=" at the booking site, clear the gaps and
     let it default its own dates. */
  function tidy(url) {
    var parts = url.split('?');
    var path = parts[0].replace(/([^:])\/{2,}/g, '$1/');
    if (parts.length < 2) return path;
    var query = parts.slice(1).join('?').split('&')
      .filter(function (kv) { return kv && kv.slice(-1) !== '='; })
      .join('&');
    return query ? path + '?' + query : path;
  }

  function label(kind) {
    var tpl = DD.store.db().settings.linkTemplates[kind];
    return (tpl && tpl.label) || kind;
  }

  /* A place with no dates still gets a usable search URL — the site just
     defaults the dates itself, which is what you want while planning. */
  function openLink(kind, place) {
    var url = build(kind, place);
    if (!url) { DD.toast('No link template set for ' + kind, true); return; }
    window.open(url, '_blank', 'noopener');
  }

  DD.links = { build: build, label: label, open: openLink, TOKENS: TOKENS };
})();
