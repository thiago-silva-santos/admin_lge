<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>

export default {

created() {
  this.$alert.info("vc está na página de informações")
}
}
</script>


<style scoped>
body {
  background: orange;
}
</style>
