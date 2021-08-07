export function Touch(props) {

  let { siguiente, atras, lista } = props;

  for (let element of lista) {
    element.addEventListener("touchstart", touchStart);
    element.addEventListener("touchmove", touchMove);
    element.addEventListener("touchend", touchEnd);
  }

  let startingX, startingY, movingX;
  
  function touchStart(evt) {
    startingX = evt.touches[0].clientX;
    startingY = evt.touches[0].clientY;
  }

  function touchMove(evt) {
    movingX = evt.touches[0].clientX;
  }

  function touchEnd() {
    if (startingX + 100 < movingX) {
      siguiente();
    } else if (startingX - 100 > movingX) {
      atras();
    }
  }
}
