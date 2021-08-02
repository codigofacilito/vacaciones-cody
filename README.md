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

### Components docs (on src)

    .
    ├── ...
    ├── components              # Components folder
    │   ├── Button              # Button
    │   ├── Contact             # Redes sociales
    │   ├── Footer              # Movil Footer
    │   ├── Gallery             # Gallery pressable
    │   ├── Grid                # Grid responsive
    │   ├── Header              # Header de la pagina
    │   ├── Hidden              # Para razones responsive
    │   ├── Image               # Componente dinámico con Graphql
    │   ├── Layout              # Compoente para cada página
    │   ├── Link                # Link interno o externo dependiendo de las props
    │   ├── Paragraph           # Styled p
    │   ├── Section             # Seccion que parece una terminal
    │   └── Sidebar             # Navegación en web
    │
    └── theme                   # Design System folder
        └── index.js            # Toda la magia

> Ahora vamos con los links...

[See components](src/components)

- [Button](src/components/Button)
- [Contact](src/components/Contact)
- [Footer](src/components/Footer)
- [Gallery](src/components/Gallery)
- [Grid](src/components/Grid)
- [Header](src/components/Header)
- [Hidden](src/components/Hidden)
- [Image](src/components/Image)
- [Layout](src/components/Layout)
- [Link](src/components/Link)
- [Paragraph](src/components/Paragraph)
- [Section](src/components/Section)
- [Sidebar](src/components/Sidebar)

[See Design System](src/theme)
