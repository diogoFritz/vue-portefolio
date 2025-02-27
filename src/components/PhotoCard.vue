<template>
    <div class="photo-card" @mouseover="hover = true" @mouseleave="hover = false">
      <img :src="photoSrc" :alt="photoAlt" class="photo">
      <div v-if="hover" class="overlay">
        <p>{{ title }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      photoSrc: String, // Image URL
      photoAlt: String, // Alt text
      title: String, // Title or description
    },
    data() {
      return {
        hover: false, // To track hover state
      };
    }
  };
  </script>
  
  <style scoped>
  .photo-card {
    position: relative;
    width: 250px;
    height: 250px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }
  .photo-card:hover {
    transform: scale(1.05);
  }
  .photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  .overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    text-align: center;
    padding: 10px;
    font-size: 14px;
    transition: opacity 0.3s ease-in-out;
  }
  </style>
  