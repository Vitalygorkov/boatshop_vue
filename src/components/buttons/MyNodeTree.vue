<template>
<!-- https://www.digitalocean.com/community/tutorials/vuejs-recursive-components -->
<ul class="sub-menu__list" v-bind:class="{ show_on_sub: listOne }">
<!-- <ul class="sub-sub-menu__list"> -->
  <li v-for="category in node" v-if="category.parent == parent" :key="category.id">
    <!-- <a href="#"  @mouseover="listOne = true" @mouseleave="listOne = false" @click="changeLastCategory(category.id,listOne)"> -->
      <div class="menu_li_item">
          <div @click="show_listOne_func()">
                <router-link :to="{ name: 'categorypage', params: {id: category.id, tree_id: category.tree_id, parent: category.parent} }"> 
            <!-- @mouseover="listOne = true" @mouseleave="listOne = false"  -->
          {{category.name}}
                </router-link>
          </div>
          <div @click="toggle_item(category.id)" class="menu_arrow_box"><img v-if="getcatschildren(node,category.id).length" class="menu_arrow" v-bind:class="{ menu_arrow_turn: category.id == toggle_last_children && tab_click}" src="../../assets/img/arrow.png"></div>
      </div>
    <!-- </a> -->
  <ul class="sub-sub-menu__list">
  <mynode :toggle_item_prop="{id: toggle_last_children, toggle: tab_click}" :node="node" :parent="category.id" @show_listOne="show_listOne_func"></mynode>
  <!-- @show_listOne="show_listOne_func" -->
  </ul>
  </li>

  <!-- <li>sadsad</li> -->
</ul>

</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "mynode",
  data() {
    return {
      listOne: false,
      toggle_last_children: '',
      tab_click: false,
    }
  },
  props: {
    node: Array,
    parent: Number,
    toggle_item_prop: Object,
  },
  methods: { 
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
      // arr.push(catparent)
      return arr
    },
    toggle_item(item_id){
      // console.log('toggle item')
      this.tab_click =!this.tab_click
      this.toggle_last_children = item_id
    },
    show_listOne_func(show_listOne){

      this.toggle_last_children = ''
      // console.log('Функция эмита щелчка из ДОЧЕРНИХ сабов')
      this.$emit("show_listOne", this.tab_click)
    },

	// ...mapActions(['CHANGE_LAST_CATEGORY']),
	// changeLastCategory(category, istrue) {
  //   if (istrue) {
  //     		this.CHANGE_LAST_CATEGORY(category)
  //   }
	// },
	},
  watch: {
    // tab_click(){
    //   console.log('watch myNODEtree')
    //   this.$emit("show_listOne", this.tab_click)
    // },
    toggle_item_prop(){
      // console.log('watcher toggle_item_prop', this.toggle_item_prop)
      if(this.toggle_item_prop.id == this.parent){
        this.listOne = !this.listOne
        // console.log('if',this.listOne)
      }else if(this.toggle_item_prop.id == ''){
        this.listOne = true
        this.toggle_last_children = ''
        // console.log('else if',this.listOne)
      }
    }
  },
};
</script>
<style>
.show_on_sub{
  display: none;
}
.menu_arrow_turn{
  transform: rotate(0deg);
  transition: 0.25s;
}

</style>