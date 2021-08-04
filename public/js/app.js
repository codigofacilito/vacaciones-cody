const bnt_left = document.getElementById("left-arrow");
const btn_right = document.getElementById("right-arrow");
const sliders = document.getElementsByClassName("my-slider");
const points = document.getElementsByClassName("point");
const img_header = document.querySelector(".fade-header");
const slides_size = sliders.length;
let current_img_index = 0;


img_header.classList.add("visible")
showSlide(current_img_index);

window.addEventListener('scroll',function(){
    const elements = document.getElementsByClassName('fade-container');
    const screen_size = window.innerHeight;
    for (let i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (element.getBoundingClientRect().top < screen_size) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    }
});

bnt_left.addEventListener("click", function(){
    if(current_img_index===0){
        current_img_index = slides_size-1;
    }else{
        current_img_index --;
    }
    showSlide(current_img_index);
});

btn_right.addEventListener("click", function(){
    if(current_img_index===slides_size-1){
        current_img_index=0;
    }else{
        current_img_index ++;
    }
    showSlide(current_img_index);
})


function showSlide(index){
    for (let i = 0; i < slides_size; i++) {
        sliders[i].classList.add("hidden");
        points[i].classList.remove("active");
    }
    sliders[index].classList.remove("hidden");
    points[index].classList.add("active")
}