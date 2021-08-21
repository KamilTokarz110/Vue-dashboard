<template lang="pug">
.wrapper
  Header
  Section_main
</template>

<script>
import Header from "./components/Header.vue";
import Navigation from "./components/Navigation.vue";
import Section_main from "./components/Section_main.vue";

export default {
  name: "App",
  components: {
    Header,
    Navigation,
    Section_main,
  },
};
</script>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: stretch;

  margin: 0 80px;
  max-width: 1780px;
  min-height: 100vh;
}
</style>

