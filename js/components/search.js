'use strict';

const stationItem = (station, update) => {
  const item = $('<div class="station"></div>');
  const h3 = $('<h3 class="title">'+ station.name +'</h3>');
  const icon = $('<a href="#" class="fa fa-map icon-map"></a>');
  const pAddress = $('<p clas="address">'+ station.address + '</p>');
  const pDistrict = $('<p class="district">' + station.district + '</p>');

  item.append(h3);
  item.append(pAddress);
  item.append(pDistrict);
  item.append(icon);

  icon.on("click", (e) => {
    e.preventDefault();
    state.selectedStation = station;
    update();
  });

  return item;
}

const reRender = (container, filterStations, update) => {
  container.empty();
  //console.log(container);
  filterStations.forEach((station) => {
    container.append(stationItem(station, update));
  });
}

const Search = (update) => {
  const parent = $('<div></div>');
  const div = $('<div class="container-search"></div>');
  const search = $('<div class="search"></div>');
  const input = $('<input type="text" class="input" placeholder="Ingresar distrito">');
  const icon = $('<i class="fa fa-search icono"></i>');
  const containerStations = $('<div class="container-stations"></div>');

  input.on("keyup", (e) => {
    //e.preventDefault();
    const filterStations = filterByDistrict(state.stations, $(e.currentTarget).val());
    reRender(containerStations, filterStations,update);
  });
  search.append(icon);
  search.append(input);
  parent.append(search);
  parent.append(containerStations);

  return parent;
}
