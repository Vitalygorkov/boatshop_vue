<template>
        <div class="imgcarusel-item">
            <img class="imgcarusel" :src="GET_MEDIA_URL+item_data.image.split('media')[1]">
        </div>
</template>


<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    data() {
        return {
            showForm: true,
        }
    },  
    props: {
        item_data: Object,
    },
    computed: {
    ...mapGetters(['GET_MEDIA_URL']),

    },
    methods: {

    }
}


</script>
<style scoped>
.imgcarusel-item{
    /* height: 854px; */
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-grow: 0;
    flex-shrink: 0;
    width: 600px;
}
.imgcarusel{
    max-width: 600px;
    max-height: 600px;
    object-fit: contain;
    /* max-height: 100px; */
}
@media all and (max-width: 780px) {
    .imgcarusel-item{
        width: 480px;
        height: 480px;
    }
    .imgcarusel{
        max-width: 480px;
        max-height: 480px;
        /* width: 480px; */
        /* max-height: 100px; */
    }
    

}
@media all and (max-width: 514px) {
    .imgcarusel-item{
        width: 400px;
        height: 400px;
    }
    .imgcarusel{
        max-width: 400px;
        max-height: 400px;
        /* width: 400px; */
        /* max-height: 100px; */
    }
}
@media all and (max-width: 434px) {
    .imgcarusel-item{
        width: 270px;
        height: 270px;
    }
    .imgcarusel{
        /* object-fit: scale-down; */
        max-width: 270px;
        max-height: 270px;
        /* max-height: 100px; */
    }
}

</style>