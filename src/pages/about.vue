<script lang="ts" setup>
onMounted(() => {
    window.scrollTo(0, 0);
})
</script>

<template>
    <Section class="grid gap-6">
        <Headline title="About us | Acovos" />
        <p>
            acovos is recognizing the importance of biospecimens as essential tools for drug and diagnostic development
            by becoming a worldwide provider of high quality, well-characterized human tissue samples to scientists in
            pharmaceutical and biotechnology industries. <br>
            <span class="text-primary--d2 cursor-pointer" @click="$router.push('/more')">Acovos’ well-established human
                tissue heritage</span> contains samples not only from a wide range of different
            tumor entities but also from a broad spectrum of inflammatory or degenerative diseases. Matched pairs of
            normal/tumor tissue or primary/relapsed tumor tissue and other combinations help to enhance the selection of
            most promising drug candidates and development of new in vitro diagnostic products.
        </p>
    </Section>
</template>


<style scoped>
h2 {
    @apply text-2xl mt-8;
}

a {
    @apply text-primary--d2;
}
</style>

<route lang="yaml">
meta:
  layout: subpage
</route>
