<template>
  <v-alert
    dense
    border="left"
    type="warning"
    color="pink"
    dark
    icon="mdi-alert"
    transition="scale-transition"
    
  >
    <strong>{{ title }}</strong>
  </v-alert>
</template>

<script>
export default {
  props: {
    title: {
        type: String,
        default: "Favor preencher os campos!"
    },
  },

  created() {
      console.log(this.title)
  },
  data: () => ({
  }),
};
</script>

<style scoped>

@media (max-width: 600px) {
    .v-alert {
        width: 280px;
    }
    .v-alert strong {
      font-size: 14px;
    }
}
</style>>