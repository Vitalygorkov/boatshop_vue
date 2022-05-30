<template>
<div>
  <div @click="toggleShowForm" class="accordion_title">
    <div>
      {{ title }}
    </div>
      <img v-bind:class="{ img_turn: showForm }" src="../../assets/img/arrow.png">
  </div>
    <div v-bind:class="{ panel_on: showForm }" class="panel">
      <div v-for="point in obj_points" class="checks">
        <input type="checkbox" :id="point.id" :value="point.id" v-model="choice" />
        <label :for="point.id">
        {{point.name}}
        </label>
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
          choice: [],
          obj_points: [],


        }
    },
    props: {
      parametr: String,
      title: String,  
      points: Array,
    },
    computed: {
      ...mapGetters(['GET_FILTER_PRODUCTS_SET','GET_CATEGORIES','GET_PRODUCTS']),
            setfilter(){
        var  par = this.parametr
      var points = this.choice
      var obj = {[par]: points}

      return obj
      },

    },
    methods: {
      ...mapActions(['FILTERS_PRODUCTS_SET']),
      toggleShowForm() {
          this.showForm = !this.showForm
          // this.getmin(this.parametr)
          // this.getmax(this.parametr)
          
      },
      get_objects(arr){
        let newarr =[]
        for(let i =0; i < arr.length; i++ ) {
          newarr.push(JSON.parse(arr[i]))
        }
        return newarr
      },

    },
    watch: {
      // GET_FILTER_PRODUCTS_SET() {
      // console.log('сработал GET_FILTER_PRODUCTS_SET в аккордионе') 
      // if(Object.keys(this.GET_FILTER_PRODUCTS_SET).length == 1 && this.GET_FILTER_PRODUCTS_SET.manufacturer == 'reset'){
      //   console.log('сработал GET_FILTER_PRODUCTS_SET выполнено условие сброса')
      //     this.showForm = true
      //     this.local_min = this.min_value
      //     this.local_max = this.max_value
      // }
      GET_FILTER_PRODUCTS_SET() {
        // console.log('сработал GET_FILTER_PRODUCTS_SET в аккордионе') 
        if(Object.keys(this.GET_FILTER_PRODUCTS_SET).length == 0){
          // console.log('сработал GET_FILTER_PRODUCTS_SET значение 0')
            this.showForm = true
            this.choice = ["reset"]
        }
      },
      choice() {
        if(this.choice.length){
          this.FILTERS_PRODUCTS_SET(this.setfilter)
        }else{
          this.FILTERS_PRODUCTS_SET(this.setfilter)
          // this.showForm = true
        }

      },
      points() {
        this.obj_points = this.get_objects(this.points)
      },

      // products(){
      //   console.log('Вотчер мин макс аккордион')
      //   this.getmax(this.parametr)
      //   this.getmin(this.parametr)
      // }
    },
    mounted() {
      this.obj_points = this.get_objects(this.points)

    },
    created() {
    },
    
}


</script>
<style scoped>

img{
  /* display: none; */
  margin-right: 25px;
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

</style>