<template>
<div class="favorit">
  <div class="categories_path_box">
    <div class="category_path"><router-link :to="{ name: 'home' }">Главная</router-link></div>
  </div>


  <div class="filter_and_results">
    <div class="block-results">
      <div class="favorit_prod_box"><h3>Избранные товары: {{this.filteredProducts.length}}</h3><div @click="ADD_HEART_PRODUCTS('reset')" class="favorit_prod_sbros">сбросить все</div></div> 
      <!-- <div class="favorit_prod_box" v-if="this.$route.name === 'favorit'"><h3>Избранные товары: {{this.filteredProducts.length}}</h3><div class="favorit_prod_sbtos">сбросить все</div></div>  -->

      <div class="sort_box">
<!-- {{GET_FILTER_PRODUCTS_SET}}         -->
        <div>Сортировать по: </div>
        <div class="sort_item">
          <sort-button v-bind:class="{ sort_item_active: 'name_up' == sort_by || 'name_down' == sort_by  }" title="наименованию" up="name_up" down="name_down" v-on:CheckedButton="CheckedButton"/><img class="sort_img" v-bind:class="{ sort_active_img: this.sort_by == 'name_up', sort_reverse_img: this.sort_by == 'name_down'}" src="../assets/img/sort.svg">
        </div>
        <div class="sort_item">
                  <sort-button class="sort_item" v-bind:class="{ sort_item_active: 'price_up' == sort_by || 'price_down' == sort_by}" title="цене" up="price_up" down="price_down" v-on:CheckedButton="CheckedButton"/><img class="sort_img" v-bind:class="{ sort_active_img: this.sort_by == 'price_up', sort_reverse_img: this.sort_by == 'price_down'}" src="../assets/img/sort.svg">
        </div>
      </div>
      <div class="resultproducts">
        <transition-group name="fade">
        <div class="fade-item" v-for="product in this.paginatedProducts" :key="product.name">
          <product-card :product="product"/>
        </div>
        </transition-group>
      </div>
    </div>  
  </div>




    <div class="pagination_box">
      <div class="more" @click="pageMore()">Показать еще</div>
      <div class="pagination">
        <div class="page" v-bind:class="{ pageactive: pageNumber == page }" v-for="page in pages" :key="page" @click="pageClick(page)">{{page}}</div>
      </div>
    </div>
</div>
</template>

<script>

import ProductCard from "../components/ProductCard"
import SortButton from "../components/buttons/SortButton"
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Favoritview',
  data() {
    return {
      productsPerPage: 9,
      morePageNumber: 1,
      pageNumber: 1,
      filteredProducts: [],
      paginatedProducts: [],
      sort_by: 'name_down',

    }
  },
  methods: {
    ...mapActions(['ADD_HEART_PRODUCTS']),
    CheckedButton(checked){
      this.sort_by = checked
      console.log('сработал емит')
      console.log(this.sort_by)
      console.log(this.CheckedEmit)
    },
    pagefirst(){
      this.pageNumber= 1
    },
    get_paginatedProducts() {
      // console.log('get_paginatedProducts2')
      let from = (this.pageNumber - 1)*this.productsPerPage
      let to = from + this.productsPerPage
      console.log(' get paginated products 2')
      this.sort_filtered_products(this.sort_by)
      this.paginatedProducts = [...this.filteredProducts.slice(from,to)]
      return this.filteredProducts.slice(from,to)

    },
    sort_filtered_products(sort_by) {
      if (sort_by == 'name_up') {
        // console.log('сортировка по возрастанию имени')
        // console.log(this.filteredProducts)
        this.filteredProducts = this.filteredProducts.sort((a, b) => a.name > b.name ? 1 : -1);
        // console.log(this.filteredProducts)
      }else if (sort_by == 'name_down'){
        this.filteredProducts = this.filteredProducts.sort((a, b) => a.name > b.name ? -1 : 1);
      }else if (sort_by == 'price_up'){
        this.filteredProducts = this.filteredProducts.sort((a, b) => a.price > b.price ? 1 : -1);
      }else if (sort_by == 'price_down'){
        this.filteredProducts = this.filteredProducts.sort((a, b) => a.price > b.price ? -1 : 1);
      }else if (sort_by == 'length_up'){
        this.filteredProducts = this.filteredProducts.sort((a, b) => a.length > b.length ? 1 : -1);
      }else if (sort_by == 'length_down'){
        this.filteredProducts = this.filteredProducts.sort((a, b) => a.length > b.length ? -1 : 1);
      }else if (sort_by == 'weight_up'){
        this.filteredProducts = this.filteredProducts.sort((a, b) => a.boat_weight > b.boat_weight ? 1 : -1);
      }else if (sort_by == 'weight_down'){
        this.filteredProducts = this.filteredProducts.sort((a, b) => a.boat_weight > b.boat_weight ? -1 : 1);
      }

    },
    pageClick(page) {
      this.pageNumber = page
      this.morePageNumber = page
      this.get_paginatedProducts()
    },

    pageMore () {
    // let from = (page - 1)*this.productsPerPage
    // let to = from + this.productsPerPage
    // if (this.filteredProducts.length/)
    // console.log(this.morePageNumber)
    // console.log(this.pages)
    let page = this.morePageNumber



    
    if (page== 0) {
      this.morePageNumber +=1
      // console.log('page 1 if: '+ this.morePageNumber)
      page = this.morePageNumber + this.pageNumber
      this.pageNumber +=1
    }else if (this.pages>this.morePageNumber) {
      this.morePageNumber +=1
      this.pageNumber +=1
      page = this.morePageNumber
      // console.log('page 2 if: '+ this.morePageNumber)
    }
    // console.log(page)
    // console.log('get more pages')
    let from = (page-1)*this.productsPerPage
    let to = from + this.productsPerPage
    // console.log(this.filteredProducts.slice(from,to))
    // this.paginatedProducts= (this.paginatedProducts.push(this.filteredProducts.slice(from,to)))
    let arr1 = [...this.paginatedProducts]
    let arr = []
    arr = this.filteredProducts.slice(from,to)
    for (var i = 0; i < arr.length; i++) {
      arr1.push(arr[i])
    }
    const uniqueArr = arr1.filter((x, i, a) => a.indexOf(x) == i)
    this.paginatedProducts = uniqueArr

    // console.log(this.paginatedProducts)
    },
  },
  components: {
    ProductCard,
    SortButton,
  },
  computed: {
  ...mapGetters(['GET_PRODUCTS', 'GET_BOATS','GET_FILTER_PRODUCTS_SET','GET_CATEGORIES', 'GET_SEARCHPRODUCTS', 'GET_HEART_PRODUCTS']),

  pages () {
    return Math.ceil(this.filteredProducts.length/this.productsPerPage)
  },
  },
  mounted() {
  console.log('mounted Favoritview')
  this.pagefirst()
  this.filteredProducts = [...this.GET_HEART_PRODUCTS]
  this.get_paginatedProducts() 
  document.title = `Нептун 55: Избранное.Лодки ПВХ купить по выгодным ценам`
  // this.get_categorizedProducts(this.category.id)
  // this.get_paginatedProducts()
  // if (this.GET_CATEGORIES){
  //   console.log('маунтинг тегов')
  //   this.getcats_tags(this.GET_CATEGORIES,this.category.id)
  // }


  
  // this.FILTERS_PRODUCTS_SET({reset: true})
  // this.get_categorizedProducts()
  // this.getcats_tags(this.GET_CATEGORIES,this.$route.params.id)
  console.log('mounted')
  // document.title = `Нептун 55 ${this.current_category(this.category.id)}`
  },
  watch: { 
    '$route.name': {
      // deep: true,
      // immediate: true,
      handler: function() {
      console.log(this.$route.name)
        if (this.$route.name === 'favorit') {
          console.log('watcher favorit выполняется if')
          this.pagefirst()
          this.filteredProducts = [...this.GET_HEART_PRODUCTS]
          this.get_paginatedProducts() 
          document.title = `Нептун 55: Избранное.Лодки ПВХ купить по выгодным ценам`
        }
      }
    },
    sort_by(){
      console.log('watcher srt_by in favoritview')
      this.pagefirst()
      this.get_paginatedProducts()
    },
    GET_HEART_PRODUCTS(){
      console.log('watcher GET_HEART_PRODUCTS in favoritview')
      if(this.$route.name === 'favorit'){
        console.log('if in watcher GET_HEART_PRODUCTS in favoritview')
        this.pagefirst()
        this.filteredProducts = [...this.GET_HEART_PRODUCTS]
        this.get_paginatedProducts()
      }
    } 
      
    
  }  
}

</script>
<style>
.favorit_prod_box{
  padding: 15px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}
.favorit_prod_sbros{
  margin-top: 5px;
  background-color: rgb(191, 246, 253);
  border-radius: 5px;
  margin-left: 15px;
  padding: 5px;
}
.favorit_prod_sbros:hover{
  background-color: #A4E2FD;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 15px;
  padding: 5px;
}

</style>