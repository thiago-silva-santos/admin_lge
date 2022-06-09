<template>
  <v-container>
    <v-card>
      <v-card-actions>
        <v-btn color="green darken-1" text @click="showDialog">
          Dialog Info
        </v-btn>

        <v-btn color="primary darken-1" text @click="showDialogList">
          Dialog Info List
        </v-btn>

        <v-btn color="warning darken-1" text @click="showDialogWarning">
          Dialog Warning
        </v-btn>
        <v-btn color="warning darken-1" text @click="showDialogPlugin">
          Dialog Warning Plugin
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },

  methods: {
    showDialog() {
      this.$store.commit("dialog/SHOW_DIALOG", {
        title: "Apenas uma informação",
        description: "kaiaikaikiakaikai",
      });
    },

    showDialogList() {
      this.$store.commit("dialog/SHOW_DIALOG", {
        title: "Lista de Erros",
        description: [
          "dakpsokpdoas",
          "bslbaslasbllaslabs",
          "huehuaheuhue",
          "kaokaoskokoakokao",
        ],
      });
    },
    showDialogWarning() {
      this.$store.commit("dialog/SHOW_DIALOG", {
        title: "Deseja mesmo excluir?",
        description: "A exclusão dos itens não poderá ser desfeita",
        type: "warning",
      });
    },
    showDialogPlugin() {
      this.$dialog.warning({
        title: " $dialog :)",
        description: "Agora testando a função com o $dialog!",
      });
    },
  },
  computed: {},
};
</script>

<style>
</style>