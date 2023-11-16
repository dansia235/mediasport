<template>
  <base-layout>
    <article-detail :id="this.$route.params.id"></article-detail>
  </base-layout>
</template>

<script>
import BaseLayout from '../components/layout/BaseLayout.vue';
import ArticleDetail from '../components/article/ArticleDetail.vue';

export default {
  name: 'Article',
  components: {
    BaseLayout,
    ArticleDetail
  }
}
</script>

<style scoped>
/* Styles pour Article */
</style>

