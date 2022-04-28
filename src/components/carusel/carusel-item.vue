<template>
    <a :href="GET_MEDIA_URL+item_data.image.split('media')[1]">
        <img :src="GET_MEDIA_URL+item_data.image.split('media')[1]">

    </a>
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
img{
    width: 400px;
    /* max-height: 100px; */
}

</style>