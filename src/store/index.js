import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    backendUrl: "https://neptun55.ru/api/v1",
    mediaUrl: "https://neptun55.ru/media",
    products: [],
    categories: [],
    filtersProductSet: {},
    last_category: [],
  },
  mutations: {
    UPDATE_PRODUCTS(state, products) {
      state.products = products
    },
    UPDATE_CATEGORIES(state, categories) {
      state.categories = categories
    },
    UPDATE_LAST_CATEGORY(state, last_category) {
      state.last_category = last_category
    },
    CHANGE_FILTERS_PRODUCTS_SET(state, filtersProductSet) {
      state.filtersProductSet = filtersProductSet
    }

    
  },
  actions: {
    async FETCH_PRODUCTS(ctx) {
      const res = await fetch(
        'https://neptun55.ru/api/v1/product/'
      )
      const products = await res.json()
      ctx.commit('UPDATE_PRODUCTS', products)
    },
    async FETCH_CATEGORIES(ctx) {
      const res = await fetch(
        'https://neptun55.ru/api/v1/category/'
      )
      console.log('Запрос категорий')
      const categories = await res.json()
      ctx.commit('UPDATE_CATEGORIES', categories)
    },
    async FILTERS_PRODUCTS_SET(context, params) {
      console.log(params)
      var Set = this.filtersProductSet
      var obj = Object.assign({Set}, params);
      console.log(obj)
      context.commit('CHANGE_FILTERS_PRODUCTS_SET', obj)
    },
    async CHANGE_LAST_CATEGORY(context, params) {
      console.log("Last_category")
      console.log(params)
      context.commit('UPDATE_LAST_CATEGORY', params)
    }

  },
  getters: {
    GET_SERVER_URL: state => {
      return state.backendUrl
    },
    GET_MEDIA_URL: state => {
      return state.mediaUrl
    },
    GET_PRODUCTS: state => {
      return state.products
    },
    GET_CATEGORIES: state => {
      return state.categories
    },
    LAST_CATEGORY: state => {
      return state.last_category
    },
    GET_FILTER_PRODUCTS_SET: state => {
      return state.filtersProductSet
    },
  }
})

export default store
