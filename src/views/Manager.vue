<template>
  <div class="Manager">
    <v-card class="cardContainer" max-width="1200px" width="100%" elevation="5">
      <v-card class="pa-5">
        <v-row>
          <v-col class="colunaUM">
            <v-row class="card-header" align="center">
              <v-col cols="12" md="10" sm="10">
                <v-card-title class="text-h6"> Gerenciador </v-card-title>
              </v-col>
              <v-col cols="2" align="center" md="2" sm="2">
                <v-btn class="fab depressed" icon>
                  <v-icon> mdi-plus </v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-divider class="mb-2 mt-2" />
            <v-row>
              <v-col>
                <v-treeview
                  nultiple="false"
                  open-on-click
                  hoverable
                  :items="items"
                  class="pa-0 mb-0 tree"
                  transition
                  aria-expanded="true"
                >
                  <template v-slot:label="{ item }" expand-icon="none">
                    <div class="itemSelected" @click="bindItems(item)">
                      <span>{{ item.name }}</span>
                    </div>
                  </template>
                </v-treeview>
              </v-col>
            </v-row>
          </v-col>
          <v-divider vertical class="mx-2" />
          <v-col class="colunaDOIS">
            <div v-if="!selectedItem.name">
              <v-row class="card-header-colDOIS">
                <v-col cols="12" md="10" sm="9">
                  <v-card-title class="text-h6">
                    Selecione um menu ou crie um novo.
                  </v-card-title>
                </v-col>
              </v-row>
            </div>
            <div v-else>
              <v-row class="card-header-colDOIS">
                <v-col cols="12" md="10" sm="9">
                  <v-card-title class="text-h6">
                    {{ selectedItem.name }}
                  </v-card-title>
                </v-col>
                <v-col cols="3" md="2" sm="3" align-self="center">
                  <v-card-text class="pa-0" v-if="selectedItem.id"
                    ><strong>ID: {{ selectedItem.id }}</strong>
                  </v-card-text>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <v-card class="elevation-0">
                    <v-row>
                      <v-col>
                        <v-row class="pa-2">
                          <v-col>
                            <v-text-field
                              color="primary"
                              :value="selectedItem.name"
                              label="Nome"
                            >
                            </v-text-field>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col>
                        <v-row class="pa-2">
                          <v-col>
                            <v-text-field
                              color="primary"
                              :value="selectedItem.icon"
                              label="Ícone"
                              append-icon="mdi-alert-circle-outline"
                              :prepend-icon="selectedItem.icon"
                              @click:append="openIconPage"
                            >
                            </v-text-field>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                    <v-row class="pa-2">
                      <v-col>
                        <v-text-field
                          color="primary"
                          :value="selectedItem.route"
                          label="Rota"
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row class="pa-2">
                      <v-col>
                        <v-text-field
                          color="primary"
                          :value="selectedItem.role"
                          label="Permissões"
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>


                    <v-row class="pa-2">
                      <v-col>
                        <v-textarea
                          color="primary"
                          :value="selectedItem.role"
                          label="Descrição"
                          counter
                        >
                        </v-textarea>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
              <v-row class="card-footer pa-3">
                <v-col cols="12 pa-0" sm="6" md="6" lg="6" align="left">
                  <v-btn class="footer-btn success">
                    <span class="footer-btn-title"> Adicionar</span>

                    <v-icon class="ml-2"> mdi-folder-plus </v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="3 pa-0" sm="3" md="3" lg="3" align="right">
                  <v-btn class="footer-btn warning">
                    <span class="footer-btn-title"> Deletar</span>

                    <v-icon class="ml-2"> mdi-delete </v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="3 pa-0" sm="3" md="3" lg="3" align="right">
                  <v-btn class="footer-btn primary" dark>
                    <span class="footer-btn-title"> Salvar</span>

                    <v-icon class="ml-2 pa-0"> mdi-content-save </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-card>
    <IconsPageVue
      v-model="dialogIcon"
      @update:value="(newValue) => (dialogIcon = newValue)"
      @select:icon="(newValue) => (selectedItem.icon = newValue)"
    />
  </div>
</template>

<script>
import IconsPageVue from "../components/IconsPage/IconsPage.vue";
export default {
  components: {
    IconsPageVue,
  },
  data: () => ({
    items: [],
    everyItem: {},
    selectedItem: {},
    dialogIcon: false,
  }),

  methods: {
    bindItems(value) {
      this.selectedItem = value;
    },
    openIconPage() {
      console.log("teste");
      this.dialogIcon = true;
    },
    closeIconPage(value) {
      console.log(value);
    },
  },
  async created() {
    this.$alert.warning("gerenciador");
    await this.$http("assets/menu.json").then((response) => {
      this.items = response.data;
    });
  },
};
</script>

<style scoped>
.Manager {
  padding: 30px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tree {
  max-height: 500px;
  overflow-y: auto !important;
}

.itemSelected {
  display: flex;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
}

@media (max-width: 1264px) {
  .footer-btn {
    padding: 0px !important;
    min-width: 110px !important;
    font-size: 0.9vw;
  }
}
@media (max-width: 1040px) {
  .footer-btn-title {
    display: none;
  }
  .footer-btn {
    padding: 0 !important;
    width: 50px;
    min-width: 0px !important;
  }
  .footer-btn .v-icon {
    margin: 0 !important;
  }
}
</style>