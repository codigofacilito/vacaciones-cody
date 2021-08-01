const slider = document.querySelector("#slider");
const slider_ = document.querySelectorAll(".container-slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length-1];

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
    let sliderSectionFirts = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function (){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirts);
        slider.style.marginLeft = "-100%";
    }, 500);
}

setInterval(function(){
    Next();
}, 5000);