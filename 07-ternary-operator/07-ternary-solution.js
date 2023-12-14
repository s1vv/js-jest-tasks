// Для выполнения заданий используйте стрелочную функцию и тернарные операторы

// Задача 1: Проверка на четность
// Вернуть "even", если число четное, и "odd", если нечетное.
const checkEvenOdd = (num) => (num % 2 === 0 ? 'even' : 'odd');

// Задача 2: Определение положительного или отрицательного числа
// Вернуть "positive", если число положительное, и "negative", если отрицательное.
const checkPositiveNegative = (num) => (num >= 0 ? 'positive' : 'negative');

// Задача 3: Проверка на делимость на 5
// Вернуть "divisible by 5", если число делится на 5, и "not divisible by 5" в противном случае.
const checkDivisibilityBy5 = (num) => (num % 5 === 0 ? 'divisible by 5' : 'not divisible by 5');

// Задача 4: Определение наименьшего числа
// Вернуть наименьшее из двух чисел.
const findMin = (a, b) => (a < b ? a : b);

// Задача 5: Определение пола
// Вернуть строку "Male", "Female" или "Unknown" в зависимости от значения переменной 
// gender принимает 'M' ('Male'), 'F' ('Female') иначе 'Unknown'
const determineGender = (gender) =>
  gender === 'M' ? 'Male' :
  gender === 'F' ? 'Female' :
  'Unknown';

// Задача 6: Проверка на равенство чисел
// Вернуть "equal", если числа равны, и "not equal" в противном случае.
const checkEquality = (a, b) => (a === b ? 'equal' : 'not equal');

module.exports = {
  checkEvenOdd,
  checkPositiveNegative,
  checkDivisibilityBy5,
  findMin,
  determineGender,
  checkEquality,
};
