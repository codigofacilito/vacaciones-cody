# Image Component

Este es un componente en el cuál se utiliza GraphQL para hacer optimizaciones de imágenes con Gatsby.

Su uso es muy sencillo:

```js
const item = { id: 1, filename: "1.jpg", alt: "Cody en la playa" };

<Image filename={item.filename} alt={item.alt} />;
```
