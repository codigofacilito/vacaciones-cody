const renderFotos = () => {
  const fotosview = document.getElementById("fotos-view");
  document.getElementById("app").innerHTML = fotosview.innerHTML;
  const fotosbtn = document.getElementById("main-btn");
  fotosbtn.addEventListener("click", (e) => {
    e.preventDefault();
    rendermain();
  });
};

const rendermain = () => {
  const mainview = document.getElementById("main-view");
  document.getElementById("app").innerHTML = mainview.innerHTML;
  const fotosbtn = document.getElementById("fotos-btn");
  fotosbtn.addEventListener("click", (e) => {
    e.preventDefault();
    renderFotos();
  });
};

window.onload = () => {
  rendermain();
};
