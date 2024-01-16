<script setup lang="ts">
import { RouterView } from 'vue-router'
import ListPath from './components/listPath.vue';

document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('.left-wrapper');
    const backgroundImage = new Image();
    backgroundImage.src = '/bg-sidebar-mobile.svg';

    backgroundImage.onload = function() {
      body.style.backgroundImage = "url('/bg-sidebar-mobile.svg')";
      body.style.transition = "background-image 0.5s ease";  // Optional: tambahkan efek transisi
      body.style.opacity = 1;

      // Setelah gambar selesai dimuat, tampilkan konten halaman
      body.style.overflow = 'visible';
    };
  });

</script>

<template>
  <div class="left-wrapper font-ubuntu">
    <ListPath />
  </div>
  <div class="right-wrapper font-ubuntu">
    <div class="right-app ">
      <RouterView />
    </div>
  </div>
</template>
