// В файле loopTasks.test.js

const {
  printNumbers,
  calculateSum,
  countEvenNumbers,
  calculateSquares,
  doubleArray,
  joinObjectValues,
} = require('./08-for-solution');

describe('Loop tasks tests', () => {
  // ... тесты для каждой задачи ...

  test('Task 1: Print numbers from 1 to n', () => {
    // Проверка, что функция возвращает корректную строку чисел.
    expect(printNumbers(5)).toBe('1 2 3 4 5');
    expect(printNumbers(3)).toBe('1 2 3');
  });

  test('Task 2: Calculate sum of numbers from 1 to n', () => {
    // Проверка, что функция возвращает корректную сумму чисел.
    expect(calculateSum(5)).toBe(15);
    expect(calculateSum(3)).toBe(6);
  });

  test('Task 3: Count even numbers from 1 to n', () => {
    // Проверка, что функция возвращает корректное количество четных чисел.
    expect(countEvenNumbers(5)).toBe(2);
    expect(countEvenNumbers(7)).toBe(3);
  });

  test('Task 4: Calculate squares of numbers from 1 to n', () => {
    // Проверка, что функция возвращает корректный объект с квадратами чисел.
    expect(calculateSquares(4)).toEqual({ 1: 1, 2: 4, 3: 9, 4: 16 });
    expect(calculateSquares(2)).toEqual({ 1: 1, 2: 4 });
  });

  test('Task 5: Double each element in the array', () => {
    // Проверка, что функция возвращает новый массив с удвоенными элементами.
    expect(doubleArray([1, 2, 3])).toEqual([2, 4, 6]);
    expect(doubleArray([5, 10, 15])).toEqual([10, 20, 30]);
  });

  test('Task 6: Join values of object properties', () => {
    // Проверка, что функция возвращает корректную строку из значений свойств объекта.
    expect(joinObjectValues({ a: 'apple', b: 'banana', c: 'cherry' })).toBe('apple,banana,cherry');
    expect(joinObjectValues({ x: 10, y: 20, z: 30 })).toBe('10,20,30');
  });
});
