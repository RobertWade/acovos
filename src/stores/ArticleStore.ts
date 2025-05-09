import { acceptHMRUpdate, defineStore } from 'pinia'
import { watch } from 'vue';
import { storeToRefs } from 'pinia';

import _ from "lodash";

import axios from "axios"
import jsonData from "./data.json"


export const useArticleStore = defineStore('useArticleStore', () => {
    const state = ref({
        articles: [],
        viewArticles: [],
        currentArticles: [],
        detailArticle: {},
        correspondingTissues:[],
    })
    const actions = {
        async fillArticleStore() {
            let i = 1;
            let length = 100;
            let articles: Array<Object> = [];

            articles = jsonData;
            state.value.articles = [...articles];
        },
        async getCategoryNamesByCategory(category) {
            console.log('Getting categories')

            let categories = jsonData.filter(item => item.category_name === category);
            
            state.value.currentArticles = categories.map(item => item)
            let flatten = categories.map(item => item.category_name)
            let unique = _.uniq(flatten);
            let sorted = _.sortBy(unique)
            state.value.viewArticles = [...sorted];

        },
        async getArticlesByCategoryName(category_name, currenCategoryPath) {
            let articles = jsonData.filter(item => item.category_name === category_name);
            state.value.currentArticles = articles;
            return articles;
        },
        async getArticleById(id) {
            // using poulate to get all the relations, Needed foor pullng images as well
            let data = jsonData.filter(item => item.id === id);
            state.value.detailArticle = data[0];
            return data[0];
        },
        async getCorrespondingTissuesByCategoryName(category_name) {
            let data = jsonData.filter(item => item.category_name === category_name);
            state.value.correspondingTissues = data[0]
            return data[0];
        }
    }
    return { state, actions };
})



// hot module replacement
if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useArticleStore, import.meta.hot))