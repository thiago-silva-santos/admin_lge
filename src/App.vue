<template>
  <v-app>
    <div>
      <router-view name="header" />
      <router-view name="login" />
      <router-view name="password" />
      <div class="router-view-items">
        <Breadcrumb/>
        <router-view />
      </div>
      <Loading />
    </div>
  </v-app>
</template>

<script>
import Loading from "./components/Loading/LoadingScreen.vue";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb.vue";

export default {
  components: {
    Loading,
    Breadcrumb
},
};
</script>


<style>
body {
  font-family: "Roboto", sans-serif;
}
.router-view-items {
  padding-top: 64px !important;
}
.router-view-items:empty {
  display: none !important;
}
</style>