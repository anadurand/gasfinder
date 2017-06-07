'use strict';

const Gmaps = (update) => {
  const parent = $('<div></div>');
  const mapa = $('<div class="mapa" id="map"></div>');
  const distancia = $('<div class="distancia"></div>');

  parent.append(mapa);

 $(_=>{
  //Cuando esta ready
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
    // infoWindow: {
    //   content: '<strong>Estación de gas:</strong><p>'+state.selectedStation.address+'</p>'
    // }
  });

  //Detalle de la ubicacion actual
  GMaps.geolocate({
    success: function(position) {
        map.setCenter(position.coords.latitude, position.coords.longitude);
        map.setZoom(13);
        //Funcion añade el marcador
        map.addMarker({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          title: "Posición actual",
        });
        //Traza la ruta
        map.drawRoute({
          origin: [position.coords.latitude, position.coords.longitude],
          destination: [state.selectedStation.lat, state.selectedStation.long],
          travelMode: 'driving',
          strokeColor: '#131540',
          strokeOpacity: 0.6,
          strokeWeight: 4
        });

        map.getRoutes({
          origin: [position.coords.latitude, position.coords.longitude],
          destination: [state.selectedStation.lat, state.selectedStation.long],
          callback: function(response){
              var duration = response[0].legs[0].duration.text;
              var distance = response[0].legs[0].distance.value/1000;
              distancia.append(`${distance} KM`);
              parent.append(distancia);
          }
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
