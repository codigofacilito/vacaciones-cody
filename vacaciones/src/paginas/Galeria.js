import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import PropTypes from "prop-types";
import Img2 from "../images/1.jpg";
import Img3 from "../images/2.jpg";
import Img4 from "../images/3.jpg";
import Img5 from "../images/4.jpg";
import Img6 from "../images/5.jpg";
import Img7 from "../images/6.jpg";
import Img8 from "../images/12.jpg";
import Img9 from "../images/13.jpg";

export const Galeria = ({ imgs, title }) => {
    const scrollTop = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }
  
    return (
    <>
      <div className="container px-0 pb-5" id="inicio">
        {/* --------------------- Titulo ----------------------- */}
        {title ? (
          <section className="box-intro">
            <div className="table-cell">
              <h1 className="box-headline">
                Galería completa de mis vacaciones
              </h1>
              <h5>Soy Cody, un aspirante a Dev.</h5>
            </div>

            <div className="mouse">
              <div className="scroll"></div>
            </div>
          </section>
        ) : (
          false
        )}
        {/* --------------------- Galeria ----------------------- */}
        {/* --------- Fila #1 --------- */}
        <div className="row">
          <div className="col-4">
            <div className="row">
              <div className="col">
                <img src={Img2} alt=".." height="300" className="w-100" />
              </div>
            </div>
            <div className="row">
              <div className="col pt-2">
                <img src={Img3} alt=".." height="300" className="w-100" />
              </div>
            </div>
          </div>
          <div className="col-8 px-0">
            <img src={Img8} alt=".." className="w-100" height="610" />
          </div>
        </div>
        {imgs === 0 ? (
          <>
            {/* --------- Fila #2 --------- */}
            <div className="row pt-2">
              <div className="col-8">
                <img src={Img9} alt=".." className="w-100" />
              </div>
              <div className="col-4 px-0">
                <img src={Img4} alt=".." className="w-100 h-100" />
              </div>
            </div>
            {/* --------- Fila #3 --------- */}
            <div className="row pt-2">
              <div className="col pe-0">
                <img src={Img5} alt=".." className="w-100 h-100" />
              </div>
              <div className="col">
                <img src={Img6} alt=".." className="w-100 h-100" />
              </div>
              <div className="col px-0">
                <img src={Img7} alt=".." className="w-100 h-100" />
              </div>
            </div>
          </>
        ) : (
          false
        )}
      </div>
      {/* --------- ICONO --------- */}
      <button className="cd-top" onClick={scrollTop}>
        <AiOutlineArrowUp />
      </button>
    </>
  ); 
};

Galeria.propTypes = {
  imgs: PropTypes.number,
  title: PropTypes.bool,
};

Galeria.defaultProps = {
  title: true,
  imgs: 0,
};
