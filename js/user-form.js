// import { coordinatesInfo, mainPinMarker } from './map.js'

const adForm = document.querySelector('.ad-form');
const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const templateError = document.querySelector('#error').content.querySelector('.error');
const mainElement = document.querySelector('main');

const clearForm = () => {
  // сбросить фильтрацию?
  // сбросить метку
  // сбросить аватарку
  adForm.querySelector('#title').value = '';
  // coordinatesInfo.value = `35.68170, 139.75388`;
  adForm.querySelector('#type').value = 'flat';
  adForm.querySelector('#price').value = '';
  adForm.querySelector('#timein').value = '12:00';
  adForm.querySelector('#timeout').value = '12:00';
  adForm.querySelector('#room_number').value = '1';
  adForm.querySelector('#capacity').value = '3';
  adForm.querySelectorAll('.feature__checkbox').forEach((input) => input.checked = false);
  adForm.querySelector('#description').value = '';
  // сбросить фотографии
};

const showAlertSuccess = () => {
  const alertSuccess = templateSuccess.cloneNode(true);
  mainElement.appendChild(alertSuccess);
};


const showAlertError = () => {
  const alertError = templateError.cloneNode(true);
  mainElement.appendChild(alertError);
};

adForm.addEventListener('reset', (evt) => {
  evt.preventDefault();
  clearForm();
});

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        showAlertSuccess();
        clearForm();
      } else {
        showAlertError();
      }
    })
    .catch(() => {
      showAlertError();
    });

});
