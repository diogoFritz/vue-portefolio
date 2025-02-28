<template>
  <div class="picture-frame">
    <h2>{{ name }}</h2>
    <div class="photo">
      <img :src="photoUrl" :alt="name" />
    </div>
    <div class="like-counter">
      <button @click="likePhoto">
        <i class="fas fa-thumbs-up"></i> Like
      </button>
      <span>{{ likes }} likes</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PictureFrame',
  props: {
    name: {
      type: String,
      required: true
    },
    photoUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      likes: 0
    };
  },
  methods: {
    likePhoto() {
      this.likes++;
    }
  }
};
</script>

<style scoped>
@import '@fortawesome/fontawesome-free/css/all.css';

.picture-frame {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
}

.photo {
  margin: 10px 0;
}

.photo img {
  max-width: 100%;
  height: auto;
}

.like-counter {
  display: flex;
  align-items: center;
  gap: 10px;
}

button {
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>