//images taken form the game "Arknights" by Hypergryph
var photos = new Array();

photos["arturia"] = new Image(500, 500);
photos["arturia"].src = "img/arturia.png";

photos["kaltsit"] = new Image(500, 500);
photos["kaltsit"].src = "img/kaltsit.png";

photos["delphine"] = new Image(500, 500);
photos["delphine"].src = "img/delphine.png";

photos["texas"] = new Image(500, 500);
photos["texas"].src = "img/texas.png";

function changeImg(value){
    document.getElementById("img").src = photos[value].src;
}