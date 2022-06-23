<template>
  <div>
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <v-data-table
        dense
        :headers="headers"
        :items="items"
        item-key="name"
        class="elevation-1"
        hide-default-footer
        :items-per-page.sync="itemsPerPage"
        :page.sync="page"
        :search="search"
        height="400"
      >
        <template v-slot:item="props">
          <tr>
            <td v-for="(item, index) in getObjectLength(props.item)" :key="item">
              {{ Object.values(props.item)[index] }}
            </td>
            <td align="center">
              <v-btn
                class="mx-2 pa-3"
                style="min-width: 0; width: 20px; background: transparent"
                x-small
                depressed
                @click="onButtonClick(row.item)"
              >
                <v-icon dark>mdi-pencil</v-icon>
              </v-btn>
              <v-btn
                class="mx-2 pa-3"
                style="min-width: 0; width: 20px; background: transparent"
                x-small
                depressed
                @click="onButtonClick(row.item)"
              >
                <v-icon dark>mdi-delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </template>
        <template v-slot:no-data>
          <span>Nenhum item encontrado</span>
        </template>
        <template v-slot:no-results>
          <span>Nenhum item encontrado</span>
        </template>
        <template v-slot:top>
          <v-text-field
            v-model="search"
            label="Procurar"
            class="mx-4"
          ></v-text-field>
        </template>
        <template v-slot:footer>
          <v-row class="mx-1 pa-5" align="center" justify="center">
            <span class="grey--text">Itens por página</span>
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
                  {{ itemsPerPage }}
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(number, index) in itemsPerPageArray"
                  :key="index"
                  @click="updateItemsPerPage(number)"
                >
                  <v-list-item-title>{{ number }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-spacer></v-spacer>

            <span class="mr-4 grey--text">
              Página {{ page }} de {{ numberOfPages }}
            </span>
            <v-btn
              fab
              color="primary"
              class="mr-1"
              @click="formerPage"
              small
              :disabled="page <= 1"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn
              fab
              color="primary"
              class="ml-1"
              @click="nextPage"
              small
              :disabled="page === numberOfPages"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-row>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: "Dados",
    },
    headers: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      page: 1,
      search: "",
      itemsPerPage: 10,
      itemsPerPageArray: [10, 15, 20],
    };
  },

  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },

    getObjectLength(item) {
      return Object.keys(item).length;
    },
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.listItemsOnPage.length / this.itemsPerPage);
    },
    listItemsOnPage() {
      return this.items.filter((item) => item.name.includes(this.search));
    },
  },
};
</script>

<style>
</style>