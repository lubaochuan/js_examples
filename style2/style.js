document.addEventListener("DOMContentLoaded", setup);

function setup() {
  let name = document.getElementById("name");

  name.style.border = "2px solid red";

  name.addEventListener("focus", function(event) {
    //event.preventDefault();
    console.log("Input focused");
    this.style.border = "2px solid green";
  });

  name.addEventListener("blur", function() {
    console.log("Input blurred");
    this.style.border = "2px solid purple";
  });

  let answer = document.getElementById("answer");
  answer.style.border = "2px solid red";
}
