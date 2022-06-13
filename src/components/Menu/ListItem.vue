<template>
  <v-list-item
    :href="item.href"
    :rel="item.href ? 'nofollow' : undefined"
    :target="item.href ? '_blank' : undefined"
    :to="item.to"
    active-class="primary white--text"
    link
    class="py-1"
    v-bind="$attrs"
    v-on="$listeners"
    :style="indent"
    :depth="depth + 1"
  >
    <v-list-item-icon
      v-if="!item.icon"
      class="
        text-caption text-uppercase
        justify-center
        ml-1
        my-2
        align-self-center
      "
    >
      {{ title }}
    </v-list-item-icon>

    <v-list-item-avatar v-if="item.avatar">
      <v-img :src="item.avatar" />
    </v-list-item-avatar>

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
      default: 0
    },
  },

  computed: {
    title() {
      const matches = this.item.title.match(/\b(\w)/g);

      return matches.join("");
    },
    indent() {
      return { 'padding-left': `calc(${this.depth * 50}px)` };
    },
  },
};
</script>
