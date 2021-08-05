/*---------------- gsap --------------------*/
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// --
gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector(".header");
const linkL = document.querySelector("#link-left");
const navi = document.querySelector(".nav");
console.log(navi);
const navHeight = navi.getBoundingClientRect().height;

/*-------------------------------------------- gsap code ---------------------------------------*/
let hDescription = document.querySelector(".header__description");

gsap.to(hDescription, {
  scrollTrigger: {
    scrub: 0,
  },
  y: -1100,
});

/*--------------------------------------------------   My code ------------------------------------------------------*/
///////////////////////////////////////
// Sticky navigation: Intersection Observer API

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  console.log(navi);

  if (!entry.isIntersecting) {
    navi.classList.add("sticky");
    linkL.classList.remove("invisible");
  } else {
    navi.classList.remove("sticky");
    linkL.classList.add("invisible");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
