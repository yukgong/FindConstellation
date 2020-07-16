const pageX = document.querySelector(".pageX"),
    pageY = document.querySelector(".pageY"),
    mouseFollower = document.querySelector(".mouseFollower");

function updateDisplay(ev) {
    pageX.innerHTML = ev.pageX;
    pageY.innerHTML = ev.pageY;
    mouseFollower.style.left = `${ev.pageX+20}px`;
    mouseFollower.style.top = `${ev.pageY+20}px`;
}

window.addEventListener("mousemove", updateDisplay, false);
window.addEventListener("mouseenter", updateDisplay, false);
window.addEventListener("mouseleave", updateDisplay, false);