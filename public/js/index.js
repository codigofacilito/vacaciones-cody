const body = document.querySelector('body');

const menuIcons = document.querySelectorAll('.menu-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero-content');

const rowUp = document.querySelector('.row-up');
const btnsVerFoto = document.querySelectorAll('.btn-zoom');



btnsVerFoto.forEach( btnVerFoto =>{
    btnVerFoto.addEventListener('click', ()=>{
        const foto = btnVerFoto.parentNode.parentNode.childNodes[1];
        mostrarFoto(foto);
    });
} );

// Menu responsive
menuIcons.forEach( menuIcon =>{
    menuIcon.addEventListener('click', ()=>{
        navbarMenu.classList.toggle('menu-visible');
    });
});

// Ir arriba
rowUp.addEventListener('click', ()=>{
    hero.style.marginTop = `0px`;
});





window.addEventListener('scroll', ()=>{
    navbarSticky();
    animationFade('fast');
    animationFade('medium');
    animationFade('slow');
});

// Navbar fijo
function navbarSticky(){
    const observer = new IntersectionObserver((entries)=>{

        if( entries[0].boundingClientRect.top <= 32 ){
            navbar.classList.add('navbar-sticky');
            hero.style.marginTop = `${navbar.offsetHeight}px`;     
            rowUp.classList.add('row-visible');
        }
        else if( entries[0].boundingClientRect.top >= 0 ){
            navbar.classList.remove('navbar-sticky');
            hero.style.marginTop = '0';        
            rowUp.classList.remove('row-visible');
        }
    });
    observer.observe( hero );
}

function mostrarFoto(e){
    console.log(e.src);
    
    const foto = document.createElement('IMG');
    foto.src = e.src;

    const overlay = document.createElement('DIV');
    overlay.appendChild(foto);
    overlay.classList.add('overlay');
    overlay.onclick = ()=>{
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    // Cerrar foto
    const cerrarFoto = document.createElement('P');
    cerrarFoto.textContent = 'X';
    cerrarFoto.classList.add('btn-cerrar');
    overlay.appendChild(cerrarFoto);

    cerrarFoto.onclick = ()=>{
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    // Mostrar en HTML
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}

// Animaciones
const animationFade = ( speed )=>{
    const elements = document.querySelectorAll(`.animation-${speed}`);

    elements.forEach(element => {        
        const screenHeight = window.innerHeight;
        const distancia = element.getBoundingClientRect().top;
        element.classList.add('traslation');
    
        if( distancia <= screenHeight ){
            element.classList.add(`traslation-${speed}`);
        }
    });
}
