// BTN MENU
addEventListener("DOMContentLoaded", () => {
    const boton = document.querySelector(".boton")
    if(boton){
        boton.addEventListener("click", () => {
            const items = document.querySelector(".items")
            items.classList.toggle("vista")
        })
    }
});

// GALERIA
var counter = 1;
setInterval(function(){
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if(counter > 6){
        counter = 1;
    }
}, 7500);

// ANIMACIONES
gsap.from(".gsap", {
    duration: 3, 
    x: -200,
    scale: 0,
    stagger: 0.5,
    delay: 2,
    ease: "elastic"
});


