<template lang="pug">
.card.card--todays-shipments
  h3.card--todays-shipments__title Todays shipments
  h2.card--todays-shipments__title.card--todays-shipments__title--big <span class=".card--todays-shipments__title.card--todays-shipments__title--big">1332.32 TON</span>
  .card--todays-shipments__hours
    p.card--todays-shipments__hour(
      v-for="(hour, index) in hours",
      :key="index"
    ) {{ hour }}
  CTodaysShipmentBar
    template(v-slot:color)
      .card--todays-shipments__item-color.card--todays-shipments__item-color--1
  //- .card--todays-shipments__item
  //-   .card--todays-shipments__item-color.card--todays-shipments__item-color--1
  CTodaysShipmentBar
    template(v-slot:color)
      .card--todays-shipments__item-color.card--todays-shipments__item-color--2
  CTodaysShipmentBar
    template(v-slot:color)
      .card--todays-shipments__item-color.card--todays-shipments__item-color--3
  CTodaysShipmentBar
    template(v-slot:color)
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
</template>

<script>
import CTodaysShipmentBar from "./CTodaysShipmentBar.vue";
export default {
  components: {
    CTodaysShipmentBar,
  },
  name: "CTodaysShipments",
  data() {
    return {
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