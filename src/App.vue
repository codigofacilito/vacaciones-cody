<template>
  <div id="nav">
    <div class="avatar is-flex align-items-center">
        <img src="./assets/codi-icon.png" alt="Photo icon of codi"
        />
        <h2>CODY</h2>
    </div>
    <div class="routes">
      <router-link to="/">Inicio</router-link>
      <router-link to="/vacations">Mis vacaciones</router-link>
      <router-link to="/photos">Fotos</router-link>
    </div>

  </div>
  <div class="content">
    <router-view/>
  </div>
</template>

<style src="./Styles.css"/>
