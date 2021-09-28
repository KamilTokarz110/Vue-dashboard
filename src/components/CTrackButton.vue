<template lang="pug">
a.card__button
  slot(name="title") default
</template>

<script>
export default {
  name: "CTrackButton",
  props: {
    title: {
      type: String,
      default: null,
    },
  },
};
</script>