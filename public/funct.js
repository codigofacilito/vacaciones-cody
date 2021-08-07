window.sr = ScrollReveal();

  sr.reveal(".sectontx", {
    duration: 4000,
    origin: "rigth",
    distance: "-100px"
  })
  sr.reveal(".ruta", {
    duration: 4000,

  })
  sr.reveal(".t3", {
    duration: 4000,

  })
  sr.reveal(".cursos", {
    duration: 4500,

  })
  sr.reveal(".line", {
    duration: 4500,
    origin: "rigth",
    distance: "-300px"

  })
  sr.reveal(".burbuja", {
    duration: 10000,

  })
  sr.reveal("#UL", {
    duration: 4500,
    origin: "left",
    distance: "-100px"

  })
  sr.reveal(".vacaciones-frontend", {
    duration: 4000,


  })
  
  sr.reveal(".txt2", {
    duration: 4000,

  })


var slides = document.querySelectorAll('.slide');
    var btns = document.querySelectorAll('.btn');
    let currentSlide = 1;

    // Javascript for image slider manual navigation
    var manualNav = function(manual){
      slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
          btn.classList.remove('active');
        });
      });

      slides[manual].classList.add('active');
      btns[manual].classList.add('active');
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
      });
    });

    // Javascript for image slider autoplay navigation
    var repeat = function(activeClass){
      let active = document.getElementsByClassName('active');
      let i = 1;

      var repeater = () => {
        setTimeout(function(){
          [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
          });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if(slides.length == i){
          i = 0;
        }
        if(i >= slides.length){
          return;
        }
        repeater();
      }, 1900);
      }
      repeater();
    }
    repeat();
      

