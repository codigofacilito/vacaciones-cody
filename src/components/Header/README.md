# Header Component

Este componente es un tanto especial, ya que se utliza la función `forwardRef` de React para utilizarlo en un `HoC`

Es un componente normal que contiene un título y un párrafo, la diferencia por razones responsivas, se utiliza el componente
`<Hidden onmovil />` para ocultar el párrafo opcional

## Forward Ref

Esta opción se utilizó para saber la altura de este componente y que con otro componente, se pueda optimizar y pintar en pantalla
de una mejor manera
