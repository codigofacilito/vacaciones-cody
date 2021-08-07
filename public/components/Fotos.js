export function Fotos() {
    const section = document.createElement("section");


    section.innerHTML = `
        <ul class="fotos">
            <li><img src="images/1.jpg" alt="Cody en la playa"></li>
            <li><img src="images/2.jpg" alt="Cody acampando"></li>
            <li><img src="images/3.jpg" alt="Cody en una alberca"></li>
            <li><img src="images/4.jpg" alt="Cody en la playa"></li>
            <li><img src="images/5.jpg" alt="Cody en italia"></li>
            <li><img src="images/6.jpg" alt="Cody en el aeropuerto"></li>
        </ul>
    
        <div class="botones">
            <button class="btn btn-atras">
                <img src="images/btnLeft.png" alt="boton atras">
            </button>
            <button class="btn btn-siguiente">
                <img src="images/btnRight.png" alt="boton siguiente">
            </button>
        </div>
    `

    return section
    
}