const adForm = document.querySelector('.ad-form');
const adFieldsets = adForm.querySelectorAll('fieldset');
const mapForm = document.querySelector('.map__filters');
const mapFilters = mapForm.querySelectorAll('select');
const mapFeatures = mapForm.querySelector('.map__features');
const coordinatesInfo = document.querySelector('#address');

const getDisabledForm = () => {
  adForm.classList.add('ad-form--disabled');
  adFieldsets.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });

  mapForm.classList.add('map__filters--disabled');
  mapFilters.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
  mapFeatures.setAttribute('disabled', 'disabled');
};

getDisabledForm();

const getActiveForm = () => {
  adForm.classList.remove('ad-form--disabled');
  adFieldsets.forEach((element) => {
    element.removeAttribute('disabled', 'disabled');
  });

  mapForm.classList.remove('map__filters--disabled');
  mapFilters.forEach((element) => {
    element.removeAttribute('disabled', 'disabled');
  });
  mapFeatures.removeAttribute('disabled', 'disabled');
};

const map = L.map('map-canvas')
  .on('load', () => {
    getActiveForm();
  })
  .setView({
    lat: 35.68170,
    lng: 139.75388,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.68170,
    lng: 139.75388,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);
// валидно ли координаты Токио по умолчания?
coordinatesInfo.value = `35.68170, 139.75388`;

mainPinMarker.on('moveend', (evt) => {
  coordinatesInfo.value =
    `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

export { map };

// удаление метки mainPinMarker.remove();
