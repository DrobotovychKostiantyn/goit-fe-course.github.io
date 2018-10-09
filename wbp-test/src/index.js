import greet from './js/greet';
import './scss/style.scss';
import './scss/_form.scss';
import mainImg from './img/team2.jpg';
import handle from './templates/name.handlebars';


const name = {
	name: 'Kostia',
}

const markup = handle(name);
document.querySelector('body').insertAdjacentHTML('afterbegin', markup)

console.log(mainImg)

const img = document.createElement('img');
img.src = mainImg;

document.querySelector('body').append(img);

console.log(greet)
greet('kkkkkkkk')