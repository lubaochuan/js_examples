console.log("script loaded");

onload = pageLoad;

function pageLoad(){
  //console.log("here");
  let button = document.getElementById("btn3");
  //console.log(button);
  button.addEventListener("click", say_hello);
};

function say_hello(){
  alert("hello world!");
}
