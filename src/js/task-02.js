const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingEl = document.querySelector('#ingredients');

const tagLiPotato = document.createElement('li');
tagLiPotato.classList.add('item');
tagLiPotato.textContent = 'Potatoes';

const tagLiMushrooms = document.createElement('li');
tagLiMushrooms.classList.add('item');
tagLiMushrooms.textContent = 'Mushrooms';

const tagLiGarlic = document.createElement('li');
tagLiGarlic.classList.add('item');
tagLiGarlic.textContent = 'Garlic';

const tagLiTomato = document.createElement('li');
tagLiTomato.classList.add('item');
tagLiTomato.textContent =  'Tomatos';

const tagLiHerbs = document.createElement('li');
tagLiHerbs.classList.add('item');
tagLiHerbs.textContent = 'Herbs';

const tagLiCondiments = document.createElement('li');
tagLiCondiments.classList.add('item');
tagLiCondiments.textContent ='Condiments';

ingEl.append(tagLiPotato,tagLiMushrooms,tagLiGarlic,tagLiTomato,tagLiHerbs,tagLiCondiments);
console.log(ingEl);