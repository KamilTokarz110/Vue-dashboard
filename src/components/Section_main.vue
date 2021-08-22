<template lang="pug">
.section__main
  .card.card--track-order
    h2.card--track-order__title.card--track-order__title--md Track
    h3.card--track-order__title.card--track-order__title--bg Order

    .card--track-order__item
      .card--track-order__text Tracking ID
      .card--track-order__text Order ID/Ref ID
      .card--track-order__text LTL Shipment
    .card--track-order__input-container
      input.card--track-order__input(
        type="search",
        name="search",
        placeholder=""
      )
      span.card--track-order__input-name Enter Order ID/Ref ID

      a.card__button.card__button--filters More Filters
      a.card__button Track
  .card.card--bids
    .card--bids__header
      img.card--bids__image(src="../assets/bids_logo.png")
      h2.card--bids__title Naughty<br>Dog
    .card--bids__item
      img.card--bids__item-icon(src="../assets/bids_auction--open.png")
      p.card--bids__item-text Bids Available
      .card--bids__item-circle 17
    .card--bids__item
      img.card--bids__item-icon(src="../assets/bids_auction--closed.png")
      p.card--bids__item-text Bids Closed
      .card--bids__item-circle 07

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