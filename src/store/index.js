import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    backendUrl: "https://neptun55.ru/api/v1",
    mediaUrl: "https://neptun55.ru/media",
    cart_products: [],
    boats: [],
    products: [],
    searchproducts: [],
    categories: [],
    filtersProductSet: {}, 
    // last_category: [],
    heart_products: [],
    compare_products: [],
    blog_categories: [],
  },
  mutations: {
    UPDATE_HEART_PRODUCTS(state, heart_products) {
      state.heart_products = heart_products
    },
    UPDATE_COMPARE_PRODUCTS(state, compare_products) {
      state.compare_products = compare_products
    },
    UPDATE_BLOG_CATEGORIES(state, blog_categories) {
      state.products = blog_categories
    },
    UPDATE_PRODUCTS(state, products) {
      state.products = products
    },
    UPDATE_BOATS(state, boats) {
      console.log('лодки в сторе',boats)
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
    },
    CHANGE_SEARCH_PRODUCTS_SET(state, searchproducts) {
      state.searchproducts = searchproducts
    }

    
  },
  actions: {
    async FETCH_BLOG_CATEGORIES(ctx) {
      console.log('запрос категорий блога')
      console.log(`${this.state.backendUrl}/CategoryBlog/`)
      const res = await fetch(
        `${this.state.backendUrl}/CategoryBlog/`
      )
      console.log('запрос категорий блога выполнен')
      const blog_categories = await res.json()
      ctx.commit('UPDATE_BLOG_CATEGORIES', blog_categories)
    },
    async FETCH_PRODUCTS(ctx) {
      console.log('запрос товаров')
      const res = await fetch(
        `${this.state.backendUrl}/products/`
      )
      console.log('запрос товаров выполнен')
      const products = await res.json()
      ctx.commit('UPDATE_PRODUCTS', products)
    },
    async FETCH_BOATS(ctx) {
      console.log('запрос лодок')
      const res = await fetch(
        `${this.state.backendUrl}/boats/`
      )
      console.log('запрос лодок выполнен')
      const boats = await res.json()
      ctx.commit('UPDATE_BOATS', boats)
    },
    async FETCH_CATEGORIES(ctx) {
      console.log('Запрос категорий')
      const res = await fetch(
        `${this.state.backendUrl}/category/`
      )
      console.log('Запрос категорий выполнен')
      const categories = await res.json()
      ctx.commit('UPDATE_CATEGORIES', categories)
    },
    async FILTERS_PRODUCTS_SET(context, params) {
      // let Set = this.state.filtersProductSet
      let Set = Object.assign({},this.state.filtersProductSet);
      let obj = Object.assign({},Set, params);
      if(params.manufacturer){
        console.log(params.manufacturer)
        if(!params.manufacturer.length || params.manufacturer === 'net'){
          console.log('! length manufacturer DELETE')
          console.log(params)
          delete Set.manufacturer
          // delete Set[0]
          obj = Set
        }
      }
      if(params.reset){
        obj = {}
      }
      console.log('FILTERS_PRODUCTS_SET params', params)
      console.log('FILTERS_PRODUCTS_SET obj', obj)
      context.commit('CHANGE_FILTERS_PRODUCTS_SET', obj)
    },
    async SEARCH_PRODUCTS_SET(context, params) {
      var obj = params;

      context.commit('CHANGE_SEARCH_PRODUCTS_SET', obj)
    },

    // Добавил мутацию для корзины, нужно добавить экшн и геттер


    // async CHANGE_LAST_CATEGORY(context, params) {
    //   context.commit('UPDATE_LAST_CATEGORY', params)
    // },
    async ADD_HEART_PRODUCTS(context, params) {
      context.commit('', params)
    },
    ADD_COMPARE_PRODUCTS(context, params) {
      let cp = [...this.state.compare_products]
      if(params === 'reset'){
        
        cp = []
        // console.log('ADD_COMPARE_PRODUCTS action if', cp)
        context.commit('UPDATE_COMPARE_PRODUCTS', cp)
      }else{
        if(cp.includes(params)){
          if(cp.length == 1){
            cp = []
          }else{
            let item = cp.indexOf(params)
            cp.splice(item, 1)
          }
        }else{
          cp.push(params)
        } 
        context.commit('UPDATE_COMPARE_PRODUCTS', cp)
      }      

      // if(cp.includes(params)){
      //   if(cp.length == 1){
      //     cp = []
      //   }else{
      //     let item = cp.indexOf(params)
      //     cp.splice(item, 1)
      //   }
      // }else{
      //   cp.push(params)
      // } 
      // console.log(params)
      // console.log(cp)
      // context.commit('UPDATE_COMPARE_PRODUCTS', cp)
    },
    ADD_HEART_PRODUCTS(context, params) {
      let cp = [...this.state.heart_products]
      if(params === 'reset'){
        cp = []
        context.commit('UPDATE_HEART_PRODUCTS', cp)
      }else{
        if(cp.includes(params)){
          if(cp.length == 1){
            cp = []
          }else{
            let item = cp.indexOf(params)
            cp.splice(item, 1)
          }
        }else{
          cp.push(params)
        } 
        context.commit('UPDATE_HEART_PRODUCTS', cp)
      }
    },

  },
  getters: {
    GET_SERVER_URL: state => {
      return state.backendUrl
    },
    GET_MEDIA_URL: state => {
      return state.mediaUrl
    },
    GET_BLOG_CATEGORIES: state => {
      console.log('Геттер катогорий блога')
      return state.blog_categories
    },
    GET_PRODUCTS: state => {
      return state.products
    },
    GET_COMPARE_PRODUCTS: state => {
      return state.compare_products
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
    GET_SEARCHPRODUCTS: state => {
      return state.searchproducts
    },
  }
})

export default store
