<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: "Acovos",
  meta: [{ name: "description", content: "1 Million Human FFPE Tissue  Blocks" }],
  script: [],
});


const showWelcomeScreen = ref(true);

setTimeout(() => {
  showWelcomeScreen.value = false;
}, 3000);
</script>

<template>
  <router-view />
</template>

