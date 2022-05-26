<template>
  <div class="home">
    <div class="imgContainer">
      <!-- <img id="img" alt="Vue logo"  /> -->
    </div>
    <section class="text">
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style scoped>
img {
  display: block;
  width: 200px;
  margin: 0 auto;
}
.text {
  max-width: 940px;
  margin: 0 auto;
  text-align: justify;
}
</style>