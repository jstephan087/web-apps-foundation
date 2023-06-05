const check = document.querySelectorAll("input");
const arr = [];

window.addEventListener("DOMContentLoaded", () => {
  check.forEach((x) => {
    if (x.checked) {
      x.checked = false;
    }
  });
});

check.forEach((x) => {
  x.addEventListener("click", function () {
    let i = arr.indexOf(x);
    if (x.checked) {
      arr.push(x);
    } else if (!x.checked) {
      arr.splice(i, 1);
    }
    if (arr.length > 2) {
      arr.forEach((y, z, k) => {
        if (y === x) {
          k[z - 1].checked = false;
        }
      });
      arr.splice(i - 1, 1);
    }
  });
});
