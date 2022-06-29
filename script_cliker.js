const btn_click = document.querySelector(".btn");
btn_click.addEventListener("click", game);
var click_x = 0;
var tablo = document.querySelector("#tablo_click");
var cliker_plus = document.querySelector("#Clicker_plus");
var clicks = 1;
function game() {
  if (click_x <= 99) {
    click_x = click_x + clicks;
    tablo.textContent = click_x;
  }
  if (click_x >= 100 && click_x <= 199) {
    clicks = 2;
    click_x = click_x + clicks;
    cliker_plus.textContent = clicks;
    tablo.textContent = click_x;
  }
}
