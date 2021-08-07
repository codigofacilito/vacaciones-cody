export function Accion(props) {
  let { lista, contador } = props;

  const removerClase = (clase) => {
    lista.forEach((elemento) => elemento.classList.remove(`${clase}`));
  };

  const borrarAnimacion = () => {
    lista.forEach((elemento) => (elemento.style.animation = null));
  };

  const reiniciar = () => {
    borrarAnimacion();
    removerClase("viendo");
    removerClase("siguiente");
  };

  const addAnimacion = (elemento, animacion) => {
    elemento.style.animation = `${animacion}`;
  };

  const siguiente = () => {
    if (contador < lista.length - 1) {
      reiniciar();
      lista[contador].classList.toggle("atras");

      contador += 1;

      lista[contador].classList.toggle("viendo");
      lista[contador + 1].classList.toggle("siguiente");
    }
  };

  const atras = () => {
    if (contador > 0) {
      reiniciar();
      addAnimacion(lista[contador], "siguiente 1s forwards ease-in-out");
      lista[contador].classList.toggle("siguiente");
      lista[contador].classList.remove("atras");

      contador -= 1;

      lista[contador].classList.remove("atras");
      addAnimacion(lista[contador], "enviarAdelante  1s forwards ease-in-out");
      lista[contador].classList.toggle("viendo");
    }
    if (contador === 0) lista[contador + 1].style.animation = null;
  };

  return {
    siguiente,
    atras,
  };
}
