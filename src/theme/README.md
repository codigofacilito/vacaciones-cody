# Design System

Esta es la carpeta de modificaciones. Aquí podemos modificar colores, y otros aspectos como la responsividad entre móvil y desktop.

Las configuraciones posibles son:

> Ejemplo de nuestro proyecto

```js
const theme = {
  colors: {
    primary: "#2841BF",
    primaryVariant: "#243173",
    secondary: "#A73B3C",
    third: "#417318",
    thirdVariant: "#72BF32",
    grayVariant: "#333",
  },
  opacity: {
    global: 0.9,
  },
  threshold: {
    width: "900px",
  },
  fontSizes: {
    movil: "15px",
    desktop: "16px",
  },
  transitions: {
    global: "300ms ease",
  },
};
```

# Configuraciones

- colors: Aquí eliges colores como:

  - primary
  - primaryVariant
  - secondary
  - third
  - thirdVariant
  - grayVariant

- opacity: Cuando quieres poner algún fondo y quieres que todo esté un poco más transparente

  - global

- threshold: Los límites de ancho de pantalla entre móvil y desktop

  - width

- fontSizes: El tamaño que quieres que esté tu fuente

  - movil
  - desktop

- transitions: El valor por defecto y global para cada transición

  - global

Espero que les guste!
