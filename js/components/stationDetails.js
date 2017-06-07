'use strict';
const stationDetail = (update) => {
  const parent = $('<div class="station-detail"></div>');
  const h2 = $('<h2 class="name-station">'+ state.selectedStation.name + '</h2>');
  const hr = $('<hr>');
  const pAddress = $('<p class="direccion">' + state.selectedStation.address + '</p>');
  const lista = $('<ul class="products-detail"></ul>');

  $(state.selectedStation.products).each( (index, producto) => {
    const item = $('<li>'+ producto + '</li>');
    lista.append(item);
  });
  parent.append(h2);
  parent.append(hr);
  parent.append(pAddress);
  parent.append(lista);

  return parent;
}
