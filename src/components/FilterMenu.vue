<template>
<div v-if="products.length !==0">
  <div v-if="getcatschildren(GET_CATEGORIES, 1).some(elem => elem == category)" class="search-menu-box">
      <div @click="sbros" class="sbros">x Сбросить фильтр</div>
        <h3>Найдено товаров: {{this.prod_count}}</h3>
        <accordion-section-range parametr="price" title="Цена" :min_value="getmin('price')" :max_value="getmax('price')" :step="100" unitType="Руб"/>
        <accordion-section-range parametr="length" title="Длина" :min_value="getmin('length')" :max_value="getmax('length')" :step="1" unitType="СМ"/>
        <accordion-section-range parametr="width" title="Ширина" :min_value="getmin('width')" :max_value="getmax('width')" :step="1" unitType="СМ"/>
        <accordion-section-range parametr="cockpit_length" title="Длина кокпита" :min_value="getmin('cockpit_length')" :max_value="getmax('cockpit_length')" :step="1" unitType="СМ"/>
        <accordion-section-range parametr="cockpit_width" title="Ширина кокпита" :min_value="getmin('cockpit_width')" :max_value="getmax('cockpit_width')" :step="1" unitType="СМ"/>
        <accordion-section-range parametr="cylinder_diameter" title="Диаметр борта" :min_value="getmin('cylinder_diameter')" :max_value="getmax('cylinder_diameter')" :step="1" unitType="СМ"/>
        <accordion-section-range parametr="load_capacity" title="Грузоподъемность" :min_value="getmin('load_capacity')" :max_value="getmax('load_capacity')" :step="1" unitType="КГ"/>
        <accordion-section-range parametr="boat_weight" title="Вес лодки" :min_value="getmin('boat_weight')" :max_value="getmax('boat_weight')" :step="1" unitType="КГ"/>
        <accordion-section-range parametr="complete_set_weight" title="Вес полного комплекта" :min_value="getmin('complete_set_weight')" :max_value="getmax('complete_set_weight')" :step="1" unitType="КГ"/>
        <accordion-section-range parametr="maximum_motor_power" title="Макс. мощность мотора" :min_value="getmin('maximum_motor_power')" :max_value="getmax('maximum_motor_power')" :step="1" unitType="ЛС"/>
        <accordion-section-range parametr="fabric_thickness_side" title="Плотность ткни борта" :min_value="getmin('fabric_thickness_side')" :max_value="getmax('fabric_thickness_side')" :step="1" unitType="Г/м2"/>
        <accordion-section-range parametr="fabric_thickness_bottom" title="Плотность ткни дна" :min_value="getmin('fabric_thickness_bottom')" :max_value="getmax('fabric_thickness_bottom')" :step="1" unitType="Г/м2"/>
        <accordion-section-range parametr="inflatable_compartments" title="Кол-во надувных отсеков" :min_value="getmin('inflatable_compartments')" :max_value="getmax('inflatable_compartments')" :step="1" unitType="ШТ"/>
        <accordion-section-range parametr="passenger_capacity" title="Пассажировместимость" :min_value="getmin('passenger_capacity')" :max_value="getmax('passenger_capacity')" :step="1" unitType="Чел"/>

  </div>
  <div v-else class="search-menu-box">
      <!-- <div class="filter_panel"> -->
        <div>
        <h3>Найдено товаров: {{this.prod_count}}</h3>
        <!-- categorizedProducts: {{products.length}} -->
        <div @click="sbros" class="sbros">x Сбросить фильтр</div>
      </div>
        <accordion-section-range parametr="price" title="Цена" unitType="Руб" :min_value="getmin('price')" :max_value="getmax('price')" :step="100" :products="products"/>
  </div>
</div>

</template>


<script>
import AccordionSection from './buttons/AccordionSection'
import AccordionSectionRange from './buttons/AccordionSectionRange'
import {mapActions,mapGetters} from 'vuex'

export default {
    name: 'SearchMenu',
    data() {
        return {
            prod_prop: false,

            
            }
    },
    props: {
      category: Number,
      tree_id: Number,
      parent: Number,
      products: Array,
      prod_count: Number,
    },
    methods: {
        ...mapActions(['FILTERS_PRODUCTS_SET']),
        sbros() {
          this.FILTERS_PRODUCTS_SET({reset: true})
        },

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
        getmax(param_name){
            if(this.products.length !== 0){
            let max = Math.max.apply(Math, this.products.map(function(o) { 
                return o[param_name]; }))
            return max
            }

        },
        getmin(param_name){
            if(this.products.length !== 0){
            let min = Math.min.apply(Math, this.products.map(function(o) { 
                return o[param_name]; }))
            return min
            }
            // // console.log(this.products)
            // let min = Math.min.apply(Math, this.products.map(function(o) { 
            
            //     return o[param_name]; }))
            // return min
        },
        // getminprice(){
        //     // console.log('getminprice функция')

        //     // console.log(Math.min.apply(Math, this.products.map(function(o) { return o.price; })))
        //     let min = Math.min.apply(Math, this.products.map(function(o) { return o.price; }))
        //     return min
        // }

    },
    computed: {
    ...mapGetters(['GET_CATEGORIES','GET_PRODUCTS']),

    },
    watch: {
      products(){
        console.log('Вотчер мин макс аккордион')
        
      }
    },
    components: {
        AccordionSection,
        AccordionSectionRange


    }

}


</script>
<style>
.search-menu-box{
    display: flex;
    justify-content: center;
    background-color: white;
    display: block;
    min-width: 230px;
}
.filter_panel{
    position: fixed;
    top:40px;
}
.sbros{
    display: flex;
    justify-content: center;
    padding: 14px;
    background-color: #ffffff;
    border: solid 4px;
    border-color: #dadada;
}
.sbros:hover{
    background-color: #c0cbcf;
}
@media all and (max-width: 720px) {
    .search-menu-box{
        display: none;
    }
}

</style>