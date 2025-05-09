<script lang="ts" setup>
const props = defineProps(['search']);
</script>

<template>
  <div class="mt-1 relative rounded-md">
    <input type="text" placeholder="Find" :value="props.search"
      class=" relative bg-primary--l1 p-2 w-full rounded-md placeholder-text--brand border border-primary  focus:border-primary--dark outline-none" />
    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
      <img src="@/assets/icons/search.svg" alt="">
    </div>
  </div>
</template>
