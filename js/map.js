const adForm = document.querySelector('.ad-form');
const adFieldsets = adForm.querySelectorAll('fieldset');
const mapForm = document.querySelector('.map__filters');
const mapFilters = mapForm.querySelectorAll('select');
const mapFeatures = mapForm.querySelector('.map__features');


const disabledForm = () => {
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

disabledForm();
