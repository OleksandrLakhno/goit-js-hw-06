const changeElemText = document.querySelector('#font-size-control');
console.log(changeElemText.value);

const textToChange = document.querySelector('#text');
console.log(textToChange);

const changes = (event) => {
    
    
    textToChange.style.fontSize = event.currentTarget.value + 'px';

}

changeElemText.addEventListener('input',changes);