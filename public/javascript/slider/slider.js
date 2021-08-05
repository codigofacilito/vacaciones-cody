export default class Slider {

	// emacscript 6 {busca elements, animationFunc dentro de la clase instanciada}
	constructor({elements, animationFunc, speed}) {
		this.elements = elements;
		this.animationFunc = animationFunc;
		this.index = 0;
		this.size = elements.length;
		this.speed = speed;
		//solución 3 conservar el contexto con bind (3)
		this.prev = this.prev.bind(this);
		this.next = this.next.bind(this);
		//this.interval = this.interval.bind(this);
		this.innerNext = this.innerNext.bind(this);

	}

	innerNext() {
		this.index++;
		if (this.index >= this.size)
			this.index = 0;

		this.animationFunc(this.elements[this.index]);
	}

	innerPrev() {
		this.index--;
		if (this.index < 0)
			this.index = this.size -1;

		this.animationFunc(this.elements[this.index]);
	}

	next() {
		this.innerNext();
		if (this.interval) {
			this.stop();
			this.play();
		}
	}

	prev() {
		this.innerPrev();
		if (this.interval) {
			this.stop();
			this.play();
		}
	}

	play() {
		//
		//this.interval = setInterval(function() { // function cambia contexto
 		//	this.prev(); // este this no es el mismo que está afuera
		//}, 1000)
		//this.interval = setInterval(()=> { // los arrow solucionan el problema anterior
		//	this.prev(); // el this de afuera y de adentro es el mosmo
		//   }, 1000)
		//
		//solución 3 conservar el contexto con bind (3)

		this.interval = setInterval(this.innerNext, this.speed);
	}

	stop() {
		clearInterval(this.interval);
	}
}
