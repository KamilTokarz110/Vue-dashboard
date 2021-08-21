<template lang="pug">
.section__main
  .card.card--track-order
  .card.card--bids
  .card.card--statistics
  .card.card--calendar
  .card.card--todays-shipments
  .card.card--current-shipments
  .card.card--cargo-shipment
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "Section_main",
  components: {
    Card,
  },
};
</script>

<style lang="scss">
.section__main {
  display: flex;
  flex-wrap: wrap;
  // align-items: flex-start;
  justify-content: space-between;

  flex-basis: 100%;
  min-height: 1014px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 20px #c4c8d066;
  border-radius: 20px;
  opacity: 1;
  background-color: transparent;
}
</style>