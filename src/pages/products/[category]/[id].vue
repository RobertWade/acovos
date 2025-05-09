<script lang="ts" setup>
import { useArticleStore } from '~/stores/ArticleStore';
import CorrespondingTissueCard from '~/components/CorrespondingTissueCard.vue';
const { state, actions } = useArticleStore();
const router = useRouter();


onBeforeMount(async () => {
  await actions.getArticleById(route.params.id); 
  await actions.getCorrespondingTissuesByCategoryName(state.detailArticle.category_name);
})

const route = useRoute();


async function routeToArticleById(path, id) {
  await actions.getArticleById(id);
  window.scrollTo(0, 0);
  router.push(`/products/${path}/${id}`)
}

</script>

<template>

  <Section noMargin v-if="state.detailArticle" class="flex flex-col gap-12">
    <div class="flex flex-col gap-4 items-start">
      <div>
        <Headline :title="`${ route.params.category}: ${state.detailArticle.name}`" />
        <p>{{ state.detailArticle.id }}</p>
        <p>Stock article: {{ state.detailArticle.Lagerartikel }}</p>
        <p>Price: {{ state.detailArticle.unit_price }}€  <span class="text-sm">({{ state.detailArticle.specification }})</span> </p>
      </div>
      <Button @click="$router.back()" secondary title="Back to overview">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M8.53033 1.53033C8.82322 1.23744 8.82322 0.762563 8.53033 0.46967C8.23744 0.176777 7.76256 0.176777 7.46967 0.46967L0.46967 7.46967C0.176777 7.76256 0.176777 8.23744 0.46967 8.53033L7.46967 15.5303C7.76256 15.8232 8.23744 15.8232 8.53033 15.5303C8.82322 15.2374 8.82322 14.7626 8.53033 14.4697L2.81066 8.75H15C15.4142 8.75 15.75 8.41421 15.75 8C15.75 7.58579 15.4142 7.25 15 7.25H2.81066L8.53033 1.53033Z"
            fill="#196B73" />
        </svg>
      </Button>
    </div>
    <!-- <ProductMagnifier class="max-h-2/3"
      :images="[state.detailArticle.image1.data.attributes.url, state.detailArticle.image2.data.attributes.url, state.detailArticle.image3.data.attributes.url]" /> -->
  </Section>
  <!-- <Section class="grid gap-6">
    <Headline title="Corresponding tissues" />
    <div v-if="state.correspondingTissues" class="grid gap-4 grid-cols-2 lg:grid-cols-4">
      <CorrespondingTissueCard @click="routeToArticleById(correspondingTissue.attributes.category_path, correspondingTissue.id)"
        v-for="correspondingTissue in state.correspondingTissues">
        <template #image>
          <img class=""
            :src="'https://acovos-strapi.mieli.digital' + correspondingTissue.attributes.image1.data.attributes.url" />
        </template>
        <div class="flex flex-col justify-between">
          <div>
            <p>{{ correspondingTissue.attributes.category_path }}:</p>
            <p>{{ correspondingTissue.attributes.name }}</p>
          </div>
        </div>
      </CorrespondingTissueCard>
    </div>
  </Section> -->
</template>

<route lang="yaml">
meta:
  layout: subpage
</route>