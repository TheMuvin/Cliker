const btn_click = document.querySelector(".btn");
btn_click.addEventListener("click", game);
var tablo = document.querySelector("#tablo_click");
var cliker_plus = document.querySelector("#Clicker_plus");
var limit = document.querySelector("#limit");
var price_clicker = document.querySelector("#price_clicker");
var price_balans = document.querySelector("#price_balans");
var max = document.querySelector("#max");
var Balans_plus = document.querySelector("#Balans_plus");
/*Переменки апгрейдоров*/
const click_upgrade_clikes = document.querySelector(".upgrade_click");
click_upgrade_clikes.addEventListener("click", upgrade_clikes_f);
// ап баланса
const balans_upgrade_clikes = document.querySelector(".upgade_balans");
balans_upgrade_clikes.addEventListener("click", upgrade_balans_f);
/*Баланс*/
var balans = 0;
/*лимит*/
var limit_1 = 100;
var limit_2 = 1000;
var limit_3 = 5000;
var limit_4 = 10000;
var limit_5 = 999999;

//Апгрейдоры цены
var q_up = 100;
var w_up = 1000;
var e_up = 5000;
var r_up = 10000;

/*Апгрейдоры*/
var upgrade_clikes = 1;
var upgrade_balans = 1;
function upgrade_clikes_f() {
  if (upgrade_clikes == 1) {
    if (balans >= q_up) {
      balans = balans - q_up;
      upgrade_clikes = 2;
      limit.textContent = "";
      price_clicker.textContent = w_up;
      game();
    }
  }
  if (upgrade_clikes == 2) {
    if (balans >= w_up) {
      balans = balans - w_up;
      upgrade_clikes = 3;
      limit.textContent = "";
      price_clicker.textContent = e_up;
      game();
    }
  }
  if (upgrade_clikes == 3) {
    if (balans >= e_up) {
      balans = balans - e_up;
      upgrade_clikes = 4;
      limit.textContent = "";
      price_clicker.textContent = r_up;
      game();
    }
  }
  if (upgrade_clikes == 4) {
    if (balans >= r_up) {
      balans = balans - r_up;
      upgrade_clikes = 5;
      limit.textContent = "";
      max.textContent = "5/5";
      game();
    }
  }
}
function upgrade_balans_f() {
  if (upgrade_balans == 1) {
    if (balans >= q_up) {
      balans = balans - q_up;
      upgrade_balans = 2;
      limit.textContent = "";
      price_balans.textContent = w_up;
      Balans_plus.textContent = limit_2;
      game();
    }
  }
  if (upgrade_balans == 2) {
    if (balans >= w_up) {
      balans = balans - w_up;
      upgrade_balans = 3;
      limit.textContent = "";
      price_balans.textContent = e_up;
      Balans_plus.textContent = limit_3;
      game();
    }
  }
  if (upgrade_balans == 3) {
    if (balans >= e_up) {
      balans = balans - e_up;
      upgrade_balans = 4;
      limit.textContent = "";
      price_balans.textContent = r_up;
      Balans_plus.textContent = limit_4;
      game();
    }
  }
  if (upgrade_balans == 4) {
    if (balans >= r_up) {
      balans = balans - r_up;
      upgrade_balans = 5;
      limit.textContent = "";
      Balans_plus.textContent = limit_5;
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
  if (upgrade_balans == 1) {
    if (balans < limit_1) {
      balans = balans + 1;
      tablo.textContent = balans;
      cliker_plus.textContent = 1 + "/5";
    }
    if (balans >= limit_1) {
      balans = limit_1;
      limit.textContent = "Лимит!";
    }
  }
  if (upgrade_balans == 2) {
    if (balans < limit_2) {
      balans = balans + 1;
      tablo.textContent = balans;
      cliker_plus.textContent = 1 + "/5";
    }
    if (balans >= limit_2) {
      balans = limit_2;
      limit.textContent = "Лимит!";
    }
  }
  if (upgrade_balans == 3) {
    if (balans < limit_3) {
      balans = balans + 1;
      tablo.textContent = balans;
      cliker_plus.textContent = 1 + "/5";
    }
    if (balans >= limit_3) {
      balans = limit_3;
      limit.textContent = "Лимит!";
    }
  }
  if (upgrade_balans == 4) {
    if (balans < limit_4) {
      balans = balans + 1;
      tablo.textContent = balans;
      cliker_plus.textContent = 1 + "/5";
    }
    if (balans >= limit_4) {
      balans = limit_4;
      limit.textContent = "Лимит!";
    }
  }
  if (upgrade_balans == 5) {
    if (balans < limit_5) {
      balans = balans + 1;
      tablo.textContent = balans;
      cliker_plus.textContent = 1 + "/5";
    }
    if (balans >= limit_5) {
      balans = limit_5;
      limit.textContent = "Лимит!";
    }
  }
}
function if_limit_2() {
  if (upgrade_balans == 1) {
    if (balans < limit_1) {
      balans = balans + 2;
      tablo.textContent = balans;
      cliker_plus.textContent = 2 + "/5";
    }
    if (balans >= limit_1) {
      balans = limit_1;
      limit.textContent = "Лимит!";
    }
  }
  if (upgrade_balans == 2) {
    if (balans < limit_2) {
      balans = balans + 2;
      tablo.textContent = balans;
      cliker_plus.textContent = 2 + "/5";
    }
    if (balans >= limit_2) {
      balans = limit_2;
      limit.textContent = "Лимит!";
    }
  }
  if (upgrade_balans == 3) {
    if (balans < limit_3) {
      balans = balans + 2;
      tablo.textContent = balans;
      cliker_plus.textContent = 2 + "/5";
    }
    if (balans >= limit_3) {
      balans = limit_3;
      limit.textContent = "Лимит!";
    }
  }
  if (upgrade_balans == 4) {
    if (balans < limit_4) {
      balans = balans + 2;
      tablo.textContent = balans;
      cliker_plus.textContent = 2 + "/5";
    }
    if (balans >= limit_4) {
      balans = limit_4;
      limit.textContent = "Лимит!";
    }
  }
  if (upgrade_balans == 5) {
    if (balans < limit_5) {
      balans = balans + 2;
      tablo.textContent = balans;
      cliker_plus.textContent = 2 + "/5";
    }
    if (balans >= limit_5) {
      balans = limit_5;
      limit.textContent = "Лимит!";
    }
  }
}
function if_limit_3() {
  if (upgrade_balans == 1) {
    if (balans < limit_1) {
      balans = balans + 3;
      tablo.textContent = balans;
      cliker_plus.textContent = 3 + "/5";
    }
    if (balans >= limit_1) {
      balans = limit_1;
      limit.textContent = "Лимит!";
    }
  }
  if (upgrade_balans == 2) {
    if (balans < limit_2) {
      balans = balans + 3;
      tablo.textContent = balans;
      cliker_plus.textContent = 3 + "/5";
    }
    if (balans >= limit_2) {
      balans = limit_2;
      limit.textContent = "Лимит!";
    }
  }
  if (upgrade_balans == 3) {
    if (balans < limit_3) {
      balans = balans + 3;
      tablo.textContent = balans;
      cliker_plus.textContent = 3 + "/5";
    }
    if (balans >= limit_3) {
      balans = limit_3;
      limit.textContent = "Лимит!";
    }
  }
  if (upgrade_balans == 4) {
    if (balans < limit_4) {
      balans = balans + 3;
      tablo.textContent = balans;
      cliker_plus.textContent = 3 + "/5";
    }
    if (balans >= limit_4) {
      balans = limit_4;
      limit.textContent = "Лимит!";
    }
  }
  if (upgrade_balans == 5) {
    if (balans < limit_5) {
      balans = balans + 3;
      tablo.textContent = balans;
      cliker_plus.textContent = 3 + "/5";
    }
    if (balans >= limit_5) {
      balans = limit_5;
      limit.textContent = "Лимит!";
    }
  }
}
function if_limit_4() {
  if (upgrade_balans == 1) {
    if (balans < limit_1) {
      balans = balans + 4;
      tablo.textContent = balans;
      cliker_plus.textContent = 4 + "/5";
    }
    if (balans >= limit_1) {
      balans = limit_1;
      limit.textContent = "Лимит!";
    }
  }
  if (upgrade_balans == 2) {
    if (balans < limit_2) {
      balans = balans + 4;
      tablo.textContent = balans;
      cliker_plus.textContent = 4 + "/5";
    }
    if (balans >= limit_2) {
      balans = limit_2;
      limit.textContent = "Лимит!";
    }
  }
  if (upgrade_balans == 3) {
    if (balans < limit_3) {
      balans = balans + 4;
      tablo.textContent = balans;
      cliker_plus.textContent = 4 + "/5";
    }
    if (balans >= limit_3) {
      balans = limit_3;
      limit.textContent = "Лимит!";
    }
  }
  if (upgrade_balans == 4) {
    if (balans < limit_4) {
      balans = balans + 4;
      tablo.textContent = balans;
      cliker_plus.textContent = 4 + "/5";
    }
    if (balans >= limit_4) {
      balans = limit_4;
      limit.textContent = "Лимит!";
    }
  }
  if (upgrade_balans == 5) {
    if (balans < limit_5) {
      balans = balans + 4;
      tablo.textContent = balans;
      cliker_plus.textContent = 4 + "/5";
    }
    if (balans >= limit_5) {
      balans = limit_5;
      limit.textContent = "Лимит!";
    }
  }
}
function if_limit_5() {
  if (upgrade_balans == 1) {
    if (balans < limit_1) {
      balans = balans + 5;
      tablo.textContent = balans;
      cliker_plus.textContent = 5 + "/5";
    }
    if (balans >= limit_1) {
      balans = limit_1;
      limit.textContent = "Лимит!";
    }
  }
  if (upgrade_balans == 2) {
    if (balans < limit_2) {
      balans = balans + 5;
      tablo.textContent = balans;
      cliker_plus.textContent = 5 + "/5";
    }
    if (balans >= limit_2) {
      balans = limit_2;
      limit.textContent = "Лимит!";
    }
  }
  if (upgrade_balans == 3) {
    if (balans < limit_3) {
      balans = balans + 5;
      tablo.textContent = balans;
      cliker_plus.textContent = 5 + "/5";
    }
    if (balans >= limit_3) {
      balans = limit_3;
      limit.textContent = "Лимит!";
    }
  }
  if (upgrade_balans == 4) {
    if (balans < limit_4) {
      balans = balans + 5;
      tablo.textContent = balans;
      cliker_plus.textContent = 5 + "/5";
    }
    if (balans >= limit_4) {
      balans = limit_4;
      limit.textContent = "Лимит!";
    }
  }
  if (upgrade_balans == 5) {
    if (balans < limit_5) {
      balans = balans + 5;
      tablo.textContent = balans;
      cliker_plus.textContent = 5 + "/5";
    }
    if (balans >= limit_5) {
      balans = limit_5;
      limit.textContent = "Лимит!";
    }
  }
}
