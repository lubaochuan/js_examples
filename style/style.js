window.onload = function() {
  document.getElementById("clickme").onclick = changeColor;
};
function changeColor() {
  //var clickMe = document.getElementById("clickme");
  //clickMe.style.color = "red";
  this.style.color = "red";
}