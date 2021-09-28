<template lang="pug">
a.card__button.card__button--filters 
  slot(name="title") default
</template>

<script>
export default {
  name: "CButtonFilters",
  props: {
    title: {
      type: String,
      default: null,
    },
  },
};
</script>