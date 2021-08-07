export default function slider() {
  const $slider = document.querySelector(".slider"),
    $sliderContainer = document.querySelector(".slider__container");

  let $sliderImg = document.querySelectorAll(".slider__img"),
    sliderImgLast = $sliderImg[$sliderImg.length - 1],
    intervalo = null;

  $slider.insertAdjacentElement("afterbegin", sliderImgLast);

  const next = () => {
    let sliderImgFirst = document.querySelectorAll(".slider__img")[0];

    $slider.style.marginLeft = "-200%";
    $slider.style.transition = "all 0.5s";

    setTimeout(() => {
      $slider.style.transition = "none";
      $slider.insertAdjacentElement("beforeend", sliderImgFirst);
      $slider.style.marginLeft = "-100%";
    }, 600);
  };

  const prev = () => {
    let $sliderImg = document.querySelectorAll(".slider__img"),
      sliderImgLast = $sliderImg[$sliderImg.length - 1];

    $slider.style.marginLeft = "0";
    $slider.style.transition = "all 0.5s";

    setTimeout(() => {
      $slider.style.transition = "none";
      $slider.insertAdjacentElement("afterbegin", sliderImgLast);
      $slider.style.marginLeft = "-100%";
    }, 600);
  };

  const start = () => {
    intervalo = setInterval(() => {
      next();
    }, 4000);
  };

  start();

  document.addEventListener("click", (e) => {
    if (e.target.matches(".next")) next();
    if (e.target.matches(".previus")) prev();
  });

  $sliderContainer.addEventListener("mouseover", () => {
    clearInterval(intervalo);
  });

  $sliderContainer.addEventListener("mouseout", () => {
    start();
  });
}
