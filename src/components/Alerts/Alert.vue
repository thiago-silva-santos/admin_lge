<template>
  <div class="AlertComponent">
    <v-alert
      dark
      text
      dense
      prominent
      dismissible
      :value="componentData.showAlert"
      border="left"
      :type="componentData.type"
      :icon="componentData.icon"
      min-width="300px"
      max-width="400px"
      transition="slide-y-reverse-transition"
    >
      <strong>{{ componentData.description }}</strong>
    </v-alert>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "Favor preencher os campos!",
    },
  },

  computed: {
    componentData() {
      return this.$store.getters["alert/GET_DATA"];
    },
  },

};
</script>

<style scoped>
.AlertComponent {
  position: fixed;
  bottom: 2vh;
  right: 1%;
  z-index: 100;
}

@media (max-width: 600px) {
  .v-alert {
    width: 280px;
  }
  .v-alert strong {
    font-size: 14px;
  }
}
</style>>