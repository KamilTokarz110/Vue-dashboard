<template lang="pug">
Card
</template>

<script>
export default {
  name: "Card",
};
</script>

<style lang="scss">
.card {
  margin: 0px 15px 30px 0px;
  padding: 20px 20px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 20px #c4c8d066;
  border-radius: 20px;
  opacity: 1;

  &--track-order {
    width: 567px;
    height: 344px;
  }

  &--bids {
    width: 300px;
    height: 344px;

    background-color: $bids-card-color;
  }

  &--statistics {
    width: 433px;
    height: 344px;
    background-color: $statistics-card-color;
  }

  &--calendar {
    width: 390px;
    height: 344px;
    margin: 0px 0px 30px 0px;
  }

  &--todays-shipments {
    width: 567px;
    height: 408px;
  }

  &--current-shipments {
    width: 1183px;
    height: 408px;
    margin: 0px 0px 30px 0px;
  }

  &--cargo-shipment {
    flex-basis: 100%;
    height: 500px;
    margin: 0px 0px 0px 0px;
  }
}
</style>