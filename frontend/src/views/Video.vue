<template>
  <base-layout>
    <video-player :video-url="videoUrl"></video-player>
  </base-layout>
</template>

<script>
import BaseLayout from '../components/layout/BaseLayout.vue';
import VideoPlayer from '../components/video/VideoPlayer.vue';

export default {
  name: 'Video',
  components: {
    BaseLayout,
    VideoPlayer
  },
  data() {
    return {
      videoUrl: '/path/to/your/video.mp4' // Mettez à jour avec le chemin dynamique de la vidéo
    };
  }
}
</script>

<style scoped>
/* Styles pour Video */
</style>

