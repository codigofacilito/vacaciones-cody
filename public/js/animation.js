export function WavesAling() {
    let ElementOcean = document.querySelector('.ocean');  
    let ScreenWidth =  document.body.clientWidth;
    let H1Width = document.querySelector('h1').clientWidth - 2;
    let OceanLeft = ((ScreenWidth - H1Width) / 2) + 8;

        if(OceanLeft < 14)
        { OceanLeft = 9; }

            ElementOcean.style.setProperty('left', `${OceanLeft}px`);
            ElementOcean.style.setProperty('width', `${H1Width}px`);
}

export function AnimationEvent() {
    document.addEventListener("DOMContentLoaded", () => {
        WavesAling();
    });

    window.addEventListener('resize', () => {
        WavesAling();
    });
}
