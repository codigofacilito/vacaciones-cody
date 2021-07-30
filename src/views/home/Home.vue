<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />

  <div class="home">
    <h1 class="home__title">Estas son mis Vacaciones</h1>
    <p class="home__biography">Soy Cody, un aspirante a Dev, en 2019, organicé un viaje para desestresarme del código, y en esta página quiero compartirlo contigo.</p>
    <a href="#vacations" title="Ir a mis vacaciones" class="home__icon"><i class="fas fa-chevron-down"></i></a>
  </div>

  <section class="vacations" id="vacations">
      <header>
        <h2 class="vacations__title">Mis vacaciones Frontend</h2>
      </header>
      <div class="vacations__content main">
        <p> Durante el verano de 2019, decidí comenzar a aprender desarrollo frontend, por lo que durante mi viaje, estuve aprendiendo HTML, CSS, y JavaScript.</p>
        <p> Cada tarde, después de conocer nuevos lugares en mis vacaciones, practicaba mis habilidades en tecnologías frontend, construyendo esta página.</p>
      </div>
      <div class="vacations__courses">
          <p class="vacations__courses-title">Estos son los cursos que estuve tomando:</p>
          <ul>
              <li><a href="https://codigofacilito.com/cursos/frontend-profesional" target="_blank">🌈 <span>Curso profesional de Desarrollo Web</span> 😎</a></li>
              <li><a href="https://www.youtube.com/watch?v=TC8bT7zTdoE&t&ab_channel=codigofacilito" target="_blank">🚀 <span>Curso para crear mi primera página web</span> 💨</a></li>
          </ul>
      </div>
    </section>

  <section class="roadmap">
    <section class="roadmap__container">
      <header>
        <h2>Ruta de aprendizaje 2021</h2>
        <p> También me propuse aprender nuevas tecnologías durante 2021</p>
      </header>
      <ul>
        <li>🚀 Flexbox, y Grid</li>
        <li>🚀 Animaciones con CSS y JavaScript</li>
        <li>🚀 AJAX</li>
        <li>🚀 HTML semántico</li>
        <li>🚀 Entre otros</li>
      </ul>
    </section>

    <section class="roadmap__contribute">
      <header>
        <h2>Colabora en mi página</h2>
      </header>
      <p>
        Como parte de mi formación Frontend, aprendí acerca de Git y GitHub, por lo que decidí subir mi código a GitHub
      </p>
      <p>
        Puedes ayudarme a mejorar mi página, haciendo un fork de mi página, y enviando un pull request.
      </p>
      <p>
        Si nunca antes has colaborado con un repositorio, en Código Facilito hay un tutorial que lo explica
        <a href="https://www.youtube.com/watch?v=Zqft6yNRuNs&ab_channel=codigofacilito" target="_blank" class="link dark">Ir al tutorial</a>

      </p>
    </section>
  </section>

    <section class="vacations">
      <header>
        <h2 class="vacations__title">Aquí te comparto algunas fotos de mis vacaciones</h2>
        <p class="vacations__content">¡Bien! Sé que estás aquí por mis vacaciones, aquí te comparto algunas fotos que tomé:</p>
      </header>
      <div class="vacations__content">
        <div class="vacations__content-images">
          <img v-for="image in imagesToRender"
          :src="image.url"
          :alt="image.alt"
          :key="image.id"
          data-fancybox="gallery">
        </div>
        <p>
          Puedes ver más, en la galería de fotos de mi página
          <router-link to="/fotos" class="link">Ir a la galería</router-link>
        </p>
      </div>
    </section>

    <section class="tips">
      <header class="tips__content">
          <h2 class="tips__title">La importancia de las vacaciones</h2>
          <p>Aprender a programar y escribir código, puede ser estresante, por eso es muy importante que periódicamente nos desconectemos y descansemos apropiadamente.</p>
          <p>Durante mis vacaciones aprendí que existen distintos beneficios de descansar:</p>
          <ol>
            <li>Mejora la salud mental</li>
            <li>Incrementa la motivación</li>
            <li>Reduce el burnout</li>
            <li>Mejora tu productividad y creatividad</li>
          </ol>
      </header>
      <img src="@/assets/logo.png" alt="Cody despidiendose" class="tips__cody">
    </section>
</template>

<script>
// @ is an alias to /src

export default {
  components: {
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      imagesToRender: this.images.slice(0, 3)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './components/_home.scss';
@import './components/_roadmap.scss';
@import './components/_vacations.scss';
@import './components/_tips.scss';

$link-color: #00C6A7;

.link {
  text-decoration: none;
  color: darken($link-color, 10%);
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }

  &:not(.dark) {
    color: $link-color;
  }
}

</style>
