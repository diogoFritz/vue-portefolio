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
        // Melhorar o acesso às fotos unsplash, construir API deles, incorporar a API no codigo. 
        photos: [
          { src: "https://unsplash.com/photos/a-group-of-people-riding-horses-through-a-dry-grass-field-Kbk99bvgaAc", alt: "Nature", title: "Beautiful Nature" },
          { src: "https://source.unsplash.com/300x300/?city", alt: "City", title: "Cityscape" },
          { src: "https://source.unsplash.com/300x300/?portrait", alt: "Portrait", title: "Portrait Shot" },
          { src: "https://source.unsplash.com/300x300/?portrait", alt: "Portrait", title: "Portrait Shot" },
          { src: "https://source.unsplash.com/300x300/?landscape", alt: "Landscape", title: "Walking up this morning" },
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
  