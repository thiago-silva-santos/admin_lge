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
        <div class="menuHeader">
          <v-list-item-avatar width="50" height="50">
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-img>
          </v-list-item-avatar>
        </div>
        <menu-list-new :items="items" />
      </v-navigation-drawer>
    </div>
  </nav>
</template>

<script>
// import MenuList from "./MenuList.vue";
//import MenuList from "./MenuList.vue";
export default {
  data: () => ({
    drawer: false,
    items: [
      { title: "Home", icon: "mdi-home", path: "/Home" },
      {
        title: "About",
        icon: "mdi-account",
        path: "/About",
      },
      { title: "Nothing", icon: "mdi-forum", path: "", children: [] },
      { title: "Max", icon: "mdi-forum", path: "", children: [] },
      { title: "Poco", icon: "mdi-forum", path: "", children: [] },
      {
        title: "Store",
        icon: "mdi-forum",
        children: [
          { title: "Child 1", icon: "mdi-home", path: "/Home" },
          { title: "Child 2", icon: "mdi-home", path: "/About" },
          { title: "Child 3", icon: "mdi-home", path: "/Home" },
        ],
      },
      {
        title: "Store 2",
        icon: "mdi-forum",
        children: [
          {
            title: "Child 1",
            icon: "mdi-home",
            path: "/Home",
            children: [
              { title: "Child 1", path: "/Home" },
              { title: "Child 2", path: "/About" },
              {
                title: "Child 3",
                children: [
                  { title: "A", path: "/Home" },
                  { title: "B", path: "/About" },
                  {
                    title: "C",
                    children: [
                      { title: "sldjf", path: "/Home" },
                      { title: "açlsdfk", path: "/About" },
                      { title: "lksdjf", path: "/Home" },
                    ],
                  },
                ],
              },
            ],
          },
          { title: "Child 2", icon: "mdi-home", path: "/About" },
          { title: "Child 3", icon: "mdi-home", path: "/Home" },
        ],
      },
    ],
  }),
};
</script>
<style scoped>
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