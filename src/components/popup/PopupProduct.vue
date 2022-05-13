<template>

 <div class="popup">
<span class="material-icons">
close
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

      }
    },
}


</script>
<style scoped>

</style>