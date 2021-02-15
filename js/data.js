import { getRandomNumber, getRandomArrayElement } from './util.js';

const TITLES = [
  'Удивительная квартира с видом на лес',
  'Самый замечательный вид!',
  'Шикарное место',
];
  
const TYPES = [
  'palace', 
  'flat', 
  'house', 
  'bungalow',
];
  
const CHECKIN_TIMES = [
  '12:00', 
  '13:00',
  '14:00',
];
  
const CHECKOUT_TIMES = [
  '12:00', 
  '13:00',
  '14:00',
];
  
const FEATURES = [
  'wifi', 
  'dishwasher', 
  'parking', 
  'washer', 
  'elevator', 
  'conditioner',
];
  
const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];
  
const SIMILAR_AD_COUNT = 10;
  
const createAd = () => {
  return {
    author: {
      avatar: `img/avatars/user0${getRandomNumber(1, 8)}.png`,
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${getRandomNumber(35.65000, 35.70000, 5)}, ${getRandomNumber(139.70000, 139.80000, 5)}`,
      price: getRandomNumber(5000, 10000, 2),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomNumber(1, 5),
      guests: getRandomNumber(1, 5),
      checkin: getRandomArrayElement(CHECKIN_TIMES),
      checkout: getRandomArrayElement(CHECKOUT_TIMES),
      features: FEATURES.slice(getRandomNumber(1, 2), getRandomNumber(2, FEATURES.length - 1)),
      description: 'Описание',
      photos: PHOTOS.slice(getRandomNumber(0, PHOTOS.length - 1)),
    },
    location: {
      x: getRandomNumber(35.65000, 35.70000, 5),
      y: getRandomNumber(139.70000, 139.80000, 5),
    },
  };
};
  
// address c маской?
  
const similarAds = new Array(SIMILAR_AD_COUNT).fill(null).map(() => createAd());

export { similarAds };