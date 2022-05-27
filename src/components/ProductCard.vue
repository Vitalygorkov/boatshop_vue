<template>
<div class="card">
    <div v-if="this.$route.name != 'compare'" class="card-heart" v-bind:class="{ card_sravni_active: GET_HEART_PRODUCTS.includes(product) || GET_HEART_PRODUCTS.includes(product_boat) }" @click="add_favorit()">
        <!-- <a href="#"> -->
            <img src="../assets/img/like.png">
        <!-- </a> -->
    </div>
    <div v-if="getcatschildren(GET_CATEGORIES, 1).some(elem => elem == product.category)" class="card-sravni" v-bind:class="{ card_sravni_active: GET_COMPARE_PRODUCTS.includes(product) || GET_COMPARE_PRODUCTS.includes(product_boat), compare_img_icon : this.$route.name == 'compare' }" @click="add_compare()" >
        <!-- <a href="#"> -->
            <img src="../assets/img/sravni.png">
        <!-- </a> -->
    </div>
      <router-link :to="{ name: 'productpage', params:{ id: product.id, category: product.category } }">
    <!-- <a :href="product.product_abs_url"></a> -->
      <img :src="GET_MEDIA_URL+product.image.split('media')[1]" alt="" class="card-image">
      </router-link>
    <div class="card-body">
        <div class="card-title" v-bind:class="{ cardsale: product.sale !== 0 }">
            <!-- <a :href="product.product_abs_url"></a> -->
              <router-link :to="{ name: 'productpage', params:{ id: product.id, category: product.category } }">
              {{ product.name }}
              </router-link>
        </div>
        <div class="card-prise">
            {{ Math.round(product.price *(100-product.sale)/100) }} руб.
        </div>
        <div class="card-discount">
            <span v-if="product.sale !== 0" class="card-discount-price">{{Math.round(product.price*0.01*product.sale)}} Руб.</span>
            <span v-if="product.sale !== 0" class="card-discount-size">{{product.sale}}%</span>
        </div>
        <!-- <div class="card-xarakteristiki card-brona"> card brona это желтая эмблема акция -->
        <div v-if="getcatschildren(GET_CATEGORIES, 1).some(elem => elem == product.category) && this.$route.name != 'compare'" class="tabs_parametr">
            <div class="tab_parametr">
                <div class="name_parametr">Длина</div>
                <div v-if="product_boat.length" class="number_parametr">{{product_boat.length}} СМ</div>
            </div>
            <div class="tab_parametr">
                <div class="card_param_name">Ширина</div>
                <div v-if="product_boat.width" class="card_param_number">{{product_boat.width}} СМ</div>
            </div>
            <div class="tab_parametr">
                <div class="card_param_name">Диаметр баллонов</div>
                <div v-if="product_boat.cylinder_diameter" class="card_param_number">{{product_boat.cylinder_diameter}} СМ</div>
            </div>
            <div class="tab_parametr">
                <div class="card_param_name">Вес лодки</div>
                <div v-if="product_boat.boat_weight" class="card_param_number">{{product_boat.boat_weight}} КГ</div>
            </div>
            <div class="tab_parametr_hide" v-bind:class="{ tab_parametr_hide_on: ShowCharacteristics }">
                <div class="name_parametr">Производитель</div>
                <div v-if="product_boat.manufacturer" class="number_parametr">{{product_boat.manufacturer.name}}</div>
            </div>
            <div class="tab_parametr_hide" v-bind:class="{ tab_parametr_hide_on: ShowCharacteristics }">
                  <div class="card_param_name">Длина кокпита</div>
                  <div v-if="product_boat.cockpit_length" class="numcard_param_numberber">{{product_boat.cockpit_length}} СМ</div>
            </div>
            <div class="tab_parametr_hide" v-bind:class="{ tab_parametr_hide_on: ShowCharacteristics }">
                  <div class="card_param_name">Ширина кокпита</div>
                  <div v-if="product_boat.cockpit_width" class="card_param_number">{{product_boat.cockpit_width}} СМ</div>
            </div>
            <div class="tab_parametr_hide" v-bind:class="{ tab_parametr_hide_on: ShowCharacteristics }">
                  <div class="card_param_name">Плотность ткани дна</div>
                  <div v-if="product_boat.fabric_thickness_bottom" class="card_param_number">{{product_boat.fabric_thickness_bottom}} г/м<span style="vertical-align:super">2</span></div>
            </div>
            <div class="tab_parametr_hide" v-bind:class="{ tab_parametr_hide_on: ShowCharacteristics }">
                  <div class="card_param_name">Плотность ткани борта</div>
                  <div v-if="product_boat.fabric_thickness_side" class="card_param_number">{{product_boat.fabric_thickness_side}} г/м<span style="vertical-align:super">2</span></div>
            </div>
            <div class="tab_parametr_hide" v-bind:class="{ tab_parametr_hide_on: ShowCharacteristics }">
                  <div class="card_param_name">Количество надувных отсеков</div>
                  <div v-if="product_boat.inflatable_compartments" class="card_param_number">{{product_boat.inflatable_compartments}} ШТ</div>
            </div>
            <div class="tab_parametr_hide" v-bind:class="{ tab_parametr_hide_on: ShowCharacteristics }">
                  <div class="card_param_name">Пассажировместимость</div>
                  <div v-if="product_boat.passenger_capacity" class="card_param_number">{{product_boat.passenger_capacity}} ЧЕЛ</div>
            </div>
            <div class="tab_parametr_hide" v-bind:class="{ tab_parametr_hide_on: ShowCharacteristics }">
                  <div class="card_param_name">Максимальная мощность мотора</div>
                  <div v-if="product_boat.maximum_motor_power" class="card_param_number">{{product_boat.maximum_motor_power}} Л/С</div>
            </div>
            <div class="tab_parametr_hide" v-bind:class="{ tab_parametr_hide_on: ShowCharacteristics }">
                  <div class="card_param_name">Грузоподъемность</div>
                  <div v-if="product_boat.load_capacity" class="card_param_number">{{product_boat.load_capacity}} КГ</div>
            </div>
            <div class="tab_parametr_hide" v-bind:class="{ tab_parametr_hide_on: ShowCharacteristics }">
                  <div class="card_param_name">Вес полного комплекта</div>
                  <div v-if="product_boat.complete_set_weight" class="card_param_number">{{product_boat.complete_set_weight}} КГ</div>
            </div>
            <div class="tab_parametr_hide" v-bind:class="{ tab_parametr_hide_on: ShowCharacteristics }">
                  <div class="card_param_name">Фальшборт</div>
                  <div class="card_param_number">{{product_boat.bulwark | yesno}}</div>
            </div>
            <div class="tab_parametr_hide" v-bind:class="{ tab_parametr_hide_on: ShowCharacteristics }">
                  <div class="card_param_name">Киль</div>
                  <div class="card_param_number">{{product_boat.keel | yesno}}</div>
            </div>
            <div class="tab_parametr_hide" v-bind:class="{ tab_parametr_hide_on: ShowCharacteristics }">
                  <div class="card_param_name">Габариты упаковки</div>
                  <div v-if="product_boat.upak" class="card_param_number">{{product_boat.upak}}</div>
            </div>


            <div class="card-xarakteristiki" v-bind:class="{ cardbrona: product.sale !== 0 }">
              <!-- <a href="#">Все характеристики</a> -->
              <button class="charbutton" @click="ShowCharacteristics = !ShowCharacteristics">Все характеристики</button>
            </div>

          </div>
    </div>
    <router-link :to="{ name: 'contactformpage'}">
    <div v-if="this.$route.name != 'compare'" class="card-shopping">
        КУПИТЬ
    </div>
    </router-link>
</div>   
</template>

<script>

import {mapGetters, mapActions} from 'vuex'

export default {
    data() {
        return {
            ShowCharacteristics: true,
            product_boat: [],
        }
    },
    props:{
      product: [],
    },
    computed: {
    ...mapGetters(['GET_MEDIA_URL','GET_CATEGORIES','GET_BOATS','GET_COMPARE_PRODUCTS','GET_HEART_PRODUCTS']),
    },
    methods: {
      ...mapActions(['ADD_COMPARE_PRODUCTS', 'ADD_HEART_PRODUCTS']),
      getcatschildren(object, catparent, arr=[]){
        // console.log(object)
          getChildren(object,catparent)
              function getChildren(obj, parent,){
              for(let i = 0; i < obj.length; i += 1){
                  if(obj[i].parent == parent){
                  arr.push(obj[i].id)
                  getChildren(obj,obj[i].id)
                }
              }
          }
          arr.push(catparent)
          return arr
      },
      add_compare(){
        console.log('add compare func')
        if(this.getcatschildren(this.GET_CATEGORIES, 1).some(elem => elem == this.product.category)){
          console.log('add compare func IF')
          this.ADD_COMPARE_PRODUCTS(this.product_boat)
        }else{
          console.log('add compare func ELSE')
          this.ADD_COMPARE_PRODUCTS(this.product)
        }
      },
      add_favorit(){
        console.log('add favorit func')
        if(this.getcatschildren(this.GET_CATEGORIES, 1).some(elem => elem == this.product.category)){
          console.log('add favorit func IF')
          this.ADD_HEART_PRODUCTS(this.product_boat)
        }else{
          console.log('add favorit func ELSE')
          this.ADD_HEART_PRODUCTS(this.product)
        }
      },

        // geturl(category) {
        //     // let url = 'https://neptun55.ru/media'+ category
        //     this.GET_CATEGORIES.forEach(element => {
        //         console.log(element.id)
        //         if (element.id == category)
        //         return element
        //         else
        //         console.log("нет элемента")
        //     });
        //     // string.split('media')[1]
            
        // }
    },
    mounted() {
      // if (this.getcatschildren(this.GET_CATEGORIES, 1).some(elem => elem == this.product_prop.category) && this.product_prop.length == undefined){
      //     console.log('запрос лодок')
      //     console.log(this.product)
      //     let id = this.product_prop.id
      //     let boat = this.GET_BOATS.filter(function(item) {return item.id == id})
      //     this.product = boat
      // }else{
      //   // this.product = this.product_prop
      //   console.log(this.product)
      // }
      // this.product = this.product_prop
      // console.log(this.product)
    },
    created(){
      // this.product_boat = Object.assign({}, this.product)
      // console.log(this.product)
      // console.log(this.product.category)
      // console.log(this.GET_CATEGORIES)
      if (this.getcatschildren(this.GET_CATEGORIES, 1).some(elem => elem == this.product.category) || this.product.length == undefined){
          // console.log('запрос лодок')
          // console.log(this.product)
          // console.log(this.product)
          let id = this.product.id
          let boat = this.GET_BOATS.filter(function(item) {return item.id == id})
          this.product_boat = boat[0]
          // console.log(this.product_boat)
          // console.log(this.GET_BOATS)
          // console.log(this.product)
          // console.log(boat[0])
      }else{
        // this.product = this.product_prop
        // console.log(this.product)
      }
    },
}


</script>
<style>
.charbutton {
  background-color: white;
  /* color: #444; */
  cursor: pointer;
  /* padding: 12px; */
  width: 100%;
  text-align: center;
  border: none;
  /* outline: none; */
  transition: 0.4s;
  color: #2a5fc1;
}
.tab_parametr_hide{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.tab_parametr_hide_on{
    display: none;
}
.panel { 
  padding: 0 18px;
  background-color: #dadada;
  overflow: hidden;
}
.panel.panel_on {
  display: none;
}

  .card{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    max-width: 350px;
    max-height: 800px;
    margin: 8px;
    background: white;
    border-radius: 5px;
    overflow: hidden;
    font-family: montserrat;
  }
  .card-image{
    width: 100%;
    max-height: 250px;
    transition: 1s;
   }
   .card-image:hover{
    transform: scale(1.1);
  }
  .card-body{
    padding: 4px 7px;
  }
  .card-title{
    font-size: 20px;
    max-height: 46px;
    overflow: hidden;
  }
  .card-title a{
    text-decoration: none;
    color: #000;
    padding: 2px 2px
  }
  .card-title a:hover{
    color: red;
  }
  .cardsale::before{
    content: 'SALE';
    background: red;
    color: white;
    padding: 4px 4px 4px 4px;
    border-radius: 3px;
  }
  .card-prise{
    font-size: 20px;
    font-weight: bold;
    margin-top: 6px;
    padding: 4px 4px 4px 4px;
  }
  .card-discount{
    margin-top: 4px;
  }
  .card-discount-price{
    color: #a2a2a2;
    text-decoration: line-through;
  }
  .card-discount-size{
    color: red;
    font-weight: bold;
    padding: 2px;
    background: #fff1f1;
  }
  .card-xarakteristiki{
    display: flex;
    justify-content: center;
    padding-top: 10px;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 15px;

  }

  .cardbrona::before{
    content: 'АКЦИЯ';
    font-style: italic;
    background: #fffc00;
    padding: 2px 3px;
    border-radius: 3px;
    text-shadow: 0 0 1px #897f72;
    font-weight: normal;
  }
  .card-heart{
    position: absolute;
    top: 170px;
    right: 10px;
    background: rgb(166, 234, 246);
    padding: 5px;
    border-radius: 30px;
    opacity: 0;
    transition: opacity .5s ease-in;
    z-index: 1;
  }
  .card:hover{
    box-shadow: 0 0 5px rgb(132, 229, 246);
  }
  .card:hover .card-heart{
    opacity: 1;
  }
  .card-sravni{
    position: absolute;
    top: 170px;
    left: 8px;
    background: rgb(174, 234, 251);
    padding: 5px;
    border-radius: 30px;
    opacity: 0;
    transition: opacity .5s ease-in-out;
    z-index: 1;
  }
  .card_sravni_active{
    background-color: #0ab3fc;
    transition: 0.3s ease-in-out;
    opacity: 1;
  }
  .card-sravni:hover{
    box-shadow: 0 0 5px rgb(166, 234, 246);
  }
  .compare_img_icon{
    margin-top: -160px;
  }
  .card:hover .card-sravni{
    opacity: 1;
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

  /* .card{
    position: relative;
    width: 300px;
    height: 400px;
    background: white;
    border-radius: 5px;
    overflow: hidden;
    font-family: montserrat;
  }
  .card-image{
    max-width: 100%;
    max-height: 250px;
    transition: 1s;
   }
   .card-image:hover{
    transform: scale(1.1);
  }


  .card-body{
    padding: 4px 7px;
  }
  .card-title{
    font-size: 18px;
  }
  .card-title a{
    text-decoration: none;
    color: #000;
  }
  .card-title a:hover{
    color: red;
  }
  .cardsale::before{
    content: 'SALE';
    background: red;
    color: white;
    padding: 2px 4px;
    border-radius: 3px;
  }
  .card-prise{
    font-size: 20px;
    font-weight: bold;
    margin-top: 6px;
  }
  .card-discount{
    font-size: 3;
    margin-top: 4px;
  }
  .card-discount-price{
    color: #a2a2a2;
    text-decoration: line-through;
  }
  .card-discount-size{
    color: red;
    font-weight: bold;
    padding: 2px;
    background: #fff1f1;
  }
  .card-xarakteristiki{
    font-size: 15px;
  }
  .card-xarakteristiki a{
    text-decoration: none;
    color: #2a5fc1;
    margin-top: 4px;
    background: #ecf6fb;
  }
  .card-xarakteristiki a:hover{
    color: rgb(136, 0, 255);
  }
  .card-brona::before{
    content: 'АКЦИЯ';
    font-style: italic;
    background: #fffc00;
    padding: 2px 3px;
    border-radius: 3px;
    text-shadow: 0 0 1px #897f72;
    font-weight: normal;
  }
  .card-heart{
    position: absolute;
    top: 170px;
    right: 10px;
    background: rgb(174, 234, 251);
    padding: 5px;
    border-radius: 30px;
    opacity: 0;
    transition: opacity .5s ease-in;
    z-index: 2;
  }
  .card:hover{
    box-shadow: 0 0 5px rgb(155, 205, 214);
  }
  .card:hover .card-heart{
    opacity: 1;
  }
  .card-shopping {
    text-decoration: none;
    display: inline-block;
    padding: 15px 30px;
    margin: 10px 20px;
    border-radius: 10px;
    box-shadow: 0 0 40px 40px #F137A6 inset, 0 0 0 0 #F137A6;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    letter-spacing: 2px;
    color: white;
    transition: .15s ease-in-out;
  }
  .card-shopping:hover {
    box-shadow: 0 0 10px 0 #F137A6 inset, 0 0 10px 4px #F137A6;
    color: #F137A6;
  } */

    .tabs_parametr{
  display: flex;
  flex-direction: column;
  height: 100%;
  /* flex-wrap: nowrap;
  flex-flow: row nowrap;
  justify-content: space-around; */
  }
  .tab_parametr{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .number_parametr{
    display: flex;
  margin-right: 3px;
  /* flex-direction: column;  */
  height: 50%;
  }
  .name_parametr{
    display: flex;
    /* flex-direction: column;   */
    left: 0;
    height: 50%;
    flex-basis: 50%;
  }
@media all and (max-width: 720px) {
    .card-sravni{
      opacity: 0.8;
    }
    .card-heart{
      opacity: 0.8;
    }


}  
</style>