let counter = 0;
let colorCounter = 0;
const label = document.querySelector("label");
const main = document.querySelector("main");
const resetButton = document.querySelector("button");

function myCounter() {
  counter++;
  label.innerText = counter;

  colorCounter++;
  if (colorCounter === 101) {
    colorCounter = 1;
  }
  main.style = `--counter: ${colorCounter}%`;
}

main.addEventListener("click", myCounter);

function resetCounter() {
  counter = 0;
  colorCounter = 0;
  label.innerText = counter;
  main.style = "--counter: 0%";
  resetButton.blur();
}

resetButton.addEventListener("click", resetCounter);

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    myCounter();
  }
});
