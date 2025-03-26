function grow() {
  const rows = parseInt(document.getElementById("rows").value);
  const columns = parseInt(document.getElementById("columns").value);
  const garden = document.getElementById("garden");

  // Clear previous garden
  garden.innerHTML = "";

  if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
    alert("Please enter valid numbers for rows and columns.");
    return;
  }

  const flowerImages = [
    "https://cdn3.iconfinder.com/data/icons/pidginsmilies/rose.png",
    "https://cdn3.iconfinder.com/data/icons/pidginsmilies/pumpkin.png"
  ];

  for (let i = 0; i < rows; i++) {
    const rowDiv = document.createElement("div");

    for (let j = 0; j < columns; j++) {
      const img = document.createElement("img");
      img.src = flowerImages[Math.floor(Math.random() * 2)];
      rowDiv.appendChild(img);
    }

    garden.appendChild(rowDiv);
  }
}

// Attach event listener to button
document.getElementById("plant").addEventListener("click", grow);
