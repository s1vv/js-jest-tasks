// Задача 1: Получение уникальных элементов массива
function getUniqueElements(arr) {
  return Array.from(new Set(arr));
}

// Задача 2: Поиск максимального элемента в массиве
function findMaxElement(arr) {
  return Math.max(...arr);
}

// Задача 3: Вычисление суммы элементов массива
function calculateArraySum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Задача 4: Фильтрация положительных чисел из массива
function filterPositiveNumbers(arr) {
  return arr.filter(num => num > 0);
}

// Задача 5: Преобразование всех строк в массиве в верхний регистр
function convertToUpperCase(arr) {
  return arr.map(str => str.toUpperCase());
}

// Задача 6: Проверка наличия определенного элемента в массиве
function containsElement(arr, element) {
  return arr.includes(element);
}

// Задача 7: Удаление дубликатов из массива
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

// Задача 8: Сортировка массива по убыванию
function sortDescending(arr) {
  return arr.slice().sort((a, b) => b - a);
}

// Задача 9: Объединение двух массивов
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

// Задача 10: Поиск индекса элемента в массиве
function findElementIndex(arr, element) {
  return arr.indexOf(element);
}

// Задача 11: Удаление последнего элемента из массива
function removeLastElement(arr) {
  arr.pop();
  return arr;
}

// Задача 12: Замена определенного элемента в массиве
function replaceElement(arr, index, newValue) {
  arr[index] = newValue;
  return arr;
}

// Задача 13: Перевернуть каждое слово в строке, "кит" -> "тик"
function reverseWordsInString(str) {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

// Задача 14: Отфильтровать элементы массива, оставив только те, которые встречаются более одного раза
function filterDuplicates(arr) {
  const counts = {};
  return arr.filter(element => (counts[element] = (counts[element] || 0) + 1) === 2);
}

module.exports = {
  getUniqueElements,
  findMaxElement,
  calculateArraySum,
  filterPositiveNumbers,
  convertToUpperCase,
  containsElement,
  removeDuplicates,
  sortDescending,
  mergeArrays,
  findElementIndex,
  removeLastElement,
  replaceElement,
  reverseWordsInString,
  filterDuplicates,
};
