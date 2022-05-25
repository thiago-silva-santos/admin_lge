<template>
  <div class="Container">
    <v-card
      class="cardContainer"
      max-width="1200px"
      width="100%"
      elevation="5"
    >
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
                  class="pa-0 mb-0"
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
                  <v-row class="pa-2">
                    <v-col>
                      <v-text-field
                        color="bluemoon"
                        :value="selectedItem.name"
                        label="Nome"
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="pa-2">
                    <v-col>
                      <v-text-field
                        color="bluemoon"
                        :value="selectedItem.route"
                        label="Rota"
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="pa-2">
                    <v-col>
                      <v-text-field
                        color="bluemoon"
                        :value="selectedItem.role"
                        label="Permissões"
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-row class="pa-2">
                        <v-col>
                          <v-text-field
                            color="bluemoon"
                            :value="selectedItem.idMenu"
                            label="Menu Pai"
                          >
                          </v-text-field>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col>
                      <v-row class="pa-2">
                        <v-col>
                          <v-text-field
                            color="bluemoon"
                            :value="selectedItem.icon"
                            label="Ícone"
                            append-icon="mdi-alert-circle-outline"
                            @click:append="dialogIcon = !dialogIcon"
                          >
                          </v-text-field>
                        </v-col>
                      </v-row>
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
                <v-btn class="footer-btn bluemoon" dark>
                  <span class="footer-btn-title"> Salvar</span>

                  <v-icon class="ml-2 pa-0"> mdi-content-save </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-card>
    <v-dialog v-model="dialogIcon" max-width="1340">
      <v-card class="pa-2" flat tile>
        <v-card-title class="text-h5">
          O menu usa ícones do Google Fonts Material
        </v-card-title>

        <v-container fluid>
          <v-card flat>
            <v-data-iterator
              :items="names"
              :items-per-page.sync="itemsPerPage"
              :page.sync="page"
              :search="search"
              :sort-desc="sortDesc"
              hide-default-footer
            >
              <template v-slot:header>
                <v-toolbar  class="mb-1" flat>
                  <v-text-field
                    v-model="search"
                    clearable
                    flat
                    solo-inverted
                    hide-details
                    prepend-inner-icon="mdi-magnify"
                    label="Procurar ícone"
                    color="white"
                  ></v-text-field>
                </v-toolbar>
              </template>

              <template v-slot:default="props">
                <v-card class="pa-5" flat>
                  <v-row align="center">
                    <v-col
                      v-for="item in props.items"
                      :key="item.name"
                      cols="12"
                      sm="6"
                      md="4"
                      lg="3"
                    >
                      <v-card class="pa-2">
                        <v-row class="pa-2" align="center">
                          <v-col class="pa-0" cols="10" sm="10" md="10" lg="10">
                            
                            <v-card-text class="font-weight-bold pa-2">
                              {{ item.name }}
                            </v-card-text>
                          </v-col>
                          <v-col class="pa-0" cols="2" sm="2" md="2" lg="2">
                            <v-icon> mdi-{{ item.name }} </v-icon>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card>
              </template>
            </v-data-iterator>
          </v-card>
        </v-container>
        <!-- <v-container>
          <v-card class="pa-2">
            <v-row>
              <v-col v-for="(item, index) in icons" :key="index">
                <v-icon>mdi-{{ item.name }}</v-icon>
              </v-col>
            </v-row>
          </v-card>
        </v-container> -->
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        name: "Applications",
        children: [
          {
            id: 1,
            name: "Calendar",
            route: "applications/calendar",
            idMenu: "1",
            icon: "mdi-home",
            role: "Application.calendar",
          },
          {
            id: 2,
            name: "Browser",
            route: "applications/browser",
            idMenu: "1",
            icon: "mdi-home",
            role: "Application.browser",
          },
          {
            id: 3,
            name: "Webstorm",
            route: "applications/webstorm",
            idMenu: "1",
            icon: "mdi-home",
            role: "Application.webstorm",
          },
        ],
      },
      {
        id: 3,
        name: "Clientes",
        children: [
          {
            id: 1,
            name: "Micro-empresas",
            route: "applications/micro-empresas",
            children: [
              {
                id: 1,
                name: "Cafeteria",
                route: "applications/Cafeteria",
                idMenu: "3",
                icon: "mdi-home",
                role: "Application.cafeteria",
              },
              {
                id: 2,
                name: "Petshop",
                route: "applications/petshop",
                idMenu: "3",
                icon: "mdi-home",
                role: "Application.petshop",
              },
            ],
          },
          {
            id: 2,
            name: "Empresas",
            route: "applications/empresas",
            children: [
              {
                id: 1,
                name: "Google",
                route: "applications/google",
                idMenu: "3",
                icon: "mdi-browser",
                role: "Application.google",
              },
              {
                id: 2,
                name: "Amazon",
                route: "applications/amazon",
                idMenu: "3",
                icon: "mdi-home",
                role: "Application.amazon",
              },
            ],
          },
        ],
      },
    ],
    everyItem: {},
    selectedItem: {},
    dialogIcon: false,
    icons: {},
    itemsPerPageArray: [16],
    search: "",
    filter: {},
    sortDesc: false,
    page: 1,
    itemsPerPage: 60,
    names: [],
  }),
  methods: {
    alertando(value) {
      console.log(value);
    },
    bindItems(value) {
      this.selectedItem = value;
    },
  },
  async created() {
    await this.$http("assets/icons.json").then(
      (response) => {
        this.names = response.data;
      }
    );

    await console.log(this.icons);
  },
};
</script>

<style scoped>
.Container {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
}
.itemSelected {
  display: flex;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
}
.v-treeview-node__root {
  min-height: 0px;
  max-height: 25px;
  padding: 0px;
  margin: 0px;
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