<template>
  <nav>
    <div class="header">
      <v-app-bar elevation="4" color="bluemoon" fixed dark>
        <v-app-bar-nav-icon color="white" @click="drawer = !drawer" />
        <v-list-item>
          <v-list-item-content class="header-info">
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        class="drawer"
        app
        temporary
        dark
        width="360"
      >
        <v-list-item class="v-drawer-header">
          <v-list-item-avatar width="50" height="50">
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list dense rounded>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            @click="$router.push(item.path)"
          >
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
      { title: "Home", icon: "mdi-home", path: "/Home" },
      { title: "About", icon: "mdi-account", path: "/About" },
      { title: "Store", icon: "mdi-forum", path: "" },
      { title: "Nothing", icon: "mdi-forum", path: "" },
      { title: "Max", icon: "mdi-forum", path: "" },
      { title: "Poco", icon: "mdi-forum", path: "" },
    ],
  }),
  computed: {},
};
</script>
<style scoped>
.v-drawer-header {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid white;
  height: 80px;
}
.header-info {
  text-align: end;
}
.v-icon-close {
  font-size: 25px;
  text-align: center;
}
.v-icon-close-container {
  display: flex;
  justify-content: center;
  width: 50px;
}

@media (max-width: 400px) {
  .v-navigation-drawer {
    max-width: 300px !important;
  }
}
</style>