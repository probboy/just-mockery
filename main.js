"use strict";

const cards = document.querySelectorAll(".card");

const rows = document.querySelectorAll(".row");

for (let i = 0; i < rows.length; i++) {
  cards[i].setAttribute("style", "");
}

for (let i = 0; i < cards.length; i++) {
  cards[i].setAttribute(
    "style",
    "margin: 0.3em -0.7em 0.3em -0.7em;"
  );
}
