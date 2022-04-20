<template>
<div>
    <v-app-bar elevation="4" color="blue" fixed>
    <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer">
    </v-app-bar-nav-icon>
  </v-app-bar>
  <v-navigation-drawer
      v-model="drawer"
      :right="$vuetify.rtl"
      width="260"
      height="400"
      fixed
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</div>

</template>

<script>
export default {

  data: () => ({
      drawer: false,
      group: null,
    }),
   watch: {
      group () {
        this.drawer = false
      },
    },
};
</script>
<style scoped>
</style>