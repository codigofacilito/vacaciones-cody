const Container = document.getElementById('Container'),
	PageGallery = document.getElementById('gallery'),
	Buttons = Array.from(document.querySelectorAll('.openGallery'));

Buttons.map((button) => button.addEventListener('click', OpenGallery));
PageGallery.addEventListener('click', CloseGallery);

function OpenGallery() {
	PageGallery.classList.add('open');
	Container.classList.add('hidden');
}

function CloseGallery() {
	PageGallery.classList.remove('open');
	Container.classList.remove('hidden');
}
