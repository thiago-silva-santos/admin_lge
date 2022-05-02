<template>
  <v-app>
    <div>
      <Header v-if="this.$store.state.login.isLogin" />
      <router-view class="router-view" />
    </div>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
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