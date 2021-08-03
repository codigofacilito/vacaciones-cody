const darkMode = document.getElementById('mode_check');


darkMode.addEventListener('click', () => {
  const circle = document.querySelector('.mode-circle');

    circle.style.transition = 'all 2s'
    circle.classList.toggle('active')

    if(darkMode.checked) {
      console.log(true);
    }
});