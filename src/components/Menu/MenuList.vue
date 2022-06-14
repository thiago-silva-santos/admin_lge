<template>
  <v-list expand nav dense>
    <template v-for="(item, i) in items">
      <default-list-group
        v-if="item.children"
        :key="i"
        :item="item"
      />

      <default-list-item v-if="!item.children" :key="i" :item="item"/>
    </template>
  </v-list>
</template>

<script>
export default {
  name: "DefaultList",

  components: {
    DefaultListGroup: () => import("./ListGroup"),
    DefaultListItem: () => import("./ListItem"),
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
