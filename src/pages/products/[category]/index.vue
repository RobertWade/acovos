<script lang="ts" setup>
const props = defineProps<{ category: string }>();

onMounted(() => {
  window.scrollTo(0, 0);
})
</script>

<template>
  <Section>
    <div>
      <Headline :title="category" />
    </div>
  </Section>
</template>

<route lang="yaml">
meta:
  layout: subpage
</route>