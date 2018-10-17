'use strict';

const refs = {
    winnersList: document.querySelector('.js-winners-list'),
    winnersBtn: document.querySelector('.js-winners-btn'),
    inputName: document.querySelector('.js-input-name'),
    inputSurname: document.querySelector('.js-input-surname'),
    inputEmail: document.querySelector('.js-input-email'),
    inputPhone: document.querySelector('.js-input-phone'),
    saveBtn: document.querySelector('.js-reg-save'),
    table: document.querySelector('.js-table'),
    regName: /^[A-Z][a-zA-Z_\.]{1,20}$/,
    regEmail: /^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i,
    regPhone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    tempForTable: document.querySelector('.js-td'),
    tempForWinners: document.querySelector('.js-win-item'),
};

const sourceForTable = refs.tempForTable.innerHTML.trim();
const templateForTable = Handlebars.compile(sourceForTable);

const sourceForWinners = refs.tempForWinners.innerHTML.trim();
const templateForWinners = Handlebars.compile(sourceForWinners);



const personsInfo = [];


function handleSaveBtn(e) {
    e.preventDefault();
    
    if(!refs.regName.test(refs.inputName.value)) {
        refs.inputName.style.outline = '1px solid red';
        alert('Name isn\'t valid')
    }

    if(!refs.regName.test(refs.inputSurname.value)) {
        alert('Surname is not valid')
    }

    if(!refs.regEmail.test(refs.inputEmail.value)) {
        alert('email is not valid');
    }

    if(!refs.regPhone.test(refs.inputPhone.value)) {
        alert('phone is not valid');
    }

    const person = {
        name: refs.inputName.value,
        surname: refs.inputSurname.value,
        email: refs.inputEmail.value,
        phone: refs.inputPhone.value,
    }

    personsInfo.push(person)
    console.log(personsInfo);

    refs.table.insertAdjacentHTML('beforeend', templateForTable(person));
}


function handleNewWinnerBtn(e) {
    e.preventDefault();

    const rand = Math.floor(Math.random() * personsInfo.length);

    refs.winnersList.insertAdjacentHTML('beforeend', templateForWinners(personsInfo[rand]));
}




refs.saveBtn.addEventListener('click', handleSaveBtn);
refs.winnersBtn.addEventListener('click', handleNewWinnerBtn);