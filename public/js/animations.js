(function () {
    "use strict";
    const cursos = document.querySelectorAll('div.otherCourse');

    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (let i = 0; i < cursos.length; i++) {
            if (isElementInViewport(cursos[i])) {
                cursos[i].classList.add("verCurso");
            } else {
                cursos[i].classList.remove("verCurso");
            }
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
})();


function moveIMG() {
    let bg = document.getElementById('contributors');
    document.onmousemove = function (e) {
        // console.log(e);
        let x = -(e.clientX / 80);
        let y = -(e.clientY / 80);
        bg.style.backgroundPosition = x + 'px ' + y + 'px';
    };
}

function slider() {
    const swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        initialSlide: 1,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        }
    });
}



moveIMG();
slider();