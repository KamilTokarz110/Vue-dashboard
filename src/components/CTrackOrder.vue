<template lang="pug">
.card.card--track-order
  h3.card--track-order__title.card--track-order__title--md Track<br><strong class="card--track-order__title card--track-order__title--bg">Order</strong>
  .card--track-order__picture

  .card--track-order__item
    p.card--track-order__text.is-active Tracking ID
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
</template>
<script>
export default {
  name: "CTrackOrder",
};
</script>