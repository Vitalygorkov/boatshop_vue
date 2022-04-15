<template>
<div class="home">
  <search-menu/>
  <div class="block-results">

    <div class="product-container">
      <div v-for="product in getProducts" :key="product.name">
        <product-card :product="product"/>
      </div>

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
  computed: mapGetters(['getProducts']),
  methods: mapActions(['fetchProducts']),
  async mounted() {
    this.fetchProducts();
  },
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
