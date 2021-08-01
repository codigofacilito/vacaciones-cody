let viewportHeight = window.innerHeight

function getViewportHeight() {
  document.querySelector(':root').style
    .setProperty('--vh', viewportHeight / 100 + 'px')
}

window.addEventListener('resize', getViewportHeight)

getViewportHeight()
