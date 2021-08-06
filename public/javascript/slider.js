function moveslide(side){
    carouselWidth = carousel.clientWidth
    maxLeft = (carouselWidth * (sliders-1))*-1
    maxRight = 0
    leftpos = parseInt(carousel_move.style.left.replace('px',''))
    if(side=='left'){
      if (leftpos >  maxLeft) {
        carousel_move.style.left=(leftpos-carouselWidth)+"px";
      }else {
        carousel_move.style.left=0+'px';
      }
    }

    if(side =='right'){

      if (leftpos <  maxRight) {
        carousel_move.style.left=(leftpos+carouselWidth)+"px";
      }else {
        carousel_move.style.left= maxLeft+'px';
      }
    }
  }
  
  carousel = document.querySelector('.carousel')
  carousel_move = document.querySelector('.carousel-move')
  sliders= carousel_move.childElementCount
  
  setInterval(moveslide('left'),3000)
 
  var startX,
  dist,

  threshold = 0,

  allowedTime = 500,
  elapsedTime,
  startTime
  
  carousel.addEventListener('touchstart',function(e){
    var touchobj = e.changedTouches[0]
    startX = touchobj.pageX
    startTime = new Date().getTime()
    e.preventDefault()
  });
  

  carousel.addEventListener('touchend',function(e){
    var touchobj = e.changedTouches[0]
    dist = touchobj.pageX - startX
    console.log(dist)
    elapsedTime = new Date().getTime() - startTime
    if (elapsedTime <= allowedTime && dist >= threshold ) {
      moveslide('right')
    }if(elapsedTime <= allowedTime && dist < threshold) {
 
      moveslide('left')
    }

    e.preventDefaut()
  });
  