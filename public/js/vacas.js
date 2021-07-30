let count = 1;
let galeria = document.querySelector('.galeria img');
let content = document.querySelector('.fotos');

let match = window.matchMedia('(min-width: 992px)').matches;
content.addEventListener('click', cambiar);


function cambiar(e) {
	e.preventDefault();
	let t = e.target.src;
	if (t  && match) {
		galeria.src = t;
	}
}

let auto = () => {
	count++;
	if (count >= 6) {
		count = 1;
	}

	galeria.src = `images/${count}.jpg`;
};

if (match) {
	auto();
}

let timer = setInterval(auto, 5000);

VanillaTilt.init(document.querySelector('.info'), {
	max: 5,
	speed: 200,
	glare: true,
	'max-glare': 1,
	reverse: true,
});

VanillaTilt.init(document.querySelectorAll('.tilt'), {
	max: 15,
	speed: 200,
	perspective: 1000,
});
