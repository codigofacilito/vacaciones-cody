let d = document
window.addEventListener('DOMContentLoaded', (event) => {
    let enlaces = Array.prototype.slice.apply(d.querySelectorAll('header nav .enlaces ul li'))
    console.log(d.querySelector("header").clientHeight)
    // console.log(enlaces)
    enlaces.map((e,index)=>{
        console.log(e)
        e.addEventListener('click',(el)=>{
            
           console.log(e.offsetHeight )
           
        })
    })


// window.scrollTo(X,Y) mueve la pagina

    // window.onscroll = function() {
    //     console.log("Vertical: " + window.scrollY);
    //     console.log("Horizontal: " + window.scrollX);
      
    //   };





});
