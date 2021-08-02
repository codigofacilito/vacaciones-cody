# Sidebar Component

Este componente es una barra de navegación para las pantallas con gran viewport.

Funciona muy parecido al componente de Footer, con diferencia de sus estilos.

# Uso

El componente `<Sidebar>` te lo configura automáticamente sin tener que preocuparte, y que escribas más páginas.

Para "indexarla" en tu Sidebar, agrega un elemento en la siguiente variable:

> Ejemplo:

```js
const data = [
  {
    to: "/",
    title: "Inicio",
    component: <VscHome size={size} />,
  },
];
```
