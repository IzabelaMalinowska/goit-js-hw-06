const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", (fontSize) => {
  text.style.fontSize = `${fontSize.target.value}px`;
});
