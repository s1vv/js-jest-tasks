// В файле destructuringTasks.js

// Задача 1: Деструктуризация массива, получение первого и второго элемента
function getFirstAndSecondElements(arr) {
  
  return ;
}

// Задача 2: Деструктуризация объекта, получение значений свойств
// вернуть свойства переданного объекта name, age, gender
function getObjectValues(obj) {
 
  return ;
}

// Задача 3: Деструктуризация параметров функции
// в функцию передаются объекты со свойствами width, height
// деструктурировать их вернуть произведение значением
function calculateRectangleArea() {
  return ;
}

// Задача 4: Деструктуризация массива в функции
// вернуть произведение первого и второго элемента в массиве
function multiplyFirstTwo() {
  return ;
}

// Задача 5: Деструктуризация объекта в параметрах функции
// в функцию передаются объекты со свойствами name, age
// с использованием шаблонных строк (template strings, f-строки в python) 
// <Hello, "name"! You are "age" years old.>
function greetPerson() {
  return ;
}

// Задача 6: Деструктуризация массива и объекта в функции
// в функцию передается массив с двумя числами и объект со свойствами x, y 
// возвратить объект у которого св-во <sum> это сумма чисел из массива
// а свойство <product> произведение значений свойств <x> и <y> объекта
function combineArraysAndObject() {
  return ;
}

// Задача 7: Деструктуризация объекта внутри объекта
function getNestedObjectValues() {
  return ;
}

// Задача 8: Деструктуризация в параметрах функции с значениями по умолчанию
// функции параметры заданы по умолчанию, первый firstName имеет значение 'John'
// второй 'Doe', верните строку "firstName lastName"
function getFullName() {
  return ;
}

// Задача 9: Деструктуризация массива и объекта с использованием rest
// в функцию передается массив и объект со свойствами. 
// Функция возвращает объект со следующими свойствами:
// first: 1, (один элемент массива)
// rest: [2, 3, 4], (остаток массива)
// x: 5, (одно свойство)
// restProps: { y: 2, z: 8 }, (остаток свойств)
function getRemainingElements() {
  return ;
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
