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

      <v-navigation-drawer
        v-model="drawer"
        class="drawer"
        app
        temporary
        width="350"
        dark
      >
        <div class="menuHeader">
          <div class="logo">
            <!-- <v-img width="25" height="25" src="../assets/logo.png"></v-img> -->
          </div>
          <h1 class="menuHeaderTitle">LIWEB - EVENTOS</h1>
        </div>
        <menu-list :items="items" :depth="0"/>
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
    items: [
      { title: "Home", icon: "mdi-home", path: "/Home" },
      { title: "Gerenciador", icon: "mdi-briefcase-clock", path: "/manager" },
      {
        title: "About",
        icon: "mdi-account",
        path: "/About",
      },
      {
        title: "Nova Senha",
        icon: "key",
        path: "/password",
      },
      {
        title: "Station",
        icon: "support",
        children: [
          { title: "Child 1", icon: "support", path: "/Home" },
          { title: "Child 2", icon: "mdi-home", path: "/About" },
          {
            title: "Child 3 (Sub Group)",
            icon: "mdi-home",
            children: [
              { title: "Child 1", icon: "mdi-home", path: "/Home" },
              { title: "Child 2", icon: "mdi-home", path: "/About" },
              {
                title: "Child 3",
                icon: "mdi-home",
                children: [
                  { title: "Child 1", icon: "support", path: "/Home" },
                  { title: "Child 2", icon: "mdi-home", path: "/About" },
                  {
                    title: "Child 3 (Sub Group)",
                    icon: "mdi-home",
                    children: [
                      { title: "Child 1", icon: "mdi-home", path: "/Home" },
                      { title: "Child 2", icon: "mdi-home", path: "/About" },
                      { title: "Child 3", icon: "mdi-home", path: "/Home" },
                    ],
                  },
                ],
              },
            ],
          },
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
      {
        title: "Cadastro de Usuários",
        icon: "mdi-forum",
        path: "/register-users",
      },

      {
        title: "Teste de Componentes",
        icon: "support",
        path: "/testes",
      },
    ],
  }),
  computed: {
    ...mapState("acesso", ["email", "logado"]),
  },
  // created() {
  //   this.username = this.name.split(' ').shift()
  // }
};
</script>
<style scoped>
.app-bar-container {
  display: inherit;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.v-app-bar {
  width: 100% !important;
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