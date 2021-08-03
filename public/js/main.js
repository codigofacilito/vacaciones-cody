document.addEventListener('DOMContentLoaded', function() {
  const $fullscreen = document.querySelector('#fullscreen')
  const $rawImagesCollection = document.querySelectorAll('.gallery__image')

  const imagesCollection = Array.from($rawImagesCollection)

  $fullscreen.addEventListener('click', () => {
    $fullscreen.classList.remove('fullscreen')
    $fullscreen.innerHTML = ''
  })

  imagesCollection.map(image => {
    const { src } = image
    const $badge = image.nextElementSibling.cloneNode(true)
    image.addEventListener('click', () => {
      $fullscreen.classList.toggle('fullscreen')
      const $picture = document.createElement('picture')
      const $newImage = document.createElement('img')

      $picture.setAttribute('class', 'fullscreen__container')

      $fullscreen.appendChild($picture)

      $newImage.src = src
      $picture.appendChild($newImage)
      $picture.appendChild($badge)
    })
  })
})