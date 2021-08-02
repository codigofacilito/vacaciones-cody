# Contact Component

Este Componente contiene los links a mis redes sociales...
Si quieres editar los links, hice una `variable` que contiene un array con esta estructura:

## Estructura

- name: Nombre de la red social
- username: Tu nombre de usuario
- href: Dirección de la página
- component: Componente ícono (librería react-icons integrada)

## Ejemplo

```js
const socialNetworks = [
  {
    name: "Github",
    username: "HectorMtz22",
    href: "https://github.com/HectorMtz22",
    component: <FaGithub />,
  },
];
```
