document.addEventListener("DOMContentLoaded", function() {
  let textareaElement = document.getElementById("userName");
  textareaElement.addEventListener("input", textChanged);

  let h1Element = document.getElementsByTagName("h1")[0];
  h1Element.addEventListener("mouseout", function(){
    console.log("Event fired");
  });

  h1Element.addEventListener("click", function(event){
    //this.style.color = "yellow";
    event.target.style.color = "yellow";
  });
});

function textChanged(event) {
  document.getElementById("stringLength").innerHTML = event.target.value.length;
}