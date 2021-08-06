var zFondos150 = ["url('./images/1.jpg')","url('./images/2.jpg')","url('./images/3.jpg')","url('./images/4.jpg')","url('./images/5.jpg')","url('./images/6.jpg')"];
var zFondos600 = ["url('./images/1.jpg')","url('./images/2.jpg')","url('./images/3.jpg')","url('./images/4.jpg')","url('./images/5.jpg')","url('./images/6.jpg')"];

var imagenPrincipal = document.querySelectorAll(".imagen-principal")[0];
var subImagenes = document.querySelectorAll('[class *= "subImagen-"]');

imagenPrincipal.style.backgroundImage =zFondos600[0];
subImagenes[0].style.backgroundImage =zFondos150[0];
subImagenes[0].style.backgroundSize ="100%";
subImagenes[1].style.backgroundImage =zFondos150[1];
subImagenes[1].style.backgroundSize ="100%";
subImagenes[2].style.backgroundImage =zFondos150[2];
subImagenes[2].style.backgroundSize ="100%";
subImagenes[3].style.backgroundImage =zFondos150[3];
subImagenes[3].style.backgroundSize ="100%";
subImagenes[4].style.backgroundImage =zFondos150[4];
subImagenes[4].style.backgroundSize ="100%";
subImagenes[5].style.backgroundImage =zFondos150[5];
subImagenes[5].style.backgroundSize ="100%";

subImagenes[0].addEventListener("mouseover",accion0);
subImagenes[1].addEventListener("mouseover",accion1);
subImagenes[2].addEventListener("mouseover",accion2);
subImagenes[3].addEventListener("mouseover",accion3);
subImagenes[4].addEventListener("mouseover",accion4);
subImagenes[5].addEventListener("mouseover",accion5);

function accion0(){
    imagenPrincipal.style.backgroundImage =zFondos600[0];
    imagenPrincipal.style.backgroundSize = "100%"
}
function accion1(){
    imagenPrincipal.style.backgroundImage =zFondos600[1];
    imagenPrincipal.style.backgroundSize = "100%"
}
function accion2(){
    imagenPrincipal.style.backgroundImage =zFondos600[2];
    imagenPrincipal.style.backgroundSize = "100%"
}
function accion3(){
    imagenPrincipal.style.backgroundImage =zFondos600[3];
    imagenPrincipal.style.backgroundSize = "100%"
}
function accion4(){
    imagenPrincipal.style.backgroundImage =zFondos600[4];
    imagenPrincipal.style.backgroundSize = "100%"
}
function accion5(){
    imagenPrincipal.style.backgroundImage =zFondos600[5];
    imagenPrincipal.style.backgroundSize = "100%"
}
