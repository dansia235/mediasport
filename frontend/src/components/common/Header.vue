<template>
  <header>
    <nav-bar></nav-bar>
  </header>
</template>

<script>
import NavBar from './NavBar.vue'

export default {
  name: 'SiteHeader', // Nom modifié pour respecter les conventions Vue
  components: {
    NavBar,
  },
}
</script>

<style scoped>
header {
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
  /* Ajoutez votre style ici */
}
</style>
