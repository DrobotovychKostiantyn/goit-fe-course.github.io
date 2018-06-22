const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';
const cancel = 'Отменено пользователем!';
const ban = 'Доступ запрещен!';
const welcome = 'Добро пожаловать!';


const log = prompt('Введите ваш логин');

if (log === null) {
    alert(cancel);
} else if (log !== ADMIN_LOGIN) {
    alert(ban);
} else {
    let pass = prompt('Введите пароль');

    if (pass === null) {
        alert(cancel);
    } else if (pass !== ADMIN_PASSWORD) {
        alert(ban);
    } else {
        alert(welcome);
    }
}



        // ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ

const sharm = 15;
const hurgada = 25;
const taba = 6;

let inGroup;

const seats = prompt('Введите число необходимых мест');

if ((seats % 2) !== 0 && (seats % 1) !== 0) {
    alert('Ошибка ввода');
} else if (seats <= 0) {
    alert('Ошибка ввода')
} else {
    if (taba >= seats) {
        inGroup = confirm('есть место в группе Taba, согласны ли вы быть в этой группе?');

        if (inGroup === true) {
            alert(`Приятного путешествия в группе Taba`)
        } else {
            alert('Нам очень жаль, приходите еще!')
        }

    } else if (sharm >= seats) {
        inGroup = confirm('есть место в группе Sharm, согласны ли вы быть в этой группе?')

        if (inGroup === true) {
            alert(`Приятного путешествия в группе Sharm`)
        } else {
            alert('Нам очень жаль, приходите еще!')
        }

    } else if (hurgada >= seats) {
        inGroup = confirm('есть место в группе Hurgada, согласны ли вы быть в этой группе?')

        if (inGroup === true) {
            alert(`Приятного путешествия в группе Hurgada`)
        } else {
            alert('Нам очень жаль, приходите еще!')
        }

    } else {
        alert('Извините, столько мест нет ни в одной группе!');
    }
}