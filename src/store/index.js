import { createStore } from 'vuex'
import itemStore from './modules/item-module.js'

const store = createStore({
    strict: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        itemStore,
    },
})

export default store
