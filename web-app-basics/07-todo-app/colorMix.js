let color = 0;

function colorMix() {
  if (color < 360) {
    color = color + 5;
    document.querySelector("h1").style = `--random: ${color}deg`;
  } else {
    color = -5;
  }
}

colorMix();
setInterval(colorMix, 1000);
