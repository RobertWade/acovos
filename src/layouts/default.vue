<template>
  <main class="text-gray-700 dark:text-gray-200 h-full font-zimmer w-screen overflow-x-hidden">
    <Nav />
    <router-view />
    <Form id="contact" />
    <Footer id="about" />
  </main>
</template>


<style lang="scss">
html {
  font-family: 'Zimmer';
  @apply font-sans font-light text-text;
}


</style>