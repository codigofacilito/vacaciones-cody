import Slider from "./slider.js";
//const Slider = require("./slider");
import elements from "./elements.js";
//const elements = require("./elements");
import Preloader from "../preloader/preloader.js";
// const Preloader = require("../preloader/preloader");

let sliderText = document.querySelector("#slider-text");
let sliderTitle = document.querySelector("#slider-title");
let sliderSubTitle = document.querySelector("#slider-subtitle");
let sliderImageprueba = document.getElementById("slider-image-prueba");
let sliderImage = document.getElementById("slider-image");
let textContent = document.getElementById("slider-text-content");

let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");

let slider = new Slider({
	// elements: elements,
	elements, // short hand properties
	animationFunc: function(element) {
		console.log("classlist:" + textContent.classList.contains("class"));
		//TODO: jps revisar por que error
		// oculta le texto
		textContent.classList.add("hide");
		//sliderImage.style.visibility = 'hide';
		sliderImageprueba.classList.add("hide");

		setTimeout(function(){
			sliderTitle.innerHTML = element.title;
			sliderSubTitle.innerHTML = element.subtitle;
			sliderText.innerHTML = element.text;
			sliderImage.src = element.image;
			//TODO: jps revisar por que error
			// hace aparecer el texto
			textContent.classList.remove("hide");
			//sliderImage.classList.remove("hide");
			sliderImageprueba.classList.remove("hide");

		},600);

	},
	speed: 5000
})

slider.play();
// hasta que no se carguen las imagenes no muestra las fechas adelante atrás
leftArrow.addEventListener("click", slider.prev);
rightArrow.addEventListener("click", slider.next);

const imagePaths = elements.map(el => el.image);
// map es una función de los arreglso
console.log("lista img" + imagePaths);

Preloader.preloadImages({
	images: imagePaths,
	completed: function() {
		document.querySelector(".controls").style.display = "block";
	}
})