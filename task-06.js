const addFocus = document.querySelector('#validation-input');

addFocus.addEventListener('blur',getFocus);

function getFocus(event) {
    if (event.currentTarget.value.length <= addFocus.dataset.length) {
        addFocus.classList.add('valid');
        addFocus.classList.remove('invalid');
    } else {
        addFocus.classList.remove('valid');
        addFocus.classList.add('invalid');
    }
};



