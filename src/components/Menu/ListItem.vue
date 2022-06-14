<template>
  <v-list-item
    :to="item.path"
    active-class="teal darken-2"
    link
    class="py-0"
    :depth="depth + 1"
    :style="indent"
    dark
  >
    <v-list-item-icon
      v-if="!item.icon"
      class="text-caption text-uppercase justify-center mt-3"
    >
      {{ FirstTitleLetter }}
    </v-list-item-icon>

    <v-list-item-icon v-if="item.icon" class="my-2 align-self-center">
      <v-icon v-text="item.icon" />
    </v-list-item-icon>

    <v-list-item-content v-if="item.title">
      <v-list-item-title v-text="item.title" />
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "DefaultListItem",

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
      return { "padding-left": `calc(8px + (${this.depth * 30}px))` };
    },
  },
};
</script>
