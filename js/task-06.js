// const addFocus = document.querySelector('#validation-input');

// addFocus.addEventListener('blur',getFocus);

// function getFocus(event) {
//     if (event.currentTarget.value.trim().length <= addFocus.dataset.length) {
//         addFocus.classList.add('valid');
//         addFocus.classList.remove('invalid');
//     } else {
//         addFocus.classList.remove('valid');
//         addFocus.classList.add('invalid');
//     }
// };



const inputEl = document.getElementById('validation-input');
console.log(inputEl);
const lengthInputEl = inputEl.dataset.length;
console.log(lengthInputEl);
inputEl.addEventListener('focus', onFocusInput);
inputEl.addEventListener('blur', onBlurInput);
function onFocusInput(event) {
}
function onBlurInput(event) {
   if(event.currentTarget.value.trim().length == lengthInputEl){
      event.currentTarget.classList.remove('invalid');
      event.currentTarget.classList.add('valid');
   } else {
      event.currentTarget.classList.remove('valid');
      event.currentTarget.classList.add('invalid');
   }
}