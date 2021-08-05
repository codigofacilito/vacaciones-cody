import React from "react";
import img1 from "../images/4.jpg";
import img2 from "../images/1.jpg";

export const Carousel = () => {
  return (
    <>
      <div
        id="carouselCodigoFacilito"
        className="carousel carousel-dark slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselCodigoFacilito"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCodigoFacilito"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src={img1}
              className="d-block w-100"
              alt="Imagen #1"
              height="700"
              width="500"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Estas son mis Vacaciones</h1>
              <p>
                Soy Cody, un aspirante a Dev, en 2019, organicé un viaje para
                desestresarme del código, y en esta página quiero compartirlo
                contigo.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={img2}
              className="d-block w-100"
              alt="Imagen #2"
              height="700"
              width="500"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Estas son mis Vacaciones</h1>
              <p>
                Soy Cody, un aspirante a Dev, en 2019, organicé un viaje para
                desestresarme del código, y en esta página quiero compartirlo
                contigo.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselCodigoFacilito"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselCodigoFacilito"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>      
    </>
  );
};
