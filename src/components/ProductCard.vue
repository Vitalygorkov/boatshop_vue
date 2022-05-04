<template>
<div class="card">
    <div class="card-heart">
        <a href="#">
            <img src="../assets/img/like.png">
        </a>
    </div>
    <div class="card-sravni">
        <a href="#">
            <img src="../assets/img/sravni.png">
        </a>
    </div>
      <router-link :to="{ name: 'productpage', params:{ id: product.id, category: product.category } }">
    <!-- <a :href="product.product_abs_url"></a> -->
      <img :src="GET_MEDIA_URL+product.image.split('media')[1]" alt="" class="card-image">
      </router-link>
    <div class="card-body">
        <div class="card-title" v-bind:class="{ cardsale: product.sale !== 0 }">
            <!-- <a :href="product.product_abs_url"></a> -->
              <router-link :to="{ name: 'productpage', params:{ id: product.id, category: product.category } }">
              <a :href="product.product_abs_url"> 
              {{ product.name }}
              </a>
              </router-link>
        </div>
        <div class="card-prise">
            {{ product.price *(100-product.sale)/100 }} руб.
        </div>
        <div class="card-discount">
            <span v-if="product.sale !== 0" class="card-discount-price">{{product.price*0.01*product.sale}} Руб.</span>
            <span v-if="product.sale !== 0" class="card-discount-size">{{product.sale}}%</span>
        </div>
        <!-- <div class="card-xarakteristiki card-brona"> card brona это желтая эмблема акция -->
          <div class="card-xarakteristiki" v-bind:class="{ cardbrona: product.sale !== 0 }">
            <a href="#">ХАРАКТЕРИСТИКИ</a>  
        </div>
        <div v-if="getcatschildren(GET_CATEGORIES, 1).some(elem => elem == product.category)" class="tabs_parametr">
            <div class="tab_parametr">
                <div class="name_parametr">Длина</div>
                <div class="number_parametr">{{product.length}} СМ</div>
            </div>
            <div class="tab_parametr">
                <div class="name">Ширина</div>
                <div class="number">{{product.width}} СМ</div>
            </div>
            <div class="tab_parametr">
                <div class="name">Диаметр баллонов</div>
                <div class="number">{{product.cylinder_diameter}} СМ</div>
            </div>
            <div class="tab_parametr">
                <div class="name">Вес лодки</div>
                <div class="number">{{product.boat_weight}} КГ</div>
            </div>
          </div>
    </div>
    <div class="card-shopping">
        <a href="#">В КОРЗИНУ</a>
    </div>

</div>   
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    props:{
      product: [],
    },
    computed: {
    ...mapGetters(['GET_MEDIA_URL','GET_CATEGORIES']),
    },
    methods: {
      getcatschildren(object, catparent, arr=[]){
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
}


</script>
<style>
  .card{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    max-width: 350px;
    max-height: 600px;
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
    justify-content: space-between;
    padding-top: 10px;
    padding-left: 25px;
    padding-right: 25px;
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
    transition: opacity .5s ease-in;
    z-index: 1;
  }
  .card-sravni:hover{
    box-shadow: 0 0 5px rgb(166, 234, 246);
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
</style>