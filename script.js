"use strict";

const displayDate = document.getElementById("date");
const displayTime = document.getElementById("time");
const btn = document.getElementById("show-tasks");
const aside = document.getElementById("aside");
// timer
const timerUI = document.getElementById("timer");
const startTimerBtn = document.getElementById("start-timer");
let setTimeByUser = 25;
let timeLeftInSeconds = setTimeByUser * 60;
let isCountingDown = false;
let timerIntervalID = null;

// date
const dateOptions = { month: "short", day: "numeric", weekday: "long" };
const today = new Date().toLocaleDateString("en-US", dateOptions);
displayDate.textContent = today;

// time
function updateTime() {
  const timeOptions = { hour: "numeric", minute: "2-digit", hour12: true };
  const time = new Date().toLocaleTimeString("en-US", timeOptions);
  displayTime.textContent = time;
}

updateTime();

setInterval(updateTime, 1000);

// show tasks
btn.addEventListener("click", () => {
  aside.classList.toggle("show-tasks");
});

// timer
const updateTimer = function () {
  let minutes = Math.floor(timeLeftInSeconds / 60);
  let seconds = timeLeftInSeconds % 60;
  timerUI.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

const startTimer = function () {
  timerIntervalID = setInterval(() => {
    timeLeftInSeconds--;
    updateTimer();
  }, 1000);
};

startTimerBtn.addEventListener("click", () => {
  if (!isCountingDown) {
    startTimer();
    isCountingDown = true;
  } else {
    isCountingDown = false;
    clearInterval(timerIntervalID);
  }

  startTimerBtn.textContent = !isCountingDown ? "Start" : "Stop";
});
