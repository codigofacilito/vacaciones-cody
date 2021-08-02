# Section Component

Este es un componente que en mi opinión se ve muy bien, ya que quise hacer que cada sección de la página se parezca a una terminal.

Contiene varias animaciones (que se pueden anular), lo cual nos da control y también le da un poco de interactividad al usuario.

Este componente se puede utilizar sin problemas con Galerías, Grids y más, eso es a tu gusto c:

Tiene un estilo peculiar con las etiquetas `<h2>`, y sus colores van de acuerdo al Design System

# Props

Este componente tiene por defecto una animación de `Touchable`, el cual lo podemos desactivar con `noanimations`.

> Por ejemplo:

```js
<Section noanimations>
  <h2>título</h2>
  <Grid length="3" movil>
    {
      // Code
    }
  </Grid>
</Section>
```
