/* 09-map — the world and India maps using Leaflet and Esri Satellite imagery. */
'use strict';

(function () {
  var el = DD.el, S = DD.store;

  function keyFor(kind, place) {
    if (kind === 'world') return String(place.iso2 || '').toUpperCase();
    return place.city || place.name;
  }

  function entries(kind, trips) {
    var out = [];
    trips.forEach(function (t) {
      if (kind === 'world' && t.kind === 'domestic') return;
      if (kind === 'india' && t.kind !== 'domestic') return;
      t.places.forEach(function (p) {
        out.push({ trip: t, place: p, key: keyFor(kind, p), st: S.placeState(t, p) });
      });
    });
    return out;
  }

  function render(opts) {
    var kind = opts.kind || 'world';
    var list = entries(kind, opts.trips || [S.trip()]);

    // Create the container. We ensure it has a non-zero height for Leaflet.
    var wrap = el('div', { class: 'mapwrap', style: { height: '500px', width: '100%', borderRadius: '6px', overflow: 'hidden', position: 'relative', zIndex: 1 } });

    // Leaflet needs the container to be in the DOM to measure its size.
    setTimeout(function() {
      if (!wrap.isConnected) {
        // poll until it is in the DOM
        var attempts = 0;
        var int = setInterval(function() {
          if (wrap.isConnected) {
            clearInterval(int);
            initLeaflet(wrap, kind, list, opts);
          }
          if (++attempts > 50) clearInterval(int); // giving up after 2.5s
        }, 50);
      } else {
        initLeaflet(wrap, kind, list, opts);
      }
    }, 0);

    return wrap;
  }

  function initLeaflet(wrap, kind, list, opts) {
    // Initial center and zoom
    var map = L.map(wrap, { zoomControl: true, attributionControl: true }).setView([20, 0], 2);
    map.attributionControl.setPrefix('<a href="https://leafletjs.com" target="_blank" style="color:var(--brand-300,#a3c4f7);text-decoration:none;">Leaflet</a>');
    if (kind === 'india') {
      map.setView([22.5, 79.5], 4.5);
    }

    // Add Esri World Imagery (Satellite) tile layer
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri',
      maxZoom: 18
    }).addTo(map);

    var bounds = L.latLngBounds();
    var hasValidPoints = false;

    // Draw markers for each place in the trip(s)
    list.forEach(function(e) {
      if (typeof e.place.lat === 'number' && typeof e.place.lon === 'number') {
        var markerColor = e.st.state === 'over' ? 'var(--pink, #db0b69)' : e.st.state === 'done' ? 'var(--brand-900, #00163a)' : 'var(--brand-500, #75a7f1)';
        
        var marker = L.circleMarker([e.place.lat, e.place.lon], {
          radius: 6,
          fillColor: markerColor,
          color: '#fff',
          weight: 2,
          opacity: 1,
          fillOpacity: 0.9
        }).addTo(map);

        var st = e.st;
        var line = st.count
          ? DD.money(st.spent) + ' spent of ' + DD.money(st.budget)
          : DD.money(st.budget) + ' budgeted';

        // Custom notepad popup styling - darker as requested
        var popupContent = '<div style="background:var(--brand-800, #00254a); padding:8px 12px; border-radius:4px; font-family:var(--yeseva, \'Yeseva One\', serif); color:var(--paper, #ffffff); text-align:center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">' +
                           '<b style="font-size:16px; display:block; margin-bottom:4px; color:var(--brand-100, #d8e7fb);">' + e.place.name + '</b><span style="font-size:14px;">' + line + '</span></div>';

        // Override leaflet tooltip default styles to blend with the app
        marker.bindTooltip(popupContent, {
          direction: 'top',
          permanent: false,
          opacity: 1,
          className: 'notepad-popup',
          offset: [0, -5]
        });

        if (opts.onPick) {
          marker.on('click', function() {
            opts.onPick(e);
          });
          // Change cursor on hover
          marker.on('mouseover', function() {
            marker._path.style.cursor = 'pointer';
          });
        }

        bounds.extend([e.place.lat, e.place.lon]);
        hasValidPoints = true;
      }
    });

    if (hasValidPoints) {
      // Fit to points, with some padding, but don't zoom in too far
      map.fitBounds(bounds, { padding: [30, 30], maxZoom: 6 });
    }

    // Add a custom control for "India" if opts.onIndia is provided
    if (kind === 'world' && opts.onIndia) {
      var HomeControl = L.Control.extend({
        options: { position: 'topright' },
        onAdd: function (map) {
          var btn = L.DomUtil.create('button', 'btn sm');
          btn.innerHTML = 'India';
          btn.style.margin = '10px';
          btn.style.cursor = 'pointer';
          btn.style.pointerEvents = 'auto';
          L.DomEvent.on(btn, 'click', L.DomEvent.stopPropagation)
                    .on(btn, 'click', L.DomEvent.preventDefault)
                    .on(btn, 'click', opts.onIndia);
          return btn;
        }
      });
      map.addControl(new HomeControl());
    }
  }

  DD.map = { render: render, keyFor: keyFor, entries: entries, toScreen: function(){} };
})();
