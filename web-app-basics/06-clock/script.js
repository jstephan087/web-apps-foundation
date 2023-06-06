"use strict";
function logTime() {
  const day = new Date();
  const seconds = day.getSeconds().toString();
  const minutes = day.getMinutes().toString();
  const hours = day.getHours().toString();

  //Analog Clock//
  document.querySelector(".clock-sec").style = `--sec:${seconds * 6}deg`;
  document.querySelector(".clock-min").style = `--min:${minutes * 6}deg`;
  document.querySelector(".clock-hour").style = `--hour:${hours * 30}deg`;

  //Digital Clock//

  document.querySelectorAll(".digit-dots").forEach((dot) => {
    dot.classList.toggle("hidden");
  });
  document.querySelector(".digit-sec").innerText = twoDigit(seconds);
  document.querySelector(".digit-min").innerText = twoDigit(minutes);
  document.querySelector(".digit-hour").innerText = twoDigit(hours);
}

function twoDigit(number) {
  number = number.length === 1 ? "0" + number : number;
  return number;
}

logTime();
setInterval(logTime, 1000);
