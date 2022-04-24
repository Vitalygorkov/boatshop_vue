<template>
  <div class="ProductPage">
    <h1>This is an product page {{ this.$route.params.id }}</h1>
  </div>
</template>


<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    props: ['product'],
    computed: {
    ...mapGetters(['GET_MEDIA_URL',]),

    },
    methods: {

    },
}


</script>