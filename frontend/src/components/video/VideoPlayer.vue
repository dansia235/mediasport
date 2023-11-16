<template>
  <div>
    <video width="640" height="360" controls>
      <source :src="videoUrl" type="video/mp4">
      Désolé, votre navigateur ne supporte pas les vidéos intégrées.
    </video>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: {
    videoUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
/* Styles pour VideoPlayer */
</style>

