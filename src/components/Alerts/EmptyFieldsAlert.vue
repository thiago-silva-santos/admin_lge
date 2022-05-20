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
.v-alert {
  position: absolute;
  left: 50%;
  bottom: 500px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
}

@media (max-width: 600px) {
    .v-alert {
        width: 300px;
    }
}
</style>>