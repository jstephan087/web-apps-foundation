const btn = document.querySelector("button");
const bdy = document.querySelector("body");

btn.addEventListener("click", function () {
  btn.classList.toggle("toggle-border");
  if (btn.classList.length === 2) {
    document.title = "Good Night";
  } else {
    document.title = "Good Morning";
  }
});

bdy.addEventListener("click", function () {
  bdy.classList.toggle("toggle-bg");
});
