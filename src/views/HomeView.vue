<template>
<div class="home">
  <div class="categories_path_box">
    <div class="category_path"><router-link to="/category/1">Главная</router-link></div>
    <div class="categories_path" v-if="this.$route.name == 'categorypage'">
      <div v-for="category_path in getcatsparent(this.GET_CATEGORIES, this.category.id)" :key="category_path.id" class="category_path">
        <img src="../assets/img/arrow-right-solid.svg">
        <router-link :to="{ name: 'categorypage', params: {id: category_path.id, tree_id: category_path.tree_id} }">
        <!-- {{ this.category.id }} -->
          {{category_path.name}}
        </router-link>
      </div>
    </div>
  </div>
  <div class="filter_and_results">
    <div @click="filter_toggle = !filter_toggle" v-if="!filter_toggle" class="filter_view_results"><h3>Показать товары: {{this.filteredProducts.length}}</h3></div>
    <filter-menu v-bind:class="{ filter_on: filter_toggle}" v-if="this.$route.name != 'favorit'" :category="parseInt(this.$route.params.id)" :tree_id="parseInt(this.$route.params.tree_id)" :parent="parseInt(this.$route.params.parent)" :products="this.categorizedProducts" :prod_count="filteredProducts.length"/>
    <div class="block-results">
      <h3>Найдено товаров: {{this.filteredProducts.length}}</h3>
      <!-- <div class="favorit_prod_box" v-if="this.$route.name === 'favorit'"><h3>Избранные товары: {{this.filteredProducts.length}}</h3><div class="favorit_prod_sbtos">сбросить все</div></div>  -->

      <div class="sort_box">
<!-- {{GET_FILTER_PRODUCTS_SET}}         -->
          <!-- {{Object.keys(this.GET_FILTER_PRODUCTS_SET).length != 0}}
          {{this.GET_FILTER_PRODUCTS_SET.manufacturer}}
           {{this.GET_FILTER_PRODUCTS_SET.manufacturer.length > 0}}
           {{this.GET_FILTER_PRODUCTS_SET.manufacturer[0] == 'reset' }}
           {{this.GET_FILTER_PRODUCTS_SET.manufacturer.length > 1}} -->
           <!-- right {{this.GET_FILTER_PRODUCTS_SET.manufacturer && this.GET_FILTER_PRODUCTS_SET.manufacturer.length > 0 && this.GET_FILTER_PRODUCTS_SET.manufacturer[0] == 'reset' && this.GET_FILTER_PRODUCTS_SET.manufacturer.length > 1}} -->
            <!-- v-bind:class="{ filter_open_active: Object.keys(this.GET_FILTER_PRODUCTS_SET).length >=1 && this.GET_FILTER_PRODUCTS_SET.manufacturer && this.GET_FILTER_PRODUCTS_SET.manufacturer.length > 0 && this.GET_FILTER_PRODUCTS_SET.manufacturer[0] == 'reset' && this.GET_FILTER_PRODUCTS_SET.manufacturer.length > 1 }" -->

          <div class="filter_open">

          <img @click="filter_toggle = !filter_toggle" src="../assets/img/filter-icon-crop.png">
        </div>
        <div>Сортировать по: </div>
        <div class="sort_item">
          <sort-button v-bind:class="{ sort_item_active: 'name_up' == sort_by || 'name_down' == sort_by  }" title="наименованию" up="name_up" down="name_down" v-on:CheckedButton="CheckedButton"/><img class="sort_img" v-bind:class="{ sort_active_img: this.sort_by == 'name_up', sort_reverse_img: this.sort_by == 'name_down'}" src="../assets/img/sort.svg">
        </div>
        <div class="sort_item">
                  <sort-button class="sort_item" v-bind:class="{ sort_item_active: 'price_up' == sort_by || 'price_down' == sort_by}" title="цене" up="price_up" down="price_down" v-on:CheckedButton="CheckedButton"/><img class="sort_img" v-bind:class="{ sort_active_img: this.sort_by == 'price_up', sort_reverse_img: this.sort_by == 'price_down'}" src="../assets/img/sort.svg">
        </div>
        <div v-if="getcatschildren(GET_CATEGORIES, 1).some(elem => elem == category.id)" class="sort_item">
                  <sort-button class="sort_item" v-bind:class="{ sort_item_active: 'length_up' == sort_by || 'length_down' == sort_by}" title="длине" up="length_up" down="length_down" v-on:CheckedButton="CheckedButton"/><img class="sort_img" v-bind:class="{ sort_active_img: this.sort_by == 'length_up', sort_reverse_img: this.sort_by == 'length_down' }" src="../assets/img/sort.svg">
        </div>
        <div v-if="getcatschildren(GET_CATEGORIES, 1).some(elem => elem == category.id)" class="sort_item">
          <sort-button class="sort_item" v-bind:class="{ sort_item_active: 'weight_up' == sort_by || 'weight_down' == sort_by}" title="весу" up="weight_up" down="weight_down" v-on:CheckedButton="CheckedButton"/><img class="sort_img" v-bind:class="{ sort_active_img: this.sort_by == 'weight_up', sort_reverse_img: this.sort_by == 'weight_down'}" src="../assets/img/sort.svg">
        </div>
        <!-- {{this.$emit('CheckedButton')}} -->
        <!-- <div class="sort_item" @click="sort_active = !sort_active">наименованию <img v-bind:class="{ sort_active_img: sort_active}" src="../assets/img/sort.svg"></div>
        <div class="sort_item">цене <img v-bind:class="{ sort_active_img: sort_active}" src="../assets/img/sort.svg"></div>
        <div class="sort_item">длине <img v-bind:class="{ sort_active_img: sort_active}" src="../assets/img/sort.svg"></div>
        <div class="sort_item">весу <img v-bind:class="{ sort_active_img: sort_active}" src="../assets/img/sort.svg"></div> -->
      
      </div>
      <div v-if="this.$route.name != 'favorit'" class="tags_box">
        <div  v-bind:class="{ tags_item_active: category.id == category_tag.id}" class="tags_item" v-for="category_tag in cats_tags" :key="category_tag.id">
        <router-link :to="{ name: 'categorypage', params: {id: category_tag.id, tree_id: category_tag.tree_id} }">
          {{category_tag.name}}
        </router-link>
        </div>
      </div>
      <div class="resultproducts">
        <transition-group name="fade">
        <div class="fade-item" v-for="product in this.paginatedProducts" :key="product.name">
          <product-card :product="product"/>
        </div>
        </transition-group>
      </div>

      <div class="pagination_box">
        <div class="more" @click="pageMore()">Показать еще</div>
        <div class="pagination">
          <div class="page" v-bind:class="{ pageactive: pageNumber == page }" v-for="page in pages" :key="page" @click="pageClick(page),go_to_top(200)">{{page}}</div>
        </div>
     </div>
    </div>
  </div>
</div>
</template>

<script>
import FilterMenu from "../components/FilterMenu"
import ProductCard from "../components/ProductCard"
import SortButton from "../components/buttons/SortButton"
import {mapGetters, mapActions} from 'vuex'


export default {
  name: 'HomeView',
  // metaInfo: {
  //   title: 'Купить лодку пвх в магазине нептун 55',
  //   meta: [
  //     // { vmid: 'description', property: 'description', content: 'Лодки пвх с доставкой по всей России по самым выгодным ценам, лодочные моторы, распродажи, акции и скидки только в нашем магазине. Лодки ПВХ НДНД для рыбалки гребные и под мотор от проверенных брендов ' },
  //     // { vmid: 'og:description', property: 'og:description', content: 'Vue App' },
  //   ],
  // },
  data() {
    return {
      productsPerPage: 9,
      morePageNumber: 1,
      pageNumber: 1,
      category: {id: parseInt(this.$route.params.id), tree_id: parseInt(this.$route.params.tree_id)},
      categorizedProducts: [],
      filteredProducts: [],
      cats_tags: [],
      paginatedProducts: [],
      sort_by: 'name_up',
      filter_toggle: true,
      
    }
  },
  // props: {
  // searchproducts: Array,
  // },
  methods: { 
    ...mapActions(['FETCH_CATEGORIES', 'FETCH_PRODUCTS', 'FETCH_BOATS','FILTERS_PRODUCTS_SET', 'SEARCH_PRODUCTS_SET']),
    CheckedButton(checked){
      this.sort_by = checked
      console.log('сработал емит')
      console.log(this.sort_by)
      console.log(this.CheckedEmit)
    },
    go_to_top(pixels){
      window.scrollTo({
          top: pixels,
          behavior: "smooth"
      });
    },

    sort_filtered_products(sort_by) {
      if (sort_by == 'name_up') {
        // console.log('сортировка по возрастанию имени')
        // console.log(this.filteredProducts)
        this.filteredProducts = this.filteredProducts.sort((a, b) => a.name > b.name ? 1 : -1);
        // console.log(this.filteredProducts)
      }else if (sort_by == 'name_down'){
        this.filteredProducts = this.filteredProducts.sort((a, b) => a.name > b.name ? -1 : 1);
      }else if (sort_by == 'price_up'){
        this.filteredProducts = this.filteredProducts.sort((a, b) => a.price > b.price ? 1 : -1);
      }else if (sort_by == 'price_down'){
        this.filteredProducts = this.filteredProducts.sort((a, b) => a.price > b.price ? -1 : 1);
      }else if (sort_by == 'length_up'){
        this.filteredProducts = this.filteredProducts.sort((a, b) => a.length > b.length ? 1 : -1);
      }else if (sort_by == 'length_down'){
        this.filteredProducts = this.filteredProducts.sort((a, b) => a.length > b.length ? -1 : 1);
      }else if (sort_by == 'weight_up'){
        this.filteredProducts = this.filteredProducts.sort((a, b) => a.boat_weight > b.boat_weight ? 1 : -1);
      }else if (sort_by == 'weight_down'){
        this.filteredProducts = this.filteredProducts.sort((a, b) => a.boat_weight > b.boat_weight ? -1 : 1);
      }





    },

    get_paginatedProducts() {
      // console.log('get_paginatedProducts')
      let from = (this.pageNumber - 1)*this.productsPerPage
      let to = from + this.productsPerPage
      console.log(this.GET_SEARCHPRODUCTS)
      if (this.GET_SEARCHPRODUCTS.length) {
        this.filteredProducts = [...this.GET_SEARCHPRODUCTS]
        console.log(this.sort_by)
        this.sort_filtered_products(this.sort_by) 
        // console.log(this.filteredProducts)
        this.paginatedProducts = [...this.filteredProducts.slice(from,to)]
        console.log(this.filteredProducts)
        console.log('if in get paginated products')
        return this.filteredProducts.slice(from,to)
      }else if (this.filteredProducts.length == 0 && this.$route.params.id == undefined) {
        let products = [...this.GET_PRODUCTS]
        console.log('else if in get paginated products')
        console.log(this.filteredProducts)
        this.categorizedProducts = [...this.GET_PRODUCTS]
        this.filteredProducts = [...this.GET_PRODUCTS]
        this.sort_filtered_products(this.sort_by) 
        // console.log(this.filteredProducts)
        this.paginatedProducts = [...this.filteredProducts.slice(from,to)]
        return products.slice(from,to)
      }else{
        console.log('else in get paginated products')
        this.sort_filtered_products(this.sort_by)
        this.paginatedProducts = [...this.filteredProducts.slice(from,to)]
        return this.filteredProducts.slice(from,to)
      }
    },
    get_paginatedProducts2() {
      // console.log('get_paginatedProducts2')
      let from = (this.pageNumber - 1)*this.productsPerPage
      let to = from + this.productsPerPage
        console.log(' get paginated products 2')
        this.sort_filtered_products(this.sort_by)
        this.paginatedProducts = [...this.filteredProducts.slice(from,to)]
        return this.filteredProducts.slice(from,to)

    },
    get_filterProducts() {
      // console.log('копирование объектов')
      let filterset = this.GET_FILTER_PRODUCTS_SET
      let filter_Products = [...this.categorizedProducts]
      // Если обычные товары, то фильтруем только по цене
      if (Object.keys(filterset).length == 1 &&  Object.keys(filterset) == 'price') {
        // console.log('Обчный товар, фильтр только по цене')
        if(Object.keys(filterset).length) {
        filter_Products = filter_Products.filter(function(item) {
          return item.price >= filterset.price.min && item.price <= filterset.price.max
          })
        }
        this.filteredProducts = filter_Products
        return filter_Products
        // иначе фильтруем по всем параметрам лодки
      }else if(Object.keys(filterset).length) {  
        console.log('Лодки фсе фильтры')
        // фильтруем по производителю
        if (Object.hasOwn(filterset, 'manufacturer')){
          if (filterset.manufacturer[0] == 'reset' && filterset.manufacturer.length == 1) {
            console.log('Фильтр по производителю в лодках')

          }else{
          filter_Products = filter_Products.filter(function(item) {
          console.log('Фильтр по производителю в лодках else')

          return filterset.manufacturer.includes(item.manufacturer.id)
          })
          }
        }
        // фильтруем по цене
        if (Object.hasOwn(filterset, 'price')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by price')

          return item.price >= filterset.price.min && item.price <= filterset.price.max 
          })
        }
        // фильтруем по длинне
        if (Object.hasOwn(filterset, 'length')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by length')
          return item.length >= filterset.length.min && item.length <= filterset.length.max
          })
        }

        // фильтруем по ширине
        if (Object.hasOwn(filterset, 'width')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by width')
          return item.width >= filterset.width.min && item.width <= filterset.width.max
          })
        }
        // фильтруем по длинне кокпита
        if (Object.hasOwn(filterset, 'cockpit_length')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by cockpit_length')
          return item.cockpit_length >= filterset.cockpit_length.min && item.cockpit_length <= filterset.cockpit_length.max
          })
        }
        // фильтруем по ширине кокпита
        if (Object.hasOwn(filterset, 'cockpit_width')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by cockpit_width')
          return item.cockpit_width >= filterset.cockpit_width.min && item.cockpit_width <= filterset.cockpit_width.max
          })
        }
        // фильтруем по диаметру борта
        if (Object.hasOwn(filterset, 'cylinder_diameter')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by cylinder_diameter')
          return item.cylinder_diameter >= filterset.cylinder_diameter.min && item.cylinder_diameter <= filterset.cylinder_diameter.max
          })
        }
          // фильтруем по load_capacity
        if (Object.hasOwn(filterset, 'load_capacity')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by load_capacity')
          return item.load_capacity >= filterset.load_capacity.min && item.load_capacity <= filterset.load_capacity.max
          })
        }
            // фильтруем по boat_weight
        if (Object.hasOwn(filterset, 'boat_weight')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by boat_weight')
          return item.boat_weight >= filterset.boat_weight.min && item.boat_weight <= filterset.boat_weight.max
          })
        }
            // фильтруем по complete_set_weight
        if (Object.hasOwn(filterset, 'complete_set_weight')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by complete_set_weight')
          return item.complete_set_weight >= filterset.complete_set_weight.min && item.complete_set_weight <= filterset.complete_set_weight.max
          })
        }
                    // фильтруем по maximum_motor_power
        if (Object.hasOwn(filterset, 'maximum_motor_power')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by maximum_motor_power')
          return item.maximum_motor_power >= filterset.maximum_motor_power.min && item.maximum_motor_power <= filterset.maximum_motor_power.max
          })
        }
               // фильтруем по maximum_motor_power
        if (Object.hasOwn(filterset, 'fabric_thickness_side')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by fabric_thickness_side')
          return item.fabric_thickness_side >= filterset.fabric_thickness_side.min && item.fabric_thickness_side <= filterset.fabric_thickness_side.max
          })
        }
               // фильтруем по fabric_thickness_bottom
        if (Object.hasOwn(filterset, 'fabric_thickness_bottom')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by fabric_thickness_bottom')
          return item.fabric_thickness_bottom >= filterset.fabric_thickness_bottom.min && item.fabric_thickness_bottom <= filterset.fabric_thickness_bottom.max
          })
        }
                 // фильтруем по inflatable_compartments
        if (Object.hasOwn(filterset, 'inflatable_compartments')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by inflatable_compartments')
          return item.inflatable_compartments >= filterset.inflatable_compartments.min && item.inflatable_compartments <= filterset.inflatable_compartments.max
          })
        }
                   // фильтруем по passenger_capacity
        if (Object.hasOwn(filterset, 'passenger_capacity')){
        filter_Products = filter_Products.filter(function(item) {
          console.log('filter by passenger_capacity')
          return item.passenger_capacity >= filterset.passenger_capacity.min && item.passenger_capacity <= filterset.passenger_capacity.max
          })
        }

        this.filteredProducts = filter_Products
        return filter_Products
      }else {
        this.filteredProducts = filter_Products
        return filter_Products
      }

    },
    pagefirst(){
    this.pageNumber= 1
    },
    get_categorizedProducts(){
      console.log('get_categorized products')
    let category = parseInt(this.$route.params.id)
    // console.log(category)
    if (this.getcatschildren(this.GET_CATEGORIES, 1).some(elem => elem == category)) {
      console.log('выполнено условие категории лодок')
      this.categorizedProducts = [...this.GET_BOATS]
    } else {
      this.categorizedProducts = [...this.GET_PRODUCTS]
    }
    console.log('категоризироввнные продукты')
    let categories = this.getcatschildren(this.GET_CATEGORIES, category)
    this.categorizedProducts = this.categorizedProducts.filter(function(item){
      if (categories.some(elem => elem == item.category)){
        return item.category
      }
    })
    // this.categorizedProducts = [...this.filteredProducts]
    this.filteredProducts = [...this.categorizedProducts]
    return this.categorizedProducts
    },
    // Получаем айдишки дочерних категорий
    getcatschildren(object, cats, arr=[]){
      let catparent = parseInt(cats)
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
      // Получаем объекты дочерних категорий
    getcatschildren_obj(object, cats, arr=[]){
      let catparent = parseInt(cats)
      // console.log('function getcatschildren!!')
      console.log(catparent)
      getChildren(object,catparent)
          function getChildren(obj, parent,){
            for(let i = 0; i < obj.length; i += 1){
              if(obj[i].parent == parent){
                // console.log(obj[i].name)
                arr.push(obj[i])
                getChildren(obj,obj[i].id)
            }
          }
      }
      arr.push(catparent)
      return arr
    },
    getcatsparent(object, cats, arr=[]){
      let cat = parseInt(cats)
      getParent(object,cat)
          function getParent(obj, category,){
            for(let i = 0; i < obj.length; i += 1){
              if(obj[i].id == category){
                arr.push(obj[i])
                getParent(obj,obj[i].parent)
            }
          }
      }
      arr.reverse()
      return arr
    },
    getcats_tags(object, cats, arr=[]){
      let cat = parseInt(cats)
      if (cat) {
      // console.log('getcats_tags if')
      let parents = [...this.getcatsparent(object,cat)]
      let childrens = [...this.getcatschildren_obj(object, parents[0].id)]
      childrens.pop()
      this.cats_tags = childrens
      return childrens
      }else{
      // console.log('getcats_tags else')
      return ['']}
        
    },
    pageClick(page) {
      this.pageNumber = page
      this.morePageNumber = page
      this.get_paginatedProducts()
    },

    pageMore () {
    // let from = (page - 1)*this.productsPerPage
    // let to = from + this.productsPerPage
    // if (this.filteredProducts.length/)
    // console.log(this.morePageNumber)
    // console.log(this.pages)
    let page = this.morePageNumber



    
    if (page== 0) {
      this.morePageNumber +=1
      // console.log('page 1 if: '+ this.morePageNumber)
      page = this.morePageNumber + this.pageNumber
      this.pageNumber +=1
    }else if (this.pages>this.morePageNumber) {
      this.morePageNumber +=1
      this.pageNumber +=1
      page = this.morePageNumber
      // console.log('page 2 if: '+ this.morePageNumber)
    }
    // console.log(page)
    // console.log('get more pages')
    let from = (page-1)*this.productsPerPage
    let to = from + this.productsPerPage
    // console.log(this.filteredProducts.slice(from,to))
    // this.paginatedProducts= (this.paginatedProducts.push(this.filteredProducts.slice(from,to)))
    let arr1 = [...this.paginatedProducts]
    let arr = []
    arr = this.filteredProducts.slice(from,to)
    for (var i = 0; i < arr.length; i++) {
      arr1.push(arr[i])
    }
    const uniqueArr = arr1.filter((x, i, a) => a.indexOf(x) == i)
    this.paginatedProducts = uniqueArr

    // console.log(this.paginatedProducts)
    },
    current_category(id){
      if(id){
        // console.log('THIS current_category function',id)
        const result = this.GET_CATEGORIES.filter(function(item) {
            return item.id == id
            })
        if(result[0].name == undefined){
          return ''
        }
        else if(result[0].name == 'Лодки'){
          return ''
        }
        else{
          return result[0].name
        }
        
      }else {
        return ''
      }
    },
  },
  computed: {
  ...mapGetters(['GET_PRODUCTS', 'GET_BOATS','GET_FILTER_PRODUCTS_SET','GET_CATEGORIES', 'GET_SEARCHPRODUCTS', 'GET_HEART_PRODUCTS']),

  pages () {
    return Math.ceil(this.filteredProducts.length/this.productsPerPage)
  },
  },
  mounted() {
    this.$router.push('/category/6')
    console.log('mounted homeview')
    this.pagefirst()
    this.get_categorizedProducts(this.category.id)
    this.get_paginatedProducts()
    // if (this.GET_CATEGORIES){
    //   console.log('маунтинг тегов')
    //   this.getcats_tags(this.GET_CATEGORIES,this.category.id)
    // }


    
    // this.FILTERS_PRODUCTS_SET({reset: true})
    // this.get_categorizedProducts()
    // this.getcats_tags(this.GET_CATEGORIES,this.$route.params.id)
    this.$router.push('/category/1')
    this.get_paginatedProducts()
    console.log('mounted')
    // document.title = `Нептун 55 ${this.current_category(this.category.id)}`
  },

  components: {
    ProductCard,
    FilterMenu,
    SortButton,
  },
  created(){
    // this.get_categorizedProducts(this.category.id)
    // this.get_paginatedProducts()
    // this.getcats_tags(this.GET_CATEGORIES,this.category.id)



    // this.FETCH_CATEGORIES()
    // this.getcatschildren_obj(this.GET_CATEGORIES,this.$route.params.id)
    console.log('home created')
    // await this.FETCH_PRODUCTS()
    // await this.FETCH_BOATS()


    document.title = `Лодки, ${this.current_category(this.category.id)} купить в магазине Нептун 55`
	},
  watch: {
    // filter_toggle(){
    //         console.log('watch filter_toggle')
    //   if(this.filter_toggle == true){
    //     console.log('unbblockscroll')
    //     document.body.classList.remove('blockscroll')
    //   }else{
    //     console.log('blockscroll')
    //     document.body.classList.add('blockscroll')
    //   }
    // },
    '$route.params.id': {
      // deep: true,
      // immediate: true,
      handler: function() {
      console.log(this.$route.name)
        if (this.$route.name === 'categorypage') {
          this.FILTERS_PRODUCTS_SET({reset: true})
          console.log('watcher homeviews выполняется if')
          // this.SEARCH_PRODUCTS_SET({})
          this.category = {id: parseInt(this.$route.params.id), tree_id: parseInt(this.$route.params.tree_id)},
          this.pagefirst()
          // this.FILTERS_PRODUCTS_SET({reset: true})
          this.get_categorizedProducts()
          this.getcats_tags(this.GET_CATEGORIES,this.category.id)
          this.get_paginatedProducts()  
          // console.log('watch')
          // Лодки: купить по выгодным ценам в магазине 
          document.title = `Лодки, ${this.current_category(this.category.id)} купить в магазине Нептун 55`
        }else if(this.$route.name === 'home') {
          console.log('watcher homeviews выполняется else домашней страницы')
          this.FILTERS_PRODUCTS_SET({reset: true})
          this.pagefirst()
          this.get_categorizedProducts()
          this.get_paginatedProducts()  
        }
        // else if(this.$route.name === 'favorit'){
        //   console.log('watcher homeviews выполняется else страницы понравившихся товаров')
        //   // this.FILTERS_PRODUCTS_SET({reset: true})
        //   this.pagefirst()
        //   this.filteredProducts = this.GET_HEART_PRODUCTS
        //   console.log(this.filteredProducts)
        //   this.get_paginatedProducts2()
        // }
      }
    },
    GET_SEARCHPRODUCTS() {
      console.log('вотчер продуктов поиска')
      console.log(this.GET_SEARCHPRODUCTS)
      if(this.GET_SEARCHPRODUCTS.length){
        console.log('вотчер продуктов поиска выполняется')
        this.filteredProducts = [...this.GET_SEARCHPRODUCTS]
        this.SEARCH_PRODUCTS_SET({})
        this.get_paginatedProducts()
      }
    },
    // '$route.params.searchproducts': {
    //   handler: function() {
    //   if(this.$route.params.searchproducts.length){
    //     console.log(this.$route.params.searchproducts.length)
    //     console.log(this.$route.params.searchproducts)
    //     this.pagefirst()
    //     this.filteredProducts = [...this.$route.params.searchproducts]
    //     console.log(this.filteredProducts)
    //     this.get_paginatedProducts()
    //     console.log(this.filteredProducts)
    //     // console.log('watch')
    //     document.title = `Нептун 55: Поиск товаров`
    //   }
    //   }
    // },
    GET_FILTER_PRODUCTS_SET() {
        console.log('вотчер по геттеру filterproductset')
        console.log(this.GET_FILTER_PRODUCTS_SET) 
        this.pagefirst()
        this.get_filterProducts()
        this.get_paginatedProducts()

      // было до добавления фильтра по производителям
      // if (this.GET_FILTER_PRODUCTS_SET != {}){
      //    console.log(this.GET_FILTER_PRODUCTS_SET) 
      //   this.pagefirst()
      //   this.get_filterProducts()
      //   this.get_paginatedProducts()
      // }
    },
    GET_CATEGORIES(){
      console.log('wotcher tags')
      this.getcats_tags(this.GET_CATEGORIES,this.category.id)
    },
    GET_PRODUCTS(){
      this.get_categorizedProducts()
      // this.get_filterProducts()
      this.get_paginatedProducts()
    },
    sort_by(){
      this.pagefirst()
      this.get_paginatedProducts()
    },  
  },
}
</script>
<style>
.fade-item{
  display: inline-block;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-to{
  opacity: 1;
}
.fade-enter-active{
  transition: opacity .8s;
}
/* .fade-leave-active {
  transition: opacity .5s;
} */

.home{
  display: flex;
  flex-direction: column;
}
.filter_and_results{
  display: flex;
  flex-direction: row;
}
.categories_path_box{
  display: flex;
  /* position: relative; */
  /* z-index: 0; */
  padding: 15px;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 20px;
  font-weight: 900;
  margin-left: 20px;
}
.categories_path{
  display: flex;
  /* position: relative; */
  /* z-index: 0; */
  /* padding: 15px; */
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 20px;
  font-weight: 900;
  margin-left: 20px;
  padding: 0;
  margin-left: 0;
}
.category_path{
  padding: 3px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.category_path img{
  position: relative;
  z-index: -1;
  width: 15px;
  opacity: 0.5;
  /* height: 10px; */
}
.category_path a{
  margin-left: 3px;
  text-decoration: none;
}
.block-results{
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
}
.sort_box{
  padding: 15px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}
.sort_item{
  /* margin-top: 7px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
}

.sort_item_active{
  background-color: #A4E2FD;
  border-radius: 5px;
  padding: 5px;
}
.sort_img{
  display: none;
} 
.sort_active_img{
  display:inline-block;
  width: 17px;
  height: 17px;
  transition: 0.25s;
}
.sort_reverse_img{
  display:inline-block;
  width: 17px;
  height: 17px;
  transform: scale(1, -1);
  transition: 0.25s;
}

.tags_box{
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.tags_item{
  margin-top: 5px;
  background-color: rgb(227, 249, 252);
  border-radius: 5px;
  margin-left: 15px;
  padding: 5px;
}
.tags_item:hover{
  background-color: #A4E2FD;
  border-radius: 5px;
  margin-left: 15px;
  padding: 5px;
}
.tags_item_active{
  background-color: #A4E2FD;
  border-radius: 5px;
  margin-left: 15px;
  padding: 5px;
}
.tags_item a{
  text-decoration: none;
  color: rgb(20, 20, 20);
}

.resultproducts{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: white;
}
.pagination_box{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.pagination{
  max-width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.more{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25px;
  border: solid 1px #e7e7e7;
}
.more:hover {
  background: #aeaeae;
  cursor: pointer;
  color: #ffffff;
}
.page{
  padding: 8px;
  margin-right: 10px;
  border: solid 1px #e7e7e7;
}
.page:hover {
  background: #aeaeae;
  cursor: pointer;
  color: #ffffff;
}
.pageactive {
  background: #aeaeae;
  cursor: pointer;
  color: #ffffff;
}
/* .filter_on{
  display: none;
} */
.filter_view_results{
  display: flex;
  position: fixed;
  background-color: white;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 97%;
  height: 55px;
  background-color: #ffffff;
  border: solid 4px;
  border-color: #dadada;  
  z-index: 23;
}
.filter_open{
  width: 30px;
  height: 30px;
  padding: 12px;
}
.filter_open img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.filter_open_active{
  border: #A4E2FD solid 3px;
  box-shadow: 0px 0px 23px 33px rgba(144,  192,  247, 0.5);
}
@media all and (max-width: 720px) {
  .filter_on{
    display: none;
  }
  .filter_and_results{
    flex-direction: column;
  }

}
@media all and (min-width: 720px) {
  .filter_open{
    display: none;
  }



}

</style>
