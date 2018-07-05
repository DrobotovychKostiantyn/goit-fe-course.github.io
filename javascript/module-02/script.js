'use strict'

let userInput;
const numbers = [];
let total = 0;

do {
  userInput = prompt('Введите число');
  if( userInput % 1 !== 0 || userInput === '' || userInput === ' ') {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    numbers.push(userInput);
  }
}while (userInput !== null)

numbers.pop();

// Массив чисел
// console.log(numbers); 

for (let item of numbers) {
  total += Number(item);
}

alert (`Общая сумма чисел равна ${total}`);


// Доп. задание

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let passwordInput;
let i = 0;
let k = attempts - 1;

do {
  passwordInput = prompt('Введите пароль');
  if (passwords.includes(passwordInput) === true) {
    alert('Добро пожаловать!');
    break;
  }else if (i === 2) {
    alert('У вас закончились попытки, аккаунт заблокирован!')
  }else {
    alert(`Неверный пароль, у вас осталось ${k--} попыток`);
  }
  i++
}while (i < attempts);