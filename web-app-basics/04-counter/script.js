const main = document.querySelector("main");
const reset = document.querySelector("button");
const counter = document.getElementById("counter");
let count = 0;

main.addEventListener("click", function () {
  count++;
  counter.innerText = count;
  main.style = `--counter: ${count}%`;
});

reset.addEventListener("click", function () {
  count = 0;
  counter.innerText = count;
  main.style = "";
});
