let ubicacionPrincipal = window.pageYOffset;

AOS.init();

window.addEventListener("scroll", function () {
    let desplazamientoActual = window.pageYOffset;
    if (ubicacionPrincipal >= desplazamientoActual) {
        document.getElementsByTagName("nav")[0].style.top = "0px";
    } else {
        document.getElementsByTagName("nav")[0].style.top = "-100px";
    }
    ubicacionPrincipal = desplazamientoActual;
})

//Menú

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburger")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburger")[0].style.color = "white";
        semaforo = false;
    }else{
        document.querySelectorAll(".hamburger")[0].style.color = "black";
        semaforo = true;
    }    
    
    enlacesHeader.classList.toggle("menudos");
})
