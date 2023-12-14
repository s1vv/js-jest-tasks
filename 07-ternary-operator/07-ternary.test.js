// В файле ternaryOperatorTasks.test.js

const {
  checkEvenOdd,
  checkPositiveNegative,
  checkDivisibilityBy5,
  findMin,
  determineGender,
  checkEquality,
} = require('./07-ternary-tasks');

describe('Ternary Operator tasks tests', () => {
  // ... тесты для каждой задачи с использованием тернарных операторов ...

  test('Task 1: Check even or odd', () => {
    expect(checkEvenOdd(4)).toBe('even');
    expect(checkEvenOdd(7)).toBe('odd');
  });

  test('Task 2: Check positive or negative', () => {
    expect(checkPositiveNegative(10)).toBe('positive');
    expect(checkPositiveNegative(-5)).toBe('negative');
  });

  test('Task 3: Check divisibility by 5', () => {
    expect(checkDivisibilityBy5(25)).toBe('divisible by 5');
    expect(checkDivisibilityBy5(12)).toBe('not divisible by 5');
  });

  test('Task 4: Find the minimum of two numbers', () => {
    expect(findMin(8, 3)).toBe(3);
    expect(findMin(-2, 7)).toBe(-2);
  });

  
  test('Task 5: Determine gender', () => {
    // Проверка, что функция возвращает корректный пол в зависимости от значения переменной gender.
    expect(determineGender('M')).toBe('Male');
    expect(determineGender('F')).toBe('Female');
    expect(determineGender('O')).toBe('Unknown');
  });
  
  test('Task 6: Check equality of two numbers', () => {
    expect(checkEquality(5, 5)).toBe('equal');
    expect(checkEquality(10, 20)).toBe('not equal');
  });
});
