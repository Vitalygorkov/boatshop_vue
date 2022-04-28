<template>
<div class="ProductPage">
  <h1>{{product.name}}</h1>

  <div class="topblok">
    <div>
      <carusel :carusel_data="product.prodimg"/>
    </div>

    <div class="characteristics">
      <div class="chars">
        <div class="char_name">Производитель</div>
        <div class="char_data" v-if="product.manufacturer">{{product.manufacturer.name}}</div>
      </div>
      <div class="chars">
        <div class="char_name">Цвет</div>
        <div class="char_data" v-if="product.color">{{product.color.name}}</div>
      </div>
      <h3>ЦЕНА: {{product.price}}</h3>
    </div>
  </div>
  <div class="descriptoins">
    <h2>Описание</h2>
    <span v-html="product.description"></span>
  </div>
  <div class="videos">
    <h2>Видео</h2>

  </div>

</div>

</template>

<script>
import carusel from "../components/carusel/carusel"
import {mapGetters, mapActions} from 'vuex'
import Carusel from '@/components/carusel/carusel.vue'
// import "../assets/js/slickmin.js"
// import "../assets/js/slick-script.js"
export default {
    data() {
      return {
        // productID: this.$route.params.id,
        product: [],
      }
    },
    computed: {
    ...mapGetters(['GET_MEDIA_URL','GET_SERVER_URL']),

    },
    components: {
      carusel,
    },
    
        Caruselmethods: {

      // async FETCH_PRODUCT() {
      //   console.log(`${this.GET_SERVER_URL}/product/${this.productID}`)
      // const res = await fetch(
      //   `${this.GET_SERVER_URL}/product/${this.productID}`
      // )
      // const prod = await res.json()
      // this.product = prod
      // console.log(prod)
      // return prod
      // }
    },
    async mounted() {
      console.log(this.$route.params.id)
      const res = await fetch(`${this.GET_SERVER_URL}/product/${this.$route.params.id}`)
      const prod = await res.json()
      this.product= prod
     },
}


</script>
<style scoped>
.ProductPage{
  display: flex;
  flex-direction: column;
}
.topblok{
  display: flex;
  flex-direction: row;
}
.characteristics{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 12px;
}
.chars{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

</style>