// toggle menu hamburger in mobile
const optionsHamburger = document.querySelector('.hamburger-options')
const iconHamburger = document.getElementById('icon-hamburger')


iconHamburger.addEventListener('click', () => {
    console.log('click')
    optionsHamburger.classList.toggle('active')
})

// change color into navbar when the scroll active
const navbar = document.getElementById('navbar')

window.onscroll = function (e) {
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        navbar.classList.add('scrolled')
    }else {
        navbar.classList.remove('scrolled')
    }
}

