(function () {
  var el = DD.el, S = DD.store;
  
  function keyFor(kind, place) {
    // We can keep the old logic or just return iso2/state
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
    
    // Create the container
    var wrap = el('div', { class: 'mapwrap', style: { height: '500px', width: '100%', borderRadius: '8px', overflow: 'hidden' } });
    
    // We must wait for wrap to be in the DOM before L.map is happy
    setTimeout(function() {
      if (!wrap.isConnected) {
        // If it's not in the DOM yet, poll a few times
        var attempts = 0;
        var int = setInterval(function() {
          if (wrap.isConnected) {
            clearInterval(int);
            initLeaflet(wrap, kind, list, opts);
          }
          if (++attempts > 50) clearInterval(int);
        }, 50);
      } else {
        initLeaflet(wrap, kind, list, opts);
      }
    }, 0);
    
    return wrap;
  }
  
  function initLeaflet(wrap, kind, list, opts) {
    var map = L.map(wrap).setView([20, 0], 2);
    if (kind === 'india') {
      map.setView([22, 79], 4);
    }
    
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri'
    }).addTo(map);
    
    var bounds = L.latLngBounds();
    var hasValidPoints = false;
    
    list.forEach(function(e) {
      if (typeof e.place.lat === 'number' && typeof e.place.lon === 'number') {
        var marker = L.circleMarker([e.place.lat, e.place.lon], {
          radius: 6,
          fillColor: e.st.state === 'over' ? '#db0b69' : e.st.state === 'done' ? '#00163a' : '#75a7f1',
          color: '#fff',
          weight: 2,
          opacity: 1,
          fillOpacity: 0.9
        }).addTo(map);
        
        var st = e.st;
        var line = st.count
          ? DD.money(st.spent) + ' spent of ' + DD.money(st.budget)
          : DD.money(st.budget) + ' budgeted';
          
        var popupContent = '<div style="background:#eef4fd; padding:10px; border-radius:4px; font-family:var(--yeseva); color:#00254a;">' +
                           '<b style="font-size:16px;">' + e.place.name + '</b><br>' + line + '</div>';
        
        marker.bindPopup(popupContent);
        
        if (opts.onPick) {
          marker.on('click', function() {
            opts.onPick(e);
          });
        }
        
        bounds.extend([e.place.lat, e.place.lon]);
        hasValidPoints = true;
      }
    });
    
    if (hasValidPoints) {
      map.fitBounds(bounds, { padding: [20, 20], maxZoom: 6 });
    }
  }

  DD.map = { render: render, keyFor: keyFor, entries: entries, toScreen: function(){} };
})();
