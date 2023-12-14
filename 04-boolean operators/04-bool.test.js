const {
  isEvenAndPositive,
  hasSymbolAndLength,
  isPositiveOrNegative,
  isEmptyOrWhitespace,
  isNotDivisibleByThreeAndFive,
  isAlphabeticAndNotEmpty,
  isPositiveOrZero,
  isAnyCoordinatePositive,
  isNotNumberAndNotEmpty,
} = require('./04-bool-tasks');

describe('Logical operators tests', () => {
  test('Task 1: Check if a number is even and positive', () => {
    expect(isEvenAndPositive(6)).toBe(true);
    expect(isEvenAndPositive(-3)).toBe(false);
    expect(isEvenAndPositive(0)).toBe(false);
  });

  test('Task 2: Check if a string has a symbol and a certain length', () => {
    expect(hasSymbolAndLength('hello', 'e')).toBe(true);
    expect(hasSymbolAndLength('world', 'x')).toBe(false);
    expect(hasSymbolAndLength('', 'a')).toBe(false);
  });

  test('Task 3: Check if a number is positive or negative', () => {
    expect(isPositiveOrNegative(8)).toBe(true);
    expect(isPositiveOrNegative(-4)).toBe(true);
    expect(isPositiveOrNegative(0)).toBe(false);
  });

  test('Task 4: Check if a string is empty or consists only of whitespace', () => {
    expect(isEmptyOrWhitespace('  ')).toBe(true);
    expect(isEmptyOrWhitespace('Hello')).toBe(false);
    expect(isEmptyOrWhitespace('')).toBe(true);
  });

  test('Task 5: Check if a number is not divisible by both 3 and 5', () => {
    expect(isNotDivisibleByThreeAndFive(11)).toBe(true);
    expect(isNotDivisibleByThreeAndFive(25)).toBe(false);
    expect(isNotDivisibleByThreeAndFive(15)).toBe(false);
  });

  test('Task 6: Check if a string consists only of letters and is not empty', () => {
    expect(isAlphabeticAndNotEmpty('Hello')).toBe(true);
    expect(isAlphabeticAndNotEmpty('123')).toBe(false);
    expect(isAlphabeticAndNotEmpty('')).toBe(false);
  });

  test('Task 7: Check if a number is positive or zero', () => {
    expect(isPositiveOrZero(7)).toBe(true);
    expect(isPositiveOrZero(0)).toBe(true);
    expect(isPositiveOrZero(-3)).toBe(false);
  });

  test('Task 8: Check if at least one of the coordinates is positive', () => {
    expect(isAnyCoordinatePositive(3, -5)).toBe(true);
    expect(isAnyCoordinatePositive(-2, 0)).toBe(false);
    expect(isAnyCoordinatePositive(-1, -1)).toBe(false);
  });

  test('Task 9: Check if a string is not a number and not empty', () => {
    expect(isNotNumberAndNotEmpty('Hello')).toBe(true);
    expect(isNotNumberAndNotEmpty('123')).toBe(false);
    expect(isNotNumberAndNotEmpty('')).toBe(false);
  });
});
