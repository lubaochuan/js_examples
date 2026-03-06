document.addEventListener("DOMContentLoaded", setup);

function setup() {
  let inputs = document.querySelectorAll("input");

  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    input.style.border = "2px solid red";

    input.addEventListener("focus", function(event) {
      //event.preventDefault();
      console.log("Input focused");
      this.style.border = "2px solid green";
    });

    input.addEventListener("blur", function() {
      console.log("Input blurred");
      this.style.border = "2px solid purple";
    });
  }
}
