import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    backendUrl: "http://127.0.0.1:8000/api/v1",
    products: [],
    sorted_products: [],
  },
  mutations: {
    updateProducts(state, products) {
      state.products = products
    }
  },
  actions: {
    async fetchProducts(ctx) {
      const res = await fetch(
        'http://127.0.0.1:8000/api/v1/product'
      )
      const productss = await res.json()
      ctx.commit('updateProducts', productss)
    }
  },
  getters: {
    getServerUrl: state => {
      return state.backendUrl
    },
    getProducts: state => {
      return state.products
    }
  }
})

export default store
