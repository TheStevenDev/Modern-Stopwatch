let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startStopwatch() {
  timer = setInterval(displayStopwatch, 1000);
  document.getElementById("startButton").disabled = true;
}

function displayStopwatch() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let displayHours = hours < 10 ? "0" + hours : hours;
  let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  let displaySeconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("display").innerText = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

function pauseStopwatch() {
  clearInterval(timer);
  document.getElementById("startButton").disabled = false;
}

function resetStopwatch() {
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById("display").innerText = "00:00:00";
  document.getElementById("startButton").disabled = false;
}
