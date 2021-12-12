function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

colorBtn.addEventListener('click',changeColor);

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = (`${document.body.style.backgroundColor}`)
}
  
