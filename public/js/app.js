let viewportHeight = window.innerHeight

function getViewportHeight() {
  document.querySelector(':root').style
    .setProperty('--vh', viewportHeight / 100 + 'px')
}

window.addEventListener('resize', getViewportHeight)

getViewportHeight()

// HIDE & SHOW BOTTOM NAVBAR
let prevScrollPos = window.pageYOffset
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset
  if (prevScrollPos > currentScrollPos) {
    document.querySelector('nav.Nav').style.bottom = "0"
  } else {
    document.querySelector('nav.Nav').style.bottom = "-60px"
  }

  prevScrollPos = currentScrollPos
}

