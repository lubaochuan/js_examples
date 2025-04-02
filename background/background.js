window.onload = function(){
  document.getElementById("left").addEventListener("click", function(){
    shiftBackground("left");
  });
  document.getElementById("right").addEventListener("click", function(){
    shiftBackground("right");
  });
  document.getElementById("up").addEventListener("click", function(){
    shiftBackground("up");
  });
  document.getElementById("down").addEventListener("click", function(){
    shiftBackground("down");
  });

  function shiftBackground(direction) {
    const container = document.getElementById('imageContainer');
    let currentX = 0;
    let currentY = 0;
    if (direction === 'left') {
      currentX -= 100; // Shift left by 100px
    } else if (direction === 'right') {
      currentX += 100; // Shift right by 100px
    } else if (direction === 'up') {
      currentY -= 100; // Shift up by 100px
    } else if (direction === 'down') {
      currentY += 100; // Shift down by 100px
    }

    container.style.backgroundPosition = `${currentX}px ${currentY}px`;
  }
}