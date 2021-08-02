let $nav = document.querySelector('nav.Nav')
let $ColaboraEnMiPagina = document.querySelector('#ColaboraEnMiPagina')

let prevScrollPos = window.pageYOffset
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset
  let isBelowLanding = (window.innerHeight - 80) < currentScrollPos

  // HIDE/SHOW NAVBAR
  if (prevScrollPos > currentScrollPos) $nav.style.bottom = "0"
  else $nav.style.bottom = "-60px"

  adjustNavbarColor()

  // SUPPORT FOR CHECK POSITION OF SCROLL AND CHANGE NAVBAR COLOR WHEN RESIZING
  window.onresize = function() {
    if (window.innerWidth < 1024) $nav.style.background = 'white'
    else adjustNavbarColor()  
  }

  function adjustNavbarColor() {
    // TABLET LAYOUT
    if (window.innerWidth >= 1024) {
      if (isBelowLanding) addNavbarGradient()
      else removeNavbarBackground()   
    }

    // WIDESCREEN LAYOUT
    if (window.innerWidth >= 1280) {
      let isOnColaboraSection = !(currentScrollPos > $ColaboraEnMiPagina.offsetTop)
      let isBelowColaboraSection = currentScrollPos > $ColaboraEnMiPagina.offsetHeight + $ColaboraEnMiPagina.offsetTop - 80

      if (isBelowLanding && (isOnColaboraSection || isBelowColaboraSection)) {
        addNavbarGradient()
      } else if (!isOnColaboraSection) {
        removeNavbarBackground()
      }
    }
  }

  prevScrollPos = currentScrollPos
}

function addNavbarGradient() {
  $nav.style.background = "linear-gradient(150deg, var(--color-secondary) 0%, var(--color-primary) 100%)"
  $nav.style.boxShadow = '0px 0px 8px rgba(0 0 0 / 20%)'
}

function removeNavbarBackground() {
  $nav.style.background = "transparent"
  $nav.style.boxShadow = 'none'
}
