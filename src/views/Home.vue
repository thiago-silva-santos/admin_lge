<template>
  <div class="home">
    <Breadcrumb class="breadcrumb" />

    <div class="telas-testes">
      <router-view />
    </div>
    <section class="text">
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb.vue";


export default {
  name: "Home",
  components: {
    HelloWorld,
    Breadcrumb
  },
};
</script>
<style scoped>
.telas-testes {
  max-height: 50px;
}
.text {
  max-width: 940px;
  margin: 0 auto;
  text-align: justify;
}
</style>