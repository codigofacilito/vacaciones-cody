<template>
  <div class="home">
    <main>
      <header>
        <div class="is-flex align-items-center Home__header">
          <img src="../../assets/images/1.jpg" alt="Cody en la playa"/>
          <div>
            <h1>Estas son mis Vacaciones</h1>
            <p>
              Soy Cody, un aspirante a Dev, en 2019, organicé un viaje para
              desestresarme del código, y en esta página quiero compartirlo contigo.
            </p>
            <div class="is-flex">
              <router-link to="/vacations" class="Home__button-vacations"><strong>Mis vacaciones</strong></router-link>
            </div>

          </div>

        </div>
      </header>
      <section>

        <div class="is-flex align-items-center Home__container">
          <div>
            <h2>Colabora en mi página</h2>
            <p>
              Como parte de mi formación Frontend, aprendí acerca de Git y GitHub,
              por lo que decidí subir mi código a GitHub
            </p>
            <p>
              Puedes ayudarme a mejorar mi página, haciendo un fork de mi página, y
              enviando un pull request.
            </p>
            <p>
              Si nunca antes has colaborado con un repositorio, en Código Facilito
              hay un tutorial que lo explica
              <a href="" target="_blank" class="is-link"><strong>Ir al tutorial</strong> </a>
            </p>
          </div>
          <img src="../../assets/images/friends.svg" alt="Image colabora en mi pagina">
        </div>

      </section>
      <section>
        <header>
          <h2>Aquí te comparto algunas fotos de mis vacaciones</h2>
          <p>
            ¡Bien! Sé que estás aquí por mis vacaciones, aquí te comparto
            algunas fotos que tomé:
          </p>
        </header>
        <div class="Home__photos is-flex">

          <img src="../../assets/images/2.jpg" alt="Cody acampando"/>
          <img src="../../assets/images/3.jpg" alt="Cody en una alberca"/>

        </div>
        <p>
          Puedes ver más, en la galería de fotos de mi página
          <router-link to="/photos" class="is-link"><strong>Ir a la galería</strong></router-link>
        </p>
      </section>

      <section>
        <div class="Home__container is-flex Home__margin">

          <img src="../../assets/images/vacations.svg" alt="Vacations illustration">
          <div>
            <h2>La importancia de las vacaciones</h2>
            <p>
              Aprender a programar y escribir código, puede ser estresante, por
              eso es muy importante que periódicamente nos desconectemos y
              descansemos apropiadamente
            </p>
          </div>
        </div>
        <div>
          <p>
            Durante mis vacaciones aprendí que existen distintos beneficios de
            descansar:
          </p>
          <div class="Home__advantages">
            <div>
              <img class="advantages-img" src="../../assets/icons/latido-del-corazon.png" alt="Latido del corazon"/>
              <p>Mejora la salud mental</p>
            </div>
            <div>
              <img class="advantages-img" src="../../assets/icons/motivation.png" alt="Icon motivation"/>
              <p>Incrementa la motivación</p>
            </div>
            <div>
              <img class="advantages-img" src="../../assets/icons/TOQ2NLE3HZGILDQEEH5NATXLHY.jpg" alt="Latido del corazon"/>
              <p>Reduce el burnout</p>
            </div>
             <div>
              <img class="advantages-img" src="../../assets/icons/creativity.jpg" alt="Latido del corazon"/>
              <p>Mejora tu productividad y creatividad</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
document.title = "Inicio | Cody "
export default {
  name: "Home",
};

</script>
<style src="./Home.css" scoped/>