const cubo = document.getElementById("cubo");
cubo.style.background = "blue";

let step = 10;
let positionLeft = 150;
let positionTop = 60;

function move() {
  positionLeft = positionLeft + step;
  cubo.style.marginLeft = positionLeft + "px";
  cubo.style.background = "blue";
}

function moveL() {
  const cubo = document.getElementById("cubo");

  positionLeft = positionLeft - 10;
  cubo.style.marginLeft = positionLeft + "px";
  cubo.style.background = "red";
}

function moveR() {
  const cubo = document.getElementById("cubo");

  positionLeft = positionLeft + 10;
  cubo.style.marginLeft = positionLeft + "px";
  cubo.style.background = "green";
}

function moveU() {
  const cubo = document.getElementById("cubo");

  positionTop = positionTop - 10;

  cubo.style.marginTop = positionTop + "px";
  cubo.style.background = "yellow";
}

function moveD() {
  const cubo = document.getElementById("cubo");

  positionTop = positionTop + 10;

  cubo.style.marginTop = positionTop + "px";
  cubo.style.background = "pink";
}
