const body = document.querySelector("body");
const button = document.querySelector("button");
const redRange = document.getElementById("red");
const greenRange = document.getElementById("green");
const blueRange = document.getElementById("blue");
const colorValue = document.getElementById("color-value");

function colorChange() {
  const red = valueToHex(redRange.value);
  const green = valueToHex(greenRange.value);
  const blue = valueToHex(blueRange.value);

  const bgColor = "#" + red + green + blue;
  body.style.backgroundColor = bgColor;
  colorValue.innerText = bgColor;
}

function valueToHex(value) {
  value = Number.parseInt(value).toString(16);
  return value.length === 1 ? "0" + value : value;
}

function getData() {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      redRange.value = data.rgb.r;
      greenRange.value = data.rgb.g;
      blueRange.value = data.rgb.b;
      colorChange();
    });
}

button.addEventListener("click", getData);

body.addEventListener("input", colorChange);

colorChange();
