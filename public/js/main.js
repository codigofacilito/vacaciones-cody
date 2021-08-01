const renderFotos = () => {
  const fotosview = document.getElementById("fotos-view");
  document.getElementById("app").innerHTML = fotosview.innerHTML;
  const fotosbtn = document.getElementById("inicio");
  fotosbtn.addEventListener("click", (e) => {
    e.preventDefault();
    rendermain();
  });
};

const rendermain = () => {
  const mainview = document.getElementById("main-view");
  document.getElementById("app").innerHTML = mainview.innerHTML;
  const fotosbtn = document.getElementById("fotos");
  fotosbtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(window.location.href);
    renderFotos();
  });
};

window.onload = () => {
  rendermain();
};
