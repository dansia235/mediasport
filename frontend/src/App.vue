<template>
  <div id="app">
    <header-component></header-component>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './components/common/Header.vue'
import FooterComponent from './components/common/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  },
}
</script>

<style>
/* Styles globaux pour l'application */
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
}

#app {
  text-align: center;
}

/* Ajoutez d'autres styles globaux ici */
</style>
