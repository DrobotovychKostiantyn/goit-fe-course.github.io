const template = document.querySelector('.js-template');
const listCards = document.querySelector('.js-list-cards');
const input = document.querySelector('.js-form input[type=text]');
const form = document.querySelector('.js-form');

const source = template.innerHTML.trim();
const temp = Handlebars.compile(source);
const object = {}

const preUrl = Object.keys(localStorage).forEach(element => {
	object.url = element
	console.log(object)
	listCards.insertAdjacentHTML('afterbegin', temp(object));
},{});


// console.log(preUrl);


function handleFormSubmit(evt) {
	evt.preventDefault();

	const obj = {
		url: input.value,
	}

	if(!input.value.length) return; 

	
	const markup = temp(obj);

	if(localStorage.getItem(obj.url) !== null) return alert('Такая закладка уже есть!')

	listCards.insertAdjacentHTML('afterbegin', markup);
	
	localStorage.setItem(obj.url, obj.url)

	input.parentNode.reset();
}


form.addEventListener('submit', handleFormSubmit);

function handleDelBtn(e) {
	e.preventDefault();

	if (e.target.nodeName !== "BUTTON") return;

	localStorage.removeItem(e.target.parentNode.previousElementSibling.firstElementChild.name);

	e.target.parentElement.parentElement.remove();	
}

listCards.addEventListener('click', handleDelBtn)
