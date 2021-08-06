window.onload = () => {
  const transitionElement = document.querySelector('.transition')

  setTimeout(() => {
    transitionElement.classList.remove('is-active')
  }, 580)
}