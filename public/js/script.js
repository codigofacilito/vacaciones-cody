let counter = 1;
let slider_container = document.querySelector('.slider_container');

const showModal = (itemImg) => {
    const fotos_container = document.querySelector('.fotos');

    const containerModal = document.createElement('div');
    const imgModal = document.createElement('img');
    const titleImg = document.createElement('h1');


    containerModal.classList.add('container_modal');
    fotos_container.appendChild(containerModal);

    titleImg.classList.add('title_img');
    titleImg.innerHTML = itemImg.alt;
    imgModal.src = itemImg.src;
    imgModal.classList.add('img_modal');

    containerModal.innerHTML = `<span class="icon_exit" onclick="exitModal()"><i class="fas fa-times-circle"></i></span><br>`;
    containerModal.appendChild(titleImg);
    containerModal.appendChild(imgModal);
    
}

const exitModal = () => {
    let container = document.querySelector('.container_modal');
    document.querySelector('.fotos').removeChild(container);
}

const showCompleteImg = e => {
    let itemImg = e.target;
    showModal(itemImg);    
}

const setStyles = (element,styles) => {
    Object.assign(element.style,styles);
}

const next_img = () => {
    counter++;
    if(counter>6)
        counter=1;
    setStyles(slider_container,{
        'background':`url('images/${counter}.jpg')`,
        'background-size':'cover'
    })

}

const previous_img = () => {
    counter--;
    if(counter<1)
        counter=6;
    
    setStyles(slider_container,{
        'background':`url('images/${counter}.jpg')`,
        'background-size':'cover'
    })
}