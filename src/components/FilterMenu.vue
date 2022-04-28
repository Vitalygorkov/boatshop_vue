<template>
  <div v-if="getcatschildren(GET_CATEGORIES, 1).some(elem => elem == category)" class="search-menu-box">
      <div @click="sbros" class="sbros">x Сбросить фильтр</div>
      {{getcatschildren(GET_CATEGORIES, 1).some(elem => elem == category)}}
      {{category}} {{tree_id}} {{parent}}
        <accordion-section-range parametr="price" title="Цена" :min_value="getminprice()" :max_value="getmaxprice()" :step="100" unitType="Руб"/>
        <accordion-section-range parametr="lenght" title="Длина" :min_value="0" :max_value="550" :step="1" unitType="СМ"/>
        <accordion-section-range parametr="width" title="Ширина" :min_value="0" :max_value="220" :step="1" unitType="СМ"/>
        <accordion-section-range parametr="cockpit_length" title="Длина кокпита" :min_value="0" :max_value="500" :step="1" unitType="СМ"/>
        <accordion-section-range parametr="cockpit_width" title="Ширина кокпита" :min_value="0" :max_value="200" :step="1" unitType="СМ"/>
        <accordion-section-range parametr="cylinder_diameter" title="Диаметр борта" :min_value="0" :max_value="200" :step="1" unitType="СМ"/>
        <accordion-section-range parametr="load_capacity" title="Грузоподъемность" :min_value="0" :max_value="1200" :step="1" unitType="КГ"/>
        <accordion-section-range parametr="boat_weight" title="Вес лодки" :min_value="0" :max_value="150" :step="1" unitType="КГ"/>
        <accordion-section-range parametr="complete_set_weight" title="Вес полного комплекта" :min_value="0" :max_value="180" :step="1" unitType="КГ"/>
        <accordion-section-range parametr="maximum_motor_power" title="Макс. мощность мотора" :min_value="0" :max_value="100" :step="1" unitType="ЛС"/>
        <accordion-section-range parametr="fabric_thickness_side" title="Плотность ткни борта" :min_value="0" :max_value="2000" :step="1" unitType="Г/м2"/>
        <accordion-section-range parametr="fabric_thickness_bottom" title="Плотность ткни дна" :min_value="0" :max_value="2000" :step="1" unitType="Г/м2"/>
        <accordion-section-range parametr="inflatable_compartments" title="Кол-во надувных отсеков" :min_value="0" :max_value="15" :step="1" unitType="ШТ"/>
        <accordion-section-range parametr="passenger_capacity" title="Пассажировместимость" :min_value="0" :max_value="15" :step="1" unitType="Чел"/>

  </div>
  <div v-else class="search-menu-box">
      <div @click="sbros" class="sbros">x Сбросить фильтр</div>
      {{getcatschildren(GET_CATEGORIES, 1).some(elem => elem == category)}}
      {{category}} {{tree_id}} {{parent}}
        <accordion-section-range parametr="price" title="Цена" :min_value="getminprice()" :max_value="getmaxprice()" unitType="Руб"/>
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
            title: "Пр заголовок",
            title2: "2Пр заголовок2",
            content: "Пр контент",
            
            }
    },
    props: {
      category: Number,
      tree_id: Number,
      parent: Number,
      products: Array,
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
        getmaxprice(){
            // console.log('getmaxprice функция')

            // console.log(Math.max.apply(Math, this.products.map(function(o) { return o.price; })))
            let max = Math.max.apply(Math, this.products.map(function(o) { return o.price; }))
            return max
        },
        getminprice(){
            // console.log('getminprice функция')

            // console.log(Math.min.apply(Math, this.products.map(function(o) { return o.price; })))
            let min = Math.min.apply(Math, this.products.map(function(o) { return o.price; }))
            return min
        }
    },
    computed: {
    ...mapGetters(['GET_CATEGORIES','GET_PRODUCTS']),

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