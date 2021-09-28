<template lang="pug">
.card.card--bids
  .card--bids__header
    img.card--bids__image(:src="logo")
    h2.card--bids__title(slot, name="titlee")
      slot(name="title") default
  .card--bids__bottom
    CAuctionItem
      template(v-slot:text) Bids Available
      template(v-slot:number)
    CAuctionItem
      template(v-slot:text) Bids Closed
      template(v-slot:number) 09
    //- .card--bids__item
    //-   i.fas.fa-lock-open.card--bids__item-icon

    //-   p.card--bids__item-text Bids Available
    //-   .card--bids__item-circle 17
    //- .card--bids__item
    //-   i.fas.fa-lock.card--bids__item-icon

    //-   p.card--bids__item-text Bids Closed
    //-   .card--bids__item-circle 07
</template>

<script>
import CAuctionItem from "./CAuction.vue";
export default {
  methods: {},
  name: "CBids",
  components: {
    CAuctionItem,
  },
  props: {
    title: {
      type: String,
      default: null,
    },
    logo: {
      type: String,
      //   default: "../assets/bids_logo.svg",
    },
  },
};
</script>