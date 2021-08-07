export default function colorTema() {
  const btn = document.querySelector(".color__tema"),
    btnTema = document.querySelector(".color__tema svg");

  const temaClaro = () => {
    document.documentElement.setAttribute("data-tema", "claro");
    btn.style.backgroundColor = "#16253d";
    btn.style.boxShadow = "0 0 10px #efb509";
    btnTema.setAttribute("fill", "#cd7213");
    efectoColorTema();
  };

  const temaObscuro = () => {
    document.documentElement.setAttribute("data-tema", "obscuro");
    btn.style.backgroundColor = "#488a99";
    btn.style.boxShadow = "0px 0px 15px #fbe9e7";
    btnTema.setAttribute("fill", "#fdf6f6");
    efectoColorTema();
  };

  btnTema.addEventListener("click", (e) => {
    if (btnTema.dataset.tema === "claro") {
      temaClaro();
      btnTema.dataset.tema = "obscuro";
      localStorage.setItem("tema", "claro");
    } else {
      temaObscuro();
      btnTema.dataset.tema = "claro";
      localStorage.setItem("tema", "obscuro");
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    btn.style.backgroundColor = "#488a99";
    btn.style.boxShadow = "0px 0px 15px #fbe9e7";
    btnTema.setAttribute("fill", "#fdf6f6");
    if (localStorage.getItem("tema") === "claro") temaClaro();

    if (localStorage.getItem("tema") === "obscuro") temaObscuro();
  });

  function efectoColorTema() {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 3000);
  }
}
