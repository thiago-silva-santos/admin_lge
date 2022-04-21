<template>
  <nav>
    <div class="header">
      <v-app-bar elevation="4" color="blue" fixed>
        <v-app-bar-nav-icon color="white" @click="drawer = !drawer" />
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        class="drawer"
        app
        temporary
      >
        <v-list dense>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      { title: "Home", icon: "mdi-view-dashboard" },
      { title: "About", icon: "mdi-forum" },
      { title: "Store", icon: "mdi-forum" },
      { title: "Nothing", icon: "mdi-forum" },
      { title: "Max", icon: "mdi-forum" },
      { title: "Poco", icon: "mdi-forum" },
    ],
  }),
  computed: {},
};
</script>
<style scoped>
</style>