<template>
  <div>
    <article-preview v-for="article in articles" :key="article.id" 
:article="article"></article-preview>
  </div>
</template>

<script>
import axios from 'axios';
import ArticlePreview from './ArticlePreview.vue';

export default {
  name: 'ArticleList',
  components: {
    ArticlePreview
  },
  data() {
    return {
      articles: []
    };
  },
  created() {
    axios.get('/api/articles') // Remplacer avec votre URL d'API
      .then(response => {
        this.articles = response.data;
      })
      .catch(error => console.error(error));
  }
}
</script>

<style scoped>
/* Styles pour ArticleList */
</style>

