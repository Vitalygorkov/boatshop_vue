<template>
<div class="card">
    <div class="card-heart">
        <a href="#">
            <img src="./..\assets\img\like.png">
        </a>
    </div>
      <router-link :to="{ name: 'productpage', params:{ id: product.id } }">
    <!-- <a :href="product.product_abs_url"></a> -->
      <a :href="product.product_abs_url">
      <img :src="GET_MEDIA_URL+product.image.split('media')[1]" alt="" class="card-image">
      </a>
      </router-link>
    <div class="card-body">
        <div class="card-title card-sale">
            <!-- <a :href="product.product_abs_url"></a> -->
              <router-link :to="{ name: 'productpage', params:{ id: product.id } }">
              <a :href="product.product_abs_url"> 
              {{ product.name }}
              </a>
              </router-link>
        </div>
        <div class="card-prise">
            {{ product.price }} руб.
        </div>
        <div class="card-discount">
            <span class="card-discount-price">1500 руб.</span>
            <span class="card-discount-size">7%</span>
        </div>
        <div class="card-xarakteristiki card-brona">
            <a href="#">ХАРАКТЕРИСТИКИ</a>  
        </div>
    </div>
    <!-- <div class="card-shopping">
        <a href="#">В КОРЗИНУ</a>
    </div> -->
</div>   
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    props: ['product'],
    computed: {
    ...mapGetters(['GET_MEDIA_URL',]),

    },
    methods: {
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
  .card-sale::before{
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
  }
</style>