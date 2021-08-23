<template lang="pug">
.section__main
  .card.card--track-order
    h3.card--track-order__title.card--track-order__title--md Track
    h2.card--track-order__title.card--track-order__title--bg Order

    .card--track-order__item
      p.card--track-order__text Tracking ID
      p.card--track-order__text Order ID/Ref ID
      p.card--track-order__text LTL Shipment
    .card--track-order__input-container
      input.card--track-order__input(
        type="search",
        name="search",
        placeholder="Enter Order ID/Ref ID"
      )

      a.card__button.card__button--filters More Filters
      a.card__button Track
  .card.card--bids
    img.card--bids__image(src="../assets/bids_logo.svg")
    h2.card--bids__title Naughty<br>Dog
    .card--bids__item
      img.card--bids__item-icon(src="../assets/auction.svg")
      p.card--bids__item-text Bids Available
      .card--bids__item-circle 17
    .card--bids__item
      img.card--bids__item-icon(src="../assets/auction--closed.svg")
      p.card--bids__item-text Bids Closed
      .card--bids__item-circle 07

  .card.card--statistics
    h3.card--statistics__title Statistics
    .card--statistics__dropdown
      p.card--statistics__dropdown-text This Week
      i.fas.fa-chevron-down

    .card--statistics__item 
      .card--statistics__item.card--statistics__item--progress.card--statistics__item--progress-1 
      p.card--statistics__item-text Jan
    .card--statistics__item
      .card--statistics__item.card--statistics__item--progress.card--statistics__item--progress-2 
      p.card--statistics__item-text Feb
    .card--statistics__item
      .card--statistics__item.card--statistics__item--progress.card--statistics__item--progress-3
      p.card--statistics__item-text Mar
    .card--statistics__item
      .card--statistics__item.card--statistics__item--progress.card--statistics__item--progress-4 
      p.card--statistics__item-text Apr
    .card--statistics__item
      .card--statistics__item.card--statistics__item--progress.card--statistics__item--progress-5
      p.card--statistics__item-text May
    .card--statistics__item
      .card--statistics__item.card--statistics__item--progress.card--statistics__item--progress-6 
      p.card--statistics__item-text Jun
    .card--statistics__item
      .card--statistics__item.card--statistics__item--progress.card--statistics__item--progress-7 
      p.card--statistics__item-text Jul
  .card.card--calendar 
    .card--calendar__header
      i.fas.fa-chevron-left
      p.calendar__year 2021
      i.fas.fa-chevron-right
    ul.card--calendar__list
      li.card--calendar__item(v-for="day in days") {{ i++ }}
  .card.card--todays-shipments todays-shipments
  .card.card--current-shipment
    h3.card--current-shipment__title Current Shipment
    .card--current-shipment__item
      img.card--current-shipment__image(src="../assets/Nathan_drake.svg")
      h3.card--current-shipment-title Customer <br> <strong>Nathan Drake</strong>
    .card--current-shipment__item
      img.card--current-shipment__image(src="../assets/Not_included.svg")
      h3.card--current-shipment-title Include cost of fuel in your quote <br> <strong>Not Included</strong>
    .card--current-shipment__item
      img.card--current-shipment__image(src="../assets/Cash.svg")
      h3.card--current-shipment-title Payment Terms <br> <strong>Cash</strong>
    .card--current-shipment__item
      img.card--current-shipment__image(src="../assets/Frazer.svg")
      h3.card--current-shipment-title Cash <br> <strong>Chole Frazer Package</strong>
    .card--current-shipment__item
      img.card--current-shipment__image(src="../assets/files.svg")
      a.card--current-shipment-title Upload documents
  .card.card--cargo-shipment cargo-shipment
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
</style>