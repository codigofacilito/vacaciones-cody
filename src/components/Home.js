import React from 'react';
import AppBarNav from "./AppBar";
import { makeStyles } from '@material-ui/core/styles';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';

const useStyles = makeStyles((theme) => ({
  }));

export default function Home() {
    const classes = useStyles();
        return (
        <React.Fragment> 
            <AppBarNav
            text= {'Gallery'}
            />
            <header>
            <h1>Estas son mis Vacaciones</h1>
            <p>Soy Cody, un aspirante a Dev, en 2019, organicé un viaje para desestresarme del código, y en esta página quiero compartirlo contigo.</p>
            </header>

            <section>
            <header>
                <h2>Mis vacaciones Frontend</h2>
            </header>
            <p> Durante el verano de 2019, decidí comenzar a aprender desarrollo frontend, por lo que durante mi viaje, estuve aprendiendo HTML, CSS, y JavaScript </p>
            <p> Cada tarde, después de conocer nuevos lugares en mis vacaciones, practicaba mis habilidades en tecnologías frontend, construyendo esta página </p>
            <p> Estos son los cursos que estuve tomando </p>
            <div class="cursos">
                <div>
                <p>Curso profesional de Desarrollo Web</p>
                </div>
                <div>
                <p>Curso para crear mi primera página web</p>
                </div>
            </div>
            </section>
            <section>
                <header>
                    <h2>Ruta de aprendizaje 2021</h2>
                    <p> También me propuse aprender nuevas tecnologías durante 2021</p>
                </header>
                <ul>
                    <li> Flexbox, y Grid </li>
                    <li> Animaciones con CSS y JavaScript </li>
                    <li> AJAX </li>
                    <li> HTML semántico </li>
                    <li> Entre otros </li>
                </ul>
            </section>
            <section>
                <header>
                    <h2>Colabora en mi página</h2>
                </header>
                <p>
                Como parte de mi formación Frontend, aprendí acerca de Git y GitHub, por lo que decidí subir mi código a GitHub
                </p>
                <p>
                    Puedes ayudarme a mejorar mi página, haciendo un fork de mi página, y enviando un pull request.
                </p>
                <p>
                    Si nunca antes has colaborado con un repositorio, en Código Facilito hay un tutorial que lo explica
                    <a href="" target="_blank" >Ir al tutorial</a>
                </p>
            </section>
            <section>
                <header>
                    <h2>Aquí te comparto algunas fotos de mis vacaciones</h2>
                    <p>¡Bien! Sé que estás aquí por mis vacaciones, aquí te comparto algunas fotos que tomé:</p>
                </header>
                <div class="fotos">
                    <img src={image1} alt="Cody en la playa"/>
                    <img src={image2} alt="Cody acampando"/>
                    <img src={image3} alt="Cody en una alberca"/>
                    Puedes ver más, en la galería de fotos de mi página
                    <a href="/gallery">Ir a la galería</a>
                </div>
            </section>

            <section>
            <header>
                <h2>La importancia de las vacaciones</h2>
                <p>Aprender a programar y escribir código, puede ser estresante, por eso es muy importante que periódicamente nos desconectemos y descansemos apropiadamente</p>
                <p>Durante mis vacaciones aprendí que existen distintos beneficios de descansar:</p>
                <ol>
                <li>Mejora la salud mental</li>
                <li>Incrementa la motivación</li>
                <li>Reduce el burnout</li>
                <li>Mejora tu productividad y creatividad</li>
                </ol>
            </header>
            
            </section>
        </React.Fragment>
    );
}