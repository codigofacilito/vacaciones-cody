const $pictures = [
  document.getElementById('firstPic'),
  document.getElementById('secondPic'), 
  document.getElementById('thirdPic'), 
  document.getElementById('fourthPic'), 
  document.getElementById('fifthPic'), 
  document.getElementById('sixthPic')
]
const $descriptions = [
  document.getElementById('firstDesc'),
  document.getElementById('secondDesc'),
  document.getElementById('thirdDesc'),
  document.getElementById('fourthDesc'),
  document.getElementById('fifthDesc'),
  document.getElementById('sixthDesc')
]
const $locations = [
  document.getElementById('firstLocation'),
  document.getElementById('secondLocation'),
  document.getElementById('thirdLocation'),
  document.getElementById('fourthLocation'),
  document.getElementById('fifthLocation'),
  document.getElementById('sixthLocation')
]

const $nextButton = document.getElementById('next')

$pictures[0].style.display = 'block'
for (let indexElement in $pictures) {
  if (indexElement != 0) {
    $pictures[indexElement].style.display = 'none'
    $descriptions[indexElement].style.display = 'none'
    $locations[indexElement].style.display = 'none'
  }
}

$nextButton.addEventListener('click', nextPicture)

function nextPicture() {
  let currentIndex = $pictures.findIndex((element) => element.style.display == 'block')
  $pictures[currentIndex].style.display = 'none'
  $descriptions[currentIndex].style.display = 'none'
  $locations[currentIndex].style.display = 'none'
  if(currentIndex == $pictures.length - 1) {
    $pictures[0].style.display = 'block'
    $descriptions[0].style.display = 'block'
    $locations[0].style.display = 'block'
  } else {
    $pictures[currentIndex + 1].style.display = 'block'
    $descriptions[currentIndex + 1].style.display = 'block'
    $locations[currentIndex + 1].style.display = 'block'
  }
}