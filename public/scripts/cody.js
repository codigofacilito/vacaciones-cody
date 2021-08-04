const log = console.log;

// buttons 
let listBtnNext = document.querySelectorAll('.btnNext'),
    listBtnPreview = document.querySelectorAll('.btnPreview');

let btnGoGallery = document.querySelector('#btnGoGallery'),
    btnBackGallery = document.querySelector('#btnBackGallery');

// sections 
let divMain = document.querySelector('main');

/* Functions */
const moveSections = (btn, state) => {
  let dadBtn, brotherDadBtn;

  if(state == 'next') {
    dadBtn = btn.parentNode.parentNode,
    brotherDadBtn = dadBtn.nextElementSibling

    if(btn.id == "btnPhotoNext") brotherDadBtn = dadBtn.nextElementSibling.nextElementSibling;
    if(btn.id == "btnPrincipal") musicCodigoFacilito();
  }

  if(state == 'previous') {
    dadBtn = btn.parentNode.parentNode;
    brotherDadBtn = btn.parentNode.parentNode.previousElementSibling;

    if(btn.id == "btnTipsPreview") brotherDadBtn = dadBtn.previousElementSibling.previousElementSibling;
  }

  dadBtn.style.display = 'none';
  brotherDadBtn.style.display = 'flex';
}

const animateTabs = (classTab) => {
  let listBtn = document.querySelectorAll(`.${classTab} button`);

  listBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.parentNode;
      const grandParent = parent.parentNode;
      const tabsContainer = grandParent.querySelector(".tabs__container");
      
      // convert HTMLCOLLECTIONS to array
      const childrenList = Array.from(parent.children);
      const index = childrenList.indexOf(btn);

      tabsContainer.style.transform = `translate(-${index * 100}%)`;

      //reset the buttons active
      parent.querySelectorAll("button.active").forEach((btnActive) => {
        log(btnActive.classList.remove("active"));
      });

      btn.classList.add("active");
    });
  });
}

const moveSlider = (elemClassName) => {
  let slider = document.querySelector(`#${elemClassName}`);

  slider.style.transition = "all 1s ease";
  slider.style.marginLeft = "-100%";

  // reset styles
  setTimeout(function () {
    slideBefore = slider.firstElementChild;
    slider.appendChild(slideBefore);
    slider.style.transition = "unset";
    slider.style.marginLeft = "0";
  }, 1000);
};

const musicCodigoFacilito = () => {
  let musicCody = document.querySelector("audio").play();
}

/* Events */
animateTabs("tabs__controller-1");
animateTabs("tabs__controller-2");

setInterval(() => {
  moveSlider("slider-1");
}, 1500);

setInterval(() => {
  moveSlider("slider-2");
}, 1500);

var typedMain = new Typed('#typedMain', {
  strings: [
    "Vacaciones de Locura <br> de Cody",
    "Vacaciones de Verano <br> de Cody"
  ],
  typeSpeed: 40,
  backSpeed: 30,
  loop: false,
  cursorChar: ''
});

var typed1 = new Typed("#typed-1", {
  strings: [
    "Hola soy Cody y estas son mis <b>vacaciones</b>",
    "Hola soy Cody o mi <b>despedida 😂</b>"
  ],
  typeSpeed: 40,
  backSpeed: 20,
  loop: true,
  cursorChar: ''
});

var typed2 = new Typed("#typed-2", {
  strings: [
    "Durante el verano de 2019, decidí comenzar a aprender desarrollo frontend, por lo que durante mi viaje, estuve aprendiendo HTML.",
    "Durante el verano de 2019, decidí comenzar a aprender desarrollo frontend, por lo que durante mi viaje, estuve aprendiendo CSS.",
    "Durante el verano de 2019, decidí comenzar a aprender desarrollo frontend, por lo que durante mi viaje, estuve aprendiendo y JavaScript.", 
  ],
  typeSpeed: 40,
  backSpeed: 0,
  loop: true,
  cursorChar: ''
});

var typed3 = new Typed("#typed-3", {
  strings: [
    "También me propuse aprender nuevas tecnologías durante 2021. Como parte de mi Formación, aprendí Git.",
    "También me propuse aprender nuevas tecnologías durante 2021. Como parte de mi Formación, aprendí y GitHub.",
  ],
  typeSpeed: 40,
  backSpeed: 0,
  loop: true,
  cursorChar: ''
});

var typed4 = new Typed("#typed-4", {
  strings: ["¡Bien! Sé que estás aquí por mis vacaciones, aquí te comparto algunas fotos que tomé:"],
  typeSpeed: 40,
  backSpeed: 0,
  loop: true,
  cursorChar: ''
});

var typed4 = new Typed("#typed-5", {
  strings: ["Estas son algunas de las fotos de los lugares que visité en mis vacaciones."],
  typeSpeed: 40,
  backSpeed: 0,
  loop: true,
  cursorChar: ''
});

var typed6 = new Typed("#typed-6", {
  strings: ["Bueno ya estamos llegando al final de mis vacaciones, solo quiero que sepas que debes tener un momento para divertirte no todo es trabajo.", "Bueno ya estamos llegando al final de mis vacaciones, solo quiero que sepas que debes tener un momento para divertirte y no todo es programación 😉🧔."],
  typeSpeed: 40,
  backSpeed: 0,
  loop: true,
  cursorChar: ''
});

listBtnNext.forEach(btnElem => {
  btnElem.addEventListener('click', () =>{
    moveSections(btnElem, 'next');
  });
});

listBtnPreview.forEach(btnElem => {
  btnElem.addEventListener('click', () =>{
    moveSections(btnElem, 'previous');
  });
});

document.querySelector('#btnRefresh').addEventListener('click', (e) => {
  e.preventDefault();
  location.reload();
});

btnGoGallery.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.gallery').style.display = 'flex';
  document.querySelector('.photos').style.display = 'none';
});

btnBackGallery.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.gallery').style.display = 'none';
  document.querySelector('.photos').style.display = 'flex';
});