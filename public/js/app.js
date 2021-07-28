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

// POPUP IMAGES
let popUpImages = document.querySelectorAll('.Foto')
let popUpImage = document.createElement('img')
let popUpCaption = document.createElement('span')
let popUpCloseIcon = document.createElement('img')
let popUpBackground = document.createElement('div')
let popUpContainer = document.createElement('div')

let showingPopUp = false

popUpImages.forEach((imageElement, index)=> {
  imageElement.addEventListener('click', e => {
    let imageIndex = `image-${index}`

    // DUPLICATE IMAGE
    let image = e.target
    popUpImage.classList.add('u-rounded')
    popUpImage.classList.add('PopUp-image')
    popUpImage.setAttribute('src', image.src)

    // CREATE IMAGE CAPTION
    popUpCaption.classList.add('PopUp-caption')
    popUpCaption.classList.add('u-paragraph')
    popUpCaption.innerText = image.alt

    // CREATE CLOSE ICON
    popUpCloseIcon.classList.add('PopUp-close')
    popUpCloseIcon.src = '/images/icons/slide-down.png'
     
    // CREATE BACKGROUND
    popUpBackground.classList.add('PopUp-background')

    // CREATE CONTAINER
    popUpContainer.classList.add('PopUp')
    popUpContainer.id = imageIndex

    if (showingPopUp && !e.target.matches('.PopUp-background')) return
    renderPopUp()

    showingPopUp = true
  })
})

function renderPopUp() {
  document.body.appendChild(popUpBackground)
  popUpContainer.appendChild(popUpCloseIcon)
  popUpContainer.appendChild(popUpImage)
  popUpContainer.appendChild(popUpCaption)
  document.body.appendChild(popUpContainer)
}

popUpBackground.addEventListener('click', closePopUp)
popUpCloseIcon.addEventListener('click', closePopUp)
  
function closePopUp() {
  popUpContainer.classList.add('PopUp-hide')
  setTimeout(() => {
    document.body.removeChild(popUpContainer)
    popUpContainer.classList.remove('PopUp-hide')
    document.body.removeChild(popUpBackground)
  }, 750)
  showingPopUp = false
}
