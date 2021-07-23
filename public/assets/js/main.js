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