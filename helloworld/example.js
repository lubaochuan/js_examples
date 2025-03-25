console.log("script loaded");

window.onload = function(){
  //console.log("here");
  let button = document.getElementById("btn3");
  //console.log(button);
  button.addEventListener("click", say_hello);
};

function say_hello(){
  alert("hello world!");
}

