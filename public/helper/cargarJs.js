import {Accion} from '../components/Acciones.js'
import {Botones} from '../components/Botones.js'
import {Touch} from '../components/Touch.js'

export const cargarJs = (lista) => {
    let contador = 0;

    lista[contador].classList.toggle("viendo");
    lista[contador + 1].classList.toggle("siguiente");

    let {siguiente, atras } = Accion({lista, contador})
    Botones({siguiente, atras})
    Touch({siguiente, atras, lista})
}