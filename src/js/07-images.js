/* 07-images — free, credited photos from Wikipedia / Wikimedia Commons.
   No API key. Everything is optional: if the network is unavailable the app
   simply shows the gradient card and the paste-a-URL box. */
'use strict';

(function () {
  var WIKI = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
  var COMMONS = 'https://commons.wikimedia.org/w/api.php';

  function online() { return navigator.onLine !== false; }

  /* Opened straight off the disk, the page has a null origin and Wikipedia's
     CORS headers do not apply. serve.py fixes that; until then, say so plainly. */
  function needsServer() { return location.protocol === 'file:'; }

  /* Adding a place fires one lookup; opening a 36-country trip would fire 36.
     Three at a time is polite to Wikimedia and keeps the UI responsive. */
  var queue = [], running = 0, LIMIT = 3;
  function enqueue(job) {
    return new Promise(function (resolve) {
      queue.push(function () {
        running++;
        job().then(resolve, resolve).then(function () {
          running--;
          pump();
        });
      });
      pump();
    });
  }
  function pump() {
    while (running < LIMIT && queue.length) queue.shift()();
  }

  function jsonp(url) {
    return fetch(url, { mode: 'cors', credentials: 'omit' }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    });
  }

  /* One good lead image for a place, from its Wikipedia article. */
  function lead(query) {
    if (!online()) return Promise.reject(new Error('offline'));
    var title = encodeURIComponent(String(query).trim().replace(/\s+/g, '_'));
    return jsonp(WIKI + title + '?redirect=true').then(function (d) {
      var src = (d.originalimage && d.originalimage.source) || (d.thumbnail && d.thumbnail.source);
      if (!src) throw new Error('no image');
      if (d.thumbnail && d.thumbnail.source) src = d.thumbnail.source.replace(/\/\d+px-/, '/1024px-');
      return {
        url: src,
        credit: (d.titles && d.titles.normalized) || query,
        source: d.content_urls && d.content_urls.desktop ? d.content_urls.desktop.page : ''
      };
    });
  }

  /* A handful more, searched on Commons. */
  function search(query, limit) {
    if (!online()) return Promise.resolve([]);
    var url = COMMONS + '?origin=*&action=query&format=json&generator=search'
      + '&gsrsearch=' + encodeURIComponent('filetype:bitmap ' + query)
      + '&gsrnamespace=6&gsrlimit=' + (limit || 8)
      + '&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=800';
    return jsonp(url).then(function (d) {
      var pages = d && d.query && d.query.pages;
      if (!pages) return [];
      return Object.keys(pages).map(function (k) {
        var p = pages[k], ii = p.imageinfo && p.imageinfo[0];
        if (!ii) return null;
        var meta = ii.extmetadata || {};
        var artist = meta.Artist && meta.Artist.value ? stripTags(meta.Artist.value) : '';
        var lic = meta.LicenseShortName && meta.LicenseShortName.value ? meta.LicenseShortName.value : '';
        return {
          url: ii.thumburl || ii.url,
          credit: [artist, lic].filter(Boolean).join(' · ') || 'Wikimedia Commons',
          source: ii.descriptionurl || ''
        };
      }).filter(Boolean);
    }).catch(function () { return []; });
  }

  function stripTags(html) {
    var d = document.createElement('div');
    d.innerHTML = html;
    return (d.textContent || '').trim().slice(0, 70);
  }

  /* The query that gets the best picture for a place. */
  function queryFor(place) {
    if (place.city && place.country && place.city !== place.country) return place.city;
    return place.city || place.country || place.name;
  }

  /* Fetch and store a lead image if the place has none. Resolves either way. */
  function ensureLead(place, onDone) {
    if (place.images && place.images.length) { onDone && onDone(false); return Promise.resolve(false); }
    if (place.noPhoto || !online() || needsServer()) { onDone && onDone(false); return Promise.resolve(false); }
    return enqueue(function () {
      return lead(queryFor(place)).then(function (img) {
        place.images = place.images || [];
        place.images.push(img);
        DD.store.save();
        return true;
      }).catch(function () {
        /* Remember the miss so we do not ask again on every render. */
        place.noPhoto = true;
        return false;
      });
    }).then(function (got) { onDone && onDone(got); return got; });
  }

  /* --------------------------------------------------------- drive links */
  var DRIVE_FOLDER = /drive\.google\.com\/(?:drive\/(?:u\/\d+\/)?folders\/|open\?id=)([A-Za-z0-9_-]{10,})/;
  var DRIVE_FILE = /drive\.google\.com\/file\/d\/([A-Za-z0-9_-]{10,})/;

  function driveEmbed(url) {
    var m = DRIVE_FOLDER.exec(url || '');
    if (m) return 'https://drive.google.com/embeddedfolderview?id=' + m[1] + '#grid';
    m = DRIVE_FILE.exec(url || '');
    if (m) return 'https://drive.google.com/file/d/' + m[1] + '/preview';
    return '';
  }

  function hostOf(url) {
    try { return new URL(url).hostname.replace(/^www\./, ''); }
    catch (e) { return url ? String(url).slice(0, 28) : ''; }
  }

  DD.images = {
    lead: lead, search: search, ensureLead: ensureLead, queryFor: queryFor,
    driveEmbed: driveEmbed, hostOf: hostOf, online: online, needsServer: needsServer
  };
})();
