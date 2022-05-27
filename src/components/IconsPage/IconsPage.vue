<template>
    <v-dialog v-model="dialogIcon" max-width="1340">
      <v-card class="pa-2" flat tile>
        <v-card-title class="text-h5 pl-8">
          Material Design Icons
        </v-card-title>

        <v-container fluid>
          <v-card flat>
            <v-data-iterator
              :items="dataIterator.iconNames"
              :items-per-page.sync="dataIterator.itemsPerPage"
              :page.sync="dataIterator.page"
              :search="dataIterator.search"
              hide-default-footer
            >
              <template v-slot:header>
                <v-toolbar class="mb-1" flat>
                  <v-text-field
                    v-model="dataIterator.search"
                    :append-icon="dataIterator.search ? 'mdi-close' : '' "
                    @click:append="clearSearch()"
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
                <v-card class="pa-5" flat  min-height="576">
                  <v-row>
                    <v-col
                      v-for="item in props.items"
                      :key="item.name"
                      cols="12"
                      sm="6"
                      md="4"
                      lg="3"
                    >
                      <v-card
                        class="pa-2"
                        @click="copyIcon(item.name)"
                        style="cursor: pointer"
                      >
                        <v-row class="pa-2" align="center">
                          <v-col class="pa-0" cols="10" sm="10" md="10" lg="10">
                            <v-card-text class="font-weight-bold pa-2">
                              {{ item.name }}
                            </v-card-text>
                          </v-col>
                          <v-col class="pa-0" cols="2" sm="2" md="2" lg="2" align="center">
                            <v-icon> mdi-{{ item.name }} </v-icon>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card>
              </template>
              <template v-slot:footer>
                <v-row class="mx-1 pa-5" align="center" justify="center">
                  <span class="grey--text">Items per page</span>
                  <v-menu offset-y right nudge-top="10">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        dark
                        text
                        color="primary"
                        class="ml-2 pa-0"
                        v-bind="attrs"
                        v-on="on"
                      >
                        {{ dataIterator.itemsPerPage }}
                        <v-icon>mdi-chevron-down</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                        v-for="(
                          number, index
                        ) in dataIterator.itemsPerPageArray"
                        :key="index"
                        @click="updateItemsPerPage(number)"
                      >
                        <v-list-item-title>{{ number }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>

                  <v-spacer></v-spacer>

                  <span class="mr-4 grey--text">
                    Página {{ dataIterator.page }} de {{ numberOfPages }}
                  </span>
                  <v-btn
                    fab
                    color="primary"
                    class="mr-1"
                    @click="formerPage"
                    small
                    :disabled="dataIterator.page <= 1"
                  >
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                  <v-btn
                    fab
                    color="primary"
                    class="ml-1"
                    @click="nextPage"
                    small
                    :disabled="dataIterator.page === numberOfPages"
                  >
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-row>
              </template>
            </v-data-iterator>
          </v-card>
        </v-container>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  data: () => ({
    everyItem: {},
    selectedItem: {},
    dialogIcon: false,
    dataIterator: {
      itemsPerPageArray: [32, 40, 60],
      search: "",
      page: 1,
      itemsPerPage: 32,
      iconNames: [],
      hasIcon: false,
      copyIconName: "",
    },
  }),

  methods: {
    bindItems(value) {
      this.selectedItem = value;

    },
    nextPage() {
      if (this.dataIterator.page + 1 <= this.numberOfPages)
        this.dataIterator.page += 1;
    },
    formerPage() {
      if (this.dataIterator.page - 1 >= 1) this.dataIterator.page -= 1;
    },
    updateItemsPerPage(number) {
      this.dataIterator.itemsPerPage = number;
    },
    copyIcon(value) {
      this.selectedItem.icon = `mdi-${value}`;
      this.dataIterator.search = ""
      this.dialogIcon = !this.dialogIcon;
    },
    clearSearch(){
      this.dataIterator.search = ""
      this.dataIterator.page = 1
    },
    async getIcons() {
      await this.$http("assets/icons.json").then((response) => {
        this.dataIterator.iconNames = response.data;
        this.dialogIcon = !this.dialogIcon;
      });
    },
  },
  computed: {
    numberOfPages() {
      return Math.ceil(
        this.listItemsOnPage.length / this.dataIterator.itemsPerPage
      );
    },
    listItemsOnPage() {
      return this.dataIterator.iconNames.filter((item) =>
        item.name.includes(this.dataIterator.search)
      );
    },
  },


  watch: {

    "dataIterator.search": function (value) {
     if(value) {
       this.dataIterator.page = 1
     } else {
       this.dataIterator.page = 1
     }
    },
    deep: true,
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