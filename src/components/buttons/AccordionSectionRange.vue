<template>
<div>
    <button @click="toggleShowForm" class="accordion">{{ title2 }}</button>
    <div v-bind:class="{ panel: showForm }">
        <div class="range-slider">
          <input
              type="range"
              min="0"
              max="200000"
              step="100"
              v-model.number="minPrice"
              @change="setRangeSlider"
          >
          <input
              type="range"
              min="0"
              max="200000"
              step="100"
              v-model.number="maxPrice"
              @change="setRangeSlider"
          >
        </div>
        <div class="range-values">
          <p>Min: {{ minPrice }}</p>
          <p>Max: {{ maxPrice }}</p>
        </div>
    </div>

</div>
</template>


<script>
export default {
    name: 'SearchMenu',
    data() {
        return {
            showForm: true,
            minPrice:0,
            maxPrice:200000
        }
    },
    props: ['title2'],
    methods: {
        toggleShowForm() {
            this.showForm = !this.showForm
            console.log(this.showForm)
        },
        setRangeSlider() {
          if (this.minPrice > this.maxPrice) {
            let temp = this.maxPrice;
            this.maxPrice = this.minPrice;
            this.minPrice = temp;
          }
        }
    }
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