<template>
  <v-app>
      <Header/>
      <router-view />
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  },
  name: "App",
  data: () => ({
    //
  }),
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}
</style>