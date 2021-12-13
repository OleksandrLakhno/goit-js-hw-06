const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// for (let i = 0; i < ingredients.length; i += 1) {
  

//   const ingEl = document.querySelector('#ingredients');
//  const tagLiPotato = document.createElement('li');
// tagLiPotato.classList.add('item');
// tagLiPotato.textContent = `${ingredients[i]}`;
//   ingEl.append(tagLiPotato);
//   console.log(ingEl);
// }

const ingEl = document.querySelector('#ingredients');


const elements = ingredients.map(function (ingredient) { 
const tagLi = document.createElement('li');
  tagLi.classList.add('item');
  tagLi.textContent = ingredient;
  ingEl.append(tagLi);
});

console.log(ingEl);


