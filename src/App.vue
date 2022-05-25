<template>
  <v-app>
    <div>
      <router-view name="header" />
      <router-view class="router-view" />
      <!-- <Loading/> -->
    </div>
  </v-app>
</template>

<style>
body {
  font-family: "Roboto", sans-serif;
}
.router-view {
  padding-top: 64px;
}
</style>