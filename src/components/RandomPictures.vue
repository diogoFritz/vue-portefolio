<template>
  <div class="random-pictures">
    <h2>Random Pictures</h2>
    <div class="photos-container">
      <PictureFrame
        v-for="(photo, index) in photos"
        :key="index"
        :name="'Random Photo ' + (index + 1)"
        :photoUrl="photo.url"
      />
    </div>
  </div>
</template>

<script>
import PictureFrame from './PictureFrame.vue';

export default {
  name: 'RandomPictures',
  components: {
    PictureFrame
  },
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
  flex-direction: column;
  align-items: center;
}

.photos-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}
</style>