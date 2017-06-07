'use strict';


// GMaps.geolocate({
//   success: function(position) {
//     map.setCenter(position.coords.latitude, position.coords.longitude);
//   },
//   error: function(error) {
//     alert('Geolocation failed: '+error.message);
//   },
//   not_supported: function() {
//     alert("Your browser does not support geolocation");
//   },
//
// });

const ShowMap = (station) =>{
  const map = new GMaps({
    div: '#map',
    lat: -12.043333,
    lng: -77.028333
  })
  // var myLatLng = {lat: -12.043333, lng: -77.028333};

  GMaps.geolocate({
  success: function(position) {
    map.setCenter(position.coords.latitude, position.coords.longitude);
    map.setZoom(13);
      map.addMarker({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        title: "position actual",
        click: function(e) {
          alert('stations');
        }
      });
      map.drawRoute({
        origin: [position.coords.latitude, position.coords.longitude],
        destination: [state.selectedStation.lat, state.selectedStation.long],
        travelMode: 'driving',
      });
      map.addMarker({
        lat: state.selectedStation.lat,
        lng: state.selectedStation.long,
        title: state.selectedStation.name +"\n"+ state.selectedStation.address,
        click: function(e) {
          alert('stations');
        }
      });
    },
  });

const Gmaps = (update) => {
  const parent = $('<div></div>');
  const mapa = $('<div class="mapa" id="map"></div>');

  parent.append(mapa);

  return parent;

}
