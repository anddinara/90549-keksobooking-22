import { map } from './map.js';

const TypesOfHousing = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
};

const mapAd = document.querySelector('#map-canvas');

const template = document.querySelector('#card')
  .content
  .querySelector('.popup');

const createFeature = (array) => {
  const featuresList = document.createDocumentFragment();
  array.forEach((element) => {
    const featureElement = document.createElement('LI');
    featureElement.classList.add('popup__feature');
    featureElement.classList.add(`popup__feature--${element}`);
    featuresList.appendChild(featureElement);
  });
  return featuresList;
};

const createPhoto = (array) => {
  const photosList = document.createDocumentFragment();
  array.forEach((element) => {
    const photoElement = document.createElement('IMG');
    photoElement.classList.add('popup__photo');
    photoElement.width = '45';
    photoElement.height = '40';
    photoElement.alt = 'Фотография жилья';
    photoElement.src = element;
    photosList.appendChild(photoElement);
  });
  return photosList;
};

const renderSimilarList = (similarAds) => {
  similarAds.forEach((ad) => {

  const icon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat: ad.location.lat,
      lng: ad.location.lng,
    },
    {
      icon,
    },
  );

  const adElement = template.cloneNode(true);
  adElement.querySelector('.popup__title').textContent =
    ad.offer.title;
  adElement.querySelector('.popup__text--address').textContent =
    ad.offer.address;
  adElement.querySelector('.popup__text--price').textContent =
    `${ad.offer.price} ₽/ночь`;
  adElement.querySelector('.popup__type').textContent =
    TypesOfHousing[ad.offer.type];
  adElement.querySelector('.popup__text--capacity').textContent =
    `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
  adElement.querySelector('.popup__text--time').textContent =
    `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;

  const features = adElement.querySelector('.popup__features');
  features.innerHTML = '';
  features.appendChild(createFeature(ad.offer.features));

  adElement.querySelector('.popup__description').textContent =
    ad.offer.description;

  const photos = adElement.querySelector('.popup__photos');
  photos.innerHTML = '';
  photos.appendChild(createPhoto(ad.offer.photos));

  adElement.querySelector('.popup__avatar').src = ad.author.avatar;

  marker
    .addTo(map)
    .bindPopup(adElement);
  });
};

export { renderSimilarList };

// Если данных для заполнения не хватает, соответствующий блок в карточке скрывается.

