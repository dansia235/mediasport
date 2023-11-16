<template>
  <div>
    <h2>{{ article.title }}</h2>
    <p>{{ article.summary }}</p>
    <router-link :to="'/article/' + article.id">Lire plus</router-link>
  </div>
</template>

<script>
export default {
  name: 'ArticlePreview',
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
/* Styles pour ArticlePreview */
</style>

