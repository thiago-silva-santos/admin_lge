<template>
  <router-link :to="path">{{ title }}</router-link>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
  },
};
</script>
