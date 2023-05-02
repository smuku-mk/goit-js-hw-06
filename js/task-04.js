const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterValue = 0;

const decrement = () => {
  counterValue--;
};
const increment = () => {
  counterValue++;
};

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);

const value = document.querySelector("#value");
value.value = counterValue;