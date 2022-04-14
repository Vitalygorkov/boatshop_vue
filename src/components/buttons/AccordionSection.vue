<template>
<div>
    <button @click="toggleShowForm" class="accordion">{{ title }}</button>
    <div v-bind:class="{ panel: showForm }">
    <p>{{ content }}</p>
    </div>

</div>
</template>


<script>
export default {
    name: 'SearchMenu',
    data() {
        return {
            showForm: true,
        }
    },
    props: ['title', 'content'],
    methods: {
        toggleShowForm() {
            this.showForm = !this.showForm
            console.log(this.showForm)
        }
    }
}


</script>
<style>
/* Style the buttons that are used to open and close the accordion panel */
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active, .accordion:hover {
  background-color: #ccc;
}

/* Style the accordion panel. Note: hidden by default */
.panel {
  padding: 0 18px;
  background-color: white;
  display: none;
  overflow: hidden;
}
</style>