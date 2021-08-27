<template lang="pug">
.section__main
  .card.card--track-order
    h3.card--track-order__title.card--track-order__title--md Track<br><strong class="card--track-order__title card--track-order__title--bg">Order</strong>
    .card--track-order__picture
      //- img.card--track-order__image(src="../assets/card--track-order.svg")

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
    .card--bids__header
      img.card--bids__image(src="../assets/bids_logo.svg")
      h2.card--bids__title Naughty<br>Dog
    .card--bids__bottom
      .card--bids__item
        i.fas.fa-lock-open.card--bids__item-icon

        p.card--bids__item-text Bids Available
        .card--bids__item-circle 17
      .card--bids__item
        i.fas.fa-lock.card--bids__item-icon

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
      p.card--calendar__year August 2021
      i.fas.fa-chevron-right
    .line
    ul.card--calendar__list
      li.card--calendar__item(v-for="(day, index) in days", :key="index") {{ day }}
      li.card--calendar__item.card--calendar__item--day(v-for="n in 30") {{ n }}

  .card.card--todays-shipments
    h3.card--todays-shipments__title Todays shipments
    h2.card--todays-shipments__title.card--todays-shipments__title--big <span>1332.32 TON</span>
    .card--todays-shipments__hours
      p.card--todays-shipments__hour(
        v-for="(hour, index) in hours",
        :key="index"
      ) {{ hour }}

    .card--todays-shipments__item
      .card--todays-shipments__item-color.card--todays-shipments__item-color--1
    .card--todays-shipments__item
      .card--todays-shipments__item-color.card--todays-shipments__item-color--2
    .card--todays-shipments__item
      .card--todays-shipments__item-color.card--todays-shipments__item-color--3
    .card--todays-shipments__item
      .card--todays-shipments__item-color.card--todays-shipments__item-color--4
    .card--todays-shipments__legend
      .card--todays-shipments__legend-item
        .card--todays-shipments__legend-item-color.card--todays-shipments__legend-item-color--1
        p.card--todays-shipments__legend-item-text Less Than Truckload
      .card--todays-shipments__legend-item
        .card--todays-shipments__legend-item-color.card--todays-shipments__legend-item-color--2
        p.card--todays-shipments__legend-item-text Intermodal
      .card--todays-shipments__legend-item
        .card--todays-shipments__legend-item-color.card--todays-shipments__legend-item-color--3
        p.card--todays-shipments__legend-item-text Volume LTL
      .card--todays-shipments__legend-item
        .card--todays-shipments__legend-item-color.card--todays-shipments__legend-item-color--4
        p.card--todays-shipments__legend-item-text Expedited
  .card.card--current-shipment
    h3.card--current-shipment__title Current Shipment
    .card--current-shipment__items
      .columnn
        .row
          .card--current-shipment__item.card--current-shipment__item--1
            img.card--current-shipment__image(src="../assets/Nathan_drake.svg")
            h3.card--current-shipment-title Customer <br> <strong>Nathan Drake</strong>
          .card--current-shipment__item.card--current-shipment__item--2
            img.card--current-shipment__image(src="../assets/Not_included.svg")
            h3.card--current-shipment-title Include cost of fuel in your quote <br> <strong>Not Included</strong>
        .row 
          .card--current-shipment__item.card--current-shipment__item--3
            img.card--current-shipment__image(src="../assets/Cash.svg")
            h3.card--current-shipment-title Payment Terms <br> <strong>Cash</strong>
          .card--current-shipment__item.card--current-shipment__item--4
            img.card--current-shipment__image(src="../assets/Frazer.svg")
            h3.card--current-shipment-title Cash <br> <strong>Chole Frazer Package</strong>

      .card--current-shipment__item-upload
        img.card--current-shipment__image(src="../assets/files.svg")
        a.card--current-shipment__link Upload documents
  .card.card--cargo-shipment cargo-shipment
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "Section_main",

  components: {
    Card,
  },

  data() {
    return {
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

      hours: [
        "9 AM",
        "10 AM",
        "11 AM",
        "12 AM",
        "1 PM",
        "2 PM",
        "3 PM",
        "4 PM",
        "5 PM",
      ],
    };
  },
};
</script>

<style lang="scss">
</style>