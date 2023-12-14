// TODO: 1. Создайте переменную с именем age и присвойте ей ваш возраст.

const getAge = () => {
//  код напишите строчкой ниже, изменять существующий не нужно
  const age = 45
  return age
}

// TODO: 2. Создайте переменную name и присвойте ей ваше имя.

const getName = () => {
  //  код напишите строчкой ниже, изменять существующий не нужно
    const name = 'Slava'
    return name
}

// TODO: 3. Создайте переменную isStudent и присвойте ей булево значение, 
// указывающее, являетесь ли вы студентом (true/false).

const getIsStudent = () => {
  //  код напишите строчкой ниже, изменять существующий не нужно
    const isStudent = true
    return isStudent
}

// TODO: 4. Создайте две переменные, num1 и num2, и присвойте им положительные числовые значения. 
//Затем создайте третью переменную sum, в которой сохраните сумму num1 и num2.

const getSum = () => {
  //  код напишите строчкой ниже, изменять существующий не нужно
    const num1 = 3
    const num2 = 5
    sum = num1 + num2
    return sum
}

// TODO: 5. Объявите переменную myVariable без присвоения значения

//  код напишите строчкой ниже, изменять существующий не нужно
let myVariable;
   
module.exports = { getAge, getName, getIsStudent, getSum, myVariable }