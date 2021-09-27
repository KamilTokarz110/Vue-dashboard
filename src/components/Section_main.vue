<template lang="pug">
.section__main
  CTrackOrder
  CBids
  CStatistics
  CCalendar
  CTodaysShipments
  CCurrentShipment
  CShipmentCargo
</template>

<script>
import Card from "./Card.vue";
import CTrackOrder from "./CTrackOrder.vue";
import CBids from "./CBids.vue";
import CStatistics from "./CStatistics.vue";
import CCalendar from "./CCalendar.vue";
import CTodaysShipments from "./CTodaysShipments.vue";
import CCurrentShipment from "./CCurrentShipment.vue";
import CShipmentCargo from "./CShipmentCargo.vue";
export default {
  name: "Section_main",

  components: {
    Card,
    CTrackOrder,
    CBids,
    CStatistics,
    CCalendar,
    CTodaysShipments,
    CCurrentShipment,
    CShipmentCargo,
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss">
</style>
