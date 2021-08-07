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
