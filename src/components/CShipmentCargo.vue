<template lang="pug">
.card.card--cargo-shipment
  h2.card--cargo-shipment__title Shipment cargo
  ul.card--cargo-shipment__list.card--cargo-shipment__list--title
    li.card--cargo-shipment__item.card--cargo-shipment__item--bold(
      v-for="(cargo, index) in cargos",
      :key="index"
    ) {{ cargo }}
  ul.card--cargo-shipment__list.card--cargo-shipment__list--info
    li.card--cargo-shipment__item-info(
      v-for="(information, index) in informations",
      :key="index"
    ) {{ information }}
  ul.card--cargo-shipment__list.card--cargo-shipment__list--info
    li.card--cargo-shipment__item-info(
      v-for="(information, index) in informations",
      :key="index"
    ) {{ information }}
</template>

<script>
export default {
  name: "CShipmentCargo",
  data() {
    return {
      cargos: [
        "SL No",
        "Shipper",
        "Ready Time",
        "Destination",
        "Consignee",
        "Need Time",
        "Distance",
      ],
      informations: [
        "50265",
        "Fireflies",
        "12:00 (IST)",
        "12:00 (IST)",
        "31224 Port",
        "15:00 (IST)",
        "---",
      ],
    };
  },
};
</script>