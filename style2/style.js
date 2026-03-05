document.addEventListener("DOMContentLoaded", setup);

function setup() {
  let inputs = document.querySelectorAll("input");

  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    input.style.border = "1px solid red";
    input.addEventListener("focus", function() {
      this.style.border = "1px solid green";
    });
    input.addEventListener("blur", function() {
      this.style.border = "1px solid blue";
    });
  }
}