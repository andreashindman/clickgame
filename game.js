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

// interval ID in global scope for access by other functions
var targetGenerator;

// start interval for adding targets to page if interval ID
// is null or undefined
function startGame() {
    console.log("game started");
    // ensure targetGenerator is not running: check for undefined or null
    if (!targetGenerator)
        targetGenerator = setInterval(addRandomTarget, 2000);
}

// stop game and set interval ID, targetGenerator, to null
function stopGame() {
    console.log("game stopped");
    clearInterval(targetGenerator)
    targetGenerator = null;
}

// var body = document.getElementsByTagName("BODY")[0];
var body = document.body;

// remove targets when they're clicked
body.onclick = function(event) {
    // console.log("Clicked: ", event.target);
    if (event.target.classList.contains("target")) {
        event.target.parentElement.remove();
    }
}

// add a random target somewhere on the page
function addRandomTarget() {
    var posFromLeft = (getRndDouble(0, innerWidth - 100));
    var posFromTop = (getRndDouble(0, innerHeight - 100));
    body.innerHTML += `<svg class="target-container" width="100" height="100" style="left: ${posFromLeft}px; top: ${posFromTop}px;"> <circle class="target" cx="50" cy="50" r="40"/> </svg>`
}

// get random double within range [min, max]
function getRndDouble(min, max) {
    return (Math.random() * (max - min)) + min
}


