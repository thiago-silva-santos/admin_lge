<template>
  <v-app>
    <div>
      <router-view name="header" />
      <router-view class="router-view" />
      <Loading/>
    </div>
  </v-app>
</template>

<script>
// import { mapState } from 'vuex'
import Loading from "./components/Loading/Loading.vue";
export default {
    name: "App",
    data: () => ({}),
    components: { Loading }
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