import React from "react";

export const LineaAprendizaje = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-timeline">
              <div className="timeline">
                <div className="timeline-icon">
                  <span className="year">#1</span>
                </div>
                <div className="timeline-content m_case1">
                  <h3 className="title">Flexbox, y Grid</h3>
                  <p className="description">
                    Ambos nos permiten crear diseños complejos que antes sólo
                    eran posibles mediante la aplicación de trucos con CSS y/o
                    JavaScript.
                  </p>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-icon">
                  <span className="year">#2</span>
                </div>
                <div className="timeline-content m_case2">
                  <h3 className="title">Animaciones con CSS y JavaScript</h3>
                  <p className="description">
                    Básicamente una animación CSS se define como el la
                    transición gradual de unos estilos a otros en los elementos
                    del html.
                  </p>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-icon">
                  <span className="year">#3</span>
                </div>
                <div className="timeline-content m_case1">
                  <h3 className="title">AJAX</h3>
                  <p className="description">
                    AJAX es una tecnología que nos permite realizar acciones en
                    una página web que necesiten respuesta del servidor sin
                    recargarla.
                  </p>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-icon">
                  <span className="year">#4</span>
                </div>
                <div className="timeline-content">
                  <h3 className="title">HTML semántico</h3>
                  <p className="description">
                    HTML Semántico es el uso de las etiquetas HTML para reforzar
                    la semántica o el significado, de la información en las
                    páginas web
                  </p>
                </div>
              </div>
              <div className="timeline">
                <div className="timeline-icon">
                  <span className="year">#5</span>
                </div>
                <div className="timeline-content m_case3">
                  <h3 className="title">Entre otros</h3>
                  <p className="description">
                    React es una biblioteca Javascript de código abierto
                    diseñada para crear interfaces de usuario con el objetivo de
                    facilitar el desarrollo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
