import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import categories from "@/stores/categories";
import serviceslides from "@/stores/serviceslides";
import works from "@/stores/works";
import plans from "@/stores/plans";
import partners from "@/stores/partners";
import articles from "@/stores/articles";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        categories,
        serviceslides,
        works,
        plans,
        partners,
        articles,

        pageId: 1,
        itemsOnPage: 8,

        selected: {
            category: '',
        },

        app: {
            clientWidth: 0,
            mobile: false,
        },
        messageWasSent: false

    },

    getters: {
        plans: state => {
          return state.plans
        },
        articles: state => {
            return state.articles
        },
        partners: state => {
            return state.partners
        },
        serviceslides: state => {
            return state.serviceslides
        },

        portfolio: state => {
            return state.works
        },

        categories: state => {
            const categories = [...state.categories];

            return categories.map(category => {

                return category;
            });
        },


        works: (state, getters) => {
            let works = [...getters.portfolio];
            let pageId = state.pageId
            let itemsOnPage = state.itemsOnPage
            let limit = pageId * itemsOnPage


            if (state.selected.category === '') {
                works = works.slice(0, limit)
            }

            if (state.selected.category !== '') {
                works = works.filter(item => item.category === state.selected.category);
            }

            return works;
        }
    },

    mutations: {

        CHANGE_CATEGORY(state, category) {
            state.selected.category = category;
        },
        RESET_CATEGORY(state) {
            state.selected.category = '';
        },
        SHOW_MORE(state, n) {
            state.pageId *= n
        },
        LIMIT_WORKS(state) {
            state.pageId = 1
        },
        MESSAGE_SENT(state) {
            state.messageWasSent = true
        },
        RESET_MESSAGE(state) {
            state.messageWasSent = false
        }


    },
    actions: {
        setCategory({commit}, category) {
            commit('CHANGE_CATEGORY', category)
        },
        resetCategory({commit}, category) {
            commit('RESET_CATEGORY', category)
        },
        showMore({commit}, n) {
            commit('SHOW_MORE', n)
        },
        limitWorks({commit}) {
            commit('LIMIT_WORKS')
        },
        messageWasSent({commit}) {
          commit('MESSAGE_SENT')
        },
        submit({commit, dispatch}, data) {
            axios.post('/data.json', {
                email: data.email,
                name: data.name,
                subject: data.subject,
                message: data.message

            })
                .then(res => {
                    dispatch('messageWasSent')
                })
                .catch(error => console.log(error))
        },
        resetMessage({commit}) {
            commit('RESET_MESSAGE')
        }
    }
})
