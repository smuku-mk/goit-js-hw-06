let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value1 = document.querySelector("#value");

const decrement = () => {
  counterValue--;
  value1.textContent = counterValue;
};
const increment = () => {
  counterValue++;
  value1.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
