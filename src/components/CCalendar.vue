<template lang="pug">
.card.card--calendar
  .card--calendar__header
    i.fas.fa-chevron-left
    p.card--calendar__year August 2021
    i.fas.fa-chevron-right
  .line
  ul.card--calendar__list
    li.card--calendar__item(v-for="(day, index) in days", :key="index") {{ day }}
    li.card--calendar__item.card--calendar__item--day(v-for="n in 30") {{ n }}
</template>

<script>
export default {
  name: "CCalendar",
  data() {
    return {
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
  },
};
</script>