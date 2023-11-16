<template>
  <div v-if="article">
    <h1>{{ article.title }}</h1>
    <p>{{ article.content }}</p>
    <!-- Ajouter plus de détails de l'article ici -->
  </div>
  <div v-else>
    <p>Article introuvable.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ArticleDetail',
  data() {
    return {
      article: null
    };
  },
  created() {
    axios.get(`/api/articles/${this.$route.params.id}`) // Remplacer avec votre URL d'API
      .then(response => {
        this.article = response.data;
      })
      .catch(error => {
        console.error(error);
        this.article = null;
      });
  }
}
</script>

<style scoped>
/* Styles pour ArticleDetail */
</style>

