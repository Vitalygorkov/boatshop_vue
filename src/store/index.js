import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    backendUrl: "https://vitgo.ru/api/v1",
    mediaUrl: "https://vitgo.ru/media",
    // backendUrl: "http://ovz2.vet-omsk.me2jm.vps.myjino.ru/api/v1",
    // mediaUrl: "http://ovz2.vet-omsk.me2jm.vps.myjino.ru/media",
    cart_products: [],
    boats: [],
    products: [],
    categories: [],
    filtersProductSet: {},
    // last_category: [],
    heart_products: [],
  },
  mutations: {
    UPDATE_PRODUCTS(state, products) {
      state.products = products
    },
    UPDATE_BOATS(state, boats) {
      state.boats = boats
    },
    UPDATE_CART_PRODUCTS(state, cart_products) {
      state.cart_products = cart_products
    },
    UPDATE_CATEGORIES(state, categories) {
      state.categories = categories
    },
    // UPDATE_LAST_CATEGORY(state, last_category) {
    //   state.last_category = last_category
    // },
    CHANGE_FILTERS_PRODUCTS_SET(state, filtersProductSet) {
      state.filtersProductSet = filtersProductSet
    }

    
  },
  actions: {
    async FETCH_PRODUCTS(ctx) {
      const res = await fetch(
        `${this.state.backendUrl}/products/`
      )
      const products = await res.json()
      ctx.commit('UPDATE_PRODUCTS', products)
    },
    async FETCH_BOATS(ctx) {
      const res = await fetch(
        `${this.state.backendUrl}/boats/`
      )
      const boats = await res.json()
      ctx.commit('UPDATE_BOATS', boats)
    },
    async FETCH_CATEGORIES(ctx) {
      const res = await fetch(
        `${this.state.backendUrl}/category/`
      )
      console.log('Запрос категорий')
      const categories = await res.json()
      ctx.commit('UPDATE_CATEGORIES', categories)
    },
    async FILTERS_PRODUCTS_SET(context, params) {
      var Set = this.state.filtersProductSet
      var obj = Object.assign({},Set, params);
      if(params.reset){
        obj = {}
      }
      context.commit('CHANGE_FILTERS_PRODUCTS_SET', obj)
    },
    // Добавил мутацию для корзины, нужно добавить экшн и геттер


    // async CHANGE_LAST_CATEGORY(context, params) {
    //   context.commit('UPDATE_LAST_CATEGORY', params)
    // },
    async ADD_HEART_PRODUCTS(context, params) {
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
    GET_BOATS: state => {
      return state.boats
    },
    GET_HEART_PRODUCTS: state => {
      return state.heart_products
    },
    GET_CATEGORIES: state => {
      return state.categories
    },
    // LAST_CATEGORY: state => {
    //   return state.last_category
    // },
    GET_FILTER_PRODUCTS_SET: state => {
      return state.filtersProductSet
    },
  }
})

export default store
