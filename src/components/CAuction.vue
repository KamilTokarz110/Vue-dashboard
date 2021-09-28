<template lang="pug">
.card--bids__item
  i.fas.fa-lock-open.card--bids__item-icon

  p.card--bids__item-text
    slot(name="text") default
  .card--bids__item-circle 
    slot(name="number") {{ '0' + auctionsLenght() }}
</template>

<script>
export default {
  data() {
    return {
      auctions: [
        {
          name: "Auction01",
        },
        {
          name: "Auction02",
        },
        {
          name: "Auction03",
        },
        {
          name: "Auction04",
        },
        {
          name: "Auction05",
        },
        {
          name: "Auction06",
        },
      ],
    };
  },
  methods: {
    auctionsLenght() {
      return this.auctions.length;
    },
  },
  name: "CAuctionItem",
};
</script>