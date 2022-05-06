<template>
  <v-dialog v-model="dataLoading.exibe" persistent max-width="200px">
    <v-card class="card-dialog-loading">
      <v-layout row wrap justify-center>
        <v-flex xs12>
          <v-progress-circular :size="70" :width="7" :color="dataLoading.corprogress" indeterminate></v-progress-circular>
        </v-flex>
        <v-flex xs12>
          <h3 class="card-dialog-loading-conteudo">{{ dataLoading.texto }}</h3>
        </v-flex>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Loading",
  computed: {
      dataLoading() {
          return this.$store.getters["loading/GET_DATA_LOADING"];
      }
  }
};
</script>

<style scoped>
.card-dialog-loading {
  background-color: rgba(0, 0, 0, 0.47) !important;
  text-align: center !important;
  padding: 18px !important;
}

.card-dialog-loading-conteudo {
  color: white;
  margin-bottom: 0px;
  font-weight: bold !important;
}
</style>