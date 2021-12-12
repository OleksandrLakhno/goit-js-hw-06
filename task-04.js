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

const valueEl = document.querySelector('#value');

const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener('click', function () {
    valueCounter.decrement();
    console.log(valueCounter);
    valueEl.textContent = valueCounter.value;
});


const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener('click', function () {
    valueCounter.increment();
    console.log(valueCounter);
    valueEl.textContent = valueCounter.value;
});
