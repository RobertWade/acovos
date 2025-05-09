<template>
  <div class="flex flex-col gap-5 items-start">
    <h2>{{title}}</h2>
    <p>{{ text }}</p>
    <slot/>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
  text: String,
  cta: Boolean,
  buttonText: String,
});
</script>