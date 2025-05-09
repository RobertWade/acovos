<script setup lang="ts">
import ElevatedCard from '~/components/ElevatedCard.vue';

import { useMainStore } from "@/stores/index";
import { useArticleStore } from '~/stores/ArticleStore';
import SplitImage from '~/components/SplitImage.vue';


const { actions } = useArticleStore();
const { openFullscreen, closeFullscreen } = useMainStore();


// actions.getArticles();
onBeforeMount(() => {
  actions.fillArticleStore()
})

onMounted(() => {
  window.scrollTo(0, 0);
})

const categories = ['Normal tissue', 'Tumor tissue', 'Inflammatory tissue', 'Degenerative tissue']


// function imgUrl(image) {
//   if (!import.meta.env.SSR) {
//     return new URL(`../assets/images/${image}`, import.meta.url)
//   }
// }

function scrollTo(id) {
  document.getElementById(id).scrollIntoView();
}


</script>

<template>
  <main class="">
    <div class="relative">
      <Section noMargin class="grid md:grid-cols-2 gap-6 md:py-14 items-center  md:mt-20">
        <div class="flex flex-col gap-4 items-start">
          <h1>
            1 Million Human FFPE <br />
            Tissue blocks
          </h1>

          <Button @click="scrollTo('more')" secondary title="Read more">
            <svg class="max-h-full" width="16" height="16" viewBox="0 0 16 16" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M8.75 1C8.75 0.585786 8.41421 0.25 8 0.25C7.58579 0.25 7.25 0.585786 7.25 1V13.1893L1.53033 7.46967C1.23744 7.17678 0.762563 7.17678 0.46967 7.46967C0.176777 7.76256 0.176777 8.23744 0.46967 8.53033L7.46967 15.5303C7.76256 15.8232 8.23744 15.8232 8.53033 15.5303L15.5303 8.53033C15.8232 8.23744 15.8232 7.76256 15.5303 7.46967C15.2374 7.17678 14.7626 7.17678 14.4697 7.46967L8.75 13.1893V1Z"
                fill="#196B73" />
            </svg>
          </Button>
        </div>
        <div class="">
          <img
            class="relative md:absolute  md:w-1/2 md:top-1/2 right-0 transform md:-translate-y-1/2 translate-x-12 md:translate-x-0"
            src="@/assets/images/tiles.svg" alt="" />
        </div>
      </Section>
    </div>
    <Section large>
      <ElevatedCard class="flex flex-col gap-4">
        <h2>Explore 400 standard datasets</h2>
        <Search @click="$router.push('/products')" id="search" />
        <CategoryPreview />
        <div class="hidden md:flex justify-end items-center gap-4">
          <p>Need for custom tissue samples?</p>
          <Button @click="scrollTo('contact')" secondary title="Contact us">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M8.53033 0.46967C8.23744 0.176777 7.76256 0.176777 7.46967 0.46967C7.17678 0.762563 7.17678 1.23744 7.46967 1.53033L13.1893 7.25H1C0.585786 7.25 0.25 7.58579 0.25 8C0.25 8.41421 0.585786 8.75 1 8.75H13.1893L7.46967 14.4697C7.17678 14.7626 7.17678 15.2374 7.46967 15.5303C7.76256 15.8232 8.23744 15.8232 8.53033 15.5303L15.5303 8.53033C15.8232 8.23744 15.8232 7.76256 15.5303 7.46967L8.53033 0.46967Z"
                fill="#196B73" />
            </svg>
          </Button>
        </div>
      </ElevatedCard>
    </Section>
    <Section small>
      <TwoColumn id="more">
        <div class="flex justify-center md:justify-start items-center">
          <img class="w-96 max-w-full" src="@/assets/images/tiles-2.svg" alt="" />
        </div>
        <div>
          <HeadlineWithText buttonText="Browse database" title="FFPE tissue collection of more than 1 Million samples"
            text="Our tissue bank holds FFPE blocks representing not only cases of tumor diseases but also of inflammatory, autoimmune or degenerative diseases. In addition, affiliated tissue blocks contain normal tissue adjacent to the pathological. ">
            <Button @click="$router.push('/products')" title="Browse database">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0.41 6.4225L10.41 11.4225C10.52 11.4725 10.63 11.5025 10.75 11.5025C10.87 11.5025 10.98 11.4725 11.09 11.4225L21.09 6.4225C21.34 6.2925 21.51 6.0325 21.51 5.7525C21.51 5.4725 21.35 5.2125 21.09 5.0825L11.09 0.0825C10.88 -0.0275 10.63 -0.0275 10.42 0.0825L0.41 5.0825C0.16 5.2125 0 5.4725 0 5.7525C0 6.0325 0.16 6.2925 0.41 6.4225ZM10.75 1.5925L19.07 5.7525L10.75 9.9125L2.43 5.7525L10.75 1.5925ZM20.4222 15.0825L10.7522 19.9125L1.09221 15.0825C0.722211 14.9025 0.272211 15.0425 0.082211 15.4225C-0.107789 15.8025 0.042211 16.2425 0.422211 16.4325L10.4222 21.4325C10.5322 21.4825 10.6422 21.5125 10.7622 21.5125C10.8822 21.5125 10.9922 21.4825 11.1022 21.4325L21.1022 16.4325C21.4722 16.2425 21.6222 15.7925 21.4422 15.4225C21.2522 15.0525 20.8122 14.9025 20.4322 15.0825H20.4222ZM10.7522 14.9125L20.4222 10.0825H20.4322C20.8122 9.9025 21.2522 10.0525 21.4422 10.4225C21.6222 10.7925 21.4722 11.2425 21.1022 11.4325L11.1022 16.4325C10.9922 16.4825 10.8822 16.5125 10.7622 16.5125C10.6422 16.5125 10.5322 16.4825 10.4222 16.4325L0.422211 11.4325C0.042211 11.2425 -0.107789 10.7925 0.082211 10.4225C0.272211 10.0525 0.722211 9.9025 1.09221 10.0825L10.7522 14.9125Z"
                  fill="#196B73" />
              </svg>
            </Button>
          </HeadlineWithText>
        </div>
      </TwoColumn>
    </Section>
    <Section small>
      <TwoColumn>
        <div class="sm:order-last md:order-first ">
          <HeadlineWithText buttonText="Browse database" title="Convincing Quality"
            text="The key to perfect immunostaining, in-situ-hybridization or extraction of RNA/DNA is the optimal tissue sample: originating from one source only, standardized collection and processing procedure, secure storage.">
            <Button @click="openFullscreen('magnification')" title="Full screen view">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M15 2.25C14.5858 2.25 14.25 2.58579 14.25 3C14.25 3.41421 14.5858 3.75 15 3.75H19.1893L13.4697 9.46967C13.1768 9.76256 13.1768 10.2374 13.4697 10.5303C13.7626 10.8232 14.2374 10.8232 14.5303 10.5303L20.25 4.81066V9C20.25 9.41421 20.5858 9.75 21 9.75C21.4142 9.75 21.75 9.41421 21.75 9V3C21.75 2.58579 21.4142 2.25 21 2.25H15ZM3.75 15C3.75 14.5858 3.41421 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V21C2.25 21.4142 2.58579 21.75 3 21.75H9C9.41421 21.75 9.75 21.4142 9.75 21C9.75 20.5858 9.41421 20.25 9 20.25H4.81066L10.5303 14.5303C10.8232 14.2374 10.8232 13.7626 10.5303 13.4697C10.2374 13.1768 9.76256 13.1768 9.46967 13.4697L3.75 19.1893V15Z"
                  fill="#196B73" />
              </svg>
            </Button>
          </HeadlineWithText>
        </div>
        <div class="flex justify-center items-center">
          <Magnification id="magnification" />
        </div>
      </TwoColumn>
    </Section>
    <Section small>
      <TwoColumn>
        <div id="long-term-tissue" class="flex justify-center md:justify-start items-center">
          <!-- <img src="@/assets/images/LongTermTissueStability.jpg" alt="" /> -->
          <SplitImage />
        </div>
        <div>
          <HeadlineWithText buttonText="Long-Term Tissue Stability" title="Long-Term Tissue Stability"
            text="Our tissue bank holds FFPE blocks representing not only cases of tumor diseases but also of inflammatory, autoimmune or degenerative diseases. In addition, affiliated tissue blocks contain normal tissue adjacent to the pathological.">
            <Button @click="openFullscreen('long-term-tissue')" title="Full screen view">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M15 2.25C14.5858 2.25 14.25 2.58579 14.25 3C14.25 3.41421 14.5858 3.75 15 3.75H19.1893L13.4697 9.46967C13.1768 9.76256 13.1768 10.2374 13.4697 10.5303C13.7626 10.8232 14.2374 10.8232 14.5303 10.5303L20.25 4.81066V9C20.25 9.41421 20.5858 9.75 21 9.75C21.4142 9.75 21.75 9.41421 21.75 9V3C21.75 2.58579 21.4142 2.25 21 2.25H15ZM3.75 15C3.75 14.5858 3.41421 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V21C2.25 21.4142 2.58579 21.75 3 21.75H9C9.41421 21.75 9.75 21.4142 9.75 21C9.75 20.5858 9.41421 20.25 9 20.25H4.81066L10.5303 14.5303C10.8232 14.2374 10.8232 13.7626 10.5303 13.4697C10.2374 13.1768 9.76256 13.1768 9.46967 13.4697L3.75 19.1893V15Z"
                  fill="#196B73" />
              </svg>
            </Button>
          </HeadlineWithText>
        </div>
      </TwoColumn>
    </Section>
    <Section class="flex flex-col items-center justify-center gap-12">
      <Headline title="Find out more about our products  " />
      <MoreProducts />
    </Section>
  </main>
</template>

<style lang="scss" scoped>
</style>

