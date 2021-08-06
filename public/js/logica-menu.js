let button_menu = document.getElementById('button-menu');
let button_close = document.getElementById('button-close');
let nav = document.querySelector('.contenedor-nav');
button_menu.addEventListener('click', (event) => {
    nav.classList.remove('deactivate-nav');
    nav.classList.add('activated-nav');
});

button_close.addEventListener('click', (event) => {
    nav.classList.remove('activated-nav');
    nav.classList.add('deactivate-nav');
});