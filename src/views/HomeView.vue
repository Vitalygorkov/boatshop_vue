<template>
<div class="home">
  <search-menu :product="product"/>
  <div class="block-results">

    <div class="product-container">
    <!-- <div v-for="product in listProducts" :key="product.name" >{{ product.name }}</div> -->
      <div v-for="product in listProducts" :key="product.name" >
        <product-card :product="product"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import SearchMenu from "../components/SearchMenu"
import ProductCard from "../components/ProductCard"
// import {mapAсtions} from 'vuex'

export default {
  name: 'HomeView',
  data() {
    return {
      listProducts: [],
    }
  },
  components: {
    ProductCard,
    SearchMenu
  },
  created() {
    this.loadListProducts()
  },
  methods: {
    async loadListProducts() {
      this.listProducts = await fetch(
        `${this.$store.getters.getServerUrl}/product`
      ).then(response => response.json())
    },
    // ...mapAtions([
    //   // 'GET_PRODUCTS_FROM_API'
    // ])
  },
  mounted() {
    // this.GET_PRODUCTS_FROM_API()
  }
}
</script>
<style>
.block-results{
  display: inline-block;
  background: white;
}
</style>
