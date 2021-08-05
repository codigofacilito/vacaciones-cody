<template>
  <title>
    Mis Vacaciones | Cody
  </title>
  <div >
    <section>
    <header>

      <div class="is-flex align-items-center Vacations__container">
        <div>
          <h2>Mis vacaciones Frontend</h2>
          <p>
            Durante el verano de 2019, decidí comenzar a aprender desarrollo
            frontend, por lo que durante mi viaje, estuve aprendiendo HTML, CSS, y
            JavaScript
          </p>
          <p>
            Cada tarde, después de conocer nuevos lugares en mis vacaciones,
            practicaba mis habilidades en tecnologías frontend, construyendo esta
            página
          </p>
        </div>
        <img src="../../assets/images/traveling.svg" alt="">
      </div>

    </header>

    <p>Estos son los cursos que estuve tomando</p>
    <div class="Vacations__courses">
      <div>
        <p><strong> Curso profesional de Desarrollo Web </strong></p>
      </div>
      <div>
        <p><strong> Curso para crear mi primera página web </strong></p>
      </div>
    </div>
  </section>
  <section>
    <header>
      <h2>Ruta de aprendizaje 2021</h2>
      <p>También me propuse aprender nuevas tecnologías durante 2021</p>
    </header>
    <ul class="Vacations__route-learn">
      <li>
        <div class="is-flex align-items-center">
          <img src="../../assets/icons/flexbox.png" alt="Icon ajax"/>
          <span>Flexbox, y Grid</span>
        </div>
      </li>
      <li>
        <div class="is-flex align-items-center">
          <img src="../../assets/icons/js-and-css.png" alt="Icon ajax"/>
          <span>Animaciones con CSS y JavaScript</span>
        </div>
      </li>
      <li>
        <div class="is-flex align-items-center">
          <img src="../../assets/ajax-icon-7.jpg" alt="Icon ajax"/>
          <span>AJAX</span>
        </div>
      </li>
      <li>
        <div class="is-flex align-items-center">
          <img src="../../assets/icons/html.png" alt="Icon ajax"/>
          <span>HTML semántico</span>
        </div>
      </li>
      <li>
        <div class="is-flex align-items-center">
          <img src="../../assets/icons/web-dev-icon-8.jpg" alt="Icon ajax"/>
          <span>Entre otros....</span>
        </div>
      </li>
    </ul>
  </section>
  </div>

</template>

<script>
document.title = "Mis vacationes | Cody"
export default {
  name: "My vacations"
}
</script>

<style src="./Vacations.css" scoped/>