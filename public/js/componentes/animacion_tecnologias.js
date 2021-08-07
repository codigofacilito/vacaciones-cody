export default function animacion() {
  const showCards = () => {
    let cards = Array.from(document.querySelectorAll(".tecnologias__icon"));
    window.addEventListener("scroll", () => {
      let scrollTop = document.documentElement.scrollTop;
      //console.log(scrollTop);

      const mediaqueryM = window.matchMedia("(min-width: 576px)"),
        mediaqueryG = window.matchMedia("(min-width: 991px)");

      cards.forEach((card) => {
        if (scrollTop >= 1203) {
          card.style.opacity = "1";
          card.classList.add("show");
        }

        if (scrollTop < 1270) {
          card.style.opacity = "0";
          card.classList.remove("show");
        }

        if (mediaqueryM.matches) {
          if (scrollTop >= 960) {
            card.style.opacity = "1";
            card.classList.add("show");
          }

          if (scrollTop < 960) {
            card.style.opacity = "0";
            card.classList.remove("show");
          }
        }

        if (mediaqueryG.matches) {
          if (scrollTop >= 1000) {
            card.style.opacity = "1";
            card.classList.add("show");
          }

          if (scrollTop < 1000) {
            card.style.opacity = "0";
            card.classList.remove("show");
          }
        }
      });
    });
  };

  showCards();
}
