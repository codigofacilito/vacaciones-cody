# Hidden Componente

Este componente nos ayuda mucho a la hora de hacer otros componentes o páginas, ya que al ser pensada una web responsiva,
este es el uso del componente. Basicamente consiste en hacer render (o no) del componente hijo

## Props

Hay 2 props muy sencillas:

```js
onmovil;
```

y

```js
ondesktop;
```

Cómo su nombre lo dice, nos sirve para esconder el elemento hijo en móvil, o PC, dependiendo del viewport.

El viewport width threshold lo encuentras dentro de nuestro Design System en la carpeta `theme`
