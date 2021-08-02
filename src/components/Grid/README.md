# Grid Component

Este es un componente muy interesante, ya que tiene varios trucos que puedes utilizar dependiendo de tus necesidades...

## Uso

Esta grid es de tamaños iguales (con el uso de las fracciones de `CSS`) el cual nos permite hacer esta grid de manera `inteligente`.

Consta de una prop especial llamada `length` el cual recibe el número de elementos {children} que va a ser utilizado para el número de columnas.

Esta propiedad es opcional, ya que automáticamente esta propiedad se evalúa como

```js
<Grid length={props.children.length} />
```

## Uso en móvil

Si necesitas que independiente del comportamiento anterior descrito, que siempre se vea con una columna en móvil,
deberás indicar la propiedad `movil` al momento de utilizar este componente:

> Por ejemplo:

```js
<Grid length="3" movil>
  <Gallery items={items} />
</Grid>
```
