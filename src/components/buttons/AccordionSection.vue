<template>
<div>
    <button @click="toggleShowForm" class="accordion">{{ title }}<img v-bind:class="{ img_turn: showForm }" src="./..\..\assets\img\arrow.png"></button>
      <div class="panel" v-bind:class="{ panel_on: showForm }">
          {{ content }}
      </div>

</div>
</template>


<script>
export default {
    data() {
        return {
            showForm: true,
        }
    },
    props: ['title', 'content'],
    methods: {
        toggleShowForm() {
            this.showForm = !this.showForm
        }
    }
}


</script>
<style scoped>
/* Style the buttons that are used to open and close the accordion panel */
.accordion {
  background-color: #dadada;
  color: #444;
  cursor: pointer;
  padding: 12px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
}
img{
  transform: rotate(180deg);
  margin-left: 75%;
  width: 8%;
  opacity: 0.4;
}
.img_turn{
  transform: rotate(0deg);
  transition: 0.25s;
}
/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active, .accordion:hover {
  background-color: #ccc;
}

/* Style the accordion panel. Note: hidden by default */
.panel { 
  padding: 0 18px;
  background-color: #dadada;
  overflow: hidden;
}
.panel.panel_on {
  display: none;
}
</style>