let ball;
let timerId;

document.addEventListener("DOMContentLoaded", startMoving);

function startMoving() {
  ball = document.getElementById("ball");
  timerId = setInterval(moveBall, 10);
}

function moveBall() {
  let left = parseInt(window.getComputedStyle(ball).left);
  //if (left <= window.innerWidth-100) {
  ball.style.left = left + 5 + "px";
  console.log("Moving the ball to " + ball.style.left);
}
