<template>
<div class="ProductPage">
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
          <div class="card-shopping">
             <a href="#">В КОРЗИНУ</a>
          </div>
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
        product: [],
        // productID: this.$route.params.id,
      }
    },
    props:{
    },
    computed: {
    ...mapGetters(['GET_MEDIA_URL','GET_SERVER_URL','GET_CATEGORIES']),

    },
    components: {
      carusel,
    },
    
    methods: {
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
      document.title = `Нептун 55 ${this.product.name}`
    },
    watch: {
      '$route.params.id':{
        immediate: true,
        async handler(id) {
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
          document.title = `Нептун 55 ${this.product.name}`
        },
      },
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

</style>