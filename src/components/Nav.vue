<template>
<div>
	<div class="obshii">

		<div class="bloki1">
			<div class="bloki1-sub1">
				<h2>Доставка лодок во все регионы россии</h2>
			</div>
			<div class="bloki1-sub2">
				<h3>Email:clients@neptun55.ru</h3>
			</div>
			<div class="bloki1-sub3">
				<img src="../assets/img/phone-call.png">
				<a href="tel:+79039274690">
				<h3>+79039274690</h3>
				</a>
			</div>
		</div>

		<div class="bloki2">

			<div class="bloki2-sub1">
				<router-link :to="{ name: 'home' }">
				<img class="img-logo" src="../assets/img/neptfoto.png" alt="neptfoto">
				</router-link>
			</div>

			<div class="bloki2-sub1">
				<router-link :to="{ name: 'home' }">
				<img src="../assets/img/nept55text.png">
				</router-link>
			</div>
			<div class="search_form">
				<div class="d7">
					<form @submit.prevent="search_go">	
						 <!-- @mouseover="visible = false" @mouseleave="visible = true"	 -->
						<input type="text" placeholder="Искать здесь..." v-model="searchstring" >
						<!-- @mouseover="visible = false" -->
						<img class="searchicon" v-on:click="search_go, visible = true" src="../assets/img/searchicon.png">
						<button type="submit" v-on:click="search_go, visible = true"></button>
						<!-- <router-link :to="{ name: 'categorypage', params: {id: category_tag.id, tree_id: category_tag.tree_id} }"></router-link> -->
					</form>
					<div v-if="searchproducts.length" @mouseover="visible = false" @mouseleave="visible = true" class="search_box" v-bind:class="{ visible: visible }" ref="nav_search">
						<div v-for="product in searchproducts">
						<router-link :to="{ name: 'productpage', params:{ id: product.id, category: product.category } }">
							<div class="sitem" @click="visible = true">
								<div class="sphoto"><img :src="GET_MEDIA_URL+product.image.split('media')[1]"></div>
								<div>{{product.name}}</div>
								<div class="sitem_price"><h4>{{product.price}} Руб.</h4></div>
							</div>
						</router-link>
						</div>
					</div>
				</div>

			</div>
			<div class="cart_compare_heart">
				<div class="bloki2-sub2">
					<div  class="bloki2_icon_count">
						<div v-if="GET_COMPARE_PRODUCTS.length" class="count_products">{{GET_COMPARE_PRODUCTS.length}}</div>
						<div class="bloki2-icon">
							<a href="#"><img src="../assets/img/sravni.png"></a>
						</div>
					</div>
					<div class="bloki2-text">
						<a href="#">СРАВНИТЬ</a>
					</div>
				</div>

				<div class="bloki2-sub2">
					<div  class="bloki2_icon_count">
						<div v-if="GET_HEART_PRODUCTS.length" class="count_products">{{GET_HEART_PRODUCTS.length}}</div>
						<div class="bloki2-icon">
							<a href="#"><img src="../assets/img/like.png"></a>
						</div>
					</div>
					<div class="bloki2-text">
						<a href="#">ИЗБРАННОЕ</a>
					</div>
				</div>

				<div class="bloki2-sub2">
					<div class="bloki2-icon">
						<a href="#"><img src="../assets/img/shopping.png"></a>
					</div>
					<div class="bloki2-text">
						<a href="#">КОРЗИНА</a>
					</div>
				</div>

			</div>

		</div>

		<div class="bloki3">
				<my-tree :tree-data="GET_CATEGORIES" ></my-tree>
				<!-- <div class="category_parent" v-for="category in GET_CATEGORIES" v-if="category.level ==0" :key="category.id" @click="changeLastCategory(category.id)">{{ category.name }} -->
				<!-- </div>				 -->
		</div>
		

		<!-- <my-tree :tree-data="GET_CATEGORIES"></my-tree> -->
	</div>
<!-- https://www.digitalocean.com/community/tutorials/vuejs-recursive-components -->
	<!-- <ul>
		<li v-for="category in GET_CATEGORIES" v-if="category.level ==0" :key="category.id"><a :href=category.url>{{ category.name }}</a>
			<ul>
				<li v-for="subcategory in GET_CATEGORIES" v-if="category.id == subcategory.parent" :key="subcategory.id"><a :href=subcategory.url>{{ subcategory.name }}</a>
					<ul>
						<li v-for="subcategory1 in GET_CATEGORIES" v-if="subcategory.id == subcategory1.parent" :key="subcategory1.id"><a :href=subcategory1.url>{{ subcategory1.name }}</a>
							<ul>
								<li v-for="subcategory2 in GET_CATEGORIES" v-if="subcategory1.id == subcategory2.parent" :key="subcategory2.id"><a :href=subcategory2.url>{{ subcategory2.name }}</a>
									<ul>
										<li v-for="subcategory3 in GET_CATEGORIES" v-if="subcategory2.id == subcategory3.parent" :key="subcategory3.id"><a :href=subcategory3.url>{{ subcategory3.name }}</a>
										</li>
									</ul>
								</li>
							</ul>
						
						</li>
					</ul>
				</li>
			</ul>
		</li>				
	</ul> -->
</div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import MyTree from './buttons/MyTree';
export default {
		data() {
			return {
				searchstring: '',
				searchproducts: [],
				visible: true,
				show: true,			
			}
		},

	components: {
		MyTree
	},
    computed: {
    ...mapGetters(['GET_CATEGORIES','GET_PRODUCTS','GET_MEDIA_URL','GET_COMPARE_PRODUCTS','GET_HEART_PRODUCTS']),
	// gettree() {
	// console.log('tree')
	// this.tree = this.GET_CATEGORIES
	// var newtree = {}
	// this.tree.forEach(function(elem) {
	// 	if (elem.parent != null) {
	// 		// newtree.label(elem.name)
	// 		console.log(elem.name,elem.id)
	// 	}
	// 	console.log(elem.id)
	// })
	// console.log(newtree)
	// // for (let obj in this.tree) {
	// // console.log(obj)
	// // }

	// },
    },

	methods: { 
	...mapActions(['FETCH_CATEGORIES','CHANGE_LAST_CATEGORY','LAST_CATEGORY','SEARCH_PRODUCTS_SET']),
	searchbyproducts(value){
		if (value != ''){
		this.searchproducts = this.GET_PRODUCTS.filter(function(item){
		return item.name.toLowerCase().includes(value.toLowerCase())
		})
		}else{
		    console.log('строка поиска пустая')
			this.visible = true
			// this.searchproducts = []
		}
	},
	// show_menu_func(show_menu){
	// 	console.log(show_menu)
	// 	this.show = show_menu
	// },
	search_go(){
		if (this.$route.name == 'category' || this.$route.name == 'home') {
			console.log('search go if',this.$route.name)
			this.visible = true	
			// console.log(this.$router.name)
			console.log(this.searchproducts)
			this.SEARCH_PRODUCTS_SET(this.searchproducts)
			this.searchstring = ''
		}else{
			console.log('search go else',this.$route.name)
			this.visible = true	
			// console.log(this.$router.name)
			this.SEARCH_PRODUCTS_SET(this.searchproducts)
			this.$router.push({ name: 'home' })
			this.searchstring = ''
		}
	},
	// changeLastCategory(category) {
	// 	this.CHANGE_LAST_CATEGORY(category)
	// },
	},
	mounted() {
		// клик вне элемента поиска
		// let vm = this;
		// document.addEventListener('click', function (item) {
		// 	if (item.target != vm.$refs['nav_search']) {
		// 		console.log('клик вне')
		// 		vm.visible = true
		// 	}
		// })
    },
	// created(){
	// 	document.title = 'Нептун 55'
	// },
	watch: {
		searchstring(){
			this.visible = false
			console.log('Вотчер поиска')
			this.searchbyproducts(this.searchstring)
		}
	},
}


</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Caveat&family=Montserrat&display=swap');

h1 {
    color: #000;
}
body{
    background-color: #F4FBFF;
    font-family: Montserrat, Helvetica, sans-serif;
}
.obshii{
    width: 100%;
    min-height: 155px;

}
.bloki1{
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #A4E2FD;
}
.bloki1 h2{
    font-family: 'Caveat', cursive;
}
.bloki1-sub1{
    margin-left: 30px;
}


.bloki1-sub3{
    margin-right: 30px;
    display: flex;
    max-height: 90px;
    align-items: center;
    
}

.bloki1-sub3 a{
    text-decoration: none;
    color: #000;
}
.bloki1-sub3 img {
    opacity: 0.5;
    height: 65%;
  }

.bloki2{
    max-width: 100%;
    max-height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
}
.bloki2-sub1{
    display: flex;
    align-items: center;
    justify-content: center;
}
.bloki2-sub1 img{
	min-width: 100%;
}
.cart_compare_heart{
	width: 100%;
	display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
	flex-wrap: nowrap;
    margin-right: 10px;
}
.bloki2-sub2{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-right: 10px;

}
.count_products{
	position: relative;
	top: -2px;
	left: 3px;
	color: #fff;
	background: rgb(253, 51, 51);
	text-align: center;
	border-radius: 15px;
	width: 20px;
    height: 20px;
}
.bloki2_icon_count{
	display: flex;
	flex-direction: row;
}
.bloki2-icon{
    /* opacity: 0.5;  */
    /* margin: auto; */
}
.bloki2-icon img{
	max-width: 100%;
}
.bloki2-icon a{
	opacity: 0.5; 
    margin: auto;
}
.bloki2-text{
    font-weight: 900;
    font-size: 18px;
}

.bloki2-text a{
    text-decoration: none;
    color: #000;
}


.img-logo{
    max-height: 140px;
}

.bloki3{
    width: 90%;
    height: 45px;
    display: flex;
    flex-direction: row;
	justify-content: space-between;
    font-size: 20px;
    font-weight: 900;   
}

  .search_form{
	  width: 330px;
  }
  .d7{
	  margin-left: 20px;
	  display: flex;
	  background: #F4FBFF;
	  justify-content: left;
	  width: 325px;
	}
  .d7:after {content:""; clear:both; display:table}
  .d7 form {
    width: auto;
    float: right;
    margin-right: 30px;
  }
  .d7 input {
    width: 240px;
    height: 42px;
    padding-left: 15px;
    border-radius: 42px;
    border: 2px solid #324b4e;
    background: #F4FBFF;
    outline: none;
    position: relative;
    transition: .3s linear;
    
  }
  .d7 input:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  .d7 input:focus {
    width: 255px;
  }
  .d7 button {
    width: 42px;
    height: 42px;
    background: none;
    border: none;
    position: absolute;
    top: -2px;
    right: 0;
  }

  .searchicon{
	  position: relative;
	  left: -35px;
	  opacity: 0.7;
  }
.search_box{
	background-color: white;
	position: absolute;
	margin-top: 45px;
	max-width: 600px;
	max-height: 400px;
	overflow: scroll;
	z-index: 5;


}
.search_box a{
	text-decoration: none;
}
.search_box.visible{
	display: none;
}
.sitem{
	display: flex;
	flex-direction: row;
	text-decoration: none;
	align-items: center;
}
.sitem:hover{
	background-color: #e1f6fc;
}
.sitem_price{
	margin-left: 15px;
}
.sphoto{
	/* width: 27px;
	height: 27px; */
}
.sphoto img{
	max-width: 50px;
	max-height: 50px;
}
@media all and (max-width: 1030px) {
	.bloki2-sub1{
		display: none;
	}
}
@media all and (max-width: 720px) {
	.obshii{
		margin-top:50px;
		min-height: 100px;
	}
	.bloki3{
		height: 0;
	}
	.bloki1-sub1{
		display: none;
	}
	.bloki2-sub1{
		display: none;
	}
	.bloki2-text{
		display: none;
	}
	.header-list{
		flex-direction: column;
	}
	.bloki2{
		flex-wrap: wrap;
		justify-content: space-around;
	}
}
@media all and (max-width: 480px) {
	.bloki1-sub2{
		display: none;
	}
}
</style>