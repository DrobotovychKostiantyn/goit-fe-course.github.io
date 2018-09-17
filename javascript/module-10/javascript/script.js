'use strict';

/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/

const getAllUsersBtn = document.querySelector("#js-users");
const result = document.querySelector(".result");
const getUserByIdBtn = document.querySelector("#js-userById");
const addUserBtn = document.querySelector("#js-addUser");
const removeUserBtn = document.querySelector("#js-removeUser");
const updateUserBtn = document.querySelector("#js-updateUser");



getAllUsersBtn.addEventListener("click", handleAllUsersBtn);
getUserByIdBtn.addEventListener("click", handleGetUserByIdBtn);
addUserBtn.addEventListener("click", handleAddUserBtn);
removeUserBtn.addEventListener("click", handleRemoveUserBtn);
updateUserBtn.addEventListener("click", handleUpdateUserBtn);


function fetchUserData(id, param){

   return fetch(`https://test-users-api.herokuapp.com/users/${id}`, param)
        .then(response => {
            if(response.ok) return response.json();

            throw new Error('error')
        }).catch(err => console.error(err));
}


function handleAllUsersBtn(evt) {
    evt.preventDefault();
    fetchUserData('').then(data => {
        const names = data.data.reduce((acc, el) => acc + `<tr> <td>${el.id}</td>    <td>${el.name}</td>  <td>${el.age}</td> </tr>`,'');
        result.firstElementChild.innerHTML = `<caption>All users</caption><tr><td>ID</td><td>NAME</td><td>AGE</td></tr>${names}`;
    });
} 

function handleGetUserByIdBtn(evt) {
    evt.preventDefault();

    const inputId = getUserByIdBtn.previousElementSibling;

    fetchUserData(inputId.value).then(data => {
        result.lastElementChild.insertAdjacentHTML('beforeend', `<p>Name: ${data.data.name} Age: ${data.data.age}</p>`)
    });
    getUserByIdBtn.parentNode.reset();
}

function handleAddUserBtn(evt) {
    evt.preventDefault();
    const inputName = addUserBtn.previousElementSibling.previousElementSibling;
    const inputAge = addUserBtn.previousElementSibling;

    fetchUserData('', {method: 'POST',
        body: JSON.stringify({ name: inputName.value , age: Number(inputAge.value)}),
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }}).then(data => {
    });
    inputName.parentNode.reset();
    inputAge.parentNode.reset();
}

function handleRemoveUserBtn(evt) {
    evt.preventDefault();
    const inputId = removeUserBtn.previousElementSibling;

    fetchUserData(inputId.value, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }}).then(data => {
    });
    inputId.parentNode.reset();
}

function handleUpdateUserBtn(evt) {
    evt.preventDefault();

    const inputId = updateUserBtn.previousElementSibling.previousElementSibling.previousElementSibling;
    const inputName = updateUserBtn.previousElementSibling.previousElementSibling;
    const inputAge = updateUserBtn.previousElementSibling;

    fetchUserData(inputId.value, {
        method: 'PUT',
        body: JSON.stringify({ name: inputName.value, age: Number(inputAge.value)}),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
    });
    inputId.parentNode.reset();
    inputName.parentNode.reset();
    inputAge.parentNode.reset();
}