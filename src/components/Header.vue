<template>
  <nav>
    <div class="header">
      <v-app-bar elevation="4" fixed dark height="56px">
        <v-app-bar-nav-icon color="white" @click="drawer = !drawer" />
        <v-list-item class="header-info">
          <v-list-item-content>
            <v-list-item-title v-text="this.$store.state.user"></v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        class="drawer"
        app
        temporary
        width="300"
      >
        <div class="menuHeader">
          <div class="logo">
            <v-img width="25" height="25"
              src="../assets/logo.png"
            ></v-img>
          </div>
            <h1>LIWEB - EVENTOS</h1>
            
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
      {
        title: "Station",
        icon: "mdi-forum",
        children: [
          { title: "Child 1", icon: "mdi-home", path: "/Home" },
          { title: "Child 2", icon: "mdi-home", path: "/About" },
          { title: "Child 3", icon: "mdi-home", path: "/Home" },
        ],
      },
      {
        title: "Clientes Cadastrados",
        icon: "mdi-forum",
        children: [
          {
            title: "Cliente 1",
            icon: "mdi-home",
            path: "/Home",
          },
          { title: "Cliente 2", icon: "mdi-home", path: "/About" },
          { title: "Cliente 3", icon: "mdi-home", path: "/Home" },
        ],
      },
    ],
  }),
};
</script>
<style scoped>

.header-info {
  padding: 0 !important;
}
.menuHeader {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
}
.logo {
  margin-right: 10px;
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