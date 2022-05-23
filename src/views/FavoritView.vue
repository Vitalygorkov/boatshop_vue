<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>



export default {
  name: 'HomeView',
  data() {
    return {
      productsPerPage: 9,
      morePageNumber: 1,
      pageNumber: 1,
      category: {id: parseInt(this.$route.params.id), tree_id: parseInt(this.$route.params.tree_id)},
      categorizedProducts: [],
      filteredProducts: [],
      cats_tags: [],
      paginatedProducts: [],
      sort_by: 'name_down',
      
    }
  },
  methods: { 
  ...mapActions(['FETCH_CATEGORIES', 'FETCH_PRODUCTS', 'FETCH_BOATS','FILTERS_PRODUCTS_SET', 'SEARCH_PRODUCTS_SET']),
  CheckedButton(checked){
    this.sort_by = checked
    console.log('сработал емит')
    console.log(this.sort_by)
    console.log(this.CheckedEmit)
  },





}  