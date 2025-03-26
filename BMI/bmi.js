document.getElementById("calculate").addEventListener("click", function () {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter valid numbers for weight and height.");
    return;
  }

  const bmi = (weight / (height * height)) * 703;
  document.getElementById("score").textContent = bmi.toFixed(2);

  let type = "";
  if (bmi < 18.5) {
    type = "Underweight";
  } else if (bmi < 24.9) {
    type = "Normal weight";
  } else if (bmi < 29.9) {
    type = "Overweight";
  } else {
    type = "Obese";
  }

  document.getElementById("type").textContent = type;
});