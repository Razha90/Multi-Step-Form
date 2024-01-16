<script setup lang="ts">
import { RouterView } from 'vue-router'
import ListPath from './components/listPath.vue';

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
