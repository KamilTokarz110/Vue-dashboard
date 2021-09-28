<template lang="pug">
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
</template>

<script>
export default {
  name: "CCurrentShipment",
};
</script>