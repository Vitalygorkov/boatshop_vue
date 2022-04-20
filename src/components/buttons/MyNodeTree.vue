<template>
<!-- https://www.digitalocean.com/community/tutorials/vuejs-recursive-components -->
<ul>
  <li v-for="category in node" v-if="category.parent == parent" :key="category.id">{{category.name}}
  <ul>
  <mynode :node="node" :parent="category.id"></mynode>
  </ul>
  </li>

  <!-- <li>sadsad</li> -->
</ul>

</template>

<script>
export default {
  name: "mynode",
  props: {
    node: Array,
    parent: Number
  }
};
</script>