'use strict';

const Gmaps = (update) => {
  const parent = $('<div></div>');
  const mapa = $('<div class="mapa" id="map"></div>');

  parent.append(mapa);

 $(_=>{
    //cuando esta ready
  //Crea el mapa
  const map = new GMaps({
    div: '#map',
    lat: state.selectedStation.lat,
    lng: state.selectedStation.long
  });
  //Añade marcador de la estacion seleccionada
  map.addMarker({
    lat: state.selectedStation.lat,
    lng: state.selectedStation.long,
    title: state.selectedStation.name,
    infoWindow: {
      content: '<strong>Estacion de gas:</strong><p>'+state.selectedStation.address+'</p>'
    }
  });

  //detalle de la ubicacion actual
  GMaps.geolocate({
    success: function(position) {
        map.setCenter(position.coords.latitude, position.coords.longitude);
        map.setZoom(13);
        //funcion añade el marcador
        map.addMarker({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          title: "Posición actual",
        });
        //traza la ruta
        map.drawRoute({
          origin: [position.coords.latitude, position.coords.longitude],
          destination: [state.selectedStation.lat, state.selectedStation.long],
          travelMode: 'driving',
          strokeColor: '#131540',
          strokeOpacity: 0.6,
          strokeWeight: 4
        });

    },
    error: function(error) {
       alert('Geolocalización fallada: '+error.message);
     },
     not_supported: function() {
       alert("Tu navegador no soporta la API geolocation");
     }
  });

});
  return parent;
}
