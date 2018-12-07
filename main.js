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

const waterMelonImages = document.querySelectorAll(".card img");


for (let i = 0; i < cards.length-2; i=i+3) {
  waterMelonImages[i].setAttribute(
    "src", 
    "http://www.freshplaza.com/2018/0816/Melon.jpg"
    );
;
}

for (let i = 1; i < cards.length-2; i=i+3) {
  waterMelonImages[i].setAttribute(
    "src", 
    "http://jpninfo.com/wp-content/uploads/2015/06/Watermelons1.jpg"
    );
;
}

