var container = document.querySelector('.container');
var colorCard = document.querySelector('.color-card');
var btn = document.querySelector("button");
var hex = document.querySelector("span");

function GetColors() {
     var symbol = '0123456789ABCDEF'
     var color = '#';
     for (i = 0; i < 6; i++)
     {
          color = color + symbol[Math.floor(Math.random() * 16)];
     }
     document.body.style.background = color;
     colorCard.style.background = color;

}
btn.addEventListener("click", GetColors)