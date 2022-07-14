<template>
  <div id="app">
    <keep-alive>
    <Nav/>
    </keep-alive>
    <router-view/>
    <keep-alive>
    <Footer/>
    </keep-alive>
  </div>
</template>

<style>

</style>
<script>
    import {mapGetters, mapActions} from 'vuex'
    import Nav from "./components/Nav";
    import Footer from "./components/Footer";
    export default {
      // data() {
      //   return {
      //     listCategory: []
      //   }
      // },
      components: {Nav, Footer},
      // created() {
      //   this.loadListCategory()
      // },
      computed: { 
        ...mapGetters(['GET_SERVER_URL']),

      },
      methods: { 
        ...mapActions(['FETCH_CATEGORIES', 'FETCH_PRODUCTS', 'FETCH_BOATS']),
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
        // this.FETCH_CATEGORIES();
        // await this.FETCH_PRODUCTS();
        // await this.FETCH_BOATS();

      },
      created() {
        // this.FETCH_CATEGORIES();
        this.FETCH_PRODUCTS();
        this.FETCH_BOATS();
        this.FETCH_CATEGORIES();
        console.log('app created')
      },

    }
</script>