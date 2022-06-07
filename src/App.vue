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
      <AlertVue/>
    </div>
  </v-app>
</template>

<script>
import Loading from "./components/Loading/LoadingScreen.vue";
import AlertVue from "./components/Alerts/Alert.vue";

export default {
  components: {
    Loading,
    AlertVue
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