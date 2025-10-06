"use strict";

const displayDate = document.getElementById("date");
const displayTime = document.getElementById("time");
const btn = document.getElementById("show-tasks");
const aside = document.getElementById("aside");

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
