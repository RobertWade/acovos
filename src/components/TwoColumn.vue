<script lang="ts" setup>
defineProps({
  items: String,
});
</script>

<template>
  <div
    class="grid md:grid-cols-2 gap-12"
    :class="!items ? 'items-center' : `items-${items}`"
  >
    <slot />
  </div>
</template>
