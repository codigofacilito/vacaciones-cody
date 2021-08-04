var switcher = document.getElementById("switch-button");
var backgroundLabel = document.getElementById("body");
var nav = document.getElementById("navegador");
var cursos = document.getElementsByClassName("cursos-bg");
var relax = document.getElementById("relax")
var sun = document.getElementById("sun");
var web = document.getElementById("web");
var webDesign = document.getElementById("web-design");
var enfasis = document.getElementsByClassName("enfasis");
var ruta = document.getElementById("ruta");
var vacations = document.getElementById("vacations");
var footer = document.getElementById("footer");
var content = document.getElementsByClassName("content");
var background, colors, navBg, cursosBg, sunMoon, switchMode, checking;

var switching = function() {
  checking = document.getElementById("check-in").checked;
  // console.log(checking);
  if (checking) {
    switcher.textContent = "Night Mode";
    background = "#465902";
    colors = "white";
    navBg = "#04BF8A";
    sunMoon = "moon";
    cursosBg = "#F2B705"
  }
  else {
    switcher.textContent = "Day Mode";
    background = "#99D0F2";
    colors = "black";
    navBg = "#465902";
    sunMoon = "sun";
    cursosBg = "#04BF8A";
  }
  backgroundLabel.style.background = background;
  backgroundLabel.style.color = colors;
  nav.style.background = navBg;
  footer.style.background = navBg;
  sun.alt = sunMoon;
  sun.src = `images/${sunMoon}.png`;
  for (var j = 0; j < enfasis.length; j++) {
    enfasis[j].style.color = cursosBg;
  }
}

var switchIndex = function() {
  checking = document.getElementById("check-in").checked;
  if (checking) {
    cursosBg = "#F2B705"
    switchMode = "night"
  }
  else {
    cursosBg = "#04BF8A";
    switchMode = "day"
  }
  relax.src = `images/relax_${switchMode}.png`;
  web.src = `images/web_${switchMode}.png`;
  webDesign.src = `images/webdesign_${switchMode}.png`;
  ruta.src = `images/ruta_${switchMode}.png`;
  vacations.src = `images/vacations_${switchMode}.png`
  for (var j = 0; j < enfasis.length; j++) {
    enfasis[j].style.color = cursosBg;
  }
  for (var i = 0; i < cursos.length; i++) {
    cursos[i].style.background = cursosBg
  }
}

var switchFotos = function() {
  checking = document.getElementById("check-in").checked;
  if (checking) {
    background = "#465902";
  }
  else {
    background = "#99D0F2";
  }
  for (var i = 0; i < content.length; i++) {
    content[i].style.background = background
  }
}
