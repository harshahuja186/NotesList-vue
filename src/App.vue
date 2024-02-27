<script setup>

import { onMounted } from 'vue';
import Navbar from './components/Layout/Navbar.vue'
import { useNotesStore } from './stores/NotesStore';

const notesStore = useNotesStore();


onMounted(() => {
  notesStore.getNotes();
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
