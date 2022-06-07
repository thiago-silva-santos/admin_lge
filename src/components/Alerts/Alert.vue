<template>
  <div class="AlertComponent">
    <v-alert
      dense
      border="left"
      :class="componentData.type"
      color="pink"
      dark
      icon="mdi-alert"
      transition="scale-transition"
      v-if="componentData.showAlert"
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

  data: () => ({}),
};
</script>

<style scoped>
.AlertComponent {
  position: absolute;
  left: 50%;
  top: 150px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
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