export function Botones(props){
  let {siguiente,atras} = props
 
  const btnSiguiente = document.querySelector(".btn-siguiente");
  const btnAtras = document.querySelector(".btn-atras");
  
  btnSiguiente.addEventListener("click", () => {
    siguiente()
  });
  
  btnAtras.addEventListener("click", () => {
    atras()
  });
  
}