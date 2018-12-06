"use strict";

const cards = document.querySelectorAll(".card");


const rows = document.querySelectorAll(".row");
for(let i=0; i<rows.length; i++){
    cards[i].setAttribute("style", "")
}


for(let i=0; i<cards.length; i++){
    cards[i].setAttribute("style", "margin-top: 0.3em; margin-bottom: 0.3em ;margin-left:-.7em; margin-right:-.7em;")
}
