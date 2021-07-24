<template>
  <div class="home">
    <h1 class="home__title">Estas son mis Vacaciones</h1>
    <p class="home__biography">Soy Cody, un aspirante a Dev, en 2019, organicé un viaje para desestresarme del código, y en esta página quiero compartirlo contigo.</p>

    <section>
      <header>
        <h2>Mis vacaciones Frontend</h2>
      </header>
      <p> Durante el verano de 2019, decidí comenzar a aprender desarrollo frontend, por lo que durante mi viaje, estuve aprendiendo HTML, CSS, y JavaScript </p>
      <p> Cada tarde, después de conocer nuevos lugares en mis vacaciones, practicaba mis habilidades en tecnologías frontend, construyendo esta página </p>
      <p> Estos son los cursos que estuve tomando </p>
      <div class="cursos">
        <div>
          <p>Curso profesional de Desarrollo Web</p>
        </div>
        <div>
          <p>Curso para crear mi primera página web</p>
        </div>
      </div>
    </section>
    <section>
      <header>
        <h2>Ruta de aprendizaje 2021</h2>
        <p> También me propuse aprender nuevas tecnologías durante 2021</p>
      </header>
      <ul>
        <li> Flexbox, y Grid </li>
        <li> Animaciones con CSS y JavaScript </li>
        <li> AJAX </li>
        <li> HTML semántico </li>
        <li> Entre otros </li>
      </ul>
    </section>
    <section>
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
        <a href="" target="_blank" >Ir al tutorial</a>

      </p>
    </section>
    <section>
      <header>
        <h2>Aquí te comparto algunas fotos de mis vacaciones</h2>
        <p>¡Bien! Sé que estás aquí por mis vacaciones, aquí te comparto algunas fotos que tomé:</p>
      </header>
      <div class="fotos">
        <img src="images/1.jpg" alt="Cody en la playa">
        <img src="images/2.jpg" alt="Cody acampando">
        <img src="images/3.jpg" alt="Cody en una alberca">
        <p>
          Puedes ver más, en la galería de fotos de mi página
          <router-link to="/fotos">Ir a la galería</router-link>
        </p>
      </div>
    </section>
    <section>
      <header>
        <h2>La importancia de las vacaciones</h2>
        <p>Aprender a programar y escribir código, puede ser estresante, por eso es muy importante que periódicamente nos desconectemos y descansemos apropiadamente</p>
        <p>Durante mis vacaciones aprendí que existen distintos beneficios de descansar:</p>
        <ol>
          <li>Mejora la salud mental</li>
          <li>Incrementa la motivación</li>
          <li>Reduce el burnout</li>
          <li>Mejora tu productividad y creatividad</li>
        </ol>
      </header>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>

$hue: 209;
$saturation: 22%;
$lightness: 20%;

.home {
  display: flex;
  align-items: center;
  flex-direction: column;

  &__biography {
    border-right: 2px solid hsl($hue, $saturation, $lightness);
    font-size: 1.2rem;
    white-space: nowrap;
    overflow: hidden;
    animation: typewriter 5s steps(60) normal both,
    blinkTextCursor 900ms infinite normal;
  }
}

@keyframes typewriter {
    from { width: 0; }
    to { width: 73.4rem; }
}

@keyframes blinkTextCursor {
    from {
          border-right-color: hsl($hue, $saturation, $lightness);
    }
    to {
          border-right-color: transparent;
    }
}

</style>
