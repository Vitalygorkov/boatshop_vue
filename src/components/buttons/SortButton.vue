<template>

 <div class="sort_item" @click="sort_active = !sort_active">
 {{title}}
 <!-- <img v-bind:class="{ sort_active_img: sort_active}" src="../../assets/img/sort.svg"> -->
 
 
 </div>


</template>


<script>
export default {
    data() {
        return {
          sort_active: false,
          sort_active2: false,
        }
    },
    props: {
      title: String,
      up: String,
      down: String,
    },
    methods: {
        // toggleShowForm() {
        //     this.showForm = !this.showForm
        // },
        // emitParams() {
        //     if(this.sort_active){
        //       console.log('emit up')
        //       this.$emit("CheckedRadioBox", this.up)
        //       console.log('emit up')
        //     }else{
        //       console.log('emit down')
        //       this.$emit("CheckedRadioBox", this.down)
        //       console.log('emit down')
        //     }
        // }
    },
    watch: {
      sort_active(){
        if(this.sort_active == false){
          this.$emit("CheckedButton", this.down)
        }else{
          this.$emit("CheckedButton", this.up)
        }
      }
    },
}


</script>
<style scoped>
.sort_item{ 
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
/* .sort_item img{
  width: 11%;
  transition: 0.25s;
}
.sort_active_img{
  transform: scale(1, -1);
  transition: 0.25s;
} */
</style>