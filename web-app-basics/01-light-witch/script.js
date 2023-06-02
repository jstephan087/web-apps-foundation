const btn = document.querySelector("button");
const bdy = document.querySelector("body");

btn.addEventListener("click", function () {
  btn.classList.toggle("toggle-border");
  bdy.classList.toggle("toggle-bg");
  if (btn.classList.length === 2) {
    document.title = "Good Night";
  } else {
    document.title = "Good Morning";
  }
});
