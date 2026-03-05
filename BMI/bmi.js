document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("calculate").addEventListener("click", calculateBMI);
});

function calculateBMI() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  let BMI = weight / (height * height);

  if(isNaN(BMI)) {
    document.getElementById("score").textContent = "Invalid input";
  } else {
    document.getElementById("score").textContent = BMI.toFixed(2);
  }
}