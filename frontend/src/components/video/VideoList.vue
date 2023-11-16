<template>
  <div>
    <div v-for="video in videos" :key="video.id">
      <h3>{{ video.title }}</h3>
      <video-player :video-url="video.url"></video-player>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import VideoPlayer from './VideoPlayer.vue';

export default {
  name: 'VideoList',
  components: {
    VideoPlayer
  },
  data() {
    return {
      videos: []
    };
  },
  created() {
    axios.get('/api/videos') // Remplacer avec votre URL d'API
      .then(response => {
        this.videos = response.data;
      })
      .catch(error => console.error(error));
  }
}
</script>

<style scoped>
/* Styles pour VideoList */
</style>

