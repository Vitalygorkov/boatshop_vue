<template>

 <div class="popup">
<span>
  <i class="material-icons">close</i>
</span>


<slot></slot>
 </div>


</template>


<script>
export default {
    data() {
        return {
          sort_active: false,
        }
    },
    props: {
      title: String,

    },
    methods: {

    },
    watch: {

      
    },
}


</script>
<style scoped>

</style>