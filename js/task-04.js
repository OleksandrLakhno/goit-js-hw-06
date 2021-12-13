const valueCounter = {
    value: 0,
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    },
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
};
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', function () {
    valueCounter.decrement();
    console.log(valueCounter);
    valueEl.textContent = valueCounter.value;
});

incrementBtn.addEventListener('click', function () {
    valueCounter.increment();
    console.log(valueCounter);
    valueEl.textContent = valueCounter.value;
});
