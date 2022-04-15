<template>
  <div id="app">
    <Nav :categories="listCategory"/>
    <router-view/>
  </div>
</template>

<style>
@import "assets/css/style.css";
</style>
<script>
    import Nav from "./components/Nav";
    export default {
      data() {
        return {
          listCategory: []
        }
      },
      components: {Nav},
      created() {
        this.loadListCategory()
      },
      methods: {
        async loadListCategory() {
          this.listCategory = await fetch(
            `${this.$store.getters.getServerUrl}/category`
          ).then(response => response.json())
        }
      },

    }
</script>