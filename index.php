<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>Custom Markers</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>

    <link rel="stylesheet" type="text/css" href="style.css" />
    <script type="module" src="index.js"></script>
  </head>
  <body>
    <p id="lat">"lat"</p>
    <p id="lng">"lng"</p>
    <div id="map"></div>
    
    <!--
      The `defer` attribute causes the callback to execute after the full HTML
      document has been parsed. For non-blocking uses, avoiding race conditions,
      and consistent behavior across browsers, consider loading using Promises.
      See https://developers.google.com/maps/documentation/javascript/load-maps-js-api
      for more information.
      -->
    <!-- key -->
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDnKEJyVKa5EUxCFp6NawfAgzDdPAiKJOc&callback=initMap"
      defer
    ></script>  
  </body>
</html>
