var randomNumber1 = Math.floor(Math.random() *6) + 1 ;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource1 = "images/" + randomDiceImage ;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6 ) +1 ;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png" ;

image2 = document.querySelectorAll("img")[1] ;

image2.setAttribute("src" , randomImageSource2);

let h1 = document.querySelector("h1");

if(randomNumber1 > randomNumber2) {
     h1.innerHTML = "🚩 Player 1 Wins"
}

else if(randomNumber2 >randomNumber1) {
    h1.innerHTML = "Player 2 Wins 🚩"
}

else {
    h1.innerHTML = "Draw" ;
}