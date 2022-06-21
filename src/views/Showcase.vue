<template>
  <div class="Container">
    <v-card
      max-width="1240px"
      min-width="940px"
      class="white pa-2"
    >
      <v-card-title> Showcase de Cartão </v-card-title>
      <section class="content-cards">
        <div class="manager">
          <ColorPicker @selectedColor="(newValue) => (color = newValue)"/>
        </div>
        <v-card :style="`background:${color}`" width="50%">
          <v-card-title> Showcase de Cartão </v-card-title>
        </v-card>
      </section>
    </v-card>
  </div>
</template>

<script>
import ColorPicker from '../components/ColorPicker/ColorPicker.vue'
export default {
  components: {
    ColorPicker
  },
  data: function() {
    return {
      color: ""
      }
  }

};
</script>

<style scoped>
.Container {
  padding: 30px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.manager {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 5px;
}
.content-cards {
  display: flex;
}
</style>