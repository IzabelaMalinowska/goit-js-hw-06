let counterValue = 0;
const newCounter = document.querySelector("#value");
const buttonMinus = document.querySelector('button[data-action="decrement"]');
const buttonPlus = document.querySelector('button[data-action="increment"]');

buttonMinus.addEventListener("click", () => {
  if(counterValue>0) {counterValue--;
  newCounter.textContent = counterValue;
}
  if(counterValue === 0){
    buttonMinus.disabled = true;
  } else {
    buttonMinus.disabled = false;
  }
});

buttonPlus.addEventListener("click", () => {
  counterValue++;
  newCounter.textContent = counterValue;
  buttonMinus.disabled = false;
});
