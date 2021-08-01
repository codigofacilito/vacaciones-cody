const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav_menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
});