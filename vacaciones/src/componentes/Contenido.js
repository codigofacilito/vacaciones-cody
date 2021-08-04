import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { LineaAprendizaje } from "./LineaAprendizaje";
import { Galeria } from "../paginas/Galeria";
import Img1 from "../images/0.jpg";
import Img2 from "../images/10.jpg";
import Img3 from "../images/11.jpg";
import Img4 from "../images/14.jpg";
import Img5 from "../images/separador.png";

export const Contenido = () => {
  return (
    <>
      <div className="container">
        <div className="mouse importante">
          <div className="scroll"></div>
        </div>
        {/* --------------------------------  */}
        <div className="row">
          <div className="col d-flex justify-content-center pt-5">
            <header className="mt-5">
              <h1>Mis vacaciones Frontend</h1>
            </header>
          </div>
        </div>
        <div className="text-center">
          <img src={Img5} alt="Separador" />
        </div>
        {/* --------------------------------  */}
        <div className="row">
          <div className="col-md-6 pt-5 mt-5">
            <p>
              Durante el verano de 2019, decidí comenzar a aprender desarrollo
              frontend, por lo que durante mi viaje, estuve aprendiendo HTML,
              CSS, y JavaScript.
            </p>
            <div className="text-center">
              <AiFillHtml5 className="icon_desarrollo" />
              <DiCss3 className="icon_desarrollo mx-5" />
              <IoLogoJavascript className="icon_desarrollo" />
            </div>
            <br />
            <br />
            <p>
              Cada tarde, después de conocer nuevos lugares en mis vacaciones,
              practicaba mis habilidades en tecnologías frontend, construyendo
              esta página.
            </p>
          </div>
          <div className="col-md-6 mt-5">
            <img
              src={Img1}
              alt="Vacaciones"
              height="350"
              className="w-100 img_vacaciones"
            />
          </div>
        </div>
        {/* --------------------------------  */}
        <div className="row mt-2">
          <div className="col">
            <p>Estos son los cursos que estuve tomando:</p>
          </div>
        </div>
        {/* --------------------------------  */}
        <div className="row justify-content-center">
          <div className="col-4">
            <div className="card mb-3 card_cursos">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={Img2}
                    className="img-fluid rounded-start h-100"
                    alt="Curso"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      <a
                        href="https://codigofacilito.com/cursos/frontend-profesional"
                        target="_blank"
                        rel="noreferrer"
                        className="cursos"
                      >
                        Curso profesional de Desarrollo Web
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card mb-3 card_cursos">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={Img3}
                    className="img-fluid rounded-start h-100"
                    alt="Curso"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      <a
                        href="https://codigofacilito.com/cursos/primera-pagina-2019"
                        target="_blank"
                        rel="noreferrer"
                        className="cursos"
                      >
                        Curso para crear mi primera página web
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --------------------------------  */}
        <div className="text-center">
          <img src={Img5} alt="Separador" />
        </div>
        <div className="row mt-5 pt-5">
          <div className="col text-center mt-5">
            <h1>Rutas de aprendizaje 2021</h1>
            <LineaAprendizaje />
          </div>
        </div>
        {/* --------------------------------  */}
        <div className="text-center">
          <img src={Img5} alt="Separador" />
        </div>
        <div className="row mt-5 pt-5">
          <div className="col text-center">
            <h2>Colabora en mi página</h2>
          </div>
        </div>
        {/* --------------------------------  */}
        <div className="row mt-5 justify-content-center">
          <div className="col-8 text-center">
            <p>
              Como parte de mi formación Frontend, aprendí acerca de Git y
              GitHub, por lo que decidí subir mi código a GitHub Puedes ayudarme
              a mejorar mi página, haciendo un fork de mi página, y enviando un
              pull request.
            </p>
            <p>
              Si nunca antes has colaborado con un repositorio, en Código
              Facilito hay un tutorial que lo explica: &nbsp;
              <a
                href="https://codigofacilito.com/verano/concurso"
                target="_blank"
                rel="noreferrer"
              >
                Ir al tutorial
              </a>
            </p>
          </div>
        </div>
        {/* --------------------------------  */}
        <div className="row mt-5 pt-5">
          <div className="col text-center">
            <h2>Aquí te comparto algunas fotos de mis vacaciones</h2>
            <p>
              ¡Bien! Sé que estás aquí por mis vacaciones, aquí te comparto
              algunas fotos que tomé:
            </p>
          </div>
        </div>
        {/* --------------------------------  */}
        <Galeria imgs={3} title={false} />
        <div className="row">
          <div className="col text-center">
            <p>
              Puedes ver más, en la galería de fotos de mi página: &nbsp;
              <a href="/Galeria">Ir a galería</a>
            </p>
          </div>
        </div>
        {/* --------------------------------  */}
        <div className="text-center">
          <img src={Img5} alt="Separador" />
        </div>
        <div className="row mt-5 justify-content-center mb-5">
          <div className="col-8">
            <div className="card">
              <img src={Img4} alt="Imagen" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title text-center">
                  La importancia de las vacaciones
                </h5>
                <p className="card-text">
                  <br />
                  Aprender a programar y escribir código, puede ser estresante,
                  por eso es muy importante que periódicamente nos desconectemos
                  y descansemos apropiadamente.
                  <br />
                  <br />
                  Durante mis vacaciones aprendí que existen distintos
                  beneficios de descansar:
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">1. Mejora la salud mental</li>
                <li className="list-group-item">2. Incrementa la motivación</li>
                <li className="list-group-item">3. Reduce el burnout</li>
                <li className="list-group-item">
                  4. Mejora tu productividad y creatividad
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
