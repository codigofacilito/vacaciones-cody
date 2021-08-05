import React from 'react';
import ReactDOM from 'react-dom';
import Rutas from './componentes/Rutas';
/* ------------------ CSS ----------------------- */
import './css/style.css';
import './css/estilos.css';
/* ------------------ BOOTSTRAP ----------------------- */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

ReactDOM.render(
  <React.StrictMode>
    <Rutas />
  </React.StrictMode>,
  document.getElementById('root')
);