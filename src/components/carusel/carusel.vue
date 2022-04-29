<template>
<div class="wrapper">
    <div class="carusel" :style="{ 'margin-left': '-' + (100 * currentSLideIndex) + '%' }">
        <carusel-item
        v-for="item in carusel_data"
        :item_data="item"
        />
    </div>
    <button class="prev" @click="prevSlide">Prev</button>
    <button class="next" @click="nextSlide">Next</button>{{this.currentSLideIndex}}
</div>
</template>


<script>
import {mapGetters, mapActions} from 'vuex'
import CaruselItem from './carusel-item.vue'

export default {
    name: "carusel",
    data() {
        return {
            currentSLideIndex: 0,
        }
    },
    props: {
        carusel_data: Array,
    },
    computed: {
    ...mapGetters(['GET_MEDIA_URL']),

    },
    components: {
        CaruselItem,
    },
    methods: {
        prevSlide() {
            if (this.currentSLideIndex > 0) {
                this.currentSLideIndex--              
            }
        },
        nextSlide() {
            if (this.currentSLideIndex >= this.carusel_data.length - 1) {
            this.currentSLideIndex = 0
            } else {
                this.currentSLideIndex++
            }

        },

    }
}


</script>
<style scoped>
.wrapper{
    width: 400px;
    height: 400px;
    /* max-height: 300px; */
    overflow: hidden;
}
.carusel{  
    width: 400px;
    height: 400px; 
    display: flex;
    transition: all ease 0.5s;
    z-index: 0;
}
.prev{
    /* position: absolute;
    margin-right: 400px; */

    position: absolute;
    top: 50%;
    margin: 125px 0px 0px 0px;
    z-index: 1;
    font-size: 0;
    width: 45px;
    height: 100px;
    border: none;
    background: url('/src/assets/img/angle-left-solid.svg') 0 0 / 100% no-repeat;
    opacity: 0.5;
}
.next{
    position: absolute;
    top: 50%;
    margin: 125px 0px 0px 355px;
    z-index: 1;
    font-size: 0;
    width: 45px;
    height: 100px;  
    border: none;
    background: url('/src/assets/img/angle-right-solid.svg') 0 0 / 100% no-repeat;
    opacity: 0.5;
}
</style>