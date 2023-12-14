const { squareNumber, doubleNumber, incrementNumber } = require('./03-func-solution')

describe('Simple function call tests', () => {
  test('Task 1: squareNumber should square a number', () => {
    expect(squareNumber(5)).toBe(25);
    expect(squareNumber(0)).toBe(0);
    expect(squareNumber(-3)).toBe(9);
  });

  test('Task 2: doubleNumber should double a number', () => {
    expect(doubleNumber(8)).toBe(16);
    expect(doubleNumber(-4)).toBe(-8);
    expect(doubleNumber(0)).toBe(0);
  });

  test('Task 3: incrementNumber should increment a number by 1', () => {
    expect(incrementNumber(5)).toBe(6);
    expect(incrementNumber(-3)).toBe(-2);
    expect(incrementNumber(0)).toBe(1);
  });
});