<template>
<div>
  <div @click="toggleShowForm" class="accordion_title">
    <div>
      {{ title }}
    </div>
      <img v-bind:class="{ img_turn: showForm }" src="../../assets/img/arrow.png">
  </div>
    <div v-bind:class="{ panel_on: showForm }" class="panel">
        <div class="slider">
          <div class="range-slider">
            <input class="styled-slider"
                type="range"
                :min="min_value"
                :max="max_value"
                :step="step"
                v-model.number="local_min"
                @change="setRangeSlider"
            > 
            <input class="styled-slider"
                type="range"
                :min="min_value"
                :max="max_value"
                :step="step"
                v-model.number="local_max"
                @change="setRangeSlider"
            >
          
          </div>
          <div class="unit_type">{{ unitType }}</div> 
        </div>
        <div class="range-values">
          <div>От: {{ local_min }} {{ unitType }}</div> 
          <div>До: {{ local_max }} {{ unitType }}</div>
            <!-- {{getmax(this.parametr)}}
            {{getmax(this.parametr)}} -->
        </div>
    </div>

</div>
</template>


<script>
import {mapActions,mapGetters} from 'vuex'
export default {
    data() {
        return {
          showForm: true,
          // min_value: Number,
          // max_value: Number,
          local_min: this.min_value,
          local_max: this.max_value,
          // min_value: 0,
          // max_value: 100000,
        }
    },
    props: {
      title: String,
      min_value: Number,
      max_value: Number,
      step: Number,
      unitType: String,
      parametr: String,
      products: Array,
    },
    computed: {
      ...mapGetters(['GET_FILTER_PRODUCTS_SET','GET_CATEGORIES','GET_PRODUCTS']),
      setfilter(){
        var  par = this.parametr

      var min = this.local_min
      var max = this.local_max
      var obj = {[par]:{min: min, max: max}}

      return obj
      },
      // getmaxParam: function (){

      //   // console.log(this.products)
      //   let max = Math.max.apply(Math, this.products.map(function(o) { 
      //       return o[this.parametr]; }))
      //   // this.max_value = max
      //   return max
      // },
      // getminParam: function (){
      //   console.log(this.products)
      //   let min = Math.min.apply(Math, this.products.map(function(o) { 
      //       return o[this.parametr]; }))
      //   // this.min_value = min
      //   return min
      // },
    },
    methods: {
      ...mapActions(['FILTERS_PRODUCTS_SET']),
      toggleShowForm() {
          this.showForm = !this.showForm
          // this.getmin(this.parametr)
          // this.getmax(this.parametr)
          
        },

      setRangeSlider() {
        if (this.local_min > this.local_max) {
          let temp = this.local_max;
          this.local_max = this.local_min;
          this.local_min = temp;

          this.FILTERS_PRODUCTS_SET(this.setfilter)
        }
        else {
          this.FILTERS_PRODUCTS_SET(this.setfilter)
        }
      
      },
      getmax(param_name){
        console.log(this.products)
        let max = Math.max.apply(Math, this.products.map(function(o) { 
            return o[param_name]; }))
        this.max_value = max
        return max
      },
      getmin(param_name){
        console.log(this.products)
        let min = Math.min.apply(Math, this.products.map(function(o) { 
            return o[param_name]; }))
        this.min_value = min
        return min
      },
      // mounted() {
      //   this.filter_products_by_price();
      // }
    },
    watch: {
      GET_FILTER_PRODUCTS_SET() {
        // console.log('сработал GET_FILTER_PRODUCTS_SET в аккордионе') 
        if(Object.keys(this.GET_FILTER_PRODUCTS_SET).length == 0){
          // console.log('сработал GET_FILTER_PRODUCTS_SET значение 0')
            this.showForm = true
            this.local_min = this.min_value
            this.local_max = this.max_value
        }
      },
      // products(){
      //   console.log('Вотчер мин макс аккордион')
      //   this.getmax(this.parametr)
      //   this.getmin(this.parametr)
      // }
    },
    created() {
    },
    
}


</script>
<style scoped>
/* Style the buttons that are used to open and close the accordion panel */
img{
  /* display: none; */
  margin-right: 15px;
  transform: rotate(180deg);
  width: 15px;
  height: 15px;
  opacity: 0.4;
}
.img_turn{
  transform: rotate(0deg);
  transition: 0.25s;
}

.accordion_title{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 9px;
  background-color: #e1f6fc;
  width: 100%;
}
.accordion_title:hover {
  background-color: rgb(201, 216, 218);
}
/* .accordion {
  background-color: #dadada;
  color: #444;
  cursor: pointer;
  padding: 4px;
  width: 100%;
  text-align: start;
  border: none;
  outline: none;
  transition: 0.4s;
} */


.slider{
  width: 200px;
  display: flex;
  flex-direction: row;
}
.unit_type{
  margin-right: 10px;
}
/* Style the accordion panel. Note: hidden by default */
.panel {
  font-family: Montserrat, Helvetica, sans-serif;
  font-size: 14px;
  padding: 0 10px;
  background-color: #e1f6fc;
  /* overflow: hidden; */
}
.panel_on {
  display: none;
}
.range-slider{
    width: 200px;
    padding-top: 10px;
    margin: auto 16px;
    text-align: center;
    position: relative;
}
/* стили с сайта https://toughengineer.github.io/demo/slider-styler/slider-styler.html */
input[type=range].styled-slider {
  height: 0.2em;
  -webkit-appearance: none;
}

input[type=range].styled-slider:focus {
  outline: none;
}

/*webkit*/
input[type=range].styled-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 1.5em;
  height: 1.5em;
  border-radius: 1em;
  background: #007cf8;
  border: 2px solid #D3D3D3;
  box-shadow: 0 0 2px black;
  margin-top: calc(max((0.5em - 2px - 2px) * 0.5,0px) - max(1.5em * 0.5,2px));
}

input[type=range].styled-slider::-webkit-slider-runnable-track {
  height: 0.5em;
  border: 2px solid #B2B2B2;
  border-radius: 0.5em;
  background: #efefef;
  box-shadow: none;
}

input[type=range].styled-slider::-webkit-slider-thumb:hover {
  background: #0061c3;
}

input[type=range].styled-slider:hover::-webkit-slider-runnable-track {
  background: #e5e5e5;
  border-color: #9a9a9a;
}

input[type=range].styled-slider::-webkit-slider-thumb:active {
  background: #2f98f9;
}

input[type=range].styled-slider:active::-webkit-slider-runnable-track {
  background: #f5f5f5;
  border-color: #c1c1c1;
}

/*mozilla*/
input[type=range].styled-slider::-moz-range-thumb {
  width: max(calc(1.5em - 2px - 2px),0px);
  height: max(calc(1.5em - 2px - 2px),0px);
  border-radius: 1em;
  background: #007cf8;
  border: 2px solid #D3D3D3;
  box-shadow: 0 0 2px black;
}

input[type=range].styled-slider::-moz-range-track {
  height: max(calc(0.5em - 2px - 2px),0px);
  border: 2px solid #B2B2B2;
  border-radius: 0.5em;
  background: #efefef;
  box-shadow: none;
}

input[type=range].styled-slider::-moz-range-thumb:hover {
  background: #0061c3;
}

input[type=range].styled-slider:hover::-moz-range-track {
  background: #e5e5e5;
  border-color: #9a9a9a;
}

input[type=range].styled-slider::-moz-range-thumb:active {
  background: #2f98f9;
}

input[type=range].styled-slider:active::-moz-range-track {
  background: #f5f5f5;
  border-color: #c1c1c1;
}

/*ms*/
input[type=range].styled-slider::-ms-fill-upper {
  background: transparent;
  border-color: transparent;
}

input[type=range].styled-slider::-ms-fill-lower {
  background: transparent;
  border-color: transparent;
}

input[type=range].styled-slider::-ms-thumb {
  width: 1.5em;
  height: 1.5em;
  border-radius: 1em;
  background: #007cf8;
  border: 2px solid #D3D3D3;
  box-shadow: 0 0 2px black;
  margin-top: 0;
  box-sizing: border-box;
}

input[type=range].styled-slider::-ms-track {
  height: 0.5em;
  border-radius: 0.5em;
  background: #efefef;
  border: 2px solid #B2B2B2;
  box-shadow: none;
  box-sizing: border-box;
}

input[type=range].styled-slider::-ms-thumb:hover {
  background: #0061c3;
}

input[type=range].styled-slider:hover::-ms-track {
  background: #e5e5e5;
  border-color: #9a9a9a;
}

input[type=range].styled-slider::-ms-thumb:active {
  background: #2f98f9;
}

input[type=range].styled-slider:active::-ms-track {
  background: #f5f5f5;
  border-color: #c1c1c1;
}
/* Первые стили от канала go frontend устанавливают в одну линию */
.range-slider svg, .range-slider input[type=range]{
    position: absolute;
    left: 0;
    bottom: 0;
}
/* input[type=range] {
    position: absolute;
    left: 0;
    bottom: 0;
} */


input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    /* top: 2px; */
    /* margin-top: -7px;  */
    
} 
/* 
.range-slider svg, .range-slider input[type=range] {
    position: absolute;
    left: 0;
    bottom: 0;
}

input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
}  */
.range-values{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>