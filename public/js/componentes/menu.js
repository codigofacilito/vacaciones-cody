export default function menuToggle(){

    document.addEventListener("click", e =>{
        const $nav = document.querySelector("nav"),
              $menu = document.querySelector(".menu");
        
        if(e.target.matches(`[class*="linea"]`)){
            $nav.classList.toggle("activo");
            $menu.classList.toggle("toggle");
        
        }else if(!(e.target.matches(".menu"))){
            $nav.classList.remove("activo");
            $menu.classList.remove("toggle");
        }


    });
}