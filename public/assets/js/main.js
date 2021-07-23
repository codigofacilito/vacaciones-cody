/**
 * Easy selector helper function
 *
 * @format
 */

const select = (el, all = false) => {
	el = el.trim();
	if (all) {
		return [...document.querySelectorAll(el)];
	} else {
		return document.querySelector(el);
	}
};

/**
 * Easy event listener function
 */
const on = (type, el, listener, all = false) => {
	let selectEl = select(el, all);
	if (selectEl) {
		if (all) {
			selectEl.forEach((e) => e.addEventListener(type, listener));
		} else {
			selectEl.addEventListener(type, listener);
		}
	}
};

/**
 * Easy on scroll event listener
 */
const onscroll = (el, listener) => {
	el.addEventListener("scroll", listener);
};

/**
 * Navbar links active state on scroll
 */
let navbarlinks = select("#navbar .scrollto", true);
const navbarlinksActive = () => {
	let position = window.scrollY + 200;
	navbarlinks.forEach((navbarlink) => {
		if (!navbarlink.hash) return;
		let section = select(navbarlink.hash);
		if (!section) return;
		if (
			position >= section.offsetTop &&
			position <= section.offsetTop + section.offsetHeight
		) {
			navbarlink.classList.add("active");
		} else {
			navbarlink.classList.remove("active");
		}
	});
};
window.addEventListener("load", navbarlinksActive);
onscroll(document, navbarlinksActive);

/**
 * Scrolls to an element with header offset
 */
const scrollto = (el) => {
	let header = select("#header");
	let offset = header.offsetHeight;

	if (!header.classList.contains("header-scrolled")) {
		offset -= 16;
	}

	let elementPos = select(el).offsetTop;
	window.scrollTo({
		top: elementPos - offset,
		behavior: "smooth",
	});
};

/**
 * Header fixed top on scroll
 */
let selectHeader = select("#header");
if (selectHeader) {
	let headerOffset = selectHeader.offsetTop;
	let nextElement = selectHeader.nextElementSibling;
	const headerFixed = () => {
		if (headerOffset - window.scrollY <= 0) {
			selectHeader.classList.add("fixed-top");
			nextElement.classList.add("scrolled-offset");
		} else {
			selectHeader.classList.remove("fixed-top");
			nextElement.classList.remove("scrolled-offset");
		}
	};
	window.addEventListener("load", headerFixed);
	onscroll(document, headerFixed);
}

/**
 * Back to top button
 */
let backtotop = select(".back-to-top");
if (backtotop) {
	const toggleBacktotop = () => {
		if (window.scrollY > 100) {
			backtotop.classList.add("active");
		} else {
			backtotop.classList.remove("active");
		}
	};
	window.addEventListener("load", toggleBacktotop);
	onscroll(document, toggleBacktotop);
}

/**
 * Mobile nav toggle
 */
on("click", ".mobile-nav-toggle", function (e) {
	select("#navbar").classList.toggle("navbar-mobile");
	this.classList.toggle("bi-list");
	this.classList.toggle("bi-x");
});

/**
 * Mobile nav dropdowns activate
 */
on(
	"click",
	".navbar .dropdown > a",
	function (e) {
		if (select("#navbar").classList.contains("navbar-mobile")) {
			e.preventDefault();
			this.nextElementSibling.classList.toggle("dropdown-active");
		}
	},
	true
);

/**
 * Scrool with ofset on links with a class name .scrollto
 */
on(
	"click",
	".scrollto",
	function (e) {
		if (select(this.hash)) {
			e.preventDefault();

			let navbar = select("#navbar");
			if (navbar.classList.contains("navbar-mobile")) {
				navbar.classList.remove("navbar-mobile");
				let navbarToggle = select(".mobile-nav-toggle");
				navbarToggle.classList.toggle("bi-list");
				navbarToggle.classList.toggle("bi-x");
			}
			scrollto(this.hash);
		}
	},
	true
);

/**
 * Scroll with ofset on page load with hash links in the url
 */
window.addEventListener("load", () => {
	if (window.location.hash) {
		if (select(window.location.hash)) {
			scrollto(window.location.hash);
		}
	}
});

/**
 * Preloader
 */
let preloader = select("#preloader");
if (preloader) {
	window.addEventListener("load", () => {
		preloader.remove();
	});
}

/**
 * Initiate portfolio lightbox
 */
const portfolioLightbox = GLightbox({
	selector: ".gallery-lightbox",
});

/**
 * Portfolio details slider
 */
new Swiper(".portfolio-details-slider", {
	speed: 400,
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		type: "bullets",
		clickable: true,
	},
});

/**
 * Animation on scroll
 */
window.addEventListener("load", () => {
	AOS.init({
		duration: 1000,
		easing: "ease-in-out",
		once: true,
		mirror: false,
	});
});
function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

function textScramble() {
	var TextScramble = (function () {
		function TextScramble(el) {
			_classCallCheck(this, TextScramble);

			this.el = el;
			this.chars = "lkjsbdkjbdslkdjsblkbsdl";
			this.update = this.update.bind(this);
		}

		TextScramble.prototype.setText = function setText(newText) {
			var _this = this;

			var oldText = this.el.innerText;
			var length = Math.max(oldText.length, newText.length);
			var promise = new Promise(function (resolve) {
				return (_this.resolve = resolve);
			});
			this.queue = [];
			for (var i = 0; i < length; i++) {
				var from = oldText[i] || "";
				var to = newText[i] || "";
				var start = Math.floor(Math.random() * 40);
				var end = start + Math.floor(Math.random() * 80);
				this.queue.push({ from: from, to: to, start: start, end: end });
			}
			cancelAnimationFrame(this.frameRequest);
			this.frame = 0;
			this.update();
			return promise;
		};

		TextScramble.prototype.update = function update() {
			var output = "";
			var complete = 0;
			for (var i = 0, n = this.queue.length; i < n; i++) {
				var _queue$i = this.queue[i];
				var from = _queue$i.from;
				var to = _queue$i.to;
				var start = _queue$i.start;
				var end = _queue$i.end;
				var char = _queue$i.char;

				if (this.frame >= end) {
					complete++;
					output += to;
				} else if (this.frame >= start) {
					if (!char || Math.random() < 0.28) {
						char = this.randomChar();
						this.queue[i].char = char;
					}
					output += '<span class="dud">' + char + "</span>";
				} else {
					output += from;
				}
			}
			this.el.innerHTML = output;
			if (complete === this.queue.length) {
				this.resolve();
			} else {
				this.frameRequest = requestAnimationFrame(this.update);
				this.frame++;
			}
		};

		TextScramble.prototype.randomChar = function randomChar() {
			return this.chars[Math.floor(Math.random() * this.chars.length)];
		};

		return TextScramble;
	})();

	// ——————————————————————————————————————————————————
	// Example
	// ——————————————————————————————————————————————————

	var phrases = [
		"Hola bienvenidos.",
		"Soy Cody, un aspirante a Dev, en 2019, organicé un viaje para",
		"desestresarme del código, y en esta página quiero compartirlo contigo.",
	];

	var el = document.querySelector(".textScramble");
	var fx = new TextScramble(el);

	var counter = 0;
	var next = function next() {
		fx.setText(phrases[counter]).then(function () {
			setTimeout(next, 2500);
		});
		counter = (counter + 1) % phrases.length;
	};

	next();
}
setTimeout(textScramble, 0);
// Typewriter
const textDisplay = document.getElementById("vacacionesFront");
const phrases = [
	"Durante el verano de 2019, decidí comenzar a aprender desarrollo frontend, por lo que durante mi viaje, estuve aprendiendo HTML, CSS, y JavaScript",
	"Cada tarde, después de conocer nuevos lugares en mis vacaciones, practicaba mis habilidades en tecnologías frontend, construyendo esta página",
];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
	isEnd = false;
	textDisplay.innerHTML = currentPhrase.join("");

	if (i < phrases.length) {
		if (!isDeleting && j <= phrases[i].length) {
			currentPhrase.push(phrases[i][j]);
			j++;
			textDisplay.innerHTML = currentPhrase.join("");
		}

		if (isDeleting && j <= phrases[i].length) {
			currentPhrase.pop(phrases[i][j]);
			j--;
			textDisplay.innerHTML = currentPhrase.join("");
		}

		if (j == phrases[i].length) {
			isEnd = true;
			isDeleting = true;
		}

		if (isDeleting && j === 0) {
			currentPhrase = [];
			isDeleting = false;
			i++;
			if (i === phrases.length) {
				i = 0;
			}
		}
	}
	const spedUp = Math.random() * (80 - 50) + 50;
	const normalSpeed = Math.random() * (300 - 200) + 200;
	const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
	setTimeout(loop, time);
}

loop();
