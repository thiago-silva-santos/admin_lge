<template>
  <div class="text-center">
    <v-overlay :value="dataLoading.showLoading" opacity="0.8">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
      <div class="texto" style="padding-top: 30px;">
        <h3 class="card-dialog-loading-conteudo">{{dataLoading.description}}</h3>
      </div>
    </v-overlay>
  </div>
</template>

<script>
export default {

  computed: {
    dataLoading() {
      return this.$store.getters["loading/GET_DATA_LOADING"];
    },
  },
}
</script>

<style scoped>

</style>