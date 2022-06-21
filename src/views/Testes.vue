<template>
  <v-container>
    <v-card class="card1">
      <v-card-actions>
        <v-row align-content="center">
          <v-col cols="6" md="12" sm="12">
            <v-btn color="green darken-1" text @click="showDialog" class="my-2">
              Informação
            </v-btn>
            <v-btn
              color="primary darken-1"
              text
              @click="showDialogList"
              class="my-2"
            >
              Lista de Objetos
            </v-btn>
            <v-btn
              color="primary darken-1"
              text
              @click="showDialogListStrings"
              class="my-2"
            >
              Lista de Strings
            </v-btn>
            <v-btn
              color="warning darken-1"
              text
              @click="showDialogWarning"
              class="my-2"
            >
              Warning
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
    <data-table-vue :items="items" :headers="headers" />
  </v-container>
</template>

<script>
import DataTableVue from "../components/DataTable/DataTable.vue";
export default {
  components: { DataTableVue },
  data() {
    return {
      dialog: false,
      items: [],
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
      ],
    };
  },
  async created() {
    await this.$http("assets/table-list.json").then((response) => {
      this.items = response.data;
    });
  },
  methods: {
    showDialog() {
      this.$store.commit("dialog/SHOW_DIALOG", {
        title: "Apenas uma informação",
        description: "Uma informação qualquer",
      });
    },

    showDialogList() {
      this.$dialog.info({
        title: "Lista de Erros",
        description: [
          {
            code: 500,
            message: "Internal Server Error",
          },
          {
            code: 501,
            message: "Not Implemented",
          },
          {
            code: 502,
            message: "Bad Gateway",
          },
          { code: 503, message: "Service Unavailable" },
          { code: 504, message: "Gateway Timeout" },
          { code: 505, message: "HTTP Version Not Supported" },
        ],
      });
    },
    showDialogListStrings() {
      this.$dialog.info({
        title: "Lista de Erros",
        description: [
          "Internal Server Error",
          "Not Implemented",
          "Bad Gateway",
          "Gateway Timeout",
          "HTTP Version Not Supported",
          "Variant Also Negotiates",
          "Insufficient Storage",
          "Loop Detected",
        ],
      });
    },
    showDialogWarning() {
      this.$dialog.warning({
        title: "Deseja mesmo excluir?",
        description: "A exclusão dos itens não poderá ser desfeita",
        type: "warning",
      });
    },
  },
  computed: {},
};
</script>

<style scoped>
.card1 {
  margin-bottom: 50px;
}
</style>