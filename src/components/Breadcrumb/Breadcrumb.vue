
<template>
  <v-breadcrumbs :items="breadCrumbs">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        :to="item.to"
        class="text-subtitle-2 crumb-item"
        :disabled="item.disabled"
        exact
      >
        {{ item.text }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  computed: {
    breadCrumbs() {
      console.log(this.$route.params.id)
      return this.$route.meta.breadCrumb;
    },
  },
    watch: {
    $route(to) {
      this.id = to.params.id;
    },
  },

};
</script>