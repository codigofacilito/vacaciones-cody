const galeria = [...document.querySelectorAll(".polaroidContenedor")];

//console.log(galeria);

galeria.map((d) => {
  d.addEventListener("mouseenter", (e) => {
    d.classList.add("animated", "swing");
  });
  d.addEventListener("mouseleave", () => {
    setTimeout(() => {
      d.classList.remove("animated", "swing");
    }, 5000);
  });
});

// const fotos = document.querySelector(".polaroidContenedor");

// fotos.addEventListener("mouseenter", (e) => {
//   fotos.classList.add("animated", "swing");
//   //console.log(e);
// });

// fotos.addEventListener("mouseleave", () => {
//   setTimeout(() => {
//     fotos.classList.remove("animated", "swing");
//   }, 5000);
// });
