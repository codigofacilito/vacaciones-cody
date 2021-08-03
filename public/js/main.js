/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)
  
  // Validate that variables exist
  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          // We add the show-menu class to the div tag with the nav__menu class
          nav.classList.toggle('show-menu')
      })
  }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
  console.log("ere")
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// const sections = document.getElementsByClassName('section')
const sections = document.querySelectorAll('.section[id]')


var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
});

const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1500,
  reset: true
});

sr.reveal(`.container, .home__img,            .about__data, .about__img,
          .services__content, .menu__content,
          .app__data, .app__img,
          .contact__data, .contact__button,
          .footer__content`, {
  interval: 800
})


//  NAVBAR
 TweenMax.staggerFrom(".nav__menu li", 1, {
  delay: 0,
  opacity: 0,
  y: "20",
  ease: Expo.easeInOut
}, 0.08);

TweenMax.staggerFrom(".logo", 1, {
  delay: 0,
  opacity: 0,
  y: "20",
  ease: Expo.easeInOut
}, 0.08);

TweenMax.staggerFrom(".nav__toggle", 1.5, {
  delay: 0,
  opacity: 0,
  y: "20",
  ease: Expo.easeInOut
}, 0.08);

// MEDIA
TweenMax.staggerFrom(".hero_image", 1.5, {
  delay: 0.5,
  opacity: 0,
  x: "50",
  ease: Expo.easeInOut
}, 0.08);

  // TEXT
  TweenMax.staggerFrom(".hero_text h1", 1.5, {
    delay: 0.3,
    opacity: 0,
    y: "50%",
    ease: Expo.easeInOut
  });

    // TEXT
    TweenMax.staggerFrom(".hero_text p", 1.5, {
      delay: 0.5,
      opacity: 0,
      y: "50%",
      ease: Expo.easeInOut
    });

    TweenMax.staggerFrom(".hero a", 1.5, {
      delay: 0.5,
      opacity: 0,
      y: "50%",
      ease: Expo.easeInOut
    });