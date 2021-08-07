export function Menu() {
  const header = document.createElement("header");

  header.innerHTML = `
        <nav id="menu">
            <a class="item" href="#/">Inicio</a>
            <hr class="vertical">
            <a class="item" href="#/fotos">Fotos</a>
        </nav>
    `;
  return header;
}
