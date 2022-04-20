  <template>
  <div class="search-menu-box">
      <accordion-section :title="title" :content="content"/>
      <accordion-section-range parametr="price" title="Цена" :min_value="0" :max_value="215000" unitType="Р"/>

  </div>


  </template>


<script>
import AccordionSection from './buttons/AccordionSection'
import AccordionSectionRange from './buttons/AccordionSectionRange'


export default {
    name: 'SearchMenu',
    data() {
        return {
            title: "Пр заголовок",
            title2: "2Пр заголовок2",
            content: "Пр контент"
            }
        },
    methods: {

    },
    components: {
        AccordionSection,
        AccordionSectionRange


    }

}


</script>
<style>
.search-menu-box{
    background-color: antiquewhite;
    display: block;
    min-width: 230px;
}
@media all and (max-width: 720px) {
    .search-menu-box{
        display: none;
    }
}

</style>