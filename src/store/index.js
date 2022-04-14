import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    backendUrl: "http://127.0.0.1:8000/api/v1"
    // productsSet: []
  },
  mutations: {
    // SET_PRODUCTS_TO_VUEX: (state, productsSet) => {
    //   state.productsSet = productsSet
    // }
  },
  actions: {
    // GET_PRODUCTS_FROM_API({commit}) {
    //   await fetch(`${this.getServerUrl}/product`).then(response => response.json())
    //   .then((response) =>{
    //     commit('SET_PRODUCTS_TO_VUEX', response)
    //   })
    // }
  },
  modules: {},
  getters: {
    getServerUrl: state => {
      return state.backendUrl
    }
  }
})

export default store
