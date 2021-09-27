<template lang="pug">
.card.card--statistics
  .card--statistics__header
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
</template>

<script>
export default {
  name: "CStatistics",
};
</script>