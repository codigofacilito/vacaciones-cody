<template>
  <nav id="nav">
    <div>
        <img src="" ref="logo" class="nav__logo" alt="Logo" @click="goToHome()">
    </div>
    <div class="nav__links">
      <router-link to="/">Inicio</router-link>
      <router-link to="/fotos">Fotos</router-link>
    </div>
  </nav>
</template>

<script>
import Logo from '@/assets/logo.png'

export default {
  mounted () {
    this.$refs.logo.src = Logo
  },
  methods: {
    goToHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>

$hue: 209;
$saturation: 77%;
$lightness: 8%;
$font-color: #fff;

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: hsl($hue, $saturation, $lightness);

  .nav__logo {
    width: 70px;
    margin-left: 25px;
    cursor: pointer;

    @media(max-width: 750px){
      width: 50px;
      margin-left: 10px;
    }
  }

  a {
    margin-right: 20px;
    padding: 10px 20px;
    color: $font-color;
    font-weight: bold;
    font-size: 1.2rem;
    font-family: 'IBM Plex Sans', sans-serif;
    text-decoration: none;
    border-radius: 8px;
    transition: all 500ms ease;

    &:hover {
      background-color: hsl($hue, $saturation, $lightness - 2%);
      color: #00C6A7;
    }
  }
}
</style>
