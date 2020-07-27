const inputContainer = document.querySelector(".input-container");
const textArea = document.querySelector("#textArea");
const actualText = document.querySelector(".actual-text").innerHTML;
const resetBtn = document.querySelector(".start-btn");
const timer = document.querySelector(".start-timer");


   



let timers = [0, 0, 0, 0];

let interval;
let timeRunning=false;


//adding zeros to the clock

function addZeros(time) {
  if (time <= 9) {
    time = "0" + time;
  }
  return time;
}

//timer

function runTimer() {
  let currentTime =
    addZeros(timers[0]) + ":" + addZeros(timers[1]) + ":" + addZeros(timers[2]);
  timer.innerHTML = currentTime;
  timers[3]++;

  timers[0] = Math.floor((timers[3] / 100) / 60);
  timers[1] = Math.floor((timers[3] / 100) - (timers[0] * 60));
  timers[2] = Math.floor(timers[3] - (timers[1] * 100) - (timers[0] * 6000));
}

//reset btn
function reset() {
  clearInterval(interval);
  interval = null;
  timers = [0, 0, 0, 0];
  timeRunning=false;
  textArea.value="";
  timer.innerHTML="00:00:00";
  textArea.style.borderColor="white";

 
  
 
}

//match the text

function spellCheck() {
  let typedText = textArea.value;
  
  let actualTextMatch = actualText.substring(0, typedText.length);
  if (typedText == actualText) {
    
    textArea.style.border = "3px solid red";
    clearInterval(interval);
  } else {
    if (typedText == actualTextMatch) {
      textArea.style.backgroundColor = "white";
    } else {
      textArea.style.backgroundColor = "#FDDC5C";
    }
  }
}

//start the time
function start() {
   
  let typedTextLength = textArea.value.length;
  if (typedTextLength === 0) {
      timeRunning=true;
    interval=setInterval(runTimer, 10);
  }

}

//event listener for textarea box

textArea.addEventListener("click", start, false);
textArea.addEventListener("keyup", spellCheck, false);

resetBtn.addEventListener("click", reset, false);