<template>
  <v-list-group
    :prepend-icon="item.icon"
    :depth="depth + 1"
    :style="indent"
    color="teal lighten-2"
  >
    <template v-slot:activator>
      <v-list-item-icon
        v-if="!item.icon"
        class="text-caption text-uppercase justify-center mt-3"
        style="margin-top: 14px"
      >
        {{ FirstTitleLetter }}
      </v-list-item-icon>

      <v-list-item-content v-if="item.title">
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </template>

    <template v-for="(child, i) in item.children">
      <default-list-group
        v-if="child.children"
        :key="i"
        :item="child"
        :depth="0.5"
      />

      <default-list-item
        v-if="!child.children"
        :key="i"
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
    FirstTitleLetter() {
      const matches = this.item.title.match(/\b(\w)/g);

      return matches.join("");
    },
    indent() {
      return { "padding-left": `calc(${this.depth * 30}px)` };
    },
  },

};
</script>
