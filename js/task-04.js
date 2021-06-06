const btnDecrementEl = document.querySelector(
  'button[data-action="decrement"]'
);
const btnIncrementEl = document.querySelector(
  'button[data-action="increment"]'
);
const spanEl = document.querySelector("#value");

let counterValue = 0;
const decrement = () => {
  counterValue -= 1;
  spanEl.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  spanEl.textContent = counterValue;
};

btnDecrementEl.addEventListener("click", decrement);
btnIncrementEl.addEventListener('click', increment);