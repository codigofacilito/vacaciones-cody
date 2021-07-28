/* initialize AOS */
AOS.init()

/* open modal */

function openModal(image) {
  const modal = document.getElementById('modal')
  const title = document.getElementById('title')
  const imageModal = document.getElementById('image')
  modal.classList.remove('modal-active')
  imageModal.src = `./images/${image}.jpg`
  title.innerHTML = `Foto N° ${image}`
}
function closeModal() {
  const modal = document.getElementById('modal')
  modal.classList.add('modal-active')
}