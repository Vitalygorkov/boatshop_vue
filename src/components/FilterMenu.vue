<template>
  <div class="search-menu-box">
      <div @click="sbros" class="sbros">x Сбросить фильтр</div>
      {{category}} {{tree_id}} {{parent}}
        <accordion-section-range parametr="price" title="Цена" :min_value="0" :max_value="215000" unitType="Руб"/>
        <accordion-section-range parametr="lenght" title="Длина" :min_value="0" :max_value="550" unitType="СМ"/>
        <accordion-section-range parametr="width" title="Ширина" :min_value="0" :max_value="220" unitType="СМ"/>
        <accordion-section-range parametr="cockpit_length" title="Длина кокпита" :min_value="0" :max_value="500" unitType="СМ"/>
        <accordion-section-range parametr="cockpit_width" title="Ширина кокпита" :min_value="0" :max_value="200" unitType="СМ"/>
        <accordion-section-range parametr="cylinder_diameter" title="Диаметр борта" :min_value="0" :max_value="200" unitType="СМ"/>
        <accordion-section-range parametr="load_capacity" title="Грузоподъемность" :min_value="0" :max_value="1200" unitType="КГ"/>
        <accordion-section-range parametr="boat_weight" title="Вес лодки" :min_value="0" :max_value="150" unitType="КГ"/>
        <accordion-section-range parametr="complete_set_weight" title="Вес полного комплекта" :min_value="0" :max_value="180" unitType="КГ"/>
        <accordion-section-range parametr="maximum_motor_power" title="Макс. мощность мотора" :min_value="0" :max_value="100" unitType="ЛС"/>
        <accordion-section-range parametr="fabric_thickness_side" title="Плотность ткни борта" :min_value="0" :max_value="2000" unitType="Г/м2"/>
        <accordion-section-range parametr="fabric_thickness_bottom" title="Плотность ткни дна" :min_value="0" :max_value="2000" unitType="Г/м2"/>
        <accordion-section-range parametr="inflatable_compartments" title="Кол-во надувных отсеков" :min_value="0" :max_value="15" unitType="ШТ"/>
        <accordion-section-range parametr="passenger_capacity" title="Пассажировместимость" :min_value="0" :max_value="15" unitType="Чел"/>


  </div>


</template>


<script>
import AccordionSection from './buttons/AccordionSection'
import AccordionSectionRange from './buttons/AccordionSectionRange'
import {mapActions} from 'vuex'

export default {
    name: 'SearchMenu',
    data() {
        return {
            title: "Пр заголовок",
            title2: "2Пр заголовок2",
            content: "Пр контент"
            }
    },
    props: {
      category: Number,
      tree_id: Number,
      parent: Number,
    },
    methods: {
        ...mapActions(['FILTERS_PRODUCTS_SET']),
        sbros() {
          this.FILTERS_PRODUCTS_SET({})
        },

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