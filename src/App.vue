<script setup>

import Navbar from './components/Layout/Navbar.vue'

</script>

<template>

  <Navbar />

  <div>
    <RouterView />
  </div>

</template>

<style>

  @import '../node_modules/bulma/css/bulma.min.css';

</style>
