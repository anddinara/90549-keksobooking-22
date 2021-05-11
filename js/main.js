const getRandomNumber = (min, max, floating = 0) => {
  if (min < 0 || max < 0) {
    return 0;
  } else if (max < min) {
    return min;
  } else {
    const randomNumber = _.random(min, max, true);
    return randomNumber.toFixed(floating);
  }
};
