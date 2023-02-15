const validationInput = document.querySelector("#validation-input");
console.log(validationInput.getAttribute("data-length"));

validationInput.addEventListener("blur", (event) => {
  if (event.target.value.length == validationInput.getAttribute("data-length")) {
    validationInput.classList.add("valid");
      validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
