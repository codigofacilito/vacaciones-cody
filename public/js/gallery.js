import { Slider } from "./modules/slider.js";

async function traerImagenes() {
  const url = `http://${window.location.host}/public/js/json/images.json`;
  console.log(url);
  const res = await fetch(url);
  const json = await res.json();
  mostarImagenes(json);
}
function mostarImagenes(arrayOfImages) {
  const container_images = document.querySelector(".gallery__images");
  container_images.innerHTML = arrayOfImages.reduce((acc, image) => {
    acc += `
      <div class="gallery__images__img">
        <img src="${image.src}" alt="" />
      </div>
      `;
    return acc;
  }, "");
  crearSlider();
}
function crearSlider() {
  const images = document.querySelectorAll(".gallery__images__img img");
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    image.addEventListener("click", () => {
      createFullscreenGallery(images);
      const scrolleable = document.querySelector(".container_images");
      const slider = new Slider(scrolleable, images.length, i);
      slider.moveToFirst();
      const arrowNext = document.querySelector(".arrow.next");
      const arrowPrevious = document.querySelector(".arrow.back");
      arrowNext.addEventListener("click", () => slider.next());
      arrowPrevious.addEventListener("click", () => slider.previous());
    });
  }
}

function createFullscreenGallery(images) {
  const fullscreenGallery = document.createElement("div");
  fullscreenGallery.setAttribute("class", "fullscreen_gallery");
  fullscreenGallery.innerHTML = `
      <div class="fullscreen_gallery">
        <div class="times-close">
          <i class="fas fa-times"></i>
        </div>
        <div class="arrow back">
          <i class="fas fa-chevron-left"></i>
        </div>
        <div class="arrow next">
          <i class="fas fa-chevron-right"></i>
        </div>
        <div class="container_images">
            ${(() => {
              let innerHTML = "";
              images.forEach((image) => {
                innerHTML += `
                  <div class="fullscreen_gallery__img_container">
                    <div class="flex-center">
                      <img src="${image.src}">
                    </div>
                  </div>
                  `;
              });
              return innerHTML;
            })()}
        </div>
      </div>
      `;
  document.body.appendChild(fullscreenGallery);
  document.querySelector(".times-close").addEventListener("click", () => {
    fullscreenGallery.remove();
  });
}

traerImagenes();
