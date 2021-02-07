const getRandomNumber = function (startOfRange, endOfRange, symbolsAfterPoint) {
  if (startOfRange < 0 || endOfRange < 0) {
  // диапазон должен быть положительным, включая ноль
    return 0;
  } else if (endOfRange <= startOfRange) {
  // реализовать логику, если "до" меньше или равно "от"
    return 0;
  } else {
    let randomNumber = Math.random() * (endOfRange - startOfRange + 1) + startOfRange;
    return randomNumber.toFixed(symbolsAfterPoint);
  }
  // возвращает случайное число с плавающей точкой
  // могут быть дробные числа 1,1 или 1,2
};

getRandomNumber(50, 60, 2);