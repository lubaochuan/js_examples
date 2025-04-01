let lost = false;  // is the game lost?
let start = false; // has a game started?

window.onload = function(){
  const bounds = document.querySelectorAll(".boundary");
  for(let i=0; i<bounds.length; i++){
    bounds[i].addEventListener("mouseover", function(){
      if(start){
        red();
      }
    });
  }

  document.getElementById("start").addEventListener("click", function(){
    start = true;
    lost = false;
    document.getElementById("status").innerHTML = "Game started. Good luck!";
    reset();
  });

  document.getElementById("end").addEventListener("click", function(){
    if(start && !lost){
      document.getElementById("status").innerHTML = "You win!";
    }
    start = false;
  });

  document.getElementById("maze").addEventListener("mouseleave", function(){
    if(start){
      lost = true;
      red();
      document.getElementById("status").innerHTML = "You lose!";
    }
  });
}

function red(){
  const bounds = document.querySelectorAll(".boundary");
  for(let i=0; i<bounds.length; i++){
      bounds[i].classList.add("youlose");
  }
  document.getElementById("status").innerHTML = "You lose!";
}

function reset(){
  const bounds = document.querySelectorAll(".boundary");
  for(let bound of bounds){
      bound.classList.remove("youlose");
  }
  document.getElementById("status").innerHTML = "You lose!";
}