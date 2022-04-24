<template>
<div class="home">
  <div class="categories_path">
    <router-link :to="{ name: 'home' }"><div class="category_path">Главная</div></router-link>
    <div v-for="category in GET_CATEGORIES" v-if="category.id == LAST_CATEGORY" :key="category.id" class="category_path">{{category.name}}</div>
  </div>
  <div class="filter_and_results">
    <filter-menu :category="this.$route.params.id" :tree_id="this.$route.params.tree_id" :parent="this.$route.params.parent"/>
    <div class="block-results">
      <!-- wqw{{categorizedProducts(2)}} dsada -->
      Категория: {{this.$route.params.id}} lk: {{LAST_CATEGORY}} убрать LAST_CATEGORY
      <div class="resultproducts">
        <div v-for="product in paginatedProducts" :key="product.name">
          <product-card :product="product"/>
        </div>

        <!-- <br><p>Несортированные блоки:</p><br>

        <div v-for="product in getProducts" :key="product.name">
          <product-card :product="product"/>Le,kbrfn
        </div> -->

      <!-- <div v-for="product in listProducts" :key="product.name" >{{ product.name }}</div> -->
        <!-- <div v-for="product in listProducts" :key="product.name" >
          <product-card :product="product"/> -->
          
        <!-- </div> -->
        </div>
      
      <div class="pagination_box">
        <div class="page" v-for="page in pages" :key="page" @click="pageClick(page)">{{page}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import FilterMenu from "../components/FilterMenu"
import ProductCard from "../components/ProductCard"
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'HomeView',
  // data() {
  //   return {
  //     listProducts: [],
  //   }
  // },
  data() {
    return {
      productsPerPage: 10,
      pageNumber: 1,
      category: {id: this.$route.params.id, tree_id: this.$route.params.tree_id},
      filteredProducts: [],
      
    }
  },
  methods: { 
    ...mapActions(['FETCH_PRODUCTS']),
    filterProducts() {
      // console.log('функция filter products')
      // console.log(this.filteredProducts)
      // this.filteredProducts = [...this.GET_PRODUCTS]
      console.log('копирование объектов')
      // console.log(this.filteredProducts)
      let filterset = this.GET_FILTER_PRODUCTS_SET
      // if (lastcategory) {
      // this.filteredProducts = this.filteredProducts.filter(
      //   function(item){
      //   console.log('функция фильтра по категории')
      //   return item.category == lastcategory
      //   })
      // }
      this.filteredProducts = this.filteredProducts.filter(function(item) {
        // console.log('перед ретерном')
        // console.log(min,max)
        // console.log('функция фильтра по цене')
        return item.price >= filterset.min_price && item.price <= filterset.max_price && item.category == lastcategory
      })
    },
    categorizedProducts(lastcategory){
      this.filteredProducts = [...this.GET_PRODUCTS]
      // console.log(lastcategory)
      console.log('категоризироввнные продукты')
      // console.log(this.filteredProducts)
      let category = this.$route.params.id
      let parent = this.$route.params.parent
      let categories = getcatschildren(this.GET_CATEGORIES, category)
      categories.push(category)


      function getcatschildren(object, catparent, arr=[]){
        getChildren(object,catparent)
            function getChildren(obj, parent,){
              for(let i = 0; i < obj.length; i += 1){
                if(obj[i].parent == parent){
                  // console.log(obj[i].name)
                  arr.push(obj[i].id)
                  getChildren(obj,obj[i].id)
              }
            }
          
        }
      return arr
      }

      this.filteredProducts = this.filteredProducts.filter(function(item){
        if (categories.some(elem => elem == item.category)){
          return item.category
        }
        
      })

      // this.filteredProducts = this.filteredProducts.filter(function(item) {

      //   // console.log(item.category == 13)
      //   return  item.category == category
      // })
      // if (this.filteredProducts.length == 0) {
      //         this.filteredProducts = this.filteredProducts.filter(function(item) {
      //           console.log("if выполняеся")
      //   // console.log(item.category == 13)
      //   return  item.category == parent
      // })
      // } else {return []}

      return this.filteredProducts
    },
    pageClick(page) {
      this.pageNumber = page
    },
  },
    computed: {
    ...mapGetters(['GET_PRODUCTS','GET_FILTER_PRODUCTS_SET','LAST_CATEGORY','GET_CATEGORIES']),
    pages () {
      return Math.ceil(this.FilterProductsSet.length/10)
    },
    // 1 actoin
    paginatedProducts() {
      let from = (this.pageNumber - 1)*this.productsPerPage
      let to = from + this.productsPerPage
      return this.FilterProductsSet.slice(from,to)
    },
    // 2 actoin
    FilterProductsSet() {
      // console.log(this.filteredProducts.length)
      if (this.filteredProducts.length) {
        // console.log(this.filteredProducts[0])
        return this.filteredProducts
      } else {
        // console.log(typeof this.filteredProducts[0])
        // this.filteredProducts = [...this.GET_PRODUCTS]
        return this.filteredProducts
      }

      // if (this.filteredProducts.length) {
      //   return this.filteredProducts
      // } else {
      //   return this.GET_FILTER_PRODUCTS
      // }
    },
    // PriceSet() {
    //   this.minPrice = this.getFilterPrice[0]
    //   this.maxPrice = this.getFilterPrice[1]
    //   return this.getFilterPrice
      // return getFilterPrice
    // }
  },
  watch: {
    // GET_FILTER_PRODUCTS_SET() {
    //   console.log('сработал GET_FILTER_PRODUCTS_SET') 
    //   this.filterProducts()   
    // },
    LAST_CATEGORY() {
      console.log('сработал LAST_CATEGORY')
      this.pageNumber = 1
      this.categorizedProducts(this.LAST_CATEGORY)
      // this.filterProducts()   
    }, 
    '$route.params.id': {
      handler: function() {
      this.categorizedProducts(this.$route.params.id)
      }
    },
    deep: true,
    immediate: true
  },
  mounted() {
    this.FETCH_PRODUCTS();
    this.filterProducts();
    },

  // когда переписал на это глючило через пару перезагрузок сервера
  // methods: { ...mapActions(['fetchProducts','reset_filter_products','filter_products_by_price']),
  //     async mounted() {
  //     this.fetchProducts();
  //     this.reset_filter_products();
  //   },
  // },
  // работало норм и в аккордионе
  // methods: mapActions(['fetchProducts','reset_filter_products','filter_products_by_price']),
  // async mounted() {
  //   this.fetchProducts();
  //   this.reset_filter_products();
  // },

  components: {
    ProductCard,
    FilterMenu
  },
  // created() {
    // this.loadListProducts()
  // },
  // methods: {
    // async loadListProducts() {
    //   this.listProducts = await fetch(
    //     `${this.$store.getters.getServerUrl}/product`
    //   ).then(response => response.json())
    // },
  // },
  // mounted() {

  // }
}
</script>
<style>
.home{
  display: flex;
  flex-direction: column;
}
.filter_and_results{
  display: flex;
  flex-direction: row;
}
.categories_path{
  display: flex;
  flex-direction: row;
  font-size: 20px;
  font-weight: 900;
  margin-left: 20px;
}
.category_path{
  padding: 18px;
}
.block-results{
  display: flex;
  flex-direction: column;
  background: white;
}
.resultproducts{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: white;
}
.pagination_box{
  display: flex;
  align-items: center;
  justify-content: center;
}
.page{
  padding: 8px;
  margin-right: 10px;
  border: solid 1px #e7e7e7;
}
.page:hover {
  background: #aeaeae;
  cursor: pointer;
  color: #ffffff;
}
</style>
