const vaqtOzgarishi = document.querySelector('#timer-display');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const restartButton = document.querySelector('#restart');

let hours = 0;
let minutes = 0;
let seconds = 0;
let timerInterval = null;

function formatTime(unit) {
  if (unit < 10) {
    return '0' + unit;
  } else {
    return unit.toString();
  }
}

function vaqtFuksiya() {
  vaqtOzgarishi.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function startTimer() {
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    vaqtFuksiya();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  stopTimer();
  hours = 0;
  minutes = 0;
  seconds = 0;
  vaqtFuksiya();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
restartButton.addEventListener('click', resetTimer);

vaqtFuksiya();