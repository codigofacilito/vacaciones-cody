import React from "react";
import LayoutPage from "components/Layout";
import Section from "components/Section";
import Button from "components/Button";
import P from "components/Paragraph";

export default function Home() {
  return (
    <LayoutPage>
      <Section>
        <h2>Mis vacaciones Frontend</h2>
        <P>
          Durante el verano de 2019, decidí comenzar a aprender desarrollo
          frontend, por lo que durante mi viaje, estuve aprendiendo HTML, CSS, y
          JavaScript
        </P>
        <P>
          Cada tarde, después de conocer nuevos lugares en mis vacaciones,
          practicaba mis habilidades en tecnologías frontend, construyendo esta
          página
        </P>
        <P>Estos son los cursos que estuve tomando</P>
        <div class="cursos">
          <Button>
            <p>Curso profesional de Desarrollo Web</p>
          </Button>
          <Button>
            <p>Curso para crear mi primera página web</p>
          </Button>
        </div>
      </Section>

      <Section>
        <h2>Ruta de aprendizaje 2021</h2>
        <P>También me propuse aprender nuevas tecnologías durante 2021</P>
        <ul>
          <li>Flexbox, y Grid</li>
          <li>Animaciones con CSS y JavaScript</li>
          <li>AJAX</li>
          <li>HTML semántico</li>
          <li>Entre otros</li>
        </ul>
      </Section>
      <Section>
        <h2>Colabora en mi página</h2>
        <P>
          Como parte de mi formación Frontend, aprendí acerca de Git y GitHub,
          por lo que decidí subir mi código a GitHub
        </P>
        <P>
          Puedes ayudarme a mejorar mi página, haciendo un fork de mi página, y
          enviando un pull request.
        </P>
        <P>
          Si nunca antes has colaborado con un repositorio, en Código Facilito
          hay un tutorial que lo explica
          <a href="" target="_blank">
            Ir al tutorial
          </a>
        </P>
      </Section>
      <Section>
        <h2>Aquí te comparto algunas fotos de mis vacaciones</h2>
        <P>
          ¡Bien! Sé que estás aquí por mis vacaciones, aquí te comparto algunas
          fotos que tomé:
        </P>
        <div class="fotos">
          <img src="images/1.jpg" alt="Cody en la playa" />
          <img src="images/2.jpg" alt="Cody acampando" />
          <img src="images/3.jpg" alt="Cody en una alberca" />
          <P>
            Puedes ver más, en la galería de fotos de mi página
            <a href="fotos.html">Ir a la galería</a>
          </P>
        </div>
      </Section>

      <Section>
        <h2>La importancia de las vacaciones</h2>
        <P>
          Aprender a programar y escribir código, puede ser estresante, por eso
          es muy importante que periódicamente nos desconectemos y descansemos
          apropiadamente
        </P>
        <P>
          Durante mis vacaciones aprendí que existen distintos beneficios de
          descansar:
        </P>
        <ol>
          <li>Mejora la salud mental</li>
          <li>Incrementa la motivación</li>
          <li>Reduce el burnout</li>
          <li>Mejora tu productividad y creatividad</li>
        </ol>
      </Section>
    </LayoutPage>
  );
}
