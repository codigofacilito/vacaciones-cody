import {Home} from './components/Home.js'
import {Menu} from './components/Menu.js'
import {Router} from './components/Router.js'

export function App (){
    const d = document;
    const root = d.getElementById('root')
    root.innerHTML = null
    root.appendChild(Menu())

    const principal = document.createElement('main')
    principal.id = 'principal'
    root.appendChild(principal)
 

    Router()
}