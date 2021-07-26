window.onscroll = function () {
  const scroll = document.documentElement.scrollTop;
  const header = document.getElementById("header");

  if (scroll > 20) {
    header.classList.add("nav_mod"); // 20 es el numero de pixeles que recorramos con scroll para que se active la f(x).
  } else if (scroll < 20) {
    header.classList.remove("nav_mod");
  }
};

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);
const menu = document.getElementById("header");
const body = document.getElementById("container__all");
const nav = document.getElementById("nav");

function mostrar_menu() {
  menu.classList.toggle("move_content");
  body.classList.toggle("move_content");
  nav.classList.toggle("move_nav");
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 760) {
    menu.classList.remove("move_content");
    body.classList.remove("move_content");
    nav.classList.remove("move_nav");
  }
});
