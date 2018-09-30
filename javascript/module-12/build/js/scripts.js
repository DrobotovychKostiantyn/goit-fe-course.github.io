"use strict";
'use strict';

var template = document.querySelector('.js-template');
var listCards = document.querySelector('.js-list-cards');
var input = document.querySelector('.js-form input[type=text]');
var form = document.querySelector('.js-form');

function handleFormSubmit(evt) {
	evt.preventDefault();

	var obj = {
		url: input.value
	};

	if (!input.value.length) return;

	var source = template.innerHTML.trim();
	var temp = Handlebars.compile(source);
	var markup = temp(obj);

	listCards.insertAdjacentHTML('afterbegin', markup);

	localStorage.setItem(obj.url, obj.url);

	input.parentNode.reset();
}

form.addEventListener('submit', handleFormSubmit);

function handleDelBtn(e) {
	e.preventDefault();

	if (e.target.nodeName !== "BUTTON") return;

	e.target.parentElement.parentElement.remove();
	// console.log(e.target.parentElement.previousElementSibling.firstElementChild.src)
	// localStorage.removeItem(e.target.parentElement.previousElementSibling.firstElementChild.src);
}

listCards.addEventListener('click', handleDelBtn);