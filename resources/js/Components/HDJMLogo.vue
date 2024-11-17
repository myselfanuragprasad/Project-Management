<template>
  <img v-if="imageSrc" :src="imageSrc" alt="Logo" />
  <span v-else>Loading...</span>
</template>

<script setup>
import { onMounted, ref } from 'vue';

// Define a reactive variable to hold the image URL
const imageSrc = ref('');

// Define the baseUrl inside the setup function
onMounted(() => {
  const protocol = window.location.protocol;
  const hostname = window.location.hostname;
  const port = window.location.port ? `:${window.location.port}` : ''; // Get the port if it exists
  
  // Construct the baseUrl with the port if necessary
  const baseUrl = `${protocol}//${hostname}${port}`; 
  
  imageSrc.value = `${baseUrl}/logo-hdjm.png`; // Use template literal to set the correct image path
});
</script>
