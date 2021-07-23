
// Import templates
fetch("./header.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("header").innerHTML = data;
    });


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