// В файле classTasks.js

// Задача 1: Создание класса Person
// Создать класс Person с полями name и age.
class Person {
  

  // Вернуть строку с информацией о человеке (метод getInfo).
  // Вернуть строку вида: "<name>, <age> years old"
  getInfo() {
   
  }
}

// Задача 2: Наследование от класса Person
// Создать класс Student, наследующийся от класса Person, с дополнительным полем course.
class Student extends Person {
  

  // Вернуть (метод getStudentInfo) строку с информацией о студенте, включая курс.
  // "<name>, <age> years old, studying in course <course>"
  getStudentInfo() {
    
  }
}

// Задача 3: Использование класса Person
// Создать экземпляр класса Person и вызвать метод getInfo.

console.log(person.getInfo()); // Вывод: John, 25 years old

// Задача 4: Использование класса Student
// Создать экземпляр класса Student и вызвать метод getStudentInfo.

console.log(student.getStudentInfo()); // Вывод: Alice, 20 years old, studying in course 3

// Задача 5: Создание метода в классе Person
// Добавить метод sayHello в класс Person, который возвращает приветствие с именем.
// "Hello, my name is <name>"
Person = function () {
  return ;
};

// Задача 6: Переопределение метода в классе Student
// Переопределить метод sayHello в классе Student, добавив информацию о курсе.
// "Hello, my name is <name>, and I'm in course <course>"
Student = function () {
  return ;
};

// Задача 7: Использование переопределенного метода
// Создать экземпляр класса Student и вызвать переопределенный метод sayHello.
// студента зовут Bob ему 22, учится на 2 курсе
const studentWithHello = new Student('Bob', 22, 2);
console.log(studentWithHello.sayHello()); // Вывод: Hello, my name is Bob, and I'm in course 2

// Задача 8: Создание статического метода в классе Person
// Добавить статический метод createPerson в класс Person, который создает экземпляр класса.
// со свойствами name и age
Person = function () {
  return ;
};

// Задача 9: Использование статического метода
// Использовать статический метод createPerson для создания нового человека.
const newPerson = 0;
console.log(newPerson.getInfo()); // Вывод: Eva, 30 years old

// Задача 10: Создание getter и setter в классе Student
// Добавить getter и setter для поля course в классе Student.
class StudentWithGetterSetter extends Person {
 

  get course() {
    return ;
  }

  set course(newCourse) {
   
      console.log('Invalid course number');
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
