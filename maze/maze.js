let lost = false;  // is the game lost?
let started = false; // has a game started?

window.onload = function(){
  const bounds = document.querySelectorAll(".boundary");
  for(let i=0; i<bounds.length; i++){
    bounds[i].addEventListener("mouseover", function(){
      if(started){
        red();
      }
    });
  }

  document.getElementById("start").addEventListener("click", function(){
    started = true;
    lost = false;
    document.getElementById("status").innerHTML = "Game started. Good luck!";
    reset();
  });

  document.getElementById("end").addEventListener("click", function(){
    if(started && !lost){
      document.getElementById("status").innerHTML = "You win!";
    }
    started = false;
  });

  document.getElementById("maze").addEventListener("mouseleave", function(){
    if(started){
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

  lost = true;
  document.getElementById("status").innerHTML = "You lose!";
}

function reset(){
  const bounds = document.querySelectorAll(".boundary");
  for(let bound of bounds){
      bound.classList.remove("youlose");
  }
  //document.getElementById("status").innerHTML = "You lose!";
}