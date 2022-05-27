<template>
    <!-- https://www.digitalocean.com/community/tutorials/vuejs-recursive-components -->
    <nav v-bind:class="{ menu_on: showmenu }" class="menu">
    <div @click="showmenu = !showmenu, toggle_last= ''" class="menu__icon" v-bind:class="{ menu__icon_active: !showmenu}"><span></span></div>
    <ul class="menu__list">
      <!-- <div class="menu__icon"><span></span></div> -->
        
        <li v-bind:class="{ menu_li_on: showmenu }" v-for="category in treeData" v-if="category.level ==0" :key="category.id">
          <!-- <a href="#"  @mouseover="listOne = true" @mouseleave="listOne = false" @click="changeLastCategory(category.id,listOne)"> -->
            <router-link :to="{ name: 'categorypage', params: {id: category.id, tree_id: category.tree_id} }" >
          <div class="menu_li_item">
            
            <div class="menu_name_box" @click="showmenu = true, toggle_last= ''">
            
            <!-- @mouseover="listOne = true" @mouseleave="listOne = false" -->
            
                  
                <div class="menu_name_box_name">{{category.name}}</div>
                  
            
            </div>
            
            <div @click="toggle_item(category.id)" class="menu_arrow_box"><img v-if="getcatschildren(treeData,category.id).length" class="menu_arrow" v-bind:class="{ menu_arrow_turn: category.id == toggle_last && listOne}" src="../../assets/img/arrow.png"></div>
            <!-- </a> -->
          </div>
          </router-link>
        <my-node-tree :toggle_item_prop="{id: toggle_last, toggle: listOne}" :node="treeData" :parent="category.id" @show_listOne="show_listOne_func"></my-node-tree>
         <!-- @show_listOne="show_listOne_func" -->
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
      toggle_last: '',
      showmenu: true,
    }
  },
  props: {
    treeData: Array
  },
  copmuted: {

  },
  methods: { 
    show_listOne_func(show_listOne){
        // console.log('Функция эмита щелчка из сабов')
        this.toggle_last= ''
        // console.log(this.treeData)
        // console.log(show_listOne)
        this.showmenu = true

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
      // arr.push(catparent)
      return arr
    },
    toggle_item(item_id){
      // console.log('toggle item')
      this.listOne =!this.listOne
      this.toggle_last = item_id
    },
    
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
  },
  watch: {
    showmenu(){
      // console.log('watch mytree')
      if(this.showmenu == true){
        console.log('unbblockscroll')
        document.body.classList.remove('blockscroll')
      }else{
        console.log('blockscroll')
        document.body.classList.add('blockscroll')
      }
    }

  },
};
</script>

<style>
.blockscroll{
  overflow: hidden;
}
@media all and (max-width: 720px) {
    /* .menu__list>li:hover .sub-menu__list{
      display: block;
    } */
    /* .sub-menu__list>li:hover .sub-sub-menu__list{
      display: block;
    } */
    .menu_name_box{
      display: flex;
      margin-left: auto;
      margin-right: auto; 
      flex-grow: 1;
      width: 100%;
      flex-basis: 100%;
      box-sizing: content-box;
      justify-content: left;
      /* width: 100%; */
      align-items: center;
    }
    .menu_name_box_name{
      width: 100%;
      height: 100%;
    }
    .menu_arrow_box{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 40px;
      margin-right: 15px;
    }
    .menu_arrow{
      /* margin-right: 35px; */
    }
    .menu_arrow_turn{
      transform: rotate(180deg);
      transition: 0.25s;
    }
    .menu{
      position: fixed;
      margin-top: 0;
      z-index: 15;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.9);
      transition: 0.4s ease 0s;
      overflow: auto;

      /* overflow: scroll; */
    /* height: 65px;
    overflow: hidden; */
    }
    .menu_on{
      height: 50px;
      overflow: hidden;
      /* height: 300px;
      overflow: scroll; */
    }
    .menu__list{
      margin-top: 40px;
      margin-left: 0px;
      display: flex;
      flex-direction: column;
    /* justify-content: space-between; */
     }
    .menu_li_item{
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      transition: all 0.3s ease 0s;
    }

    /* .menu__list > li:last-child{} */
    .menu__list > li {
      flex-wrap: wrap;
      margin: 10px 0px 20px 0px;
    }
    /* .menu_li{
      margin: 0px 0px 20px 0px;
     }  */
    .menu_li_on{
      display: none;
    }
    .menu__icon{
      top:20px;
      left: 80%;
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
    .menu__icon_active span{
      transform: scale(0) translate(0px,-50%);
    }
    .menu__icon_active::before{
      top: 50%;
      transform: rotate(-45deg) translate(0px,-50%);

    }
    .menu__icon_active::after{
      bottom: 50%;
      transform: rotate(45deg) translate(0px,50%);

    }
    .sub-menu__list{
      /* display: none; */
      /* min-width: 250px; */
      position: relative;
      width: 100%;
      /* flex: 1 1 100%; */
      /* left: -20px;
      top: 20px; */
      /* background-color: rgba(255, 255, 255, 0.8); */
      z-index: 16;
    }
    .sub-menu__list li{
      left: -25px;
      margin-top: 10px;
    }
    .sub-sub-menu__list{
      /* display: none; */
      /* min-width: 220px; */
      position: relative;
      left: -30px;
      width: 100%;
      /* top: -38px;
      left: 90%; */
      z-index: 17;
    }
    .sub-sub-menu__list li{
      left: -30px;
      margin-top: 10px;
    }
    

}
/* .menu__icon{
  display: none;
} */


.menu{
  width: 100%;
}
.menu img{
  width: 15px;
  height: 15px;
}
.menu a {
    text-decoration: none;
    color: #000;
}
.menu li{
  position: relative;
  list-style: none;
}

.menu__list{
  display: flex;
  justify-content: space-between;
}

/* .sub-menu__list{
  display: none;
  min-width: 250px;
  position: absolute;
  left: -20px;
  top: 20px;
  background-color: #fff;
} */

/* .sub-sub-menu__list{
  display: none;
  min-width: 220px;
  position: absolute;
  top: -38px;
  left: 90%;
  z-index: 17;
} */
@media all and (min-width: 720px) {
  .menu__list>li:hover .sub-menu__list{
    display: block;
  }
  .sub-menu__list>li:hover .sub-sub-menu__list{
    display: block;
  }
    .menu li:hover{
    transition: 0.4s;
    background-color: rgb(214, 202, 202);
  }
  .menu_arrow{
    display: none;
  }
  .sub-menu__list{
    display: none;
    min-width: 250px;
    position: absolute;
    left: -20px;
    top: 20px;
    background-color: #fff;
  }
  .sub-sub-menu__list{
    display: none;
    min-width: 220px;
    position: absolute;
    top: -38px;
    left: 90%;
    z-index: 17;
  }
}


</style>