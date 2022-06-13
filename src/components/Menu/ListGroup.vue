<template>
  <v-list-group
    color="white"
    :group="group"
    :prepend-icon="item.icon"
    eager
    v-bind="$attrs"
    :depth="depth + 1"
    :style="indent"
    class="teste"
  >
    <template v-slot:activator>
      <v-list-item-icon
        v-if="!item.icon && !item.avatar"
        class="text-caption text-uppercase text-center my-2 align-self-center"
        style="margin-top: 14px"
      >
        {{ title }}
      </v-list-item-icon>

      <v-list-item-avatar v-if="item.avatar">
        <v-img :src="item.avatar" />
      </v-list-item-avatar>

      <v-list-item-content v-if="item.title">
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </template>

    <template v-for="(child, i) in item.children">
      <default-list-group
        v-if="child.children"
        :key="`sub-group-${i}`"
        :item="child"
        :depth="0.4"
      />

      <default-list-item
        v-if="!child.children"
        :key="`child-${i}`"
        :item="child"
        :depth="0.5"
      />
    </template>
  </v-list-group>
</template>

<script>

export default {
  name: "DefaultListGroup",

  components: {
    DefaultListItem: () => import("./ListItem"),
  },

  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    depth: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    group() {
      return this.genGroup(this.item.children);
    },
    title() {
      const matches = this.item.title.match(/\b(\w)/g);

      return matches.join("");
    },
    indent() {
      return { 'padding-left': `calc(${this.depth * 50}px)` };
    },
  },

  methods: {
    genGroup(items) {
      return items
        .reduce((acc, cur) => {
          if (!cur.to) return acc;

          acc.push(cur.items ? this.genGroup(cur.items) : cur.to.slice(1, -1));

          return acc;
        }, [])
        .join("|");
    },
  },
};
</script>
<style scoped>

</style>
