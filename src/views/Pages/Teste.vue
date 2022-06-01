
<template>
  <div class="teste-container">
    <v-container>
      <v-row class="text-center">
        <v-col>
          <h1>Home Page</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <ul>
            <li>
              <v-btn
                :to="{
                  name: 'Tela1',
                  params: {
                    parametro: 1,
                  },
                }"
                >1</v-btn
              >
            </li>
            <li>
              <v-btn
                :to="{
                  name: 'Tela2',
                  params: {
                    parametro: 2,
                  },
                }"
                >2</v-btn
              >
            </li>
            <li>
              <v-btn
                :to="{
                  name: 'Tela3',
                  params: {
                    parametro: 3,
                  },
                }"
                >3</v-btn
              >
            </li>

          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

li {
  text-decoration: none;
  list-style: none;
}
</style>

