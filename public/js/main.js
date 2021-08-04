let d = document
window.addEventListener('DOMContentLoaded', (event) => {
    let enlaces = Array.prototype.slice.apply(d.querySelectorAll('header nav .enlaces p'))
    console.log(d.querySelector("header").clientHeight)
    // console.log(enlaces)
    enlaces.map((e)=>{
        e.addEventListener('click',(el)=>{
        //    console.log(window.scrollY) 
           console.log(e.offsetHeight )
        })
    })



    // window.onscroll = function() {
    //     console.log("Vertical: " + window.scrollY);
    //     console.log("Horizontal: " + window.scrollX);
      
    //   };





});
