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
          <div class="v-icon-close-container">
            <v-icon class="v-icon-close" color="black" @click="drawer = !drawer"
              >mdi-close</v-icon
            >
          </div>
        </div>

        <v-list dense>
          <v-list-item v-for="item in items" :key="item.title" link @click="$router.push(item.path)">
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
      { title: "Home", icon: "mdi-view-dashboard", path: "/Home" },
      { title: "About", icon: "mdi-forum", path: "/About" },
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
</style>