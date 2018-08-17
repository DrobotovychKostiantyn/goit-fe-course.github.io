/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];
  
  const createImg = img => {
    const imgMain = document.createElement('img');
    imgMain.classList.add('post__image');
    imgMain.src =  img;
    imgMain.alt = "post image";
  
    return imgMain;
  }
  
  const createTitle = title => {
    const titleMain = document.createElement('h2');
    titleMain.classList.add('post__title');
    titleMain.textContent = title;
  
    return titleMain;
  }
  
  const createP = text => {
    const p =  document.createElement('p');
    p.classList.add('post__text');
    p.textContent = text;
  
    return p;
  }
  
  const createLink = link => {
    const linkMain = document.createElement('a');
    linkMain.classList.add('button');
    linkMain.href =  link;
    linkMain.textContent = "Read more";
  
    return linkMain;
  }
  
  const createPostCard = ({img, title, text, link}) => {
    const postCard = document.createElement('div');
    postCard.classList.add('post');
    
    postCard.append(createImg(img), createTitle(title), createP(text), createLink(link))
    return postCard;
  }
  
  const createCards = posts => {
    return posts.map(post => createPostCard(post));
  }
  
  const cards = createCards(posts);
  
  document.querySelector('.cards').append(...cards);
  
//   console.log(createPostCard(posts));