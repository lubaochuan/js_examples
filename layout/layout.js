document.addEventListener("DOMContentLoaded", function () {
  const content = document.querySelector(".content");

  document.addEventListener("click", function () {
      const randomTop = Math.floor(Math.random() * 100) + "px";
      const randomLeft = Math.floor(Math.random() * 100) + "px";

      content.style.top = randomTop;
      content.style.left = randomLeft;
  });
});
