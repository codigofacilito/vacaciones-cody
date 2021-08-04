// mostrar menu

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle("show-menu");
        });
    }
};

showMenu("nav-toggle", "nav-menu");


// Deslizamiento de la galeria 

let galleryThumbs = new Swiper(".gallery-thumbs", {
    spaceBetween: 0,
    slidesPerView: 0,
})
let galleryTop = new Swiper(".gallery-top", {
    effect: 'fade',
    loop: true,
    thumbs: {
        swiper: galleryThumbs
    }
})

// gsap Animation

const controlImg = document.querySelectorAll('.controls__img')

function ScrollAnimation() {
    gsap.from('.travel__subtitle', { opacity: 0, duration: .2, delay: .2, y: -20 })
    gsap.from('.travel__title', { opacity: 0, duration: .3, delay: .3, y: -20 })
    gsap.from('.travel__description', { opacity: 0, duration: .4, delay: .4, y: -20 })
    gsap.from('.travel__button', { opacity: 0, duration: .5, delay: .5, y: -20 })
}

controlImg.forEach(c => c.addEventListener('click', ScrollAnimation))