<template>
<div class="radiobox">
    <div @click="toggleShowForm" class="accordion_title">
      <div class="title">
        {{ title }} {{ checked }}
      </div>
        <img v-bind:class="{ img_turn: showForm }" src="../../assets/img/arrow.png">
    </div>
      <div class="panel" v-bind:class="{ panel_on: showForm }">
        <div class="checkselect">
          <label><input type="radio" id="none" value="Отсутствует" v-model="checked" @click="toggleShowForm"> Отсутствует</label>
          <label><input type="radio" id="length_up" value="По возрастанию длинны" v-model="checked" @click="toggleShowForm"> По возрастанию длинны</label>
          <label><input type="radio" id="alphabet" value="По алфавиту" v-model="checked" @click="toggleShowForm"> По алфавиту</label>
          <label><input type="radio" id="ascending_price" value="По возрастанию цены" v-model="checked" @click="toggleShowForm"> По возрастанию цены</label>
          <label><input type="radio" id="descending_price" value="По убыванию цены" v-model="checked" @click="toggleShowForm"> По убыванию цены</label>       
        </div>
      </div>

</div>

</template>


<script>
export default {
    data() {
        return {
            showForm: true,
            checked: 'Отсутствует',
        }
    },
    props: {
      title: String,
      list_items: Array,
    },
    methods: {
        toggleShowForm() {
            this.showForm = !this.showForm
        },
        emitParams() {
            this.$emit("CheckedRadioBox", this.checked)
        }
    },
    watch: {
      checked(){
        console.log('Сработал вотчер рабиобокс')
        // console.log(this.checked)
        this.$emit("CheckedRadioBox", this.checked)
      }
    },
}


</script>
<style scoped>
.radiobox{
  max-width: 340px;
}
.title{
  max-width: 320px;
  max-height: 20px;
  word-wrap: normal;
  word-break: break-all;
  overflow: hidden;
}
.accordion_title{
  display: flex;
  flex-direction: row;
  justify-content: left;
  padding: 9px;
  overflow: hidden;
  background-color: white;
  max-width: 100%;
}
.accordion_title:hover {
  background-color: rgb(201, 216, 218);
}
.checkselect {

	position: relative;
	display: inline-block;
	max-width: 280px;
	text-align: left;
}
.checkselect label {
	position: relative;
	display: block;
	margin: 0;
	padding: 4px 6px 4px 25px;
	font-weight: normal;
	font-size: 1em;
	line-height: 1.1;
	cursor: pointer;
}

/* Style the buttons that are used to open and close the accordion panel */
img{
  /* display: none; */
  margin-right: 15px;
  transform: rotate(180deg);
  width: 15px;
  height: 15px;
  opacity: 0.4;
}
.img_turn{
  transform: rotate(0deg);
  transition: 0.25s;
}
/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active, .accordion:hover {
  background-color: white;
}

/* Style the accordion panel. Note: hidden by default */
.panel { 
  padding: 0 18px;
  background-color: white;
  overflow: hidden;
}
.panel.panel_on {
  display: none;
}
</style>