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
    /* declutter drops any label that would collide with one already drawn, so
       the map thins itself out instead of stacking slips on top of each other. */
    var vectorLayer = new ol.layer.Vector({ 
      source: vectorSource, 
      zIndex: 2,
      declutter: true,
      style: function(feature, resolution) {
        var data = feature.get('data');
        var currentZoom = map ? map.getView().getZoomForResolution(resolution) : 2;
        /* Both maps open at a zoom where every label would fit at once, which is
           what made India unreadable. Hold them back until you have leaned in. */
        var nameFrom = kind === 'india' ? 6 : 4.2;
        var detailFrom = kind === 'india' ? 7.2 : 5.4;
        var showText = currentZoom >= nameFrom;
        var showDetail = currentZoom >= detailFrom;
        
        var markerColor = feature.get('markerColor');
        var pinSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="36" viewBox="0 0 24 36"><path fill="' + markerColor + '" stroke="#fff" stroke-width="2" d="M12,1 C5.925,1 1,5.925 1,12 C1,20.25 12,35 12,35 C12,35 23,20.25 23,12 C23,5.925 18.075,1 12,1 Z"/><circle cx="12" cy="12" r="4.5" fill="#fff"/></svg>';
        var pinSrc = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(pinSvg);

        var styles = [
          new ol.style.Style({
            image: new ol.style.Icon({
              src: pinSrc,
              anchor: [0.5, 1],
              scale: 0.9
            })
          })
        ];
        
        if (showText) {
          var label = data.place.name;
          if (showDetail) {
            label += '\n' + DD.plural(data.place.days, 'day')
              + '  \u00b7  ' + DD.money(data.st.budget, { compact: true });
            if (data.st.count) label += '\nspent ' + DD.money(data.st.spent, { compact: true });
          }

          styles.push(new ol.style.Style({
            text: new ol.style.Text({
              text: label,
              font: (showDetail ? '12px' : '13px') + ' "Yeseva One", serif',
              fill: new ol.style.Fill({ color: '#ffffff' }),
              backgroundFill: new ol.style.Fill({ color: 'rgba(0, 22, 58, 0.88)' }),
              backgroundStroke: new ol.style.Stroke({ color: '#ffffff', width: 1.2 }),
              padding: [5, 9, 5, 9],
              offsetY: -46,
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


    /* Hovering a pin used to repeat what the label already said. It now offers
       the two things you would actually want: open the place, or log a spend. */
    var popupElement = el('div', { class: 'map-pop' });

    var popupOverlay = new ol.Overlay({
      element: popupElement,
      positioning: 'bottom-center',
      stopEvent: true,
      offset: [0, -34]
    });
    map.addOverlay(popupOverlay);

    var hideTimer = null;
    var openFor = null;

    function showPop(data) {
      clearTimeout(hideTimer);
      if (openFor === data) { popupElement.style.display = 'block'; return; }
      openFor = data;

      var st = data.st;
      DD.clear(popupElement);
      popupElement.appendChild(el('b', { text: data.place.name }));
      popupElement.appendChild(el('span', {
        text: DD.plural(data.place.days, 'day') + '  ·  ' + DD.money(st.budget, { compact: true })
          + (st.count ? '  ·  ' + DD.money(st.spent, { compact: true }) + ' spent' : '')
      }));
      popupElement.appendChild(el('div', { class: 'map-pop-acts' }, [
        el('button', {
          class: 'btn xs pri',
          onclick: function (ev) {
            ev.stopPropagation();
            hidePop();
            if (opts.onPick) opts.onPick(data);
          }
        }, 'Open'),
        el('button', {
          class: 'btn xs',
          onclick: function (ev) {
            ev.stopPropagation();
            hidePop();
            DD.logForm({ trip: data.trip, placeId: data.place.id });
          }
        }, [DD.icon('plus', 12), 'Log'])
      ]));

      var pt = data.__coord || null;
      if (pt) popupOverlay.setPosition(pt);
      popupElement.style.display = 'block';
    }

    function hidePop() {
      popupElement.style.display = 'none';
      openFor = null;
    }
    function scheduleHide() {
      clearTimeout(hideTimer);
      hideTimer = setTimeout(hidePop, 280);
    }

    popupElement.addEventListener('mouseenter', function () { clearTimeout(hideTimer); });
    popupElement.addEventListener('mouseleave', scheduleHide);

    function featureAt(pixel) {
      return map.forEachFeatureAtPixel(pixel, function (f) { return f; }, { hitTolerance: 6 });
    }

    map.on('pointermove', function (evt) {
      if (evt.dragging) { hidePop(); return; }
      var feature = featureAt(evt.pixel);
      if (feature) {
        map.getTargetElement().style.cursor = 'pointer';
        var data = feature.get('data');
        data.__coord = feature.getGeometry().getCoordinates();
        showPop(data);
      } else {
        map.getTargetElement().style.cursor = '';
        scheduleHide();
      }
    });

    /* A tap does the same thing, so touch gets the buttons too. */
    map.on('click', function (evt) {
      var feature = featureAt(evt.pixel);
      if (!feature) { hidePop(); return; }
      var data = feature.get('data');
      data.__coord = feature.getGeometry().getCoordinates();
      showPop(data);
    });
  }

  DD.map = { render: render, keyFor: keyFor, entries: entries, toScreen: function(){} };
})();
