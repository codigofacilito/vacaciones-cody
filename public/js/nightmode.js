var switcher = document.getElementById("switch-button");
var backgroundLabel = document.getElementById("body");
var nav = document.getElementById("navegador");
var cursos = document.getElementsByClassName("cursos-bg");
var background;
var colors;
var navBg;
var cursosBg;
var checking;

var switching = function() {
  checking = document.getElementById("check-in").checked;
  // console.log(checking);
  if (checking) {
    switcher.textContent = "Night Mode";
    background = "#465902";
    colors = "white";
    navBg = "#04BF8A";
  }
  else {
    switcher.textContent = "Day Mode";
    background = "#99D0F2";
    colors = "#465902";
    navBg = "#465902";
  }
  backgroundLabel.style.background = background;
  backgroundLabel.style.color = colors;
  nav.style.background = navBg;
}

var switchCurso = function() {
  checking = document.getElementById("check-in").checked;
  if (checking) {
    cursosBg = "#F2B705"
  }
  else {
    cursosBg = "#04BF8A";
  }
  for (var i = 0; i < cursos.length; i++) {
    cursos[i].style.background = cursosBg
  }
}
