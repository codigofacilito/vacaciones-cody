const menuIcons = document.querySelectorAll('.menu-toggle');
const navbar = document.querySelector('.navbar-menu')

menuIcons.forEach( menuIcon =>{
    console.log(menuIcon);
    menuIcon.addEventListener('click', ()=>{
        navbar.classList.toggle('menu-visible');
    });
});