<template>
  <div class="images">
    <h2>Galería completa de mis vacaciones</h2>
    <div class="images__container">
      <img v-for="image in images"
      class="images__image"
      :src="image.url"
      :alt="image.alt"
      :key="image.id"
      data-fancybox="gallery">
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
}

.images {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__container {
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media(max-width: 900px){
      grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 750px){
      grid-template-columns: repeat(1, 1fr);
      padding: 0;
    }
  }

  &__image {
      width: 350px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 500ms ease;

      @media(max-width: 750px){
        width: 150;
      }

      @media(max-width: 340px){
        width: 300px;
      }

      &:hover {
        transform: scale3d(1.05, 1.05, 1.05);
      }
  }
}

</style>
