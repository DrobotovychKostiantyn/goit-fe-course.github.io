const template = document.querySelector('.js-template');
const listCards = document.querySelector('.js-list-cards');
const input = document.querySelector('.js-form input[type=text]');
const form = document.querySelector('.js-form');

const regUrl = /^((ftp|http|https):\/\/)?(www\.|)([A-z|0-9]+)\.([A-z]{2,})/;

const source = template.innerHTML.trim();
const temp = Handlebars.compile(source);


const fetchUrl = (qwery) => {
	return fetch(`http://api.linkpreview.net/?key=5bb3d3d85d2689e5629a2de473cd5362919f9edc33853&q=${qwery}`)
	.then(response => {
		if(response.ok) return response.json();

		throw new Error('error')
	}).catch(err => console.error(err));
}


Object.keys(localStorage).forEach(element => {
	fetchUrl(element).then(data => {
		listCards.insertAdjacentHTML('afterbegin', temp(data));
	});	
});



function handleFormSubmit(evt) {
	evt.preventDefault();
	
	if(!regUrl.test(input.value)) {
		input.parentNode.reset();
		return alert('Невалидный URL! Попробуйте еще раз.');
	} 

	fetchUrl(input.value).then(data => {
		if(localStorage.getItem(data.url) !== null) return alert('Такая закладка уже есть!')
		localStorage.setItem(data.url, data.url)
		// console.log(data.url) 
		const markup = temp(data)
		listCards.insertAdjacentHTML('afterbegin', markup);
	});

	input.parentNode.reset();
}

function handleDelBtn(e) {
	e.preventDefault();

	const liUrl = document.querySelector('.js-li-url');

	if (e.target.nodeName !== "BUTTON") return;

	localStorage.removeItem(liUrl.name);

	e.target.parentElement.parentElement.remove();	
}

form.addEventListener('submit', handleFormSubmit);
listCards.addEventListener('click', handleDelBtn)
