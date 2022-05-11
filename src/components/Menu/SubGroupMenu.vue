<template>
  <v-list-group sub-group color="white">
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>{{ title }}</v-list-item-title>
      </v-list-item-content>
    </template>
    <template v-for="(item, index) in children">
      <template v-if="hasChildren(item)">
        <sub-group-menu
          :key="index"
          :title="item.title"
          :icon="item.icon"
          :children="item.children"
        />
      </template>
      <template v-else>
        <v-list-item
          :key="index"
          link
          @click="$router.push(item.path).catch(() => {})"
          class="grandChildren"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </template>
  </v-list-group>
</template>

<script>
export default {
  name: "SubGroupMenu",
  props: {
    children: {
      type: Array,
    },
    title: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
  methods: {
    hasChildren(item) {
      return item.children?.length > 0;
    },
  },
};
</script>

<style scoped>
.grandChildren {
  padding-left: 90px !important;
}
</style>