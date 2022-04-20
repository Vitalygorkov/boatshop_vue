<template>
  <div class="tree">
    до
    <!-- https://www.digitalocean.com/community/tutorials/vuejs-recursive-components -->
    <ul>
      <li v-for="category in treeData" v-if="category.level ==0" :key="category.id">{{category.name}}
        <my-node-tree :node="treeData" :parent="category.id"></my-node-tree>
      </li>
    </ul>
    <!-- {{treeData}} -->
    после
  </div>
</template>

<script>
import MyNodeTree from './MyNodeTree';

export default {
  props: {
    treeData: Array
  },
  components: {
    MyNodeTree
  }
};
</script>

<style>
.tree-list ul {
  padding-left: 16px;
  margin: 6px 0;
}
</style>