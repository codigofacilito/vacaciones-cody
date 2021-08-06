const openButton = document.querySelector("nav .desktop-nav .link-open");
const closeButton = document.querySelector(".open-container .link-close");
const desktopNav = document.querySelector(".desktop-nav");
const openContainer = document.querySelector(".open-container");
const overlay = document.querySelector(".overlay");

openButton.addEventListener("click", () => {
    desktopNav.classList.add("hide");
    openContainer.classList.remove("hide");
    overlay.classList.add("show");
})

closeButton.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    openContainer.classList.add("hide");
    overlay.classList.remove("show");
})

overlay.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    openContainer.classList.add("hide");
    overlay.classList.remove("show");
})

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active");
})

const openBar = document.querySelector(".mobile-open-container .open-bar");
const nav = document.querySelector(".nav-container nav");
const openInput = document.querySelector(".mobile-open-container input");
const cancelBtn = document.querySelector(".mobile-open-container .cancel-btn");