<template>
    <div class="gallery">
      <PhotoCard 
        v-for="(photo, index) in photos" 
        :key="index" 
        :photoSrc="photo.src" 
        :photoAlt="photo.alt" 
        :title="photo.title"
      />
    </div>
  </template>
  
  <script>
  import PhotoCard from "@/components/PhotoCard.vue";
  
  export default {
    components: { PhotoCard },
    data() {
      return {
        photos: [
          { src: "https://source.unsplash.com/300x300/?nature", alt: "Nature", title: "Beautiful Nature" },
          { src: "https://source.unsplash.com/300x300/?city", alt: "City", title: "Cityscape" },
          { src: "https://source.unsplash.com/300x300/?portrait", alt: "Portrait", title: "Portrait Shot" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .gallery {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  </style>
  