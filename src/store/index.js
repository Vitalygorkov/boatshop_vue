import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    backendUrl: "http://127.0.0.1:8000/api/v1",
    products: [],
    sorted_products: [],
    filter_products: [],
    filterPrice: [],
  },
  mutations: {
    updateProducts(state, products) {
      state.products = products
    },
    reset_sorted_products(state, sorted_products) {
      state.sorted_products = sorted_products
    },
    changeFilterPrice(state, filterPrice) {
      state.filterPrice = filterPrice
    }

    
  },
  actions: {
    async fetchProducts(ctx) {
      const res = await fetch(
        'http://127.0.0.1:8000/api/v1/product'
      )
      const productss = await res.json()
      ctx.commit('updateProducts', productss)
    },
    async reset_sorted_products(context) {
      const res = await fetch(
        'http://127.0.0.1:8000/api/v1/product')
      const sorted_products = await res.json()
      context.commit('reset_sorted_products', sorted_products)
    },
    async filter_products_by_price(context, params) {
      console.log('функция')
      console.log(params[0])
      console.log(params[1])
      // console.log(state.sorted_products)
      context.commit('changeFilterPrice', params)
    }

  },
  getters: {
    getServerUrl: state => {
      return state.backendUrl
    },
    getProducts: state => {
      return state.products
    },
    getSortProducts: state => {
      return state.sorted_products
    },
    getFilterPrice: state => {
      return state.filterPrice
    },
  }
})

export default store
