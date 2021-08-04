import React from 'react';
import { 
    BrowserRouter,
    Switch,
    Route    
} from 'react-router-dom';
import Inicio from '../paginas/App';
import { Galeria } from '../paginas/Galeria';

const Rutas = () => {
    return(        
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Inicio} />   
                <Route path="/Galeria" component={Galeria} />             
            </Switch>  
        </BrowserRouter>
    );
}

export default Rutas;