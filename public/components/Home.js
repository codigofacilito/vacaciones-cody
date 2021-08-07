const importarJs = () => {
    const d = document, w = window;
    const principal = d.getElementById('principal')

    const acciones = document.createElement('script'); 
    acciones.src = './js/acciones.js';
    const botones = document.createElement('script'); 
    botones.src = './js/botones.js';
    const touch = document.createElement('script'); 
    touch.src = './js/touch.js';

    principal.appendChild(acciones)
    principal.appendChild(botones)
    principal.appendChild(touch)
}

export function Home() {

  const ImagenPost = './images/post.png'
  const section = document.createElement("section");

   section.innerHTML = `
        <section class="card card-one">
        <img class="card-img  card-img_mediana" src="./images/4.jpg" />
            <div class="card-info">
                <img  class="post" src=${ImagenPost} />
                <p class="card-parrafo">
                    Hola, <br><br>
                    Soy Cody, un aspirante a Dev, en 2019, 
                    organicé un viaje para desestresarme del código, 
                    y en esta página quiero compartirlo contigo.
                </p>
            </div>
            <span class="cinta">Estas son mis vacaciones</span>
        </section>
        
        <section class="card ">        
            <img class="card-img card-img_left card-img_mediana card-img_absolute" src="./images/1.jpg"></img>
            <div class="card-info">
                <img  class="post" src=${ImagenPost} />
                <p class="card-parrafo">
                    Mis vacaciones <br>
                    Frontend, <br><br>
                    
                    Durante el verano de 2019, decidí comenzar a aprender desarrollo frontend, 
                    por lo que durante mi viaje, estuve aprendiendo HTML, CSS, y JavaScript<br><br>
                    
                    Cada tarde, después de conocer nuevos lugares en mis vacaciones, 
                    practicaba mis habilidades en tecnologías frontend, construyendo esta página<br><br>
                    
                    Estos son los cursos que estuve tomando
                </p>
                <ul class="list-with-color"> 
                    <li>Curso profesional de Desarrollo Web</li>
                    <li>Curso para crear mi primera página web</li>
                </ul>
            </div>
        </section>

        <section class="card">
            <div class="card-imagenes">
                <img class="card-img card-img_left" src="./images/1.jpg"/>
                <img class="card-img card-img_right" src="./images/2.jpg"/>
                <img class="card-img" src="./images/3.jpg"/>
            </div>
            <p>Bien! Sé que estás aquí por mis vacaciones, aquí te comparto algunas fotos que tomé</p>
        </section>


        <section class="contenedor-card card-modificar">
            <img class="card-img card-img_left card-img_absolute card-img_mediana" src="./images/5.jpg"></img>
            <div class="card">
                <div class="card-info">
                    <img  class="post" src=${ImagenPost} />
                    <p class="card-parrafo">
                        También me propuse aprender nuevas tecnologías durante 2021
                    </p>
                    <ul> 
                        <li>Flexbox y Grid</li>
                        <li>Animaciones con CSS y JavaScript</li>
                        <li>Ajax</li>
                        <li>HTML semántico</li>
                        <li>Entre otros</li>
                    </ul>
                </div>
                <span class="cinta">Ruta de aprendizaje</span>
            </div>  
        </section>


        <section class="card">
            <img class="card-img card-img_right card-img_mediana card-img_absolute" src="./images/2.jpg"></img>
            <div class="card-info">
                    <img  class="post" src=${ImagenPost} />
                    <p class="card-parrafo">
                    Colabora en <br>
                    mi página, <br><br>
                    
                    Como parte de mi formación Frontend, aprendí acerca de Git y GitHub, 
                    por lo que decidí subir mi código a GitHub <br><br>
                    
                    Puedes ayudarme a mejorar mi página, haciendo un fork de mi página, 
                    y enviando un pull request. <br><br>
                    
                    Si nunca antes has colaborado con un repositorio, 
                    en Código Facilito hay un tutorial que lo explica 
                    <a href="#">Ir al tutorial</a>
                    </p>
                </div>
        </section>

        <section class="contenedor-card">
            <img class="card-img card-img_absolute card-img_grande" src="./images/4.jpg"></img>
            <div class="card">
                <div class="card-info">
                    <img  class="post" src=${ImagenPost} />
                    <p class="card-parrafo">
                        Aprender a programar y escribir código, puede ser estresante, 
                        por eso es muy importante que periódicamente 
                        nos desconectemos y descansemos apropiadamente <br><br>

                        Durante mis vacaciones aprendí que existen distintos beneficios de descansar:
                    </p>
                    <ul> 
                        <li>Mejora la salud mental</li>
                        <li>Reduce el burnout</li>
                        <li>Mejora tu productividad y creatividad</li>
                    </ul>
                </div>
                <span class="cinta">La importancia de las vacaciones</span>
            </div>
        </section>

    `;


    return section
}
