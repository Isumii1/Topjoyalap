const szoveg = document.getElementById("szoveg");
const gomb = document.getElementById("gomb");

const tomb = ["A BELSŐ SZÁMÍT","A CSILLAGOK FIGYELNEK","A DOLGOK JÓL HALADNAK","VIDÁMSÁG! :)","VIDD VÉGIG AZ ÖTLETEIDET!","VIGYÉL EGY JÓ HÍRT!"];

gomb.addEventListener("click",function(){
    let szam = Math.floor(Math.random()*tomb.length);
    szoveg.textContent = tomb[szam];
});