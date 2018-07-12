'use strict'

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const checkLoginValidity = login => {
    let loginSplit = login.split('');
    let isTrue;
    for (let i = 0; i < loginSplit.length; i++) {
      isTrue = i >= 3 && i < 16 ? true : false;
    }
    return isTrue;
}

const checkIfLoginExists = (logins, login) => {
    let isIn = logins.includes(login);
    return isIn ? true : false;
}

const addLogin = (logins, login) => {
  let validity =  checkLoginValidity(login);
  if (validity === false) return 'Ошибка! Логин должен быть от 4 до 16 символов';
  
  let exists = checkIfLoginExists(logins,login);
  if (exists === false) {
    logins.push(login);
    return 'Логин успешно добавлен!';
  } else {
    return 'Такой логин уже используется!';
  }
}

console.log(addLogin(logins,'Poly'));

//массив логинов
//console.log(logins);