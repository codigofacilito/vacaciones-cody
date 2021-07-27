let counter = 1;
let slider_container = document.querySelector('.slider_container');
let itemImg = document.querySelector('#item');


// const setStyles = (element,styles) => {
//     Object.assign(element.style,styles);
// }

setInterval(() => {
    counter++;
    if(counter>6)
        counter=1;
        
    itemImg.src = `images/${counter}.jpg`;
}, 10000);

const next_img = () => {
    counter++;
    if(counter>6)
        counter=1;

    itemImg.src = `images/${counter}.jpg`;
}

const previous_img = () => {
    counter--;
    if(counter<1)
        counter=6;
    
    itemImg.src = `images/${counter}.jpg`;
}