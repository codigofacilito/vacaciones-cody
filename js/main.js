window.onscroll = function changeClass(){
  var scrollPosY = window.pageYOffset | document.body.scrollTop;
  var navBar = document.querySelector('nav')
  if(scrollPosY >= 130) {
    navBar.classList.add('sticky-menu','fadeInDown')
  } else {
    navBar.classList.remove('sticky-menu', 'fadeInDown')
  }
}