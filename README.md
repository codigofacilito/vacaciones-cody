# Las Vacaciones de Cody con HectorMtz22

Cody está aprendiendo desarrollo Frontend, hizo su primer página, y ahora necesita de tu ayuda para mejorarla.

## Primeros pasos - Vista

La vista consituye basicamente el proyecto entero. Consiste en 2 páginas:

- Home '/'
- Fotos '/fotos'

La aplicación está hecha con el framework Gatsby, configurado manualmente para mantener la integridad del repositorio

Puedes ver la aplicación en:
[Vacaciones Cody - HectorMtz22](https://hmtzdev.tech/vacaciones-cody)

(Cabe mencionar que el link es de Github Pages, pero tiene un dominio custom).

## ¿Porqué lo hiciste así?

Para hacer este proyecto (Blog, como me gusta llamarle) identifiqué que con puro HTML se repetían muchas cosas,
haciendo que no pueda editarlo de una forma fácil.

Con esto, configuré una aplicación con Gatsby que tiene mi librería favorita: `React JS`.

Mi intención inicial era por la filosofía de React `DRY` - Don't Repeat Yourself!, y puesto que me encanta esta librería,
opté por hacerlo así. Por la forma de blog, decidí Gatsby directamente, puesto que no tendremos cosas dinámicas.

## Genial, pero. ¿Cómo cambio las cosas?

Hice una carpeta en

```
src/theme
```

Puedes editar los colores de la página, así como los límites entre `movil` y `desktop` (es decir, en qué límite de ancho va a ser
la página responsive), entre otras cosas más.

La app está diseñada con CSS in JS gracias a la librería `styled-components`. Los componentes están hechos para ser reutilizables y ser
más productivo a la hora de hacer las páginas para el Blog.
