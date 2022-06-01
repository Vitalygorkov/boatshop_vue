<template>
<div class="compare">
  <div class="categories_path_box">
    <div class="category_path"><router-link :to="{ name: 'home' }">Главная</router-link></div>
  </div>


<div class="compare_results">
      <div class="favorit_prod_box"><h3>Товары для сравнения: {{this.filteredProducts.length}}</h3><div @click="ADD_COMPARE_PRODUCTS('reset')" class="favorit_prod_sbros">сбросить все</div></div> 
      <!-- <div class="favorit_prod_box" v-if="this.$route.name === 'favorit'"><h3>Избранные товары: {{this.filteredProducts.length}}</h3><div class="favorit_prod_sbtos">сбросить все</div></div>  -->
      <div class="compare_box">

        <div class="compare_products_box">
          
          <div v-for="product in slide_products_0" :key="product.id + 'A'">
              <button v-if="filteredProducts.length" class="compare_prev" @click="prevSlide0()">Prev</button>
              <button v-if="filteredProducts.length" class="compare_next" @click="nextSlide0()">Next</button>
              <product-card :product="product"/>
          </div>
          <div v-for="product in slide_products_1" :key="product.id + 'B'">
              <button v-if="filteredProducts.length" class="compare_prev" @click="prevSlide1()">Prev</button>
              <button v-if="filteredProducts.length" class="compare_next" @click="nextSlide1()">Next</button>
              <product-card :product="product"/>
          </div>
          <div class="dop-item" v-for="product in slide_products_2" :key="product.id + 'C'">
              <button v-if="filteredProducts.length" class="compare_prev" @click="prevSlide2()">Prev</button>
              <button v-if="filteredProducts.length" class="compare_next" @click="nextSlide2()">Next</button>
              <product-card :product="product"/>
          </div>
          <div class="dop-item" v-for="product in slide_products_3" :key="product.id + 'D'">
              <button v-if="filteredProducts.length" class="compare_prev" @click="prevSlide3()">Prev</button>
              <button v-if="filteredProducts.length" class="compare_next" @click="nextSlide3()">Next</button>
              <product-card :product="product"/>
          </div>

        </div>

        <div class="params_compare">

          <div class="params_compare_item">
            <div class="param_compare_name">Цена</div>
            <div class="param_compare_numbers" >
                    <div>
                        <div v-if="this.slide_products_0.length">{{this.slide_products_0[0].price}}</div>
                    </div>
                    <div>
                        <div v-if="this.slide_products_1.length">{{this.slide_products_1[0].price}}</div>
                    </div>

                    <div v-if="this.slide_products_2.length" class="dop-item">
                        <div v-if="this.slide_products_2.length">{{this.slide_products_2[0].price}}</div>
                    </div>

                    <div v-if="this.slide_products_3.length" class="dop-item">
                        <div v-if="this.slide_products_3.length">{{this.slide_products_3[0].price}}</div>
                    </div>
            </div>
          </div>

          
          <div class="params_compare_item">
            <div class="param_compare_name">Производитель</div>
            <div class="param_compare_numbers" >
                    <div>
                        <div v-if="this.slide_products_0.length">{{this.slide_products_0[0].manufacturer.name}}</div>
                    </div>
                    <div>
                        <div v-if="this.slide_products_1.length">{{this.slide_products_1[0].manufacturer.name}}</div>
                    </div>

                    <div v-if="this.slide_products_2.length" class="dop-item">
                        <div v-if="this.slide_products_2.length">{{this.slide_products_2[0].manufacturer.name}}</div>
                    </div>

                    <div v-if="this.slide_products_3.length" class="dop-item">
                        <div v-if="this.slide_products_3.length">{{this.slide_products_3[0].manufacturer.name}}</div>
                    </div>
            </div>
          </div>

          <div class="params_compare_item">
            <div class="param_compare_name">Тип дна</div>
            <div class="param_compare_numbers" >
                    <div>
                        <div v-if="this.slide_products_0.length">{{this.get_category_name(this.slide_products_0[0].category)}}</div>
                    </div>
                    <div>
                        <div v-if="this.slide_products_1.length">{{this.get_category_name(this.slide_products_1[0].category)}}</div>
                    </div>

                    <div v-if="this.slide_products_2.length" class="dop-item">
                        <div v-if="this.slide_products_2.length">{{this.get_category_name(this.slide_products_2[0].category)}}</div>
                    </div>

                    <div v-if="this.slide_products_3.length" class="dop-item">
                        <div v-if="this.slide_products_3.length">{{this.get_category_name(this.slide_products_3[0].category)}}</div>
                    </div>
            </div>
          </div>

          <div class="params_compare_item">
            <div class="param_compare_name">Цвет</div>
            <div class="param_compare_numbers" >
                    <div>
                        <div v-if="this.slide_products_0[0].color.name">{{this.slide_products_0[0].color.name}}</div>
                    </div>
                    <div>
                        <div v-if="this.slide_products_1[0].color.name">{{this.slide_products_1[0].color.name}}</div>
                    </div>

                    <div v-if="this.slide_products_2.length" class="dop-item">
                        <div v-if="this.slide_products_2[0].color.name">{{this.slide_products_2[0].color.name}}</div>
                    </div>

                    <div v-if="this.slide_products_3.length" class="dop-item">
                        <div v-if="this.slide_products_3[0].color.name">{{this.slide_products_3[0].color.name}}</div>
                    </div>
            </div>
          </div>

          <div class="params_compare_item">
            <div class="param_compare_name">Длина</div>
            <div class="param_compare_numbers" >
                    <div>
                        <div v-if="this.slide_products_0.length">{{this.slide_products_0[0].length}}</div>
                    </div>
                    <div>
                        <div v-if="this.slide_products_1.length">{{this.slide_products_1[0].length}}</div>
                    </div>

                    <div v-if="this.slide_products_2.length" class="dop-item">
                        <div v-if="this.slide_products_2.length">{{this.slide_products_2[0].length}}</div>
                    </div>

                    <div v-if="this.slide_products_3.length" class="dop-item">
                        <div v-if="this.slide_products_3.length">{{this.slide_products_3[0].length}}</div>
                    </div>
            </div>
          </div>

          <div class="params_compare_item">
            <div class="param_compare_name">Ширина</div>
            <div class="param_compare_numbers" >
                    <div>
                        <div v-if="this.slide_products_0.length">{{this.slide_products_0[0].width}}</div>
                    </div>
                    <div>
                        <div v-if="this.slide_products_1.length">{{this.slide_products_1[0].width}}</div>
                    </div>

                    <div v-if="this.slide_products_2.length" class="dop-item">
                        <div v-if="this.slide_products_2.length">{{this.slide_products_2[0].width}}</div>
                    </div>

                    <div v-if="this.slide_products_3.length" class="dop-item">
                        <div v-if="this.slide_products_3.length">{{this.slide_products_3[0].width}}</div>
                    </div>
            </div>
          </div>

          <div class="params_compare_item">
            <div class="param_compare_name">Длина кокпита</div>
            <div class="param_compare_numbers" >
                    <div>
                        <div v-if="this.slide_products_0.length">{{this.slide_products_0[0].cockpit_length}}</div>
                    </div>
                    <div>
                        <div v-if="this.slide_products_1.length">{{this.slide_products_1[0].cockpit_length}}</div>
                    </div>

                    <div v-if="this.slide_products_2.length" class="dop-item">
                        <div v-if="this.slide_products_2.length">{{this.slide_products_2[0].cockpit_length}}</div>
                    </div>

                    <div v-if="this.slide_products_3.length" class="dop-item">
                        <div v-if="this.slide_products_3.length">{{this.slide_products_3[0].cockpit_length}}</div>
                    </div>
            </div>
          </div>

          <div class="params_compare_item">
            <div class="param_compare_name">Ширина кокпита</div>
            <div class="param_compare_numbers" >
                    <div>
                        <div v-if="this.slide_products_0.length">{{this.slide_products_0[0].cockpit_width}}</div>
                    </div>
                    <div>
                        <div v-if="this.slide_products_1.length">{{this.slide_products_1[0].cockpit_width}}</div>
                    </div>

                    <div v-if="this.slide_products_2.length" class="dop-item">
                        <div v-if="this.slide_products_2.length">{{this.slide_products_2[0].cockpit_width}}</div>
                    </div>

                    <div v-if="this.slide_products_3.length" class="dop-item">
                        <div v-if="this.slide_products_3.length">{{this.slide_products_3[0].cockpit_width}}</div>
                    </div>
            </div>
          </div>

          <div class="params_compare_item">
            <div class="param_compare_name">Диаметр борта</div>
            <div class="param_compare_numbers" >
                    <div>
                        <div v-if="this.slide_products_0.length">{{this.slide_products_0[0].cylinder_diameter}}</div>
                    </div>
                    <div>
                        <div v-if="this.slide_products_1.length">{{this.slide_products_1[0].cylinder_diameter}}</div>
                    </div>

                    <div v-if="this.slide_products_2.length" class="dop-item">
                        <div v-if="this.slide_products_2.length">{{this.slide_products_2[0].cylinder_diameter}}</div>
                    </div>

                    <div v-if="this.slide_products_3.length" class="dop-item">
                        <div v-if="this.slide_products_3.length">{{this.slide_products_3[0].cylinder_diameter}}</div>
                    </div>
            </div>
          </div>

          <div class="params_compare_item">
            <div class="param_compare_name">Плотность ткани борта</div>
            <div class="param_compare_numbers" >
                    <div>
                        <div v-if="this.slide_products_0.length">{{this.slide_products_0[0].fabric_thickness_side}}</div>
                    </div>
                    <div>
                        <div v-if="this.slide_products_1.length">{{this.slide_products_1[0].fabric_thickness_side}}</div>
                    </div>

                    <div v-if="this.slide_products_2.length" class="dop-item">
                        <div v-if="this.slide_products_2.length">{{this.slide_products_2[0].fabric_thickness_side}}</div>
                    </div>

                    <div v-if="this.slide_products_3.length" class="dop-item">
                        <div v-if="this.slide_products_3.length">{{this.slide_products_3[0].fabric_thickness_side}}</div>
                    </div>
            </div>
          </div>

          <div class="params_compare_item">
            <div class="param_compare_name">Плотность ткани дна</div>
            <div class="param_compare_numbers" >
                    <div>
                        <div v-if="this.slide_products_0.length">{{this.slide_products_0[0].fabric_thickness_bottom}}</div>
                    </div>
                    <div>
                        <div v-if="this.slide_products_1.length">{{this.slide_products_1[0].fabric_thickness_bottom}}</div>
                    </div>

                    <div v-if="this.slide_products_2.length" class="dop-item">
                        <div v-if="this.slide_products_2.length">{{this.slide_products_2[0].fabric_thickness_bottom}}</div>
                    </div>

                    <div v-if="this.slide_products_3.length" class="dop-item">
                        <div v-if="this.slide_products_3.length">{{this.slide_products_3[0].fabric_thickness_bottom}}</div>
                    </div>
            </div>
          </div>

          
          <div class="params_compare_item">
            <div class="param_compare_name">Количество надувных отсеков</div>
            <div class="param_compare_numbers" >
                    <div>
                        <div v-if="this.slide_products_0.length">{{this.slide_products_0[0].inflatable_compartments}}</div>
                    </div>
                    <div>
                        <div v-if="this.slide_products_1.length">{{this.slide_products_1[0].inflatable_compartments}}</div>
                    </div>

                    <div v-if="this.slide_products_2.length" class="dop-item">
                        <div v-if="this.slide_products_2.length">{{this.slide_products_2[0].inflatable_compartments}}</div>
                    </div>

                    <div v-if="this.slide_products_3.length" class="dop-item">
                        <div v-if="this.slide_products_3.length">{{this.slide_products_3[0].inflatable_compartments}}</div>
                    </div>
            </div>
          </div>
          
          <div class="params_compare_item">
            <div class="param_compare_name">Грузоподъемность</div>
            <div class="param_compare_numbers" >
                    <div>
                        <div v-if="this.slide_products_0.length">{{this.slide_products_0[0].load_capacity}}</div>
                    </div>
                    <div>
                        <div v-if="this.slide_products_1.length">{{this.slide_products_1[0].load_capacity}}</div>
                    </div>

                    <div v-if="this.slide_products_2.length" class="dop-item">
                        <div v-if="this.slide_products_2.length">{{this.slide_products_2[0].load_capacity}}</div>
                    </div>

                    <div v-if="this.slide_products_3.length" class="dop-item">
                        <div v-if="this.slide_products_3.length">{{this.slide_products_3[0].load_capacity}}</div>
                    </div>
            </div>
          </div>

          <div class="params_compare_item">
            <div class="param_compare_name">Пассажировместимость</div>
            <div class="param_compare_numbers" >
                    <div>
                        <div v-if="this.slide_products_0.length">{{this.slide_products_0[0].passenger_capacity}}</div>
                    </div>
                    <div>
                        <div v-if="this.slide_products_1.length">{{this.slide_products_1[0].passenger_capacity}}</div>
                    </div>

                    <div v-if="this.slide_products_2.length" class="dop-item">
                        <div v-if="this.slide_products_2.length">{{this.slide_products_2[0].passenger_capacity}}</div>
                    </div>

                    <div v-if="this.slide_products_3.length" class="dop-item">
                        <div v-if="this.slide_products_3.length">{{this.slide_products_3[0].passenger_capacity}}</div>
                    </div>
            </div>
          </div>

          <div class="params_compare_item">
            <div class="param_compare_name">Максимальная мощность мотора</div>
            <div class="param_compare_numbers" >
                    <div>
                        <div v-if="this.slide_products_0.length">{{this.slide_products_0[0].maximum_motor_power}}</div>
                    </div>
                    <div>
                        <div v-if="this.slide_products_1.length">{{this.slide_products_1[0].maximum_motor_power}}</div>
                    </div>

                    <div v-if="this.slide_products_2.length" class="dop-item">
                        <div v-if="this.slide_products_2.length">{{this.slide_products_2[0].maximum_motor_power}}</div>
                    </div>

                    <div v-if="this.slide_products_3.length" class="dop-item">
                        <div v-if="this.slide_products_3.length">{{this.slide_products_3[0].maximum_motor_power}}</div>
                    </div>
            </div>
          </div>

          <div class="params_compare_item">
            <div class="param_compare_name">Вес лодки</div>
            <div class="param_compare_numbers" >
                    <div>
                        <div v-if="this.slide_products_0.length">{{this.slide_products_0[0].boat_weight}}</div>
                    </div>
                    <div>
                        <div v-if="this.slide_products_1.length">{{this.slide_products_1[0].boat_weight}}</div>
                    </div>

                    <div v-if="this.slide_products_2.length" class="dop-item">
                        <div v-if="this.slide_products_2.length">{{this.slide_products_2[0].boat_weight}}</div>
                    </div>

                    <div v-if="this.slide_products_3.length" class="dop-item">
                        <div v-if="this.slide_products_3.length">{{this.slide_products_3[0].boat_weight}}</div>
                    </div>
            </div>
          </div>

          <div class="params_compare_item">
            <div class="param_compare_name">Вес полного комплекта</div>
            <div class="param_compare_numbers" >
                    <div>
                        <div v-if="this.slide_products_0.length">{{this.slide_products_0[0].complete_set_weight}}</div>
                    </div>
                    <div>
                        <div v-if="this.slide_products_1.length">{{this.slide_products_1[0].complete_set_weight}}</div>
                    </div>

                    <div v-if="this.slide_products_2.length" class="dop-item">
                        <div v-if="this.slide_products_2.length">{{this.slide_products_2[0].complete_set_weight}}</div>
                    </div>

                    <div v-if="this.slide_products_3.length" class="dop-item">
                        <div v-if="this.slide_products_3.length">{{this.slide_products_3[0].complete_set_weight}}</div>
                    </div>
            </div>
          </div>

          <div class="params_compare_item">
            <div class="param_compare_name">Фальшборт</div>
            <div class="param_compare_numbers" >
                    <div>
                        <div v-if="this.slide_products_0.length">{{this.slide_products_0[0].bulwark | yesno}}</div>
                    </div>
                    <div>
                        <div v-if="this.slide_products_1.length">{{this.slide_products_1[0].bulwark | yesno}}</div>
                    </div>

                    <div v-if="this.slide_products_2.length" class="dop-item">
                        <div v-if="this.slide_products_2.length">{{this.slide_products_2[0].bulwark | yesno}}</div>
                    </div>

                    <div v-if="this.slide_products_3.length" class="dop-item">
                        <div v-if="this.slide_products_3.length">{{this.slide_products_3[0].bulwark | yesno}}</div>
                    </div>
            </div>
          </div>
          
          <div class="params_compare_item">
            <div class="param_compare_name">Киль</div>
            <div class="param_compare_numbers" >
                    <div>
                        <div v-if="this.slide_products_0.length">{{this.slide_products_0[0].keel | yesno}}</div>
                    </div>
                    <div>
                        <div v-if="this.slide_products_1.length">{{this.slide_products_1[0].keel | yesno}}</div>
                    </div>

                    <div v-if="this.slide_products_2.length" class="dop-item">
                        <div v-if="this.slide_products_2.length">{{this.slide_products_2[0].keel | yesno}}</div>
                    </div>

                    <div v-if="this.slide_products_3.length" class="dop-item">
                        <div v-if="this.slide_products_3.length">{{this.slide_products_3[0].keel | yesno}}</div>
                    </div>
            </div>
          </div>

          <div class="params_compare_item">
            <div class="param_compare_name">Габариты упаковки</div>
            <div class="param_compare_numbers" >
                    <div>
                        <div v-if="this.slide_products_0.length">{{this.slide_products_0[0].upak}}</div>
                    </div>
                    <div>
                        <div v-if="this.slide_products_1.length">{{this.slide_products_1[0].upak}}</div>
                    </div>

                    <div v-if="this.slide_products_2.length"  class="dop-item">
                        <div v-if="this.slide_products_2.length">{{this.slide_products_2[0].upak}}</div>
                    </div>

                    <div v-if="this.slide_products_3.length" class="dop-item">
                        <div v-if="this.slide_products_3.length">{{this.slide_products_3[0].upak}}</div>
                    </div>
            </div>
          </div>





        </div>
      </div>



</div>  





</div>
</template>

<script>

import ProductCard from "../components/ProductCard"
import SortButton from "../components/buttons/SortButton"
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'CompareView',
  data() {
    return {
      filteredProducts: [],
      currentSLideIndex0: 0,
      currentSLideIndex1: 1,
      currentSLideIndex2: 2,
      currentSLideIndex3: 3,
      // slide_products0: [],
      // slide_products1: [],
      // slide_products2: [],
      // slide_products3: [],


    }
  },
  methods: {
    ...mapActions(['ADD_COMPARE_PRODUCTS']),
    get_category_name(id){
        console.log('get_category_name')
        console.log(this.GET_CATEGORIES)
        let category = this.GET_CATEGORIES.filter(function(item){
                return item.id == id
        })
        console.log(category)
        return category[0].name
    },
    prevSlide0() {
        if (this.currentSLideIndex0 > 0) {
            this.currentSLideIndex0--              
        }
    },
    nextSlide0() {
        if (this.currentSLideIndex0 >= this.filteredProducts.length - 1) {
        this.currentSLideIndex0 = 0
        } else {
            this.currentSLideIndex0++
        }
    },
    prevSlide1() {
        if (this.currentSLideIndex1 > 0) {
            this.currentSLideIndex1--              
        }
    },
    nextSlide1() {
        if (this.currentSLideIndex1 >= this.filteredProducts.length - 1) {
        this.currentSLideIndex1 = 0
        } else {
            this.currentSLideIndex1++
        }
    },
    prevSlide2() {
        if (this.currentSLideIndex2 > 0) {
            this.currentSLideIndex2--              
        }
    },
    nextSlide2() {
        if (this.currentSLideIndex2 >= this.filteredProducts.length - 1) {
        this.currentSLideIndex2 = 0
        } else {
            this.currentSLideIndex2++
        }
    },
    prevSlide3() {
        if (this.currentSLideIndex3 > 0) {
            this.currentSLideIndex3--              
        }
    },
    nextSlide3() {
        if (this.currentSLideIndex3 >= this.filteredProducts.length - 1) {
        this.currentSLideIndex3 = 0
        } else {
            this.currentSLideIndex3++
        }
    },


  },
  components: {
    ProductCard,
    SortButton,
  },
  computed: {
    ...mapGetters(['GET_COMPARE_PRODUCTS','GET_CATEGORIES']),
    // currentSLideIndexNext () {
    //   // console.log(this.currentSLideIndexNext)
    //   return this.currentSLideIndex+1
    // },
    // slide_products() {
    //   let sl = [...this.filteredProducts]
    //   return sl.slice(this.currentSLideIndex[slider_number], this.currentSLideIndex[slider_number]+1);
    // },
    slide_products_0() {
      console.log(this.currentSLideIndex0)
      let sl = [...this.filteredProducts]
      console.log(sl.slice(this.currentSLideIndex0, this.currentSLideIndex0+1))
      return sl.slice(this.currentSLideIndex0, this.currentSLideIndex0+1);
    },
    slide_products_1() {
      console.log(this.currentSLideIndex1)
      let sl = [...this.filteredProducts]
      return sl.slice(this.currentSLideIndex1, this.currentSLideIndex1+1);
    },
    slide_products_2() {
      console.log(this.currentSLideIndex2)
      let sl = [...this.filteredProducts]
      return sl.slice(this.currentSLideIndex2, this.currentSLideIndex2+1);
    },
    slide_products_3() {
      console.log(this.currentSLideIndex3)
      let sl = [...this.filteredProducts]
      return sl.slice(this.currentSLideIndex3, this.currentSLideIndex3+1);
    },
  },
  mounted() {
  console.log('mounted compareview')
  this.filteredProducts = [...this.GET_COMPARE_PRODUCTS]
  document.title = `Нептун 55: Сравнение. Лодки ПВХ купить по выгодным ценам`
  // this.get_categorizedProducts(this.category.id)
  // this.get_paginatedProducts()
  // if (this.GET_CATEGORIES){
  //   console.log('маунтинг тегов')
  //   this.getcats_tags(this.GET_CATEGORIES,this.category.id)
  // }


  
  // this.FILTERS_PRODUCTS_SET({reset: true})
  // this.get_categorizedProducts()
  // this.getcats_tags(this.GET_CATEGORIES,this.$route.params.id)
  console.log('mounted')
  // document.title = `Нептун 55 ${this.current_category(this.category.id)}`
  },
  watch: { 
    
    '$route.name': {
      // deep: true,
      // immediate: true,
      handler: function() {
      console.log(this.$route.name)
        if (this.$route.name === 'compare') {
          console.log('watcher compare выполняется if')
          this.filteredProducts = [...this.GET_COMPARE_PRODUCTS]
          document.title = `Нептун 55: Сравнение. Лодки ПВХ купить по выгодным ценам`
        }
      }
    },
    GET_COMPARE_PRODUCTS(){
      console.log('watcher GET_COMPARE_PRODUCTS in compareview')
      if(this.$route.name === 'compare'){
        console.log('if in watcher GET_COMPARE_PRODUCTS in compareview')
        this.filteredProducts = [...this.GET_COMPARE_PRODUCTS]
      }
    },
     
  }  
}

</script>
<style>
.compare{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.compare_results{
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  max-width: 1400px;
}
.compare_box{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-content: center;
  background: white;
  /* max-width: 1400px; */

}
.compare_products_box{
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  /* max-height: 650px; */
  overflow: hidden;
  background: white;
  min-width: 100px;
}
.params_compare{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
.params_compare_item{
  display: flex;
  flex-direction: column;
}
.param_compare_name{
  display: flex;
  background-color: #fafafa;
}
.param_compare_name:hover{
    background-color: #bef8cc;
}
.param_compare_numbers{
  background-color: #f3f3f3;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}
.param_compare_numbers:hover{
    background-color: #bef8cc;
}
.compare_prev{
    /* position: absolute;
    margin-right: 400px; */
    left: 5%;
    position: relative;
    top: 45%;
    /* margin: 125px 0px 0px 0px; */
    z-index: 2;
    font-size: 0;
    width: 31px;
    height: 70px;
    border: none;
    background: white url('/src/assets/img/angle-left-solid.svg') 0 0 / 100% no-repeat;
    opacity: 0.6;
}
.compare_next{
    position: relative;
    top: 45%;
    /* left: 510px; */

    /* margin-left: 600px; */
    /* top: 50%;
    margin-top: 25%;
    margin-left: 55%; */
    /* margin: 0 0px 0px 555px; */
    left: calc(100% - 62px);
    z-index: 2;
    font-size: 0;
    width: 31px;
    height: 70px;  
    border: none;
    /* background-color: white; */
    background: white url('/src/assets/img/angle-right-solid.svg') 0 0 / 100% no-repeat;
    opacity: 0.6;
}
@media all and (max-width: 820px) {
    .dop-item{
      display: none;
    }

}

</style>