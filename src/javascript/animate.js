let animate = document.querySelectorAll('.animate');

let showScroll = () => {
    let scrollTop = document.documentElement.scrollTop;
    for(let i = 0; i < animate.length; i++) {
        let heightAnimate = animate[i].offsetTop;
        if(heightAnimate - 400 < scrollTop) {
            animate[i].style.opacity = 1;
            animate[i].classList.add('animateUp');
        }
    } 
}

window.addEventListener('scroll', showScroll);