// TODO: 1. Создайте объект person с указанными свойствами: name, age, gender.
// name  - John, age - 25, gender - male, некоторые поля имеют строковые значения
//  код напишите строчкой ниже, изменять существующий не нужно
const person = {
    name: 'John',
    age: 25,
    gender: 'male',
}

// TODO: 2. Добавьте свойство city со значением 'New York' к объекту person.
function addCityToPerson() {
//  код напишите строчкой ниже, изменять существующий не нужно
  person.city = 'New York';
  return person;
}

// TODO: 3. Удалите свойство age из объекта person.
const removeAgeFromPerson = () => {
//  код напишите строчкой ниже, изменять существующий не нужно
  delete person.age
  return person
}

// TODO: 4. Обновите значение свойства name объекта person на 'Jane'.
const updatePersonName = () => {
//  код напишите строчкой ниже, изменять существующий не нужно
  person.name = 'Jane'
  person.gender = 'female'
  return person
}

module.exports = { person, addCityToPerson,removeAgeFromPerson, updatePersonName }

