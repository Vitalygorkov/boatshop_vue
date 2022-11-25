<template>

<div class="ProductPage">
  <div class="categories_path_box">
  <div class="category_path"><router-link :to="{ name: 'home' }">Главная</router-link></div>
  </div>
  <h1>{{product.name}}</h1>

  <div class="topblok">
    <div class="photo-slider">
      <carusel :carusel_data="product.prodimg"/>
    </div>

    <div v-if="getcatschildren(GET_CATEGORIES, 1).some(elem => elem == product.category)" class="characteristics">
      <div class="chars">
        <div class="char_name">Производитель:</div>
        <div class="char_data" v-if="product.manufacturer">{{product.manufacturer.name}}</div>
      </div>
      <div class="chars">
        <div class="char_name">Цвет:</div>
        <div class="char_data" v-if="product.color">{{product.color.name}}</div>
      </div>
      <div class="chars">
        <div class="char_name">Длина:</div>
        <div class="char_data">{{product.length}}</div>
      </div>
      <div class="chars">
        <div class="char_name">Ширина:</div>
        <div class="char_data">{{product.width}}</div>
      </div>
      <div class="chars">
        <div class="char_name">Длина кокпита:</div>
        <div class="char_data">{{product.cockpit_length}}</div>
      </div>
      <div class="chars">
        <div class="char_name">Ширина кокпита:</div>
        <div class="char_data">{{product.cockpit_width}}</div>
      </div>
      <div class="chars">
        <div class="char_name">Диаметр баллонов:</div>
        <div class="char_data">{{product.cylinder_diameter}}</div>
      </div>
      <div class="chars">
        <div class="char_name">Плотность ткани борта:</div>
        <div class="char_data">{{product.fabric_thickness_side}}</div>
      </div>
      <div class="chars">
        <div class="char_name">Плотность ткани дна:</div>
        <div class="char_data">{{product.fabric_thickness_bottom}}</div>
      </div>
      <div class="chars">
        <div class="char_name">Количество надувных отсеков:</div>
        <div class="char_data">{{product.inflatable_compartments}}</div>
      </div>
      <div class="chars">
        <div class="char_name">Грузоподъемность:</div>
        <div class="char_data">{{product.load_capacity}}</div>
      </div>
      <div class="chars">
        <div class="char_name">Пассажировместимость:</div>
        <div class="char_data">{{product.passenger_capacity}}</div>
      </div>
      <div class="chars">
        <div class="char_name">Максимальная мощность мотора:</div>
        <div class="char_data">{{product.maximum_motor_power}}</div>
      </div>
      <div class="chars">
        <div class="char_name">Вес лодки:</div>
        <div class="char_data">{{product.boat_weight}}</div>
      </div>
      <div class="chars">
        <div class="char_name">Вес полного комплекта:</div>
        <div class="char_data">{{product.complete_set_weight}}</div>
      </div>
      <div class="chars">
        <div class="char_name">Фальшборт:</div>
        <div class="char_data">{{product.bulwark | yesno}}</div>
      </div>
      <div class="chars">
        <div class="char_name">Киль:</div>
        <div class="char_data">{{product.keel | yesno}}</div>
      </div>
      <div class="chars">
        <div class="char_name">Габариты упаковки:</div>
        <div class="char_data">{{product.upak}}</div>
      </div>
      <h3>ЦЕНА: {{product.price}}</h3>
        <router-link :to="{ name: 'contactformpage'}">
        <div class="card-shopping">
            КУПИТЬ
        </div>
        </router-link>
          <!-- <div class="card-shopping">
             <a href="#">В КОРЗИНУ</a>
          </div> -->
    </div>
        <div v-else class="characteristics">
      <div class="chars">
        <div class="char_name">Производитель</div>
        <div class="char_data" v-if="product.manufacturer">{{product.manufacturer.name}}</div>
      </div>
      <div class="chars">
        <div class="char_name">Цвет</div>
        <div class="char_data" v-if="product.color">{{product.color.name}}</div>
      </div>
      <h3>ЦЕНА: {{product.price}}</h3>
        <router-link :to="{ name: 'contactformpage'}">
        <div class="card-shopping">
            КУПИТЬ
        </div>
        </router-link>
          <!-- <div class="card-shopping">
             <a href="#">В КОРЗИНУ</a>
          </div> -->
    </div>
  </div>
  <div class="descriptoins">
    <h2>Описание</h2>
    <span v-html="product.description"></span>
  </div>

  <div v-if="accessories_products.length">
    <h2>Аксессуары:</h2>
    <div class="product_recomends">
      <VueSlickCarousel :arrows="true" :slidesToShow="get_slide_to_show" :slidesToScroll="get_slide_to_scroll" :swipeToSlide="true" :focusOnSelect="true">
      <div v-for="recprod in accessories_products" :key="recprod.id">
            <product-card-mini :product="recprod"/>
      </div>
      </VueSlickCarousel>
    </div>
  </div>

  <div v-if="recomend_products.length">
    <h2>С этим товаром покупают:</h2>
    <div class="product_recomends">
      <VueSlickCarousel :arrows="true" :slidesToShow="get_slide_to_show" :slidesToScroll="get_slide_to_scroll" :swipeToSlide="true" :focusOnSelect="true">
      <div v-for="recprod in recomend_products" :key="recprod.id">
            <product-card-mini :product="recprod"/>
      </div>
      </VueSlickCarousel>
    </div>
  </div>

  <div v-if="product.prodvideos.length">
    <h2>Видео с товаром</h2>
    <div class="videos">
      <div v-for="video in product.prodvideos">
              <iframe :src="'https://www.youtube.com/embed/' + video.video" loading="lazy" width="300" height="250" frameborder="1" ></iframe>
      </div>
    </div>
  </div>

</div>

</template>

<script>
// import carusel from "../components/carusel/carusel"
import {mapGetters, mapActions} from 'vuex'
import Carusel from '@/components/carusel/carusel.vue'
import ProductCardMini from "../components/ProductCardMini"
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    data() {
      return {
        product: [],
        recomend_products: [],
        accessories_products: [],

        // productID: this.$route.params.id,
      }
    },
    props:{
    },
    computed: {
    ...mapGetters(['GET_MEDIA_URL','GET_SERVER_URL','GET_CATEGORIES','GET_PRODUCTS']),
    get_slide_to_show(){
      console.log(Math.floor(window.innerWidth/150))
      return Math.floor(window.innerWidth/150)
      },
    get_slide_to_scroll(){
    console.log(Math.ceil(window.innerWidth/300))
    return Math.floor(window.innerWidth/300)
    }
  

    },
    components: {
    Carusel,
    ProductCardMini,
    VueSlickCarousel, 
},
    
    methods: {
      ...mapActions(['FETCH_PRODUCTS']),
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
      get_recomend_products(){
        // console.log(this.product.id ,'func recomend_products')
        if(this.GET_PRODUCTS.length){
          let prod = this.product
          this.recomend_products = [...this.GET_PRODUCTS]
          this.recomend_products = this.recomend_products.filter(function(item){
            if(prod.recommendations.some(elem => elem == item.id)){
              return item
            }else{
              console.log('else')
            }
          })
        }
      },
      get_accessories_products(){
        // console.log(this.product.id ,'func recomend_products')
        if(this.GET_PRODUCTS.length){
          let prod = this.product
          this.accessories_products = [...this.GET_PRODUCTS]
          this.accessories_products = this.accessories_products.filter(function(item){
            if(prod.accessories.some(elem => elem == item.id)){
              return item
            }else{
              console.log('else')
            }
          })
        }
      },
      // get_slide_to_show(){
      //   return Math.floor(window.innerWidth/150)
      // }

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
    //   console.log(this.$route.params.id)
    //   console.log(this.$route.params.category)
    //   if (this.$route.params.category == undefined){
    //     const res = await fetch(`${this.GET_SERVER_URL}/product/${this.$route.params.id}`)
    //     const prod = await res.json()
    //     // this.product= prod
    //     console.log('Запрос товара, роут не передан')
    //     if (this.getcatschildren(this.GET_CATEGORIES, 1).some(elem => elem == prod.category)) {
    //       const res = await fetch(`${this.GET_SERVER_URL}/boat/${this.$route.params.id}`)
    //       const prod = await res.json()
    //       this.product= prod
    //       console.log(this.product)
    //       console.log('Запрос товара, категория лодок')
    //     }
    //   } else if (this.getcatschildren(this.GET_CATEGORIES, 1).some(elem => elem == this.$route.params.category)) {
    //     const res = await fetch(`${this.GET_SERVER_URL}/boat/${this.$route.params.id}`)
    //     const prod = await res.json()
    //     this.product= prod
    //     console.log(this.product)
    //     console.log('Запрос товара, категория лодок')
    //   } else {
    //     const res = await fetch(`${this.GET_SERVER_URL}/product/${this.$route.params.id}`)
    //     const prod = await res.json()
    //     this.product= prod
    //     console.log(this.product)
    //     console.log('Запрос товара, категория товаров')
    //   }
    //   document.title = `Нептун 55 ${this.product.name}`
    },
    async created(){
      console.log('product page created')
      console.log(this.$route.params.id)
      console.log(this.$route.params.category)
      if (this.$route.params.category == undefined){
        const res = await fetch(`${this.GET_SERVER_URL}/product/${this.$route.params.id}`)
        const prod = await res.json()
        this.product = prod
        console.log(this.product)
        // this.product= prod
        console.log('Запрос товара, товар не передан')
        if (this.getcatschildren(this.GET_CATEGORIES, 1).some(elem => elem == prod.category)) {
          const res = await fetch(`${this.GET_SERVER_URL}/boat/${this.$route.params.id}`)
          const prod = await res.json()
          this.product = prod
          console.log(prod)
          console.log(this.product)
          console.log('Запрос товара, категория лодок')
        }
      } else if (this.getcatschildren(this.GET_CATEGORIES, 1).some(elem => elem == this.$route.params.category)) {
        const res = await fetch(`${this.GET_SERVER_URL}/boat/${this.$route.params.id}`)
        const prod = await res.json()
        this.product= prod
        console.log(this.product)
        console.log('Запрос товара, категория лодок')
      } else {
        const res = await fetch(`${this.GET_SERVER_URL}/product/${this.$route.params.id}`)
        const prod = await res.json()
        this.product= prod
        console.log(this.product)
        console.log('Запрос товара, категория товаров')
      }
      console.log(this.GET_PRODUCTS)
      this.get_recomend_products()
      this.get_accessories_products()
      document.title = `${this.product.name}, купить в магазине Нептун 55`
    },
    watch: {
      '$route.params.id':{
        // immediate: true,
        handler: async function() {
          console.log('watcher productpage')
          if (this.$route.name === 'productpage') {
            console.log('watcher productpage выполняется')
            console.log(this.$route.name)
            console.log(this.$route.params.category)
            if (this.$route.params.category == undefined){
              const res = await fetch(`${this.GET_SERVER_URL}/product/${this.$route.params.id}`)
              const prod = await res.json()
              this.product = prod
              console.log(this.product)
              // this.product= prod
              console.log('Запрос товара, товар не передан')
              if (this.getcatschildren(this.GET_CATEGORIES, 1).some(elem => elem == prod.category)) {
                const res = await fetch(`${this.GET_SERVER_URL}/boat/${this.$route.params.id}`)
                const prod = await res.json()
                this.product = prod
                console.log(prod)
                console.log(this.product)
                console.log('Запрос товара, категория лодок')
              }
            } else if (this.getcatschildren(this.GET_CATEGORIES, 1).some(elem => elem == this.$route.params.category)) {
              const res = await fetch(`${this.GET_SERVER_URL}/boat/${this.$route.params.id}`)
              const prod = await res.json()
              this.product= prod
              console.log(this.product)
              console.log('Запрос товара, категория лодок')
            } else {
              const res = await fetch(`${this.GET_SERVER_URL}/product/${this.$route.params.id}`)
              const prod = await res.json()
              this.product= prod
              console.log(this.product)
              console.log('Запрос товара, категория товаров')
            }
            this.get_recomend_products()
            this.get_accessories_products()
            document.title = `${this.product.name}, купить в магазине Нептун 55`
          }
        },
      },
      // '$route.params.id':{
      //   immediate: true,
      //   async handler(id) {
      //     console.log(this.$route.params.id)
      //     console.log(this.$route.params.category)
      //     if (this.$route.params.category == undefined){
      //       const res = await fetch(`${this.GET_SERVER_URL}/product/${this.$route.params.id}`)
      //       const prod = await res.json()
      //       this.product = prod
      //       console.log(this.product)
      //       // this.product= prod
      //       console.log('Запрос товара, товар не передан')
      //       if (this.getcatschildren(this.GET_CATEGORIES, 1).some(elem => elem == prod.category)) {
      //         const res = await fetch(`${this.GET_SERVER_URL}/boat/${this.$route.params.id}`)
      //         const prod = await res.json()
      //         this.product = prod
      //         console.log(prod)
      //         console.log(this.product)
      //         console.log('Запрос товара, категория лодок')
      //       }
      //     } else if (this.getcatschildren(this.GET_CATEGORIES, 1).some(elem => elem == this.$route.params.category)) {
      //       const res = await fetch(`${this.GET_SERVER_URL}/boat/${this.$route.params.id}`)
      //       const prod = await res.json()
      //       this.product= prod
      //       console.log(this.product)
      //       console.log('Запрос товара, категория лодок')
      //     } else {
      //       const res = await fetch(`${this.GET_SERVER_URL}/product/${this.$route.params.id}`)
      //       const prod = await res.json()
      //       this.product= prod
      //       console.log(this.product)
      //       console.log('Запрос товара, категория товаров')
      //     }
      //     document.title = `Нептун 55 ${this.product.name}`
      //   },
      // },
    },
}


</script>
<style scoped>
@media all and (min-width: 780px) {
    .topblok{
      flex-direction: row;
    }

}
@media all and (max-width: 780px) {
    .topblok{
      flex-direction: column;
    }

}
.category_path{
  padding: 3px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.ProductPage{
  display: flex;
  flex-direction: column;
}
.topblok{
  display: flex;
  /* flex-direction: row; */
  justify-content: space-around;
}
.photo-slider{
  display: flex;
  justify-content: center;
}
.characteristics{
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 440px;
  padding: 12px;
}
.chars{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px dashed rgb(209, 209, 245);
}
.card-shopping {
  text-decoration: none;
  display: inline-block;
  padding: 15px 30px;
  margin: 10px 20px;
  border-radius: 10px;
  box-shadow: 0 0 40px 40px #55ccd9 inset, 0 0 0 0 #55ccd9;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  color: rgb(255, 255, 255);
  transition: .15s ease-in-out;
}
.card-shopping:hover {
  box-shadow: 0 0 10px 0 #55ccd9 inset, 0 0 10px 4px #55ccd9;
  color: #55ccd9;
}
.card-shopping a{
  text-decoration: none;
  color: #000;
}
.videos{
  display: flex;
  flex-wrap: wrap;
}
.product_recomends{
  overflow: hidden;
  /* display: flex; */
  /* flex-direction: row;  */
  max-height: 280px;
}
.rec_item{

}

</style>