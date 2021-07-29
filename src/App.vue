<template>
  <Navbar />
  <main>
    <router-view :images=images />
  </main>
  <Footer />
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
import importedImages from '@/assets/images'

const images = Object.values(importedImages)

export default {
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      images
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=IBM+Plex+Sans:wght@300&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

#app {
  $hue: 209;
  $saturation: 22%;
  $lightness: 20%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: hsl($hue, $saturation, $lightness);
  font-family: 'DM Sans', sans-serif;

  main {
    margin: 15px 0;
  }
}
</style>
