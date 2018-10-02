"use strict";
'use strict';

var template = document.querySelector('.js-template');
var listCards = document.querySelector('.js-list-cards');
var input = document.querySelector('.js-form input[type=text]');
var form = document.querySelector('.js-form');

var source = template.innerHTML.trim();
var temp = Handlebars.compile(source);
var object = {};

var preUrl = Object.keys(localStorage).forEach(function (element) {
	object.url = element;
	console.log(object);
	listCards.insertAdjacentHTML('afterbegin', temp(object));
}, {});

// console.log(preUrl);


function handleFormSubmit(evt) {
	evt.preventDefault();

	var obj = {
		url: input.value
	};

	if (!input.value.length) return;

	var markup = temp(obj);

	if (localStorage.getItem(obj.url) !== null) return alert('Такая закладка уже есть!');

	listCards.insertAdjacentHTML('afterbegin', markup);

	localStorage.setItem(obj.url, obj.url);

	input.parentNode.reset();
}

form.addEventListener('submit', handleFormSubmit);

function handleDelBtn(e) {
	e.preventDefault();

	if (e.target.nodeName !== "BUTTON") return;

	localStorage.removeItem(e.target.parentNode.previousElementSibling.firstElementChild.name);

	e.target.parentElement.parentElement.remove();
}

listCards.addEventListener('click', handleDelBtn);