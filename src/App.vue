<script setup>

import { onMounted } from 'vue';
import Navbar from './components/Layout/Navbar.vue'
import { useAuthStore } from './stores/AuthStore';

const authStore = useAuthStore();


onMounted(() => {
  authStore.init();
})

</script>

<template>

  <Navbar/>

  <div class="container p-2">
    <RouterView />
  </div>

  <div style="height: 80vh;"></div>

</template>

<style>

  @import '../node_modules/bulma/css/bulma.min.css';

</style>
