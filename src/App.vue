<template>
  <v-app>
    <div>
      <router-view name="header" />
      <router-view class="router-view" />
    </div>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {

  name: "App",
  data: () => ({
  }),
  computed: {
      ...mapState("login", ['nomeAleatorio'])},

created() {
  console.log('testando ' + this.$store.state.login.isLogin)
  console.log('testando ' + this.nomeAleatorio)
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