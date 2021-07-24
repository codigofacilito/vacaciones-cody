<template>
  <h2>Galería completa de mis vacaciones</h2>
  <div class="images">
    <img v-for="(image, i) in images"
    class="images__image"
    :src="image.url"
    :alt="image.alt"
    :key="i">
  </div>
</template>

<script>
import importedImages from '@/assets/images'

const images = Object.values(importedImages)

export default {
  components: {
  },
  data () {
    return {
      images
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
}

.images {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  &__image {
    width: 350px;
  }
}

</style>
