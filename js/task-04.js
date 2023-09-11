// Obtener el elemento del contador y los botones
const counter = document.getElementById('counter');
const valueSpan = document.getElementById('value');
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

let counterValue = 0;
valueSpan.textContent = counterValue;

incrementButton.addEventListener('click', () => {
  counterValue++;
  valueSpan.textContent = counterValue;
});

decrementButton.addEventListener('click', () => {
  counterValue--;
  valueSpan.textContent = counterValue;
});