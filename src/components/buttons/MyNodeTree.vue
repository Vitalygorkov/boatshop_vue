<template>
<!-- https://www.digitalocean.com/community/tutorials/vuejs-recursive-components -->
<ul class="sub-menu__list">
  <li v-for="category in node" v-if="category.parent == parent" :key="category.id" @click="changeLastCategory(category.id)">
    <!-- <a href="#"  @mouseover="listOne = true" @mouseleave="listOne = false" @click="changeLastCategory(category.id,listOne)"> -->
     <router-link :to="{ name: 'categorypage', params: {id: category.id, tree_id: category.tree_id, parent: category.parent} }" @mouseover="listOne = true" @mouseleave="listOne = false" @click="changeLastCategory(category.id,listOne)"> 
      {{category.name}}
     </router-link>
    <!-- </a> -->
  <ul class="sub-sub-menu__list">
  <mynode :node="node" :parent="category.id"></mynode>
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
    }
  },
  props: {
    node: Array,
    parent: Number
  },
    	methods: { 
	...mapActions(['CHANGE_LAST_CATEGORY','LAST_CATEGORY']),
	changeLastCategory(category, istrue) {
    if (istrue) {
      		this.CHANGE_LAST_CATEGORY(category)
    }
	},
	},
};
</script>
<style>

</style>