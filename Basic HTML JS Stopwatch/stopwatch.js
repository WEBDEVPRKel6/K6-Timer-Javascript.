let counter = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
  stopwatchCounter = 1,
  interval,
  isPause;

let appendHour = document.getElementById("hour"),
  appendMinute = document.getElementById("minute"),
  appendSecond = document.getElementById("second");

let stopMessage = document.getElementById("stop-message");

let multiButton = document.getElementById("multi-btn"),
  stopButton = document.getElementById("stop-btn"),
  addButton = document.getElementById("add-btn");

// let stopwatchContainer = document.getElementById("stopwatch-container");
// let stopwatch = document.getElementById("stopwatch");

const timeConvert = (counter) => {
  hours = Math.floor(counter / 3600);
  minutes = Math.floor((counter - hours * 3600) / 60);
  seconds = counter - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (hours >= 24) {
    return alert(
      "Anda Telah Mengerjakan Tugas Selama 24 JAM! Silahkan Istirahat Sejenak"
    );
  } else {
    return (
      (appendHour.innerHTML = hours) +
      ":" +
      (appendMinute.innerHTML = minutes) +
      ":" +
      (appendSecond.innerHTML = seconds)
    );
  }
};

const timeCatcher = () => {
  return (stopMessage.innerHTML = `Total Waktu Pengerjaan : ${hours} Jam ${minutes} Menit ${seconds} Detik.`);
};

const resetTimer = () => {
  counter = 0;
};

const stopTimer = () => {
  resetTimer();
  timeCatcher();
  timeConvert(counter);
};

const startTimer = () => {
  if (!isPause) {
    counter++;
    timeConvert(counter);
  }
};

// const addStopwatch = () => {
//   let stopwatchCLone = stopwatch.cloneNode(false);
//   stopwatchCLone.setAttribute("id", `stopwatch${stopwatchCounter}`);
//   stopwatchContainer.appendChild(stopwatchCLone);
// };

multiButton.onclick = () => {
  if (multiButton.innerHTML == "Start") {
    isPause = false;
    interval = setInterval(startTimer, 1000);
    multiButton.innerHTML = "Pause";
  } else if (multiButton.innerHTML == "Pause") {
    isPause = true;
    multiButton.innerHTML = "Continue";
  } else if (multiButton.innerHTML == "Continue") {
    isPause = false;
    multiButton.innerHTML = "Pause";
  }
};

stopButton.onclick = () => {
  if (counter != 0) {
    clearInterval(interval);
    stopTimer();
  }
};

// addButton.onclick = () => {
//   addStopwatch();
// };
