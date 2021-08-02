let viewportHeight = window.innerHeight

function getViewportHeight() {
  document.querySelector(':root').style
    .setProperty('--vh', viewportHeight / 100 + 'px')
}

window.addEventListener('resize', getViewportHeight)

getViewportHeight()

// REGISTER SERVICE WORKER
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("../serviceWorker.js")
        .then(_ => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
  })
}
