import animacion from "./componentes/animacion_tecnologias.js";
import colorTema from "./componentes/color_tema.js";
import menuToggle from "./componentes/menu.js";
import slider from "./componentes/slider.js";

document.addEventListener("DOMContentLoaded", () => {
  menuToggle();
  animacion();
  slider();
});

colorTema();
