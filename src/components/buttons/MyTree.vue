<template>
    <!-- https://www.digitalocean.com/community/tutorials/vuejs-recursive-components -->
    <nav class="menu">
    
    <ul class="menu__list">
      <div class="menu__icon"><span></span></div>
        <li v-for="category in treeData" v-if="category.level ==0" :key="category.id">
          <!-- <a href="#"  @mouseover="listOne = true" @mouseleave="listOne = false" @click="changeLastCategory(category.id,listOne)"> -->
          <router-link :to="{ name: 'categorypage', params: {id: category.id, tree_id: category.tree_id} }" @mouseover="listOne = true" @mouseleave="listOne = false">
          {{category.name}}
          </router-link>
          <!-- </a> -->
        <my-node-tree :node="treeData" :parent="category.id"></my-node-tree>
        </li>
    </ul>
    </nav>

</template>

<script>
import MyNodeTree from './MyNodeTree';
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      listOne: false,
    }
  },
  props: {
    treeData: Array
  },
  	methods: { 
	// ...mapActions(['CHANGE_LAST_CATEGORY']),
	// changeLastCategory(category, istrue) {
  //   console.log(istrue)
  //   if (istrue) {
  //     		this.CHANGE_LAST_CATEGORY(category)
  //   }
	// },
	},
  components: {
    MyNodeTree
  }
};
</script>

<style>
@media all and (max-width: 720px) {
    .menu{
    height: 65px;
    overflow: hidden;
    }
    .menu__list{
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
     }
    .menu__icon{
      top:20px;
      left:30px;
      z-index: 5;
      display: block;
      position: relative;
      width: 30px;
      height: 18px;
      cursor: pointer;
    }
    .menu__icon span,
    .menu__icon::before,
    .menu__icon::after{
      left: 0;
      position: absolute;
      height: 10%;
      width: 100%;
      transition: all 0.3s ease 0s;
      background-color: rgb(0, 0, 0);
    }
    .menu__icon::before,
    .menu__icon::after{
      content: '';
    }
    .menu__icon::before{
      top: 0;
    }
    .menu__icon::after{
      bottom: 0;
    }
    .menu__icon span{
      top: 50%;
      transform: scale(1) translate(0px,-50%);
    }

}
/* .menu__icon{
  display: none;
} */


.menu{
  width: 100%;
}
.menu a {
    text-decoration: none;
    color: #000;
}
.menu li{
  position: relative;
  list-style: none;
}
.menu li:hover{
  transition: 0.4s;
  background-color: rgb(214, 202, 202);
}
.menu__list{
  display: flex;
  justify-content: space-between;
}
.menu__list > li{
  /* padding: 10px; */
} 
.menu__list>li:hover .sub-menu__list{
  display: block;
}
.sub-menu__list{
  display: none;
  min-width: 250px;
  position: absolute;
  left: -20px;
  top: 20px;
  background-color: #fff;
}
.sub-menu__list>li:hover .sub-sub-menu__list{
  display: block;
}
.sub-sub-menu__list{
  display: none;
  min-width: 220px;
  position: absolute;
  top: -38px;
  left: 90%;
  z-index: 11;
}
 /* li > ul {
  display: none;
} */
</style>