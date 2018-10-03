"use strict";
'use strict';

var template = document.querySelector('.js-template');
var listCards = document.querySelector('.js-list-cards');
var input = document.querySelector('.js-form input[type=text]');
var form = document.querySelector('.js-form');

var regUrl = /^((ftp|http|https):\/\/)?(www\.|)([A-z|0-9]+)\.([A-z]{2,})/;

var source = template.innerHTML.trim();
var temp = Handlebars.compile(source);

var fetchUrl = function fetchUrl(qwery) {
	return fetch('http://api.linkpreview.net/?key=5bb3d3d85d2689e5629a2de473cd5362919f9edc33853&q=' + qwery).then(function (response) {
		if (response.ok) return response.json();

		throw new Error('error');
	}).catch(function (err) {
		return console.error(err);
	});
};

Object.keys(localStorage).forEach(function (element) {
	fetchUrl(element).then(function (data) {
		listCards.insertAdjacentHTML('afterbegin', temp(data));
	});
});

function handleFormSubmit(evt) {
	evt.preventDefault();

	if (!regUrl.test(input.value)) {
		input.parentNode.reset();
		return alert('Невалидный URL! Попробуйте еще раз.');
	}

	fetchUrl(input.value).then(function (data) {
		if (localStorage.getItem(data.url) !== null) return alert('Такая закладка уже есть!');
		localStorage.setItem(data.url, data.url);
		// console.log(data.url) 
		var markup = temp(data);
		listCards.insertAdjacentHTML('afterbegin', markup);
	});

	input.parentNode.reset();
}

function handleDelBtn(e) {
	e.preventDefault();

	var liUrl = document.querySelector('.js-li-url');

	if (e.target.nodeName !== "BUTTON") return;

	localStorage.removeItem(liUrl.name);

	e.target.parentElement.parentElement.remove();
}

form.addEventListener('submit', handleFormSubmit);
listCards.addEventListener('click', handleDelBtn);