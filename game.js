// old buttons depricated and replaced by inline buttons & events
// js EventListeners conflict with interval
// var startBtn = document.createElement("BUTTON");
// startBtn.innerHTML = "start!";
// document.body.appendChild(startBtn);
// startBtn.addEventListener("click", startGame); 
// // startBtn.onclick = startGame;

// var stopBtn = document.createElement("BUTTON");
// stopBtn.innerHTML = "stop";
// document.body.appendChild(stopBtn);
// // stopBtn.addEventListener("click", stopGame);
// stopBtn.onclick = stopGame;

// interval IDs in global scope for access by other functions
var targetInterval, timerInterval;

// var body = document.getElementsByTagName("BODY")[0];
var body = document.body;

// keep count of strikes 
var strikes = 0;

// handle targets when they're clicked
body.onclick = function(event) {
    if (event.target.classList.contains("target")) {
        // remove target 
        event.target.parentElement.remove();
        console.log(strikes);
    } else if (event.target.classList.contains("obstacle")) {
        // remove obstacle
        event.target.parentElement.remove();
        // increment strikes 
        ++strikes;
        console.log(strikes);
    }
}

// start interval for adding targets to page if interval ID
// is null or undefined
function startGame() {
    // ensure targetInterval is not running: check for undefined or null
    if (!targetInterval) {
        targetInterval = setInterval(addRandomTarget, 2000);
        startTimer();
    }
}

// stop game and set interval ID, targetInterval, to null
function stopGame() {
    clearInterval(targetInterval)
    targetInterval = null;

    // stop timer
    clearInterval(timerInterval);
}

// add a random target somewhere on the page
function addRandomTarget() {
    var posFromLeft = (getRndDouble(0, innerWidth - 100));
    var posFromTop = (getRndDouble(0, innerHeight - 100));
    var targetType;
    
    // determine whether a target or an obstacle will be placed 
    if (getRndDouble(0, 1) > 0.2) {
        targetType = "target";
    } else {
        targetType = "obstacle";
    }

    // add target or obstacle to page
    body.innerHTML += `<svg class="target-container" width="100" height="100" style="left: ${posFromLeft}px; top: ${posFromTop}px;"> <circle class=${targetType} cx="50" cy="50" r="40"/> </svg>`
}

// get random double within range [min, max]
function getRndDouble(min, max) {
    return (Math.random() * (max - min)) + min
}

// start (or restart) and display the game timer
function startTimer() {
    
    var secondsElapsed = 0;
    document.getElementById("timer").innerHTML = "00:00";

    // clear existing timer ID
    clearInterval(timerInterval);
    timerInterval = setInterval(setTime, 1000);

    function setTime() {
        ++secondsElapsed;
        var seconds = pad(secondsElapsed % 60);
        var minutes = pad(parseInt(secondsElapsed / 60));
        document.getElementById("timer").innerHTML = minutes + ":" + seconds;
    }

    // return a value with leading 0's if length < 2
    function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }
}
