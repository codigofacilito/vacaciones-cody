# Link Inteligente Componente

Este es un componente muy especial para mí, ya que me ví en la necesidad en hacer un componente para los links internos,
y otro para los externos. Tambien quería poner un poco de configuración en los links externos para que se abran en otra pestaña.

Para esto me di cuenta que los links internos se rigen por la prop `to` y los externos `href`, así que hice la distinción así.

# Uso

Si necesitas un link externo, pon el atributo `href` al link. el resultado será algo así:

```js
<a {...props} target="_blank" rel="noopener noreferer">
  {props.children}
</a>
```

En dado caso de poner un link interno, se renderizará el Link component de Gatsby:

```js
import { Link } from "gatsby";
// ... other imports

<Link {...props}>{props.children}</Link>;
```
