<template>
  <v-row justify="center">
    <v-dialog v-model="dialog.showDialog" max-width="500">
      <v-card>
        <v-card-title class="text-h5">
          {{ dialog.title }}
        </v-card-title>

        <v-card-text v-if="getPropType">
          <ul>
            <li v-for="(item, index) in dialog.description" :key="index">
              {{ item }}
            </li>
          </ul>
        </v-card-text>
        <v-card-text v-else>
          {{ dialog.description }}
        </v-card-text>

        <v-card-actions v-if="dialog.type == 'warning' ">
          <v-btn color="green darken-1" text @click="hideDialog"> Aceitar </v-btn>
          <v-btn color="error darken-1" text @click="hideDialog"> Cancelar </v-btn>
        </v-card-actions>
        <v-card-actions v-else>
          <v-btn color="green darken-1" text @click="hideDialog"> Agree </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    hideDialog() {
      this.$store.commit("dialog/HIDE_DIALOG");
    },
  },
  computed: {
    dialog() {
      return this.$store.getters["dialog/GET_DATA"];
    },
    getPropType() {
      return Array.isArray(this.dialog.description);
    },
  },
  //   created() {
  //        console.log(Array.isArray(this.dialog.description))
  //   }
};
</script>

<style>
</style>