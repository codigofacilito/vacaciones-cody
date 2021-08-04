const nameStorage = 'preferences';
const darkMode_switch = document.getElementById('mode_check');
const circle = document.querySelector('.mode-circle');

darkMode_switch.addEventListener('click', () => {
  circle.style.transition = 'all 2s'
  changeMode()
});

// Functions
function changeMode() {
  document.body.style.transition = 'all 3s';
  const sunMoon = document.getElementById('sunMoon');

  if(darkMode_switch.checked) {

    document.documentElement.style.setProperty('--primary-color', '#050036');
    sunMoon.style.backgroundImage = "url('https://img.icons8.com/office/96/000000/moon.png')";
    localStorage.setItem(nameStorage, JSON.stringify({darkMode: true}));
    circle.classList.add('active');

  } else {

    document.documentElement.style.setProperty('--primary-color', '#0092d1');
    sunMoon.style.backgroundImage = "url('https://img.icons8.com/fluency/96/000000/sun.png')";
    localStorage.setItem(nameStorage, JSON.stringify({darkMode: false}));
    circle.classList.remove('active');

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
  //LocalStorage
  let preferences = localStorage.getItem(nameStorage);
  preferences = JSON.parse(preferences);

  (preferences.darkMode) ? darkMode_switch.checked = true
  : darkMode_switch.checked = false;

  changeMode()
  scrollBar()
})