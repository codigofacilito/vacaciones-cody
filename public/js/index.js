// js para todas las paginas
AOS.init();
const todo = document.querySelector(".todo");
const todo__sin_navbar = document.querySelector(".todo__sin_navbar");
const burger = document.querySelector('.a-burger');

todo__sin_navbar.addEventListener("scroll", hideHeaderWhenScroll());

//Cambia el icono burger de cerrado a abierto dependiendo si el scroll
//horizontal es mayor a 0 o no.
todo.addEventListener('scroll', () => {
  if(todo.scrollLeft > 0){
    burger.classList.add('toggle')
  }else{
    burger.classList.remove('toggle')
  }
})

//Esconde el header cuando se scrollea para bajo pero cuando sube se muestra.
function hideHeaderWhenScroll() {
  let lastScroll = 0;
  const header = document.querySelector(".header");
  const scrollDown = "scroll-down";
  return () => {
    const currentScroll = todo__sin_navbar.scrollTop;
    if (currentScroll == 0) {
      return;
    }
    if (currentScroll > lastScroll) {
      header.classList.add(scrollDown);
    } else if (currentScroll < lastScroll) {
      header.classList.remove(scrollDown);
    }
    lastScroll = currentScroll;
  };
}

//Abre o cierra el menu
function openMenu() {
  burger.classList.toggle("toggle");
  if (burger.classList.contains("toggle")) {
    todo.scroll({
      left: 1000,
      top: 0,
      behavior: "smooth",
    });
  } else {
    todo.scroll({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  }
}

