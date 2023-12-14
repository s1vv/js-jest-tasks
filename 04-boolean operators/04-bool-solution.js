// Задача 1: Проверка числа на четность и положительность
// объявите функцию isEvenAndPositive
function isEvenAndPositive(num) {
  return (num % 2 === 0 && num > 0);
}

// Задача 2: Проверка строки на длину и наличие определенного символа
// объявите функцию hasSymbolAndLength
function hasSymbolAndLength(str, symbol) {
  return (str.length > 0 && str.includes(symbol));
}

// Задача 3: Проверка, является ли число положительным или отрицательным
// объявите функцию isPositiveOrNegative
function isPositiveOrNegative(num) {
  return (num > 0 || num < 0);
}

// Задача 4: Проверка, является ли строка пустой или состоит только из пробелов
// объявите функцию isEmptyOrWhitespace
function isEmptyOrWhitespace(input) {
  return !input.trim();
}

// Задача 5: Проверка, что число не делится на 3 и 5 одновременно
// объявите функцию isNotDivisibleByThreeAndFive
function isNotDivisibleByThreeAndFive(num) {
  return (num % 3 !== 0 && num % 5 !== 0);
}

// Задача 6: Проверка, что строка состоит только из букв и не пуста
// объявите функцию isAlphabeticAndNotEmpty
function isAlphabeticAndNotEmpty(str) {
  return (/^[a-zA-Z]+$/gm.test(str) && str.length > 0);
}

// Задача 7: Проверка, что число либо положительное, либо ноль
// объявите функцию isPositiveOrZero
function isPositiveOrZero(num) {
  return num >= 0;
}

// Задача 8: Проверка, что хотя бы одна из координат (x, y) положительна
// объявите функцию isAnyCoordinatePositive
function isAnyCoordinatePositive(x, y) {
  return (x > 0 || y > 0);
}

// Задача 9: Проверка, что строка не является ни числом, ни пустой
// объявите функцию isNotNumberAndNotEmpty
function isNotNumberAndNotEmpty(input) {
  return (isNaN(input) && input.length > 0);
}

console.log(''.length)
module.exports = {
  isEvenAndPositive,
  hasSymbolAndLength,
  isPositiveOrNegative,
  isEmptyOrWhitespace,
  isNotDivisibleByThreeAndFive,
  isAlphabeticAndNotEmpty,
  isPositiveOrZero,
  isAnyCoordinatePositive,
  isNotNumberAndNotEmpty,
};
