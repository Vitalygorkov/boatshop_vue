<template>
    <div>
        <div class="categories_path_box">
            <div class="category_path"><router-link to="/category/1">Главная</router-link></div>
                <div class="category_path">
                    <img src="../assets/img/arrow-right-solid.svg">

                </div>
            <div class="category_path"><router-link to="/blog/">блог</router-link></div>
        </div>

        <div class="content_box">

            <!-- <div v-if="categories_blog != []">
                <ul id="example-1">
                    Категории
                <li v-for="item in blog_categories" :key="item.id">
                    {{ item.name }}
                </li>
                </ul>

            </div> -->

            <div>Публикации:</div>
        <div class="post_box" v-if="computed_posts_blog != []">
                <div v-for="post in blog_posts" :key="post.id">
                    <post-card :post="post"/>
                </div>
            
        </div>
        
        </div>
        
    </div>
    
</template>
    
    
<script>


import {mapGetters, mapActions} from 'vuex'
import PostCard from '../components/PostCard'
// import PostView from './PostView'


export default {
    name: 'BlogView',
    components: {
        PostCard,
        // PostView,
    },
    data() {
        return {
            blog_categories: [],
            blog_posts: [], 

            }
    },
    methods: {
        ...mapActions(['FETCH_BLOG_CATEGORIES']),
        async straight_fetch_blog_cate(){
            console.log('прямой запрос категорий блога')
            const res = await fetch(
                `${this.GET_SERVER_URL}/CategoryBlog/`
            )
            console.log('прямой запрос категорий блога выполнен')
            const blog_categorys = await res.json()
            console.log(blog_categorys)
            // this.blog_categories = blog_category
            return blog_categorys

        },
        async straight_fetch_blog_posts(){
            console.log('прямой запрос постов блога')
            const res = await fetch(
                `${this.GET_SERVER_URL}/posts/`
            )
            console.log('прямой запрос постов блога выполнен')
            const blog_posts = await res.json()
            console.log(blog_posts)
            // this.blog_categories = blog_category
            return blog_posts

        },
        // get_simple_text(){
        //     console.log("выполняется функция простого текста")
        //     return "мы ретерним простой текст"
        // },


    },
    computed: {
        ...mapGetters(['GET_BLOG_CATEGORIES', 'GET_SERVER_URL']),
        async categories_blog () {
            console.log("начало computed categories_blog")
            this.blog_categories = await this.straight_fetch_blog_cate()
            // console.log(cat_obj)    
            console.log("окончание computed categories_blog")
            // return this.blog_categories
        },
        async computed_posts_blog () {
            console.log("начало computed_post_blog")
            this.blog_posts = await this.straight_fetch_blog_posts()
            // console.log(cat_obj)    
            console.log("окончание computed_post_blog")
            // return this.blog_posts
        },
    },
    created(){
        
    },
    mounted() {
        // this.FETCH_BLOG_CATEGORIES()
        console.log('mounted начало blogview')
        // this.blog_categories = [...this.GET_BLOG_CATEGORIES]
        document.title = `Блог магазина лодок пвх нептун 55`
        console.log('mounted')
    },
    watch: {
        // blog_categories(){
        //     сonsole.log('ВОТЧЕР blog_categories')
        // }
        // GET_BLOG_CATEGORIES(){
        //     console.log('вотчер геттера категорий блога')
        //     this.blog_categories = [...this.GET_BLOG_CATEGORIES]
        // },
        // FETCH_BLOG_CATEGORIES(){
        //     console.log('вотчер экшина категорий блога')
        //     this.blog_categories = [...this.GET_BLOG_CATEGORIES]
        // }
    },

}


</script>
<style>
.content_box{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 1200px;
    justify-content: center;
}


</style>