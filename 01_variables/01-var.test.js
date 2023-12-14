const func = require('./01-var-solution') 

describe('Variable', () => {
  test('1. "age" should contain the correct typeof age', () => {
    expect(typeof func.getAge()).toBe('number');
  });

  test('2. "name" should contain name (string)', () => {
    expect(typeof func.getName()).toBe('string');
  });

  test('3. "isStudent" should be a boolean value', () => {
    expect(typeof func.getIsStudent()).toBe('boolean');
  });

  test('4. "sum" should be the result of adding num1 and num2', () => {
    expect(func.getSum()).toBeGreaterThan(0);
  });

  test('should be declared without assignment', () => {
    expect(func.myVariable).toBeUndefined();
  });
  
  test('should have a "undefined" type', () => {
    expect(typeof func.myVariable).toBe('undefined');
  });
});
