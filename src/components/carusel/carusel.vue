<template>
<div class="wrapper">
    <button class="prev" @click="prevSlide">Prev</button>
    <button class="next" @click="nextSlide">Next</button>
    <viewer :images="carusel_data">
    <div class="carusel" :style="{ 'margin-left': '-' + (100 * currentSLideIndex) + '%' }">
        <carusel-item
        v-for="item in carusel_data"
        :item_data="item"
        :key="item"
        />
    </div>
    </viewer>
</div>
</template>


<script>
import {mapGetters, mapActions} from 'vuex'
import CaruselItem from './carusel-item.vue'
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

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
        show() {
            this.$viewerApi({
            images: this.images,
            })
        },

    }
}


</script>
<style scoped>
@media all and (min-width: 780px) {
    .next{
    left: 510px
    }
}

@media all and (max-width: 780px) {
    .wrapper{
    max-width: 480px;
    max-height: 480px;
    }
    .carusel{  
    max-width: 480px;
    max-height: 480px; 
    }
    .next{
    left: 389px;
    }

}
@media all and (max-width: 514px) {
    .wrapper{
    max-width: 400px;
    max-height: 400px;
    }
    .carusel{  
    max-width: 400px;
    max-height: 400px; 
    }
    .next{
        left: 300px;
    }
    .prev{
        left: 10px;
    }

}
@media all and (max-width: 434px) {
    .wrapper{
    max-width: 270px;
    max-height: 270px;
    }
    .carusel{  
    max-width: 270px;
    max-height: 270px; 
    }
    .next{
        left: 170px;
    }
    .prev{
        left: 10px;
    }

}
.wrapper{
    position: relative;
    max-width: 600px;
    max-height: 600px;
    /* max-height: 300px; */
    overflow: hidden;
    z-index: 1;
}
.carusel{
    position: relative;
    width: 600px;
    height: 600px; 
    display: flex;
    transition: all ease 0.5s;
    z-index: 1;
}
.prev{
    /* position: absolute;
    margin-right: 400px; */

    position: relative;
    top: 50%;
    /* margin: 125px 0px 0px 0px; */
    z-index: 2;
    font-size: 0;
    width: 45px;
    height: 100px;
    border: none;
    background: white url('/src/assets/img/angle-left-solid.svg') 0 0 / 100% no-repeat;
    opacity: 0.6;
}
.next{
    position: relative;
    top: 50%;
    /* left: 510px; */

    /* margin-left: 600px; */
    /* top: 50%;
    margin-top: 25%;
    margin-left: 55%; */
    /* margin: 0 0px 0px 555px; */
    z-index: 2;
    font-size: 0;
    width: 45px;
    height: 100px;  
    border: none;
    /* background-color: white; */
    background: white url('/src/assets/img/angle-right-solid.svg') 0 0 / 100% no-repeat;
    opacity: 0.6;
}
/* .next{
    position: static;
    top: 50%;
    margin-top: 25%;
    margin-left: 55%;
    /* margin: 0 0px 0px 555px; */
    /* z-index: 2;
    font-size: 0;
    width: 45px;
    height: 100px;  
    border: none;
    background: url('/src/assets/img/angle-right-solid.svg') 0 0 / 100% no-repeat;
    opacity: 0.5;
} */ 
</style>