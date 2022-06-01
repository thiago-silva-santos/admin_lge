<template>
  <v-app>
    <div>
      <router-view name="header" />
        <router-view name="login" />
      <div class="router-view-items">
        <router-view />
      </div>
      <!-- <Loading/> -->
    </div>
  </v-app>
</template>

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