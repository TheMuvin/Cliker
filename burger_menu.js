const burger_click2 = document.querySelector(".mobile_burger");
const burger_click1 = document.querySelector(".mobile_burger_menu");
burger_click2.addEventListener("click", open);
burger_click1.addEventListener("click", close);
var ac = document.getElementById("menu");
function open() {
  ac.classList.remove("none");
}
function close() {
  ac.classList.add("none");
}
