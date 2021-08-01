const prev = document.getElementById("prev");
const next = document.getElementById("next");
const minPhotosContainer = document.querySelector(".photos-little");
let photoIndex = 1;

//pintar ruta activa
function pathActive() {
  const home = document.getElementById("home");
  const photos = document.getElementById("photos");
  const path = window.location.pathname;
  console.log(path);
  if (path === "/fotos") {
    photos.classList.add("active");
  } else {
    home.classList.add("active");
  }
}

pathActive();
