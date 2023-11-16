<template>
  <div>
    <header-component></header-component>
    <nav-bar></nav-bar>
    <main>
      <!--  <slot></slot> - Ici le contenu de la page sera injecté -->
    </main>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from '../common/Header.vue'
import NavBar from '../common/NavBar.vue'
import FooterComponent from '../common/Footer.vue'

export default {
  name: 'BaseLayout',
  components: {
    HeaderComponent,
    NavBar,
    FooterComponent,
  },
}
</script>

<style scoped>
main {
  min-height: 80vh; /* Hauteur minimale pour le contenu principal */
  padding: 20px;
  /* Style supplémentaire pour le contenu principal */
}

/* Ajoutez d'autres styles globaux si nécessaire */
</style>
