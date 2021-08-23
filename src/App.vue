<template lang="pug">
.container
  //- Header
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



