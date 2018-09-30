const template = document.querySelector('.js-template');
const listCards = document.querySelector('.js-list-cards');
const input = document.querySelector('.js-form input[type=text]');
const form = document.querySelector('.js-form');


function handleFormSubmit(evt) {
	evt.preventDefault();

	const obj = {
		url: input.value,
	}

	if(!input.value.length) return; 

	const source = template.innerHTML.trim();
	const temp = Handlebars.compile(source);
	const markup = temp(obj);

	listCards.insertAdjacentHTML('afterbegin', markup);
	
	localStorage.setItem(obj.url, obj.url)

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

listCards.addEventListener('click', handleDelBtn)
