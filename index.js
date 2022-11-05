const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const time = document.getElementById("time");
const watchContainer = document.getElementById("watch-container");
const timeContainer = document.getElementById("time-container");
const switchButton = document.getElementById("switch");
const body = document.getElementsByTagName("body")[0];

let seconds = 0;
let interval = null;

function timer() {
  seconds++;

  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hrs * 3600) / 60);
  let secs = seconds % 60;

  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;

  time.innerText = `${hrs}:${mins}:${secs}`;
}

startButton.onclick = function () {
  if (interval) {
    return;
  }
  interval = setInterval(timer, 1000);
};

stopButton.onclick = function () {
  clearInterval(interval);
  interval = null;
};

resetButton.onclick = function () {
  clearInterval(interval);
  seconds = 0;
  interval = null;
  time.innerText = "00:00:00";
};

switchButton.onclick = function () {
  switchButton.classList.toggle("active");
  body.classList.toggle("active");
  time.classList.toggle("active");
  watchContainer.classList.toggle("active");
  startButton.classList.toggle("active");
  stopButton.classList.toggle("active");
  resetButton.classList.toggle("active");
  timeContainer.classList.toggle("active");
};
