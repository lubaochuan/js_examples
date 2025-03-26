window.onload = function(){
  //console.log("here");
  document.getElementById("Huey").addEventListener("click", processDucks);
  document.getElementById("Dewey").addEventListener("click", processDucks);
  document.getElementById("Louie").addEventListener("click", processDucks);
};

function processDucks() {
/*
  if (document.getElementById("Huey").checked) {
    alert("Huey is checked!");
  } else if (document.getElementById("Dewey").checked) {
    alert("Dewey is checked!");
  } else {
    alert("Louie is checked!");
  }
*/
  alert(this.id + " is checked!");
}