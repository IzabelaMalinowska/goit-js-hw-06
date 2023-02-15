const input = document.querySelector("#name-input");
const output = document.querySelector('#name-output');

const displayInput = Input => {
  if (input.value === '') {
    output.innerHTML = 'Anonymous';
  } else {
    output.textContent = Input.currentTarget.value;
  }
};
input.addEventListener('input', displayInput);


