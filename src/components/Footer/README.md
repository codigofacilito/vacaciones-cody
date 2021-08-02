# Footer Component

Este componente nos sirve para tener una navegación en el móvil

También contiene una variable `size` que contiene el tamaño de los íconos

## Estructura

- to: Link a la página deseada
- title: Nombre o título a mostrar
- component: Ícono de react-icons

## Ejemplo

```js
const data = [
  {
    to: "/",
    title: "Inicio",
    component: <VscHome size={size} />,
  },
];
```
