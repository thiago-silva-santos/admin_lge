<template>
  <v-app>
    <div>
      <router-view name="header" />
      <div class="router-view">
        <router-view  />
      </div>
      <!-- <Loading/> -->
    </div>
  </v-app>
</template>

<style>
body {
  font-family: "Roboto", sans-serif;
}
.router-view {
  padding-top: 64px !important;
}
</style>