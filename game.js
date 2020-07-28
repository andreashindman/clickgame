var body = document.getElementsByTagName("BODY")[0];

setInterval(addRandomTarget, 1000);

body.onclick = function(event) {
    if (event.target.classList.contains("target")) {
        event.target.remove();
    }
}

function addRandomTarget() {
    var posFromLeft = (getRndDouble(0, innerWidth - 100));
    var posFromTop = (getRndDouble(0, innerHeight - 100));
    body.innerHTML += `<svg class="target-container" width="100" height="100" style="left: ${posFromLeft}px; top: ${posFromTop}px;"> <circle class="target" cx="50" cy="50" r="40"/> </svg>`
}

function getRndDouble(min, max) {
    return (Math.random() * (max - min)) + min
}

// var btn = document.createElement("BUTTON");
// btn.innerHTML = "CLICK ME";
// document.body.appendChild(btn);
