  /*nav*/
  let toggle = document.querySelector('.toggle');
  let navLi = document.querySelector('nav');

  toggle.addEventListener('click', () => {
      navLi.classList.toggle('active');
      toggle.classList.toggle('active');
  })

  /*Expand imagenes*/
  let light = document.querySelector('.container__img');
  let bigImg = document.querySelector('#bigSmallImg');
  let expanImg = document.querySelectorAll('.box-foto');


  expanImg.forEach((popup, i) => {
      let selectIMG = popup.querySelector('img').src;
      console.log(selectIMG)
      popup.addEventListener('click', function() {
          light.classList.add('active');

          bigImg.src = selectIMG;
          console.log(bigImg.src)
      })
  })
  light.addEventListener('click', () => {
      light.classList.remove('active');
  })