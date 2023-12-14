// В файле classTasks.js

// Задача 1: Создание класса Person
// Создать класс Person с полями name и age.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Вернуть строку с информацией о человеке (метод getInfo).
  // Вернуть строку вида: "<name>, <age> years old"
  getInfo() {
    return `${this.name}, ${this.age} years old`;
  }
}

// Задача 2: Наследование от класса Person
// Создать класс Student, наследующийся от класса Person, с дополнительным полем course.
class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  // Вернуть (метод getStudentInfo) строку с информацией о студенте, включая курс.
  // "<name>, <age> years old, studying in course <course>"
  getStudentInfo() {
    return `${this.name}, ${this.age} years old, studying in course ${this.course}`;
  }
}

// Задача 3: Использование класса Person
// Создать экземпляр класса Person и вызвать метод getInfo.
const person = new Person('John', 25);
console.log(person.getInfo()); // Вывод: John, 25 years old

// Задача 4: Использование класса Student
// Создать экземпляр класса Student и вызвать метод getStudentInfo.
const student = new Student('Alice', 20, 3);
console.log(student.getStudentInfo()); // Вывод: Alice, 20 years old, studying in course 3

// Задача 5: Создание метода в классе Person
// Добавить метод sayHello в класс Person, который возвращает приветствие с именем.
// "Hello, my name is <name>"
Person.prototype.sayHello = function () {
  return `Hello, my name is ${this.name}`;
};

// Задача 6: Переопределение метода в классе Student
// Переопределить метод sayHello в классе Student, добавив информацию о курсе.
// "Hello, my name is <name>, and I'm in course <course>"
Student.prototype.sayHello = function () {
  return `Hello, my name is ${this.name}, and I'm in course ${this.course}`;
};

// Задача 7: Использование переопределенного метода
// Создать экземпляр класса Student и вызвать переопределенный метод sayHello.
const studentWithHello = new Student('Bob', 22, 2);
console.log(studentWithHello.sayHello()); // Вывод: Hello, my name is Bob, and I'm in course 2

// Задача 8: Создание статического метода в классе Person
// Добавить статический метод createPerson в класс Person, который создает экземпляр класса.
Person.createPerson = function (name, age) {
  return new Person(name, age);
};

// Задача 9: Использование статического метода
// Использовать статический метод createPerson для создания нового человека.
const newPerson = Person.createPerson('Eva', 30);
console.log(newPerson.getInfo()); // Вывод: Eva, 30 years old

// Задача 10: Создание getter и setter в классе Student
// Добавить getter и setter для поля course в классе Student.
class StudentWithGetterSetter extends Person {
  constructor(name, age, course) {
    super(name, age);
    this._course = course; // Используем _course для представления приватного поля
  }

  get course() {
    return this._course;
  }

  set course(newCourse) {
    if (newCourse > 0) {
      this._course = newCourse;
    } else {
      console.log('Invalid course number');
    }
  }
}

module.exports = {
  Person,
  Student,
  student,
  studentWithHello,
  StudentWithGetterSetter,
  newPerson,
};
