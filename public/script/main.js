const nameStorage = 'preferences';
const darkMode_switch = document.getElementById('mode_check');

// Functions
function changeMode() {
  document.body.style.transition = 'all 3s';
  const sunMoon = document.getElementById('sunMoon');

  if(darkMode_switch.checked) {
    document.documentElement.style.setProperty('--primary-color', '#050036')
    sunMoon.style.backgroundImage = "url('https://img.icons8.com/office/96/000000/moon.png')"
    localStorage.setItem(nameStorage, JSON.stringify({darkMode: true}))
  } else {
    document.documentElement.style.setProperty('--primary-color', '#0092d1')
    sunMoon.style.backgroundImage = "url('https://img.icons8.com/fluency/96/000000/sun.png')"
    localStorage.setItem(nameStorage, JSON.stringify({darkMode: false}))
  }
}

function scrollBar() {
  const sunMoon = document.getElementById('sunMoon');
  const scrollBar = document.querySelector('.scroll');


  window.addEventListener('scroll', e => {
    let scrollValue = e.path[1].scrollY;
    let scrollHeight = document.documentElement.scrollHeight;
    let scroll = ((scrollBar.clientHeight / scrollHeight) * 100)
    let result = ((scroll * scrollValue) / 100) * 1.2;

    sunMoon.style.top = String(Math.floor(result - 8)) + 'px';
  })
}


window.addEventListener('load', () => {
  document.body.style.transition = ''
  let preferences = localStorage.getItem(nameStorage);
  preferences = JSON.parse(preferences);
  console.log(preferences.darkMode);
  
  if(preferences.darkMode) {
    darkMode_switch.checked = true
  } else {
    darkMode_switch.checked = false
  }
  
  changeMode()
  scrollBar()
})


darkMode_switch.addEventListener('click', () => {
  const circle = document.querySelector('.mode-circle');

  circle.style.transition = 'all 2s'
  circle.classList.toggle('active')
  changeMode()
});


