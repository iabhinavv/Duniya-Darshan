/* 09-map — the world and India maps using OpenLayers and Esri Satellite imagery. */
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

    var wrap = el('div', { class: 'mapwrap', style: { height: '500px', width: '100%', borderRadius: '6px', overflow: 'hidden', position: 'relative', zIndex: 1 } });

    setTimeout(function() {
      if (!wrap.isConnected) {
        var attempts = 0;
        var int = setInterval(function() {
          if (wrap.isConnected) {
            clearInterval(int);
            initOpenLayers(wrap, kind, list, opts);
          }
          if (++attempts > 50) clearInterval(int);
        }, 50);
      } else {
        initOpenLayers(wrap, kind, list, opts);
      }
    }, 0);

    return wrap;
  }

  function initOpenLayers(wrap, kind, list, opts) {
    if (!window.ol) return; // Ensure OpenLayers is loaded

    var features = [];
    
    list.forEach(function(e) {
      if (typeof e.place.lat === 'number' && typeof e.place.lon === 'number') {
        var markerColor = e.st.state === 'over' ? '#db0b69' : e.st.state === 'done' ? '#00163a' : '#75a7f1';
        
        var feature = new ol.Feature({
          geometry: new ol.geom.Point(ol.proj.fromLonLat([e.place.lon, e.place.lat])),
          data: e,
          markerColor: markerColor
        });
        
        features.push(feature);
      }
    });

    var vectorSource = new ol.source.Vector({ features: features });
    
    var map; // To be assigned below, captured in style function
    var vectorLayer = new ol.layer.Vector({ 
      source: vectorSource, 
      zIndex: 2,
      style: function(feature, resolution) {
        var data = feature.get('data');
        var currentZoom = map ? map.getView().getZoomForResolution(resolution) : 2;
        var showText = currentZoom >= 4.5;
        
        var markerColor = feature.get('markerColor');
        var styles = [
          new ol.style.Style({
            image: new ol.style.Circle({
              radius: 8,
              fill: new ol.style.Fill({ color: markerColor }),
              stroke: new ol.style.Stroke({ color: '#fff', width: 2 })
            })
          })
        ];
        
        if (showText) {
          var line = data.st.count
            ? DD.money(data.st.spent) + ' spent of ' + DD.money(data.st.budget)
            : DD.money(data.st.budget) + ' budgeted';
            
          styles.push(new ol.style.Style({
            text: new ol.style.Text({
              text: data.place.name + '\n' + line,
              font: '14px "Yeseva One", serif',
              fill: new ol.style.Fill({ color: '#ffffff' }),
              backgroundFill: new ol.style.Fill({ color: 'rgba(0, 22, 58, 0.9)' }),
              backgroundStroke: new ol.style.Stroke({ color: '#ffffff', width: 1.5 }),
              padding: [6, 10, 6, 10],
              offsetY: -35,
              textAlign: 'center'
            })
          }));
        }
        return styles;
      }
    });
    
    var rasterLayer = new ol.layer.Tile({
      source: new ol.source.XYZ({
        attributions: 'Tiles &copy; Esri',
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        maxZoom: 18
      }),
      zIndex: 1
    });

    var center = kind === 'india' ? ol.proj.fromLonLat([79.5, 22.5]) : ol.proj.fromLonLat([0, 20]);
    var zoom = kind === 'india' ? 4.5 : 2;

    map = new ol.Map({
      target: wrap,
      layers: [rasterLayer, vectorLayer],
      view: new ol.View({
        center: center,
        zoom: zoom,
        maxZoom: 18
      })
    });

    if (features.length > 0) {
      var extent = vectorSource.getExtent();
      map.getView().fit(extent, { padding: [50, 50, 50, 50], maxZoom: 6, duration: 500 });
    }


    var popupElement = el('div', { class: 'notepad-popup', style: {
      background: 'var(--brand-900, #00163a)',
      padding: '10px 14px',
      borderRadius: '4px',
      fontFamily: 'var(--yeseva, "Yeseva One", serif)',
      color: 'var(--paper, #ffffff)',
      textAlign: 'center',
      boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
      pointerEvents: 'none',
      display: 'none'
    } });
    
    var popupOverlay = new ol.Overlay({
      element: popupElement,
      positioning: 'bottom-center',
      stopEvent: false,
      offset: [0, -12]
    });
    map.addOverlay(popupOverlay);

    map.on('pointermove', function(evt) {
      if (evt.dragging) {
        popupElement.style.display = 'none';
        return;
      }
      var feature = map.forEachFeatureAtPixel(evt.pixel, function(f) { return f; });
      if (feature) {
        map.getTargetElement().style.cursor = 'pointer';
        var data = feature.get('data');
        var line = data.st.count
          ? DD.money(data.st.spent) + ' spent of ' + DD.money(data.st.budget)
          : DD.money(data.st.budget) + ' budgeted';
          
        popupElement.innerHTML = '<b style="font-size:18px; display:block; margin-bottom:4px; color:var(--brand-100, #d8e7fb); font-family:var(--serif, \'Playfair Display\', serif);">' + data.place.name + '</b><span style="font-size:15px; letter-spacing: 0.05em;">' + line + '</span>';
        popupOverlay.setPosition(evt.coordinate);
        popupElement.style.display = 'block';
      } else {
        map.getTargetElement().style.cursor = '';
        popupElement.style.display = 'none';
      }
    });

    if (opts.onPick) {
      map.on('click', function(evt) {
        var feature = map.forEachFeatureAtPixel(evt.pixel, function(f) { return f; });
        if (feature) {
          opts.onPick(feature.get('data'));
        }
      });
    }
  }

  DD.map = { render: render, keyFor: keyFor, entries: entries, toScreen: function(){} };
})();
