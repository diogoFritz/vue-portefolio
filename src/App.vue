<template>
  <div class="random-pictures">
    <h2>Random Pictures</h2>
    <div v-for="(photo, index) in photos" :key="index" class="photo">
      <img :src="photo.url" :alt="'Random Photo ' + (index + 1)" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RandomPictures',
  data() {
    return {
      photos: []
    };
  },
  created() {
    this.fetchRandomPhotos();
  },
  methods: {
    fetchRandomPhotos() {
      const randomPhotos = [];
      for (let i = 0; i < 10; i++) {
        randomPhotos.push({
          url: `https://picsum.photos/200/300?random=${i + 1}`
        });
      }
      this.photos = randomPhotos;
    }
  }
};
</script>

<style scoped>
.random-pictures {
  display: flex;
  flex-wrap: wrap;
}
.photo {
  margin: 10px;
}
.photo img {
  max-width: 100%;
  height: auto;
}
</style>