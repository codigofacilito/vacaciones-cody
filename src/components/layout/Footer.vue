<template>
  <footer>💻 Developed by David Mora using VueJS 💚</footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$hue: 209;
$saturation: 77%;
$lightness: 4%;
$font-color: hsl(203, 38%, 90%);

footer {
    display: flex;
    justify-content: center;
    padding: 20px;
    bottom: 0;
    width: 100%;
    color: $font-color;
    font-weight: bold;
    font-family: 'IBM Plex Sans', sans-serif;
    background-color: hsl($hue, $saturation, $lightness);
}
</style>
