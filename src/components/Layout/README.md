# Layout Component

Este componente está pensado para utilizarse en cada página como el `container` o `wrapper` de toda página.

Esto es debido a que está vitaminado con la librería `react-helmet`, lo cual ayuda mucho al SEO.

# Uso

Envuelve cada página con este componente:

```jsx
return <Layout>{...pageContent}</Layout>;
```

# Propiedades

Este componente es el que llama al `<Header/>`, `<Sidebar/>` y `<Footer/>`

Es por eso que utiliza la referencia del Header, y la utiliza para mandársela al Sidebar para hacer un correcto render de la altura

Las props opcionales que se le pueden dar a este componente:

```js
{
    title: "string",
    description: "string"
}
```

Por defecto se pondran estos valores:

```js
{
    title: "Mis vacaciones",
    description: "Esta es una pagina para el concurso de CodigoFacilito"
}
```
