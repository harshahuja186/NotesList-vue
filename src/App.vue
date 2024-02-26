<script setup>

import Navbar from './components/Layout/Navbar.vue'

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
