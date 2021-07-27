
// Import templates
fetch("./header.html")
    .then(response => { return response.text() })
    .then(data => { document.querySelector("header").innerHTML = data })

fetch("./footer.html")
    .then(response => { return response.text() })
    .then(data => { document.querySelector("footer").innerHTML = data })


// -- Sticky header
window.onscroll = function() {
    heightFixed();
};

function heightFixed() {

    let wrap = document.getElementsByClassName("wrap");
    let header = document.getElementById("header");
    let menuHeight = header.offsetHeight;

    if (window.pageYOffset >= menuHeight) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Swiper home
var swiper = new Swiper('.gallery', {
    effect: 'fade',
    loop: true,
    autoplay: true,
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
    }
    
  });