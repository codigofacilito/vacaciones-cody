// Functions
function changeMode() {
  document.body.style.transition = 'all 3s'

  darkMode.checked ? document.documentElement.style.setProperty('--primary-color', '#050036')
  : document.documentElement.style.setProperty('--primary-color', '#0092d1')
}

window.addEventListener('load', () => {
  changeMode()
})

const darkMode = document.getElementById('mode_check');

darkMode.addEventListener('click', () => {
  const circle = document.querySelector('.mode-circle');

  circle.style.transition = 'all 2s'
  circle.classList.toggle('active')
  changeMode()
});

