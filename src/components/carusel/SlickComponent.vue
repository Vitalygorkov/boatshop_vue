<template>
<div class="slkbox">
    
    <VueSlickCarousel :arrows="true" :dots="true">
    <!-- <div v-for="item in items">
        <img :src="GET_MEDIA_URL+item.image.split('media')[1]" :key="item.image">
    </div> -->

    <!-- <img v-for="item in items" :src="GET_MEDIA_URL+item.image.split('media')[1]" :key="item.image"> -->


    <!-- <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>  -->
    <div><img src="https://vitgo.ru/media/photo/0f63ec78371dd647dfc4c2e6c80adb1a.png " /></div>
    <div><img src="https://vitgo.ru/media/photo/1ed1841439c2852462447a2f8d2af4a1.png " /></div>
    <div><img src="https://vitgo.ru/media/photo/38d3e49912d8207a86e3eb67b492c94e.png " /></div>
    <div><img src="https://vitgo.ru/media/photo/99ea48967d75b1f886879ac8447b73c3.png " /></div>
    <div><img src="https://vitgo.ru/media/photo/842ec1c8dbadb9829525cad5ff98f9b6.png " /></div>
    <div><img src="https://vitgo.ru/media/photo/a9017243007bcedf46ed945369f7d13b.jpg " /></div>
    <div><img src="https://vitgo.ru/media/photo/edb70272ebc3bb79bdf1f1d2c890559e.png " /></div>
    <div><img src="https://vitgo.ru/media/photo/480f7348bb2a4c5c24f048a12fcd54b8.jpg " /></div>
    <div><img src="https://vitgo.ru/media/photo/f9778e56181031b12a54d2c3b4d29d0b.jpg " /></div>

    </VueSlickCarousel>

</div>
</template>


<script>
import {mapGetters, mapActions} from 'vuex'
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


export default {
    name: 'SlickComponent',
    data() {
        return {
            // showForm: true,
            // images: []
        }
    },  
    props: {
        items: Array,
    },
    computed: {
    ...mapGetters(['GET_MEDIA_URL']),

    },
    components: {
        VueSlickCarousel
    },
    methods: {

    },
    // mounted() {
    //     // this.$refs.carousel.init()
    // },
    // created(){
    //     // this.$refs.carousel.init()
    // },
}


</script>
<style scoped\>
.slkbox{
    display:  flex;
    justify-content: center;
    align-items: center;
    width: 640px;
    height: 480px;
    /* max-width: 640px;
    max-height: 480px; */
    border: red solid 2px;
}
.slkbox img{
    object-fit: scale-down;
    max-width: 640px;
    max-height: 480px;
}
</style>