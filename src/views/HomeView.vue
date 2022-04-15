<template>
<div class="home">
  <search-menu/>
  <div class="block-results">

    <div class="product-container">
      <div id="example-1">
      <button v-on:click="getFilterPrice">knopka</button>
      <p>{{ getFilterPrice }}</p>
      </div>
      <p>Сортированные блоки:</p><br>

      <div v-for="product in getSortProducts" :key="product.name">
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
  </div>
</div>
</template>

<script>
import SearchMenu from "../components/SearchMenu"
import ProductCard from "../components/ProductCard"
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'HomeView',
  // data() {
  //   return {
  //     listProducts: [],
  //   }
  // },
  computed: mapGetters(['getSortProducts', 'getProducts','getFilterPrice']),
  methods: mapActions(['fetchProducts','reset_sorted_products','filter_products_by_price']),
  async mounted() {
    this.fetchProducts();
    this.reset_sorted_products();
  },
  // async mounted() {
  //   this.reset_sorted_products();
  // },
  components: {
    ProductCard,
    SearchMenu
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
.block-results{
  display: inline-block;
  background: white;
}
</style>
