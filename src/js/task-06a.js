const input = document.querySelector("#validation-input");

input.addEventListener("input", function () {
  const length = Number(input.dataset.length);
  if (input.value.length === length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
