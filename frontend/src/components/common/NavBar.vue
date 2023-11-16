<template>
  <nav>
    <ul>
      <li><router-link to="/">Accueil</router-link></li>
      <li><router-link to="/category">Catégorie</router-link></li>
      <li><router-link to="/article">Article</router-link></li>
      <li><router-link to="/video">Vidéo</router-link></li>
      <!-- Ajoutez d'autres liens selon vos besoins -->
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
}

nav ul {
  padding: 0;
}

nav li {
  display: inline;
  margin-right: 20px;
}

/* Ajoutez votre style ici */
</style>
