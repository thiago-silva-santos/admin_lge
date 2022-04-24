<template>
  <v-app>
    <div>
      <Header v-if="this.$store.state.autenticado"/>
      <router-view class="router-view"/>
    </div>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
  name: "App",
  data: () => ({
  }),
  computed: {
    getRoute() {
      return this.$route.name !== "Login" && this.$route.name !== "Register";
    }
  }

};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}
.router-view {
  padding-top: 64px;

}
</style>