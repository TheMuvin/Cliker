const store_menu = document.querySelector(".store");
store_menu.addEventListener("click", store);
var w = document.getElementById("btn");
var h = document.getElementById("store_menu");
var active = 1;
function store() {
  if (active == 0) {
    w.style.width = "100%";
    h.style.height = "0vh";
    active = 1;
  } else {
    w.style.width = "50%";
    h.style.height = "95vh";
    active = 0;
  }
}
