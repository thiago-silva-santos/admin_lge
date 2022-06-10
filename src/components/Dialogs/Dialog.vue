<template>
  <v-row justify="center">
    <v-dialog v-model="dialog.showDialog" max-width="500">
      <v-card>
        <v-card-title class="text-h5">
          {{ dialog.title }}
        </v-card-title>

        <v-card-text v-if="isArray(dialog.description)">
          <ul v-if="hasObjects(dialog.description)">
            <li v-for="(item, index) in dialog.description" :key="index">
              <strong>{{ Object.values(item)[0] }}:</strong>
              {{ Object.values(item)[1] }}
            </li>
          </ul>
          <ul v-else>
            <li v-for="(item, index) in dialog.description" :key="index">
              {{ item }}
            </li>
          </ul>
        </v-card-text>
        <v-card-text v-else>
          {{ dialog.description }}
        </v-card-text>

        <v-card-actions v-if="dialog.type == 'warning'">
          <v-spacer />
          <v-btn color="green darken-1" text @click="hideDialog">
            Cancelar
          </v-btn>
          <v-btn color="error darken-1" text @click="deleteValue">
            Deletar
          </v-btn>
        </v-card-actions>
        <v-card-actions v-else>
          <v-spacer />

          <v-btn color="green darken-1" text @click="hideDialog">
            Aceitar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  emits: ["delete:value"],

  data() {
    return {};
  },

  methods: {
    hideDialog() {
      this.$store.commit("dialog/HIDE_DIALOG");
    },
    deleteValue() {
      this.$store.commit("dialog/HIDE_DIALOG", { delete: true });
      this.$alert.success("Item deletado com sucesso!");
    },
    isArray(value) {
      return Array.isArray(value);
    },
    hasObjects(value) {
      return value.some((value) => {
        return typeof value == "object";
      });
    },
  },
  computed: {
    dialog() {
      return this.$store.getters["dialog/GET_DATA"];
    },
  },
};
</script>

<style>
</style>