<template lang="pug">
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
</template>

<script>
export default {
  name: "CBids",
};
</script>