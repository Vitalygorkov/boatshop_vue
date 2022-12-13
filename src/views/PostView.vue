<template>
    <div>
        <div class="categories_path_box">
            <div class="category_path"><router-link to="/category/1">Главная</router-link></div>
                <div class="category_path">
                    <img src="../assets/img/arrow-right-solid.svg">

                </div>
            <div class="category_path"><router-link to="/blog/">блог</router-link></div>
                <div class="category_path">
                    <img src="../assets/img/arrow-right-solid.svg">

                </div>
            <div class="category_path"><router-link :to="'/post/'+this.$route.params.id">{{post.title}}</router-link></div>    
        </div>

        <div v-if="get_post != []" class="article__card">

                <div class="image-title">
                <div v-if="post.photo" class="card__image"><img :src="GET_MEDIA_URL+post.photo.split('media')[1]" alt=""></div>
                <h2 class="card-title__article">{{post.title}}</h2>
                </div>

            <div v-html="post.content"></div>
            <div class="card-footer__article">
                <div class="article__date">{{post.created_ad.slice(0,10)}}</div>
                <div class="article__author">Автор: {{post.author_name}}</div>
                <div class="article__read"><img src="../assets/img/icon-preview.png" alt="">{{post.counts_views_simple}}</div>
            </div>

        </div>
    </div>
        
</template>
    
    
<script>

import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'PostView',
    data() {
        return {
            blog_categories: [],
            post: [],
    
            }
    },
    props:{
        post_id: Number,
    },
    methods: {
        ...mapActions(['FETCH_BLOG_CATEGORIES']),
        // async straight_fetch_blog_cate(){
        //     console.log('прямой запрос категорий блога')
        //     const res = await fetch(
        //         `${this.GET_SERVER_URL}/CategoryBlog/`
        //     )
        //     console.log('прямой запрос категорий блога выполнен')
        //     const blog_categorys = await res.json()
        //     console.log(blog_categorys)
        //     // this.blog_categories = blog_category
        //     return blog_categorys

        // },
        async straight_fetch_blog_post(){
            console.log('прямой запрос поста')
            // console.log(`${this.GET_SERVER_URL}/post/${this.$route.params.id}`)
            const res = await fetch(
                `${this.GET_SERVER_URL}/post/${this.$route.params.id}`
            )
            console.log('прямой запрос поста выполнен')
            const blog_post = await res.json()
            console.log(blog_post)
            // this.blog_categories = blog_category
            return blog_post

        },
  


    },
    computed: {
        ...mapGetters(['GET_BLOG_CATEGORIES', 'GET_SERVER_URL', 'GET_MEDIA_URL']),
        async get_post () {
            console.log("начало computed get_post")
            this.post = await this.straight_fetch_blog_post()
            // console.log(cat_obj)    
            console.log("начало computed get_post")
            return this.post
        },
    },
    created(){
        console.log(this.$route.params.id)
        
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

<style scoped>
*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
}
a {
    text-decoration: none;
}
ul,
ol,
li {
    list-style: none;
}
img {
    vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: inherit;
    font-size: inherit;
}
html,
body {
    height: 100%;
    line-height: 2;
    font-size: 20px;
    color: #000;
    font-family: Montserrat;
    font-weight: 500;
}
.image-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 95%;
}
.article__card{
    display: flex;
    flex-direction: column;
    padding: 30px 0px;
    margin-bottom: 50px;
    align-items: center;
    background-color: rgba(210, 252, 255, 0.466);
    border-radius: 20px;
}
.article__card:hover {
    background-color: rgb(253, 253, 253);
    box-shadow: 0 0 40px #71fafae3;
}
.card__image{
    width: 80%;
    margin-bottom: 50px;
    max-width: 300px;
    object-fit: cover;
    display: flex;
    justify-content: center;
}
.card__image img{
    width: 70%;
    border-radius: 20px;
}
.card-title__article{
    line-height: 2;
    font-size: 26px;
    color: rgb(2, 38, 71);
    font-weight: 700;
    padding: 0px 20px ;
}
.card-footer__article{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    height: 100%;
    line-height: 2;
    font-size: 18px;
    color: rgb(48, 47, 47);
    font-weight: 400;
    margin-top: 15px;
}
.article__read img{
    margin-right: 15px;
}
/*--------------------------------------медиа-------------------------------*/
@media (max-width: 1030px){
    ._container {
        width: 90%;
    }
    .card__image{
        width: 100%;
        margin-bottom: 35px;
    }
}
@media (max-width: 780px){

}
@media (max-width: 430px){
    .card__image{
        width: 100%;
        margin-bottom: 25px;
    }
    .card__image img{
        width: 90%;
    }
    .card-title__article{
        font-size: 20px;
        color: rgb(2, 38, 71);
        font-weight: 600;
    }
    .card-footer__article{
        font-size: 16px;
        font-weight: 400;
        margin-top: 10px;
    }
    .article__read img{
        margin-right: 12px;
        width: 40%;
    }

}
@media (max-width: 330px){
    .card__image{
        width: 100%;
        margin-bottom: 20px;
    }
    .card__image img{
        width: 95%;
    }
    .card-title__article{
        font-size: 16px;
        color: rgb(2, 38, 71);
        font-weight: 500;
    }
}


</style>