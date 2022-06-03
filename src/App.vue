<template>
  <v-app>
    <div>
      <router-view name="header" />
      <router-view name="login" />
      <router-view name="password" />
      <div class="router-view-items">
        <router-view />
      </div>
      <Loading />
    </div>
  </v-app>
</template>

<script>
import Loading from "./components/Loading/LoadingScreen.vue";

export default {
  components: {
    Loading,
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
.breadcrumb:empty {
  display: none !important;
}
</style>