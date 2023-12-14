// В файле destructuringTasks.test.js

const {
  getFirstAndSecondElements,
  getObjectValues,
  calculateRectangleArea,
  multiplyFirstTwo,
  greetPerson,
  combineArraysAndObject,
  getNestedObjectValues,
  getFullName,
  getRemainingElements,
} = require('./06-destruct-tasks');

describe('Destructuring tasks tests', () => {
  // ... тесты для каждой задачи по деструктуризации ...

  test('Task 1: Destructure array, get first and second elements', () => {
    expect(getFirstAndSecondElements([1, 2, 3])).toEqual({ first: 1, second: 2 });
  });

  test('Task 2: Destructure object, get values of properties', () => {
    expect(getObjectValues({ name: 'Alice', age: 25, gender: 'female' })).toEqual({
      name: 'Alice',
      age: 25,
      gender: 'female',
    });
  });

  test('Task 3: Destructure function parameters', () => {
    expect(calculateRectangleArea({ width: 10, height: 5 })).toBe(50);
  });

  test('Task 4: Destructure array in function', () => {
    expect(multiplyFirstTwo([3, 4, 5])).toBe(12);
  });

  test('Task 5: Destructure object in function parameters', () => {
    expect(greetPerson({ name: 'Bob', age: 30 })).toBe('Hello, Bob! You are 30 years old.');
  });

  test('Task 6: Destructure array and object in function', () => {
    expect(combineArraysAndObject([2, 3], { x: 5, y: 2 })).toEqual({ sum: 5, product: 10 });
  });

  test('Task 7: Destructure nested object', () => {
    expect(getNestedObjectValues({ outer: { inner: 'value' } })).toBe('value');
  });

  test('Task 8: Destructure with default values in function parameters', () => {
    expect(getFullName({ firstName: 'Alice' })).toBe('Alice Doe');
  });

  test('Task 9: Destructure array and object with rest', () => {
    expect(getRemainingElements([1, 2, 3, 4], { x: 5, y: 2, z: 8 })).toEqual({
      first: 1,
      rest: [2, 3, 4],
      x: 5,
      restProps: { y: 2, z: 8 },
    });
  });
});
