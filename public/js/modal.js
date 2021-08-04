let status = false;
const modalEl = document.querySelector('#modal');
const modalContentEl = document.querySelector('#content');
const body = document.body;

function modal(handler) {
    status = !status;
    modalEl.style.display = status ? 'flex' : 'none';
    modalContentEl.src = !!handler ? handler.src : '';
    modalContentEl.alt = !!handler ? handler.alt : '';
    body.style.overflow = status ? 'hidden' : 'auto';
}
