import { Cabecera } from '../componentes/Cabecera';
import { Carousel } from '../componentes/Carousel';
import { Contenido } from '../componentes/Contenido';
import { PiePagina } from '../componentes/PiePagina';

function App() {
  return (
    <>
      <Cabecera/>  
      <Carousel /> 
      <Contenido /> 
      <PiePagina />
    </>
  );
}

export default App;