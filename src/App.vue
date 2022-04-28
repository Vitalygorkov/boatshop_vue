<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<style>

</style>
<script>
    import {mapGetters, mapActions} from 'vuex'
    import Nav from "./components/Nav";
    export default {
      // data() {
      //   return {
      //     listCategory: []
      //   }
      // },
      components: {Nav},
      // created() {
      //   this.loadListCategory()
      // },
      computed: { 
        ...mapGetters(['GET_SERVER_URL']),

      },
      methods: { 
        ...mapActions(['FETCH_CATEGORIES', 'FETCH_PRODUCTS']),
        // async loadListCategory() {
        //   this.listCategory = await fetch(
        //     `${this.GET_SERVER_URL}/category`
        //   ).then(response => response.json())
        // }

      },
      // methods: {
      //   async loadListCategory() {
      //     this.listCategory = await fetch(
      //       `${this.$store.getters.GET_SERVER_URLl}/category`
      //     ).then(response => response.json())
      //   }
      // },
      mounted() {
        this.FETCH_PRODUCTS();
      },

    }
</script>