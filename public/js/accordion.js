import { WavesAling as NewWavesAling } from './animation.js';

export function AccordionEvent() {
    let ElementAccordion = document.getElementsByClassName('accordion');

        for (let i = 0; i < ElementAccordion.length; i++) {
            ElementAccordion[i].addEventListener('click', function() {
                this.classList.toggle('accordion-active');

                let ElementPanel = this.nextElementSibling;
                    if (ElementPanel.style.display === 'block')
                    { ElementPanel.style.display = 'none'; }
                    else
                    { ElementPanel.style.display = 'block'; }
                
                    NewWavesAling();
            });
        }
}
