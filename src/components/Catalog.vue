<script lang="ts" setup>
import { floor } from "cypress/types/lodash";

import { useArticleStore } from '~/stores/ArticleStore';


const { state, actions } = useArticleStore();
const props = defineProps(['search'])


const route = useRoute();
const router = useRouter();

onBeforeMount(async () => {
  await actions.fillArticleStore();
  currentCategory.value = findCurrentCategoryIndex(route.query.category ? route.query.category : 'Normal tissue')
  await actions.getCategoryNamesByCategory(route.query.category ? route.query.category : 'Normal tissue')
})

watch(route, async () => {
  await actions.getCategoryNamesByCategory(route.query.category)
  currentCategory.value = findCurrentCategoryIndex(route.query.category)
  resetCurrenClickedCard();
})


const categories = ['Normal tissue', 'Tumor tissue', 'Inflammatory tissue', 'Degenerative tissue'];
const currentCategory = ref(null);
const currenCategoryPath = computed(() => {
  return categories[currentCategory.value]
});

const filteredViewArticles = computed(() => {
  if (props.search === "") {
    return state.viewArticles
  }
  return state.viewArticles.filter(article => {
    return article.toLowerCase().includes(props.search.toLowerCase());
  })
})


const additionalRowPosition = ref(2);

const productDropdown = ref([]);


const currentClickedCard = ref(null);

const isOpen = ref(false);

function findCurrentCategoryIndex(categoryName) {
  let findCurrentIndex = categories.findIndex(item => item === categoryName)
  return findCurrentIndex;
}

function resetCurrenClickedCard() {
  currentClickedCard.value = null;
}

async function openDrowDown(pos, category_name, path) {
  console.log('OPEN')
  const articles = await actions.getArticlesByCategoryName(category_name, path)
  if (articles.length === 1) {
    routeToArticleById(articles[0].id)
    return
  }

  productDropdown.value = [...articles]

  // if yes open dropdown
  currentClickedCard.value = pos;
  isOpen.value = true;
}


function closeDropDown() {
  isOpen.value = false;
  resetCurrenClickedCard();
}

async function setCategory(clickedCategory, category) {
  // Set current category for display
  router.push({ path: '/products', query: { category: category } });
  currentCategory.value = clickedCategory;

  // get list of categories
  await actions.getCategoryNamesByCategory(categories[clickedCategory])
  resetCurrenClickedCard();
}

const computedTargetRow = computed(() => {
  const mainGrid = document.getElementById("mainGrid");
  const gridComputedStyle = window.getComputedStyle(mainGrid);
  let gridData = {
    // get number of grid rows
    gridRowCount: gridComputedStyle
      .getPropertyValue("grid-template-rows")
      .split(" ").length,
    // get number of grid columns
    gridColumnCount: gridComputedStyle
      .getPropertyValue("grid-template-columns")
      .split(" ").length,
    // get grid row sizes
    gridRowSizes: gridComputedStyle
      .getPropertyValue("grid-template-rows")
      .split(" ")
      .map(parseFloat),
    // get grid column sizes
    gridColumnSizes: gridComputedStyle
      .getPropertyValue("grid-template-columns")
      .split(" ")
      .map(parseFloat),
  };
  const targetRow = Math.floor(
    currentClickedCard.value / Math.floor(gridData.gridColumnCount)
  );
  return gridData.gridColumnCount === 1
    ? currentClickedCard.value + 2
    : targetRow + 2;
});

async function routeToArticleById(id) {
  // await actions.getArticleById(id);
  router.push(`/products/${currenCategoryPath.value}/${id}`)
}
</script>

<template>
  <div>
    <div class="grid grid-cols-2 px-2 md:grid-cols-4 gap-2 md:px-8 organCards">
      <div class="w-full px-2 py-2 z-0 rounded-t-md" :class="category === currenCategoryPath ? 'md:shadow-md' : null"
        v-for="(category, i) in categories">
        <div class="h-20 p-2 cursor-pointer rounded" @click="setCategory(i, category)" :class="
          category === currenCategoryPath ? 'bg-primary--dark' : 'bg-primary--l2'
        ">
          <p :class="
            category === currenCategoryPath ? 'text-white ' : 'text-primary--dark'
          " class="organCards__header">
            {{ category }}
          </p>
        </div>
      </div>
    </div>
    <ElevatedCard class="relative z-1 bg-white">
      <div class="flex justify-center" v-if="filteredViewArticles.length === 0 && state.viewArticles.length >= 1">
        - Keine Suchergebnisse -
      </div>
      <div class="flex justify-center" v-else-if="state.viewArticles.length === 0 || currentCategory === null">
        <Loading />
      </div>
      <div v-else id="mainGrid" class="grid md:grid-cols-4 grid-cols-1 gap-x-4">
        <h2 class="lg:hidden">{{ currenCategoryPath }}</h2>
        <div class="
            border-t
            border-dark--lines
            px-4
            py-7
            mt-4
            text-primary--dark
            hover:bg-primary--dark hover:text-white
            cursor-pointer" :key="i" :class="i === currentClickedCard ? 'bg-primary--l2' : null"
          v-for="(category_name, i) in filteredViewArticles"
          @click="i === currentClickedCard ? closeDropDown() : openDrowDown(i, category_name, currenCategoryPath)">
          <div class="font-medium flex justify-between">
            <div> {{ category_name }}</div>
            <div>
              <svg v-if="i === currentClickedCard" width="14" height="14" viewBox="0 0 14 14" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M13.5303 1.53033C13.8232 1.23744 13.8232 0.762563 13.5303 0.46967C13.2374 0.176777 12.7626 0.176777 12.4697 0.46967L7 5.93934L1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L5.93934 7L0.46967 12.4697C0.176777 12.7626 0.176777 13.2374 0.46967 13.5303C0.762563 13.8232 1.23744 13.8232 1.53033 13.5303L7 8.06066L12.4697 13.5303C12.7626 13.8232 13.2374 13.8232 13.5303 13.5303C13.8232 13.2374 13.8232 12.7626 13.5303 12.4697L8.06066 7L13.5303 1.53033Z"
                  fill="#196B73" />
              </svg>
            </div>
          </div>
        </div>
        <div v-if="
          currentClickedCard !== null &&
          productDropdown
        " class="
            md:col-span-4
            col-span-1
            bg-primary--l2
            px-4
            py-7
            grid
            md:grid-cols-4
            grid-cols-1
            gap-4
          " :style="{ 'grid-row-start': computedTargetRow }">

          <div class="
              border-t
              border-dark--lines
              px-4
              py-7
              mt-4
              text-primary--dark
              bg-primary--l2
              cursor-pointer
              hover:bg-primary--dark hover:text-white
            " v-for="(item, i) in productDropdown" @click="routeToArticleById(item.id)">
            <div class="font-medium flex justify-between">
              <div>{{ item.name }} </div>
            </div>
          </div>
        </div>
      </div>
    </ElevatedCard>
  </div>
</template>

<style lang="scss" scoped>
.organCards {
  &__header {
    font-size: 16px;
  }
}
</style>