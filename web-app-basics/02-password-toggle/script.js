const btn = document.getElementById("button");
const pass = document.getElementById("password");

btn.addEventListener("click", function () {
  if (btn.value === "Show Password") {
    btn.setAttribute("value", "Hide Password");
    pass.setAttribute("type", "text");
  } else {
    btn.setAttribute("value", "Show Password");
    pass.setAttribute("type", "password");
  }
});
