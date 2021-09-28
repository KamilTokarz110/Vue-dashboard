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
    //- CTrackButton(title="Name")
    CTrackButton.card__button.card__button--filters(title="Filter More")
      template(v-slot:title) Button
    CTrackButton(title="Track")
      template(v-slot:title) Button_2
</template>
<script>
import CTrackButton from "./CTrackButton.vue";
import CButtonFilters from "./CButtonFilters.vue";
export default {
  name: "CTrackOrder",
  components: {
    CTrackButton,
    CButtonFilters,
  },
};
</script>