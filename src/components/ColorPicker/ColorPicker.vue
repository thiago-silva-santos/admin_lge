<template>
  <v-color-picker class="ma-2" dot-size="10" v-model="color" />
</template>

<script>
export default {

  data: function () {
    return {
      types: ["hex", "hexa", "rgba", "hsla", "hsva"],
      type: "hex",
      hex: "#FF00FF",
      hexa: "#FF00FFFF",
      rgba: { r: 255, g: 0, b: 255, a: 1 },
      hsla: { h: 300, s: 1, l: 0.5, a: 1 },
      hsva: { h: 300, s: 1, v: 1, a: 1 },
    };
  },
  computed: {
    color: {
      get() {
        return this[this.type];
      },
      set(v) {
        this[this.type] = v;
      },
    },
    showColor() {
      if (typeof this.color === "string") return this.color;

      return JSON.stringify(
        Object.keys(this.color).reduce((color, key) => {
          color[key] = Number(this.color[key].toFixed(2));
          return color;
        }, {}),
        null,
        2
      );
    },
  },
  watch: {
    hex(value) {
      this.$emit('selectedColor', value)
    },
  },
};
</script>

<style>
</style>