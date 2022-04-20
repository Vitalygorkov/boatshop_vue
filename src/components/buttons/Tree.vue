<template>
  <div class="tree">
    <!-- https://www.digitalocean.com/community/tutorials/vuejs-recursive-components -->
    <ul class="tree-list">
      <node-tree :node="treeData"></node-tree>
    </ul>
  </div>
</template>

<script>
import NodeTree from "./NodeTree";

export default {
  props: {
    treeData: Object
  },
  components: {
    NodeTree
  }
};
</script>

<style>
.tree-list ul {
  padding-left: 16px;
  margin: 6px 0;
}
</style>