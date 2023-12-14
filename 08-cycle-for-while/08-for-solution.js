// В файле loopTasks.js

// Задача 1: Функция принимает число
// Вернуть строку, содержащую числа от 1 до n, разделенные пробелами.
const printNumbers = (n) => {
  let result = '';
  for (let i = 1; i <= n; i++) {
    result += i + ' ';
  }
  return result.trim();
};

// Задача 2: Функция принимает число (n)
// Вернуть сумму чисел от 1 до n.
const calculateSum = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// Задача 3: Функция принимает число (n)
// Вернуть количество четных чисел от 1 до n.
const countEvenNumbers = (n) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      count++;
    }
  }
  return count;
};

// Задача 4: Функция принимает число (n)
// Вернуть объект, где ключи - числа от 1 до n, а значения - их квадраты.
const calculateSquares = (n) => {
  const squares = {};
  for (let i = 1; i <= n; i++) {
    squares[i] = i * i;
  }
  return squares;
};

// Задача 5: Удвоить каждый элемент массива, внутри функции лучше использовать forEach
// Вернуть новый массив, в котором каждый элемент умножен на 2.
const doubleArray = (arr) => {
  const result = [];
  arr.forEach((num) => {
    result.push(num * 2);
  });
  return result;
};

// Задача 6: Объединить значения свойств объекта в строку, внутри функции лучше использовать forEach
// Вернуть строку, содержащую все значения свойств объекта, разделенные запятой.
const joinObjectValues = (obj) => {
  let result = '';
  Object.values(obj).forEach((value) => {
    result += value + ',';
  });
  return result.slice(0, -1); // Удаляем последнюю запятую
};

module.exports = {
  printNumbers,
  calculateSum,
  countEvenNumbers,
  calculateSquares,
  doubleArray,
  joinObjectValues,
};
