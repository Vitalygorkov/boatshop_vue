  <template>
  <div class="search-menu-box">
      <accordion-section :title="title" :content="content"/>
      <accordion-section-range :title2="title2"/>

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


</style>