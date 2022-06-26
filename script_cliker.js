const btn_click = document.querySelector(".btn");
btn_click.addEventListener("click", game);
var click_x = 0;
var tablo = document.querySelector("#tablo_click");

function game() {
  if (click_x == 100) {
    click_x = click_x - 100;
    tablo.textContent = click_x;
  } else {
    click_x = click_x + 1;
    tablo.textContent = click_x;
  }
}
