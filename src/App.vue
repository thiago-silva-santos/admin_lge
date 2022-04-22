<template>
  <v-app>
    <Login v-if="!isLogged"/>
    <div v-if="isLogged">
      <Header />
      <router-view />
    </div>
  </v-app>
</template>

<script>
import Login from "./views/Login.vue";
import Header from "@/components/Header.vue";
export default {
  components: {
    Login,
    Header,
  },
  name: "App",
  data: () => ({
    isLogged: false
  }),
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}
</style>