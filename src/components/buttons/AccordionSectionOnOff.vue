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
            <input
                type="range"
                :min="min_value"
                :max="max_value"
                step="100"
                v-model.number="local_min"
                @change="setRangeSlider"
            > 
            <input
                type="range"
                :min="min_value"
                :max="max_value"
                step="100"
                v-model.number="local_max"
                @change="setRangeSlider"
            >
          
          </div>
          <div class="unit_type">{{ unitType }}</div> 
        </div>
        <div class="range-values">
          <div>От: {{ local_min }} {{ unitType }}</div> 
          <div>До: {{ local_max }} {{ unitType }}</div>
        </div>
    </div>

</div>
</template>


<script>
import {mapActions} from 'vuex'
export default {
    data() {
        return {
            showForm: true,
            local_min: 0,
            local_max: this.max_value,
        }
    },
    props: {
      title: String,
      min_value: Number,
      max_value: Number,
      unitType: String,
      parametr: String,
    },
    methods: {
      ...mapActions(['FILTERS_PRODUCTS_SET']),
      toggleShowForm() {
          this.showForm = !this.showForm
        },
      setRangeSlider() {
        
        if (this.local_min > this.local_max) {
          let temp = this.local_max;
          this.local_max = this.local_min;
          this.local_min = temp;

          this.FILTERS_PRODUCTS_SET({"min_price": this.local_min, "max_price": this.local_max})
        }
        else {
          this.FILTERS_PRODUCTS_SET({"min_price": this.local_min, "max_price": this.local_max})
        }
      
      },
      // mounted() {
      //   this.filter_products_by_price();
      // }
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
  background-color: #dadada;
  width: 100%;
}
.accordion_title:hover {
  background-color: #ccc;
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
  background-color: #dadada;
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
}
.range-values{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>