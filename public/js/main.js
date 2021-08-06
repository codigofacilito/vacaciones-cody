let d = document;
window.addEventListener("DOMContentLoaded", (event) => {
  let secciones = Array.prototype.slice.apply(d.querySelectorAll("section"));
  let links = Array.prototype.slice.apply(d.querySelectorAll("header nav ul li"));
  let tamañoHeader = d.querySelector("header").clientHeight;
  let tamañoSection = d.querySelector("section:nth-child(1)").offsetHeight;
  let tamañoVentana =
    tamañoHeader + tamañoSection * 6 + d.querySelector("footer").clientHeight;
  let registroScroll;
  let SumaTamaños;
  links.map((e, index) => {
      e.addEventListener("click", () => {
        links.map((el)=>{
            el.classList.remove('active')
        })
        e.classList.add('active')
      console.log(index);
      ir(index);
    });
  });
  function ir(index) {
    if (index == 0) {
        scroll({
            top: 0,
            behavior: "smooth"
          });
        
    } else {
      SumaTamaños = tamañoSection * index;
      scroll({
        top: SumaTamaños,
        behavior: "smooth"
      });
    }
  }

  function Observador(entries) {
    entries.map((e, index) => {
      
      if (e.isIntersecting == true &&e.intersectionRatio>0.32 ) {
        setTimeout(()=>{
            e.target.classList.remove("nover");
            e.target.classList.add("animacion");
        },100)
        //   observer.unobserve(e.target)
      }else{
        setTimeout(()=>{
            e.target.classList.remove("animacion");
            e.target.classList.add("nover");
        },100)
      }
    });
  }
  let observer = new IntersectionObserver(Observador, { threshold: 0.3 });
  secciones.map((e) => {
    observer.observe(e);
  });

 
  



});