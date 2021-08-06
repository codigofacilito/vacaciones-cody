$button = document.getElementById('button')
const $list = document.getElementsByClassName('listElement')
const $pictures = document.getElementsByClassName('image')
const arr = []
for (element of $list) arr.push(element)

$button.addEventListener('click', () => {
  const currentIndex = arr.findIndex(element => element.id == 'active')
  if (currentIndex == arr.length - 2) {
    $list[currentIndex].id = ''
    $list[currentIndex + 1].id = 'active'
    $pictures[currentIndex].id = ''
    $pictures[currentIndex + 1].id = 'active'
    $button.innerHTML = '<a href="./fotos.html">Ir a la galeria para ver más</a>'
  } else {
    $list[currentIndex].id = ''
    $list[currentIndex + 1].id = 'active'
    $pictures[currentIndex].id = ''
    $pictures[currentIndex + 1].id = 'active'
  }
})