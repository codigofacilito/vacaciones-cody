'use strict';

const $PrevButton = document.getElementById('prev-slide-banner');
const $NextButton = document.getElementById('next-slide-banner');
const $PrevButtonImages = document.getElementById('prev-slide-images');
const $NextButtonImages = document.getElementById('next-slide-images');

const $ParrafoBanner = document.getElementById('slide-banner-p');
const $ButtonBanner =  document.getElementById('slide-banner-b1');
const $ButtonBanner1 = document.getElementById('slide-banner-b2');

const $ImageSlide = document.getElementById('images-slide');
const $TextSlide = document.getElementById('text-images-slide');

let Valor = 0;
let ValorImages = 0;
SlideBanner();
SlideImages();

$PrevButton.onclick = function() {
    PrevButton()
};
function PrevButton() {
    Valor = --Valor;
    if (Valor < 0){
        Valor = 2;
    }
    if (Valor == 2){
        $ButtonBanner.classList.remove('hidde');
        $ButtonBanner1.classList.remove('hidde');
        $ButtonBanner.classList.add('button----slide');
        $ButtonBanner1.classList.add('button----slide');
    }
    if (Valor != 2){
        $ButtonBanner.classList.remove('button----slide');
        $ButtonBanner1.classList.remove('button----slide');
        $ButtonBanner.classList.add('hidde');
        $ButtonBanner1.classList.add('hidde');
    }
  console.log(Valor)
  SlideBanner();
};

$NextButton.onclick = function() {
    NextButton()
};
function NextButton() {
    Valor = ++Valor;
    if (Valor > 2){
        Valor = 0;
    }
    if (Valor == 2){
        $ButtonBanner.classList.remove('hidde');
        $ButtonBanner1.classList.remove('hidde');
        $ButtonBanner.classList.add('button----slide');
        $ButtonBanner1.classList.add('button----slide');
    }
    if (Valor != 2){
        $ButtonBanner.classList.remove('button----slide');
        $ButtonBanner1.classList.remove('button----slide');
        $ButtonBanner.classList.add('hidde');
        $ButtonBanner1.classList.add('hidde');
    }
    console.log(Valor)
    SlideBanner();
  };

  $PrevButtonImages.onclick = function() {
    PrevButtonImages()
};
function PrevButtonImages() {
    ValorImages = --ValorImages;
    if (ValorImages < 0){
        ValorImages = 5;
    }
  console.log(ValorImages)
  SlideImages();
};

$NextButtonImages.onclick = function() {
    NextButtonImages()
};
function NextButtonImages() {
    ValorImages = ++ValorImages;
    if (ValorImages > 5){
        ValorImages = 0;
    }
    console.log(ValorImages)
    SlideImages();
  };


function SlideBanner() {
	fetch('scripts/datos.json')
    .then(response => response.json())
    .then(json => {
        $ParrafoBanner.textContent = json[Valor].parrafo;
        $ButtonBanner.textContent = json[Valor].texto1;
        $ButtonBanner.href = json[Valor].enlace1;
        $ButtonBanner1.textContent = json[Valor].texto2;
        $ButtonBanner1.href = json[Valor].enlace2;
    });
};

function SlideImages() {
	fetch('scripts/images.json')
    .then(response => response.json())
    .then(json => {
        $ImageSlide.src = json[ValorImages].imagen;
        $ImageSlide.alt = json[ValorImages].alt;
        $TextSlide.textContent = json[ValorImages].text;
    });
};
