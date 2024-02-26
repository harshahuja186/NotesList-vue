<template>
    <span class="gradient-text">
      {{ text }}
    </span>
</template>
  
<script setup>
  defineProps({
    text: {
      type: String || Number,
      required: true,
    },
  });
</script>
  
<style scoped>
  .gradient-text {
    background-image: linear-gradient(to bottom, #1FA2FF, #12D8FA, #A6FFCB);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: bold;
  }
  </style>
  