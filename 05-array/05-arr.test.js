const {
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

} = require('./05-arr-tasks');

describe('Array tasks tests', () => {

  test('Task 1: Get unique elements of an array', () => {
    expect(getUniqueElements([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('Task 2: Find the maximum element in an array', () => {
    expect(findMaxElement([5, 2, 8, 3, 1])).toBe(8);
  });

  test('Task 3: Calculate the sum of elements in an array', () => {
    expect(calculateArraySum([1, 2, 3, 4, 5])).toBe(15);
  });

  test('Task 4: Filter positive numbers from an array', () => {
    expect(filterPositiveNumbers([-1, 3, 0, -5, 8, -2])).toEqual([3, 8]);
  });

  test('Task 5: Convert all strings in an array to uppercase', () => {
    expect(convertToUpperCase(['hello', 'world'])).toEqual(['HELLO', 'WORLD']);
  });

  test('Task 6: Check if a specific element is in the array', () => {
    expect(containsElement([1, 2, 3, 4, 5], 3)).toBe(true);
    expect(containsElement(['apple', 'banana', 'orange'], 'grape')).toBe(false);
  });

  test('Task 7: Remove duplicates from an array', () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('Task 8: Sort an array in descending order', () => {
    expect(sortDescending([5, 2, 8, 3, 1])).toEqual([8, 5, 3, 2, 1]);
  });

  test('Task 9: Merge two arrays', () => {
    expect(mergeArrays([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('Task 10: Find the index of an element in an array', () => {
    expect(findElementIndex(['apple', 'banana', 'orange'], 'banana')).toBe(1);
  });

  test('Task 11: Remove the last element from an array', () => {
    expect(removeLastElement([1, 2, 3, 4])).toEqual([1, 2, 3]);
  });

  test('Task 12: Replace a specific element in an array', () => {
    expect(replaceElement(['apple', 'banana', 'orange'], 1, 'grape')).toEqual(['apple', 'grape', 'orange']);
  });

  test('Extra Task 13: Reverse each word in a string', () => {
    expect(reverseWordsInString('Hello World')).toBe('olleH dlroW');
  });

  test('Extra Task 14: Filter array elements that occur more than once', () => {
    expect(filterDuplicates([1, 2, 3, 2, 4, 5, 6, 6])).toEqual([2, 6]);
    expect(filterDuplicates(['apple', 'banana', 'apple', 'orange'])).toEqual(['apple']);
  });
});
