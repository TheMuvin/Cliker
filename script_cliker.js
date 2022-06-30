const btn_click = document.querySelector(".btn");
btn_click.addEventListener("click", game);
var tablo = document.querySelector("#tablo_click");
var cliker_plus = document.querySelector("#Clicker_plus");
var limit = document.querySelector("#limit");
/*Переменки апгрейдоров*/
const click_upgrade_clikes = document.querySelector(".upgrade_click");
click_upgrade_clikes.addEventListener("click", upgrade_clikes_f);
/*Баланс*/
var balans = 0;
/*лимит*/
var limit_1 = 100;
var limit_2 = 1000;
var limit_3 = 10000;
var limit_4 = 20000;
var limit_5 = 100000;
/*Апгрейдоры*/
var upgrade_clikes = 1;
var upgrade_balans = 1;
function upgrade_clikes_f() {
  if (upgrade_clikes == 1) {
    if (balans >= 100) {
      balans = balans - 100;
      upgrade_clikes = 2;
      limit.textContent = "";
      game();
    }
  }
  if (upgrade_clikes == 2) {
    if (balans >= 100) {
      balans = balans - 100;
      upgrade_clikes = 3;
      limit.textContent = "";
      game();
    }
  }
  if (upgrade_clikes == 3) {
    if (balans >= 100) {
      balans = balans - 100;
      upgrade_clikes = 4;
      limit.textContent = "";
      game();
    }
  }
  if (upgrade_clikes == 4) {
    if (balans >= 100) {
      balans = balans - 100;
      upgrade_clikes = 5;
      limit.textContent = "";
      game();
    }
  }
}

/*игра */
function game() {
  if (upgrade_clikes == 1) {
    if_limit_1();
  }
  if (upgrade_clikes == 2) {
    if_limit_2();
  }
  if (upgrade_clikes == 3) {
    if_limit_3();
  }
  if (upgrade_clikes == 4) {
    if_limit_4();
  }
  if (upgrade_clikes == 5) {
    if_limit_5();
  }
}
function if_limit_1() {
  if (balans < limit_1) {
    balans = balans + 1;
    tablo.textContent = balans;
    cliker_plus.textContent = 1 + "/5";
  }
  if (balans == limit_1) {
    limit.textContent = "Лимит!";
  }
}
function if_limit_2() {
  if (balans < limit_1) {
    balans = balans + 2;
    tablo.textContent = balans;
    cliker_plus.textContent = 2 + "/5";
  }
  if (balans == limit_1) {
    limit.textContent = "Лимит!";
  }
}
function if_limit_3() {
  if (balans < limit_1) {
    balans = balans + 3;
    tablo.textContent = balans;
    cliker_plus.textContent = 3 + "/5";
  }
  if (balans >= limit_1) {
    balans = limit_1;
    tablo.textContent = balans;
    limit.textContent = "Лимит!";
  }
}
function if_limit_4() {
  if (balans < limit_1) {
    balans = balans + 4;
    tablo.textContent = balans;
    cliker_plus.textContent = 4 + "/5";
  }
  if (balans == limit_1) {
    limit.textContent = "Лимит!";
  }
}
function if_limit_5() {
  if (balans < limit_1) {
    balans = balans + 5;
    tablo.textContent = balans;
    cliker_plus.textContent = 5 + "/5";
  }
  if (balans == limit_1) {
    limit.textContent = "Лимит!";
  }
}
