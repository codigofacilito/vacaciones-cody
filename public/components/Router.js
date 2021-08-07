import {Home} from './Home.js'
import {Fotos} from './Fotos.js'
import {cargarJs} from '../helper/cargarJs.js'
import {itemMenu} from '../helper/itemMenu.js'

export function Router(){
    const d = document;
    const principal = d.getElementById('principal')

    principal.innerHTML = null

    let { hash } = location;
    
    if (!hash  || hash === '#/') {
        principal.appendChild(Home());
    } else if (hash.includes('#/fotos')) {
        principal.appendChild(Fotos())
        const lista = document.querySelectorAll("li")
        cargarJs(lista)
    }
    itemMenu({hash})
}