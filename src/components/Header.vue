<template>
  <nav>
    <div class="header">
      <div class="header_bar">
        <v-app-bar elevation="4" fixed dark height="56px">
          <div class="app-bar-container">
            <v-app-bar-nav-icon color="white" @click="drawer = !drawer" />
            <div class="header-info">
              <div class="v-list-container">
                <p class="status" v-text="status" />
                <p class="name" v-text="email" />
              </div>
            </div>
          </div>
        </v-app-bar>
      </div>

      <v-navigation-drawer v-model="drawer" app temporary width="340" dark>
        <div class="menuHeader">
          <div class="logo">
            <!-- <v-img width="25" height="25" src="../assets/logo.png"></v-img> -->
          </div>
          <h1 class="menuHeaderTitle">LIWEB - EVENTOS</h1>
        </div>
        <menu-list :items="items" />
      </v-navigation-drawer>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    drawer: false,
    username: "",
    status: "Logado como:",
    items: [],
  }),
  async created() {
    await this.$http("assets/menu-list.json").then((response) => {
      this.items = response.data;
    });
  },
  computed: {
    ...mapState("acesso", ["email", "logado"]),
  },
};
</script>
<style scoped>
::v-deep ::-webkit-scrollbar {
  width: 12px;
}
::v-deep ::-webkit-scrollbar-track {
  background-color: #404040;
}
::v-deep ::-webkit-scrollbar-thumb {
  border: 3px solid #404040;
  border-radius: 50px;
  background-color: #252525;
}

.app-bar-container {
  display: inherit;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.header-info {
  padding: 0 !important;
}
.v-list-container {
  display: flex;
  align-items: center;
  padding: 0;
}
.status {
  margin: 0;
  font-size: 14px !important;
  color: rgb(170, 170, 170);
}
.name {
  margin: 0 0 0 10px;
  text-align: center !important;
  font-size: 14px;
}
.header_bar {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
}
.menuHeader {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 56px;
  border-bottom: 3px rgba(255, 255, 255, 0.3) solid;
}
.menuHeaderTitle {
  color: white;
  font-size: 16px;
}
.logo {
  margin-right: 10px;
}

@media (max-width: 400px) {
  .v-navigation-drawer {
    max-width: 300px !important;
  }
}
</style>