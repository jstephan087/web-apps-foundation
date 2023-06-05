const body = document.querySelector("body");
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
colorChange();

function valueToHex(value) {
  value = Number.parseInt(value).toString(16);
  return value.length === 1 ? "0" + value : value;
}

body.addEventListener("input", colorChange);
