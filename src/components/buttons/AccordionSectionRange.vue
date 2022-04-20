<template>
<div>
    <button @click="toggleShowForm" class="accordion">{{ title }}</button>
    <div v-bind:class="{ panel: showForm }">
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
        </div>{{ unitType }}
        <div class="range-values">
          <p>От: {{ local_min }} {{ unitType }}</p> 
          <p>До: {{ local_max }} {{ unitType }}</p>
        </div>
    </div>

</div>
</template>


<script>
import {mapActions} from 'vuex'
export default {
    name: 'SearchMenu',
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
<style>
/* Style the buttons that are used to open and close the accordion panel */
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active, .accordion:hover {
  background-color: #ccc;
}

/* Style the accordion panel. Note: hidden by default */
.panel {
  padding: 0 18px;
  background-color: white;
  display: none;
  overflow: hidden;
}
.range-slider{
    width: 200px;
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
</style>