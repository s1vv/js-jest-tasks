// В файле tasks.test.js

const { person, addCityToPerson, removeAgeFromPerson, updatePersonName } = require('./02-obj-solution');

describe('Object manipulation tests with functions', () => {
  test('Task 1: createPerson should create an object with specified properties', () => {
    expect(person).toEqual({
      name: 'John',
      age: 25,
      gender: 'male',
    });
  });

  test('Task 2: addCityToPerson should add a "city" with "New York" property to the person object', () => {
    expect(addCityToPerson()).toEqual({
      name: 'John',
      age: 25,
      gender: 'male',
      city: 'New York',
    });
  });

  test('Task 3: removeAgeFromPerson should remove the "age" property from the person object', () => {
    expect(removeAgeFromPerson()).toEqual({
      name: 'John',
      gender: 'male',
      city: 'New York',
    });
  });

  test('Task 4: updatePersonName should update the "name" property of the person object', () => {
    expect(updatePersonName()).toEqual({
      name: 'Jane',
      gender: 'female',
      city: 'New York',
    });
  });

});
