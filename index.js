let map;
let features;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat:-33.91722, lng:151.23064},
    zoom: 16,
  });

  //google.maps.event.addListener(map, "click", features.push({position: new google.maps.LatLng(-33.91821, 151.2363), type: "info",}));

  //アイコン画像を入れた配列
  const iconBase =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
  const icons = {
    parking: {
      icon: iconBase + "parking_lot_maps.png",
    },
    library: {
      icon: iconBase + "library_maps.png",
    },
    info: {
      icon: iconBase + "info-i_maps.png",
    },
  };
  //マップの位置を入れた配列
  features = [
    {
      position: new google.maps.LatLng(-33.91721, 151.2263),
      type: "info",
      content:'インフォメーションなのでしょうか？',
    },
    {
      position: new google.maps.LatLng(-33.91539, 151.2282),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91747, 151.22912),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.9191, 151.22907),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91725, 151.23011),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91872, 151.23089),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91784, 151.23094),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91682, 151.23149),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.9179, 151.23463),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91666, 151.23468),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.916988, 151.23364),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
      //position: new google.maps.LatLng(mapsMouseEvent.latLng).
      //position: mapsMouseEvent.latLng,
      type: "library",
    },
    
  ];
  //cmaker();
  //map.addListener("click", function(){features.push({position: new google.maps.LatLng(-33.91821, 151.2363), type: "info",})});
  //google.maps.event.addListener(map, "click", function(){features.push({position: new google.maps.LatLng(-33.91821, 151.2363), type: "info",})});
  map.addListener("click", (e) => {
    placeMarkerAndPanTo(e.latLng, map);
    //dispLatLng(e.latlng);
  });
  //マーカーの追加
  //features.push({position: new google.maps.LatLng(-33.91821, 151.2363), type: "info",});


  // Create markers.
  for (let i = 0; i < features.length; i++) {
    let marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      content:[features[i].content].content,
      map: map,
      draggable:true,
    });
  }

  function placeMarkerAndPanTo(latLng, map) {
    features.push({position: new google.maps.LatLng(latLng), type: "info",});

    let marker = new google.maps.Marker({
      position: features[features.length -1].position,
      icon: icons[features[features.length -1].type].icon,
      content:[features[features.length -1].content].content,
      map: map,
      draggable:true,
    });

    //クリックした場所の座標を表示する
    document.getElementById("lat").innerHTML = latLng.lat();
    document.getElementById("lng").innerHTML = latLng.lng();

    console.log(features);

  
  }

  /*
  function placeMarkerAndPanTo(latLng, map) {
    new google.maps.Marker({
      position: latLng,
      map: map,
    });
    map.panTo(latLng);
  }
  */
  
}


//google.maps.event.addListener(map, "click", features.push({position: new google.maps.LatLng(-33.91821, 151.2363), type: "info",}));

function cmaker(){
  //features.push({position: new google.maps.LatLng(-33.91821, 151.2363), type: "info",});
  map.addListener("click", function(){features.push({position: new google.maps.LatLng(-33.91821, 151.2363), type: "info",})});
}
//google.maps.event.addListener(map, "click", features.push({position: new google.maps.LatLng(-33.91821, 151.2363), type: "info",}));
window.initMap = initMap;

