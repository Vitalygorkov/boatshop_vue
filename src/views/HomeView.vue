<template>
<div class="home">
  <div class="categories_path">
    <router-link :to="{ name: 'home' }"><div class="category_path">Главная</div></router-link>
    <!-- <div v-for="category in GET_CATEGORIES" v-if="category.id == this.$route.params.id" :key="category.id" class="category_path">{{category.name}}</div>  -->
  </div>
  <div class="filter_and_results">
    <filter-menu :category="parseInt(this.$route.params.id)" :tree_id="this.$route.params.tree_id" :parent="this.$route.params.parent" :products="this.categorizedProducts" />
    <div class="block-results">
      <div class="resultproducts">
        <transition-group name="fade">
        <div class="fade-item" v-for="product in paginatedProducts()" :key="product.name">
          <product-card :product="product"/>
        </div>
        </transition-group>
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
  data() {
    return {
      productsPerPage: 9,
      pageNumber: 1,
      category: {id: parseInt(this.$route.params.id), tree_id: parseInt(this.$route.params.tree_id)},
      categorizedProducts: [],
      filteredProducts: [],
      
    }
  },
  methods: { 
    ...mapActions(['FETCH_PRODUCTS', 'FETCH_BOATS','FILTERS_PRODUCTS_SET']),
    paginatedProducts() {
      let from = (this.pageNumber - 1)*this.productsPerPage
      let to = from + this.productsPerPage
      if (this.filteredProducts.length == 0 && this.$route.params.id == undefined) {
        let products = [...this.GET_PRODUCTS]
        return products.slice(from,to)
      }
      return this.filteredProducts.slice(from,to)
    },
    get_filterProducts() {
      console.log('копирование объектов')
      let filterset = this.GET_FILTER_PRODUCTS_SET
      let filter_Products = [...this.categorizedProducts]
      // Если обычные товары, то фильтруем только по цене
      if (Object.keys(filterset).length == 1 &&  Object.keys(filterset) == 'price') {
        console.log('Обчный товар, фильтр только по цене')
        if(Object.keys(filterset).length) {
        filter_Products = filter_Products.filter(function(item) {
          return item.price >= filterset.price.min && item.price <= filterset.price.max
          })
        }
        this.filteredProducts = filter_Products
        return filter_Products
        // иначе фильтруем по всем параметрам лодки
      }else if(Object.keys(filterset).length) {  
        console.log('Лодки фсе фильтры')
        // фильтруем по цене
        if (Object.hasOwn(filterset, 'price')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by price')

          return item.price >= filterset.price.min && item.price <= filterset.price.max 
          // && item.length >= filterset.length.min && item.length <= filterset.length.max && item.width >= filterset.width.min && item.width <= filterset.width.max
          })
        }
        // фильтруем по длинне
        if (Object.hasOwn(filterset, 'length')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by length')
          return item.length >= filterset.length.min && item.length <= filterset.length.max
          })
        }

        // фильтруем по ширине
        if (Object.hasOwn(filterset, 'width')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by width')
          return item.width >= filterset.width.min && item.width <= filterset.width.max
          })
        }
        // фильтруем по длинне кокпита
        if (Object.hasOwn(filterset, 'cockpit_length')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by width')
          return item.cockpit_length >= filterset.cockpit_length.min && item.cockpit_length <= filterset.cockpit_length.max
          })
        }
        // фильтруем по ширине кокпита
        if (Object.hasOwn(filterset, 'cockpit_width')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by width')
          return item.cockpit_length >= filterset.cockpit_length.min && item.cockpit_length <= filterset.cockpit_length.max
          })
        }
        // фильтруем по диаметру борта
        if (Object.hasOwn(filterset, 'cylinder_diameter')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by width')
          return item.cylinder_diameter >= filterset.cylinder_diameter.min && item.cylinder_diameter <= filterset.cylinder_diameter.max
          })
        }
          // фильтруем по load_capacity
        if (Object.hasOwn(filterset, 'load_capacity')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by width')
          return item.load_capacity >= filterset.load_capacity.min && item.load_capacity <= filterset.load_capacity.max
          })
        }
            // фильтруем по boat_weight
        if (Object.hasOwn(filterset, 'boat_weight')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by width')
          return item.boat_weight >= filterset.boat_weight.min && item.boat_weight <= filterset.boat_weight.max
          })
        }
            // фильтруем по complete_set_weight
        if (Object.hasOwn(filterset, 'complete_set_weight')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by width')
          return item.complete_set_weight >= filterset.complete_set_weight.min && item.complete_set_weight <= filterset.complete_set_weight.max
          })
        }
                    // фильтруем по maximum_motor_power
        if (Object.hasOwn(filterset, 'maximum_motor_power')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by width')
          return item.maximum_motor_power >= filterset.maximum_motor_power.min && item.maximum_motor_power <= filterset.maximum_motor_power.max
          })
        }
               // фильтруем по maximum_motor_power
        if (Object.hasOwn(filterset, 'fabric_thickness_side')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by width')
          return item.fabric_thickness_side >= filterset.fabric_thickness_side.min && item.fabric_thickness_side <= filterset.fabric_thickness_side.max
          })
        }
               // фильтруем по fabric_thickness_bottom
        if (Object.hasOwn(filterset, 'fabric_thickness_bottom')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by width')
          return item.fabric_thickness_bottom >= filterset.fabric_thickness_bottom.min && item.fabric_thickness_bottom <= filterset.fabric_thickness_bottom.max
          })
        }
                 // фильтруем по inflatable_compartments
        if (Object.hasOwn(filterset, 'inflatable_compartments')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by width')
          return item.inflatable_compartments >= filterset.inflatable_compartments.min && item.inflatable_compartments <= filterset.inflatable_compartments.max
          })
        }
                   // фильтруем по passenger_capacity
        if (Object.hasOwn(filterset, 'passenger_capacity')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by width')
          return item.passenger_capacity >= filterset.passenger_capacity.min && item.passenger_capacity <= filterset.passenger_capacity.max
          })
        }

        this.filteredProducts = filter_Products
        return filter_Products
      }else {
        this.filteredProducts = filter_Products
        return filter_Products
      }

    },
    pagefirst(){
    this.pageNumber= 1
    },
    get_categorizedProducts(){
      let category = parseInt(this.$route.params.id)
      console.log(category)
      if (this.getcatschildren(this.GET_CATEGORIES, 1).some(elem => elem == category)) {
        // console.log('выполнено условие категории лодок')
        this.categorizedProducts = [...this.GET_BOATS]
      } else {
        this.categorizedProducts = [...this.GET_PRODUCTS]
      }
      // console.log('категоризироввнные продукты')
      let categories = this.getcatschildren(this.GET_CATEGORIES, category)
      this.categorizedProducts = this.categorizedProducts.filter(function(item){
        if (categories.some(elem => elem == item.category)){
          return item.category
        }
      })
      // this.categorizedProducts = [...this.filteredProducts]
      this.filteredProducts = [...this.categorizedProducts]
      return this.categorizedProducts
    },
    getcatschildren(object, catparent, arr=[]){
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
      arr.push(catparent)
      return arr
    },
    pageClick(page) {
      this.pageNumber = page
    },
    current_category(id){
      if(id){
        // console.log(this.GET_CATEGORIES)
        const result = this.GET_CATEGORIES.filter(function(item) {
            return item.id == id
            })
        // const result = this.GET_CATEGORIES.filter(item => item.name == id);
        // console.log(id)
        // console.log(result)
        // console.log(result[0].name)
        if(result[0] !== undefined){
          return result[0].name
        }
        
      }else {
        return ''
      }
    },
  },
  computed: {
  ...mapGetters(['GET_PRODUCTS', 'GET_BOATS','GET_FILTER_PRODUCTS_SET','GET_CATEGORIES']),

  pages () {
    return Math.ceil(this.filteredProducts.length/this.productsPerPage)
  },
  // 1 actoin
  // paginatedProducts() {
  //   let from = (this.pageNumber - 1)*this.productsPerPage
  //   let to = from + this.productsPerPage
  //   if (this.get_filterProducts().length == 0 && this.$route.params.id == undefined) {
  //     // && this.$route.params.id == NaN)
  //     console.log(this.$route.params.id)
  //     let products = [...this.GET_PRODUCTS]
  //     return products.slice(from,to)
  //   }
  //   return this.get_filterProducts().slice(from,to)
  // },
  // 2 actoin отключил
  // FilterProductsSet() {
  //   if (this.filteredProducts.length) {
  //     return this.filteredProducts
  //   } else if (parseInt(this.$route.params.id)) {
  //     return this.filteredProducts
  //   } else {
  //     this.filteredProducts = [...this.GET_PRODUCTS]
  //     return this.filteredProducts
  //   }
  // },
  },
  watch: {
    GET_FILTER_PRODUCTS_SET() {
      console.log('сработал GET_FILTER_PRODUCTS_SET') 
      this.get_filterProducts() 
    },   
    '$route.params.id': {
      handler: function() {
      this.pagefirst()
      this.FILTERS_PRODUCTS_SET({reset: true})
      this.get_categorizedProducts()
      // console.log('watch')
      document.title = `Нептун 55 ${this.current_category(parseInt(this.$route.params.id))}`
      }
    },
    deep: true,
    immediate: true
  },

  mounted() {

    this.pagefirst()
    this.FILTERS_PRODUCTS_SET({reset: true})
    this.get_categorizedProducts()
    // console.log('mounted')
    document.title = `Нептун 55 ${this.current_category(parseInt(this.$route.params.id))}`
  },

  components: {
    ProductCard,
    FilterMenu
  },
  	async created(){
      await this.FETCH_PRODUCTS()
      await this.FETCH_BOATS()
      this.get_categorizedProducts(parseInt(this.$route.params.id))
      // console.log('created')
		  document.title = `Нептун 55 ${this.current_category(parseInt(this.$route.params.id))}`
	},
}
</script>
<style>
.fade-item{
  display: inline-block;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-to{
  opacity: 1;
}
.fade-enter-active{
  transition: opacity .8s;
}
/* .fade-leave-active {
  transition: opacity .5s;
} */

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
