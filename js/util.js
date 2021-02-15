const getRandomNumber = (min, max, floating = 0) => {
  const randomNumber = _.random(min, max, true);
  return randomNumber.toFixed(floating);
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)];
};

export { getRandomNumber, getRandomArrayElement };