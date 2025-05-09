<script lang="ts" setup>
import { useArticleStore } from '~/stores/ArticleStore';
const { state, actions } = useArticleStore();

onMounted(() => {
  window.scrollTo(0, 0);
})

let search = ref("")  
</script>

<template>
  <Section noMargin>
    <div class="flex w-full flex-col gap-4">
      <Headline title="Tissus database" />
      <div class="mt-1 relative rounded-md">
        <input type="text" placeholder="Find" v-model="search"
          class=" relative bg-primary--l1 p-2 w-full rounded-md placeholder-text--brand border border-primary  focus:border-primary--dark outline-none" />
        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <img src="@/assets/icons/search.svg" alt="">
        </div>
      </div>

    </div>
  </Section>
  <Section large>
    <Catalog :search="search" />
  </Section>
</template>

<route lang="yaml">
meta:
  layout: subpage
</route>