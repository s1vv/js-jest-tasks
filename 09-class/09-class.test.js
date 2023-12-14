// В файле classTasks.test.js

const {
  Person,
  Student,
  student,
  studentWithHello,
  StudentWithGetterSetter,
  newPerson,
} = require('./09-class-tasks');

describe('Class tasks tests', () => {
  // ... тесты для каждой задачи ...

  test('Task 1: Create class Person', () => {
    // Проверка, что экземпляр класса Person создается успешно.
    const person = new Person('John', 25);
    expect(person).toBeInstanceOf(Person);
  });

  test('Task 2: Inheritance from class Person', () => {
    // Проверка, что экземпляр класса Student наследуется от класса Person.
    const student = new Student('Alice', 20, 3);
    expect(student).toBeInstanceOf(Student);
    expect(student).toBeInstanceOf(Person);
  });

  test('Task 3: Use class Person', () => {
    // Проверка, что метод getInfo возвращает корректную информацию о человеке.
    const person = new Person('John', 25);
    expect(person.getInfo()).toBe('John, 25 years old');
  });

  test('Task 4: Use class Student', () => {
    // Проверка, что метод getStudentInfo возвращает корректную информацию о студенте.
    const student = new Student('Alice', 20, 3);
    expect(student.getStudentInfo()).toBe('Alice, 20 years old, studying in course 3');
  });

  test('Task 5: Add method to class Person', () => {
    // Проверка, что метод sayHello возвращает корректное приветствие.
    const person = new Person('John', 25);
    expect(person.sayHello()).toBe('Hello, my name is John');
  });

  test('Task 6: Override method in class Student', () => {
    // Проверка, что переопределенный метод sayHello возвращает корректное приветствие студента.
    const studentWithHello = new Student('Bob', 22, 2);
    expect(studentWithHello.sayHello()).toBe('Hello, my name is Bob, and I\'m in course 2');
  });

  test('Task 7: Use overridden method', () => {
    // Проверка, что переопределенный метод sayHello используется корректно.
    const studentWithHello = new Student('Bob', 22, 2);
    expect(studentWithHello.sayHello()).toBe('Hello, my name is Bob, and I\'m in course 2');
  });

  test('Task 8: Add static method to class Person', () => {
    // Проверка, что статический метод createPerson создает экземпляр класса Person.
    const newPerson = Person.createPerson('Eva', 30);
    expect(newPerson).toBeInstanceOf(Person);
    expect(newPerson.getInfo()).toBe('Eva, 30 years old');
  });

  test('Task 9: Use static method', () => {
    // Проверка, что статический метод createPerson используется корректно.
    const newPerson = Person.createPerson('Eva', 30);
    expect(newPerson.getInfo()).toBe('Eva, 30 years old');
  });

  test('Task 10: Add getter and setter to class Student', () => {
    // Проверка, что getter и setter для поля course работают корректно.
    const studentWithGetterSetter = new StudentWithGetterSetter('Charlie', 21, 1);
    studentWithGetterSetter.course = 4; // Установка нового значения курса
    expect(studentWithGetterSetter.course).toBe(4); // Получение значения курса
  });
});
