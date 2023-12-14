// В файле destructuringTasks.js

// Задача 1: Деструктуризация массива, получение первого и второго элемента
function getFirstAndSecondElements(arr) {
  const [first, second] = arr;
  return { first, second };
}

// Задача 2: Деструктуризация объекта, получение значений свойств
// вернуть свойства переданного объекта name, age, gender
function getObjectValues(obj) {
  const { name, age, gender } = obj;
  return { name, age, gender };
}

// Задача 3: Деструктуризация параметров функции
// в функцию передаются объекты со свойствами width, height
// деструктурировать их вернуть произведение значением
function calculateRectangleArea({ width, height }) {
  return width * height;
}

// Задача 4: Деструктуризация массива в функции
// вернуть произведение первого и второго элемента в массиве
function multiplyFirstTwo([first, second]) {
  return first * second;
}

// Задача 5: Деструктуризация объекта в параметрах функции
// в функцию передаются объекты со свойствами name, age
// с использованием шаблонных строк (template strings) 
// <Hello, "name"! You are "age" years old.>
function greetPerson({ name, age }) {
  return `Hello, ${name}! You are ${age} years old.`;
}

// Задача 6: Деструктуризация массива и объекта в функции
// в функцию передается массив с двумя числами и объект со свойствами x, y 
// возвратить объект у которого св-во <sum> это сумма чисел из массива
// а свойство <product> произведение значений свойств <x> и <y> объекта
function combineArraysAndObject([a, b], { x, y }) {
  return { sum: a + b, product: x * y }
}

// Ниже еще вариант решения задачи 6
function processArrayAndObject(arr, obj) {
  const [num1, num2] = arr;
  const { x, y } = obj;

  const sum = num1 + num2;
  const product = x * y;

  return { sum, product };
}

// Пример использования функции
const inputArray = [3, 5];
const inputObject = { x: 2, y: 4 };

const result = processArrayAndObject(inputArray, inputObject);
console.log(result);
// Вывод: { sum: 8, product: 8 }

// Задача 7: Деструктуризация объекта внутри объекта
function getNestedObjectValues({ outer: { inner } }) {
  return inner;
}

// Задача 8: Деструктуризация в параметрах функции с значениями по умолчанию
// функции параметры заданы по умолчанию, первый firstName имеет значение 'John'
// второй 'Doe', верните строку "firstName lastName"
function getFullName({ firstName = 'John', lastName = 'Doe' }) {
  return `${firstName} ${lastName}`;
}

// Задача 9: Деструктуризация массива и объекта с использованием rest
// в функцию передается массив и объект со свойствами. 
// Функция возвращает объект со следующими свойствами:
// first: 1, (один элемент массива)
// rest: [2, 3, 4], (остаток массива)
// x: 5, (одно свойство)
// restProps: { y: 2, z: 8 }, (остаток свойств)
function getRemainingElements([first, ...rest], { x, ...restProps }) {
  return { first, rest, x, restProps };
}

module.exports = {
  getFirstAndSecondElements,
  getObjectValues,
  calculateRectangleArea,
  multiplyFirstTwo,
  greetPerson,
  combineArraysAndObject,
  getNestedObjectValues,
  getFullName,
  getRemainingElements,
};
