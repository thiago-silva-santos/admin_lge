<template>
  <nav>
    <div class="header">
      <v-app-bar elevation="4" color="blue" fixed>
        <v-app-bar-nav-icon color="white" @click="drawer = !drawer" />
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" class="drawer" app temporary>
        <div class="v-drawer-header">
          <v-list-item>
            <v-list-item-avatar>
              <v-img
                src="https://randomuser.me/api/portraits/men/78.jpg"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>John Leider </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-icon class="v-icon-close" color="black" @click="drawer = !drawer"
            >mdi-close</v-icon
          >
        </div>

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
.v-drawer-header {
  display: flex;
  align-items: center;
}
.v-icon-close {
  font-size: 25px;
  padding-right: 16px;
}
</style>