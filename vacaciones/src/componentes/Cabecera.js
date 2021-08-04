import React from "react";
import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import Icono from "../images/7.png";

export const Cabecera = () => {
  return (
    <>
      <div className="container">
        <nav
          className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light fixed-top pt-0 pb-0"
          id="ftco-navbar"
        >
          <div className="container">
            <a className="navbar-brand" href="/">
              <img
                src={Icono}
                className="icon_pagina"
                alt="Icono de Codigo Facilito"
              />
            </a>
            <div className="social-media order-lg-last">
              <p className="mb-0 d-flex">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="d-flex align-items-center justify-content-center"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com/?lang=es"
                  target="_blank"
                  rel="noreferrer"
                  className="d-flex align-items-center justify-content-center"
                >
                  <AiOutlineTwitter />
                </a>
                <a
                  href="https://www.instagram.com/?hl=es"
                  target="_blank"
                  rel="noreferrer"
                  className="d-flex align-items-center justify-content-center"
                >
                  <AiFillInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="d-flex align-items-center justify-content-center"
                >
                  <AiFillLinkedin />
                </a>
              </p>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars"></span> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto mr-md-3">
                <li className="nav-item active">
                  <a href="/" className="nav-link">
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/Galeria" className="nav-link">
                    Galeria
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
