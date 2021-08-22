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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  margin: 0px 15px 30px 0px;
  padding: 34px 34px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 20px #c4c8d066;
  border-radius: 20px;
  opacity: 1;

  &--track-order {
    display: flex;
    width: 567px;
    height: 344px;
    background-image: url("../assets/card--track-order.png");
    background-repeat: no-repeat;
    background-position: 91% 25px;

    &__title {
      flex-basis: 100%;

      color: $nav-font-color;

      &--md {
        font-size: 2rem;
        height: 0px;
        margin-bottom: 16px;
        // padding-bottom: 5px;
      }
      &--bg {
        font-size: 3rem;

        margin-bottom: 10px;
      }
    }

    //Mid Section

    &__item {
      display: Flex;
      // flex-basis: 100%;

      border: 1px solid #aab6cc;

      border-radius: 7px;
      opacity: 1;

      font-size: 1.6rem;
    }

    &__text {
      width: 166px;
      opacity: 0.5;

      font-weight: bold;
      text-align: center;
      line-height: 45px;
      &:nth-child(2) {
        border-right: 2px solid #aab6cc;
        border-left: 2px solid #aab6cc;
      }
    }

    &__input-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      position: relative;
      flex-basis: 100%;
    }
    &__input {
      flex-basis: 100%;
      height: 45px;

      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #aab6cc;
      border-radius: 7px;
      opacity: 1;
      padding: 20px 20px;

      &-name {
        padding: 13px 20px;
        position: absolute;
        font-size: 1.6rem;
        opacity: 0.5;
        left: 0;
        top: 0;
      }
    }
  }

  //Bids Card

  &--bids {
    width: 300px;
    height: 344px;

    background-color: $bids-card-color;
    padding: 30px 25px;
    &__header {
      display: flex;
      flex-basis: 100%;
      align-items: flex-start;

      margin-bottom: 101px;
    }
    &__image {
      margin-right: 20px;
    }
    &__title {
      font-size: 2rem;
      color: #fff;
      line-height: 27px;
      padding-top: 5px;
    }

    &__item {
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      width: 250px;
      height: 61px;

      padding: 0px 10px;

      text-align: left;
      color: white;
      font-size: 14px;

      background: #d4887b 0% 0% no-repeat padding-box;
      border-radius: 10px;
      opacity: 1;
      &:nth-child(2) {
        margin-bottom: 10px;
      }

      &-text {
        text-align: left;
        padding-right: 25px;
      }

      &-circle {
        width: 40px;
        height: 40px;
        background: #e5c5b5 0% 0% no-repeat padding-box;
        opacity: 1;
        border-radius: 50%;
        text-align: center;
        line-height: 40px;
        color: #d4887b;
        font-size: 2rem;
        font-weight: bold;
      }
      &-icon {
      }
    }
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

  &__button {
    width: 150px;
    height: 45px;
    background: #16a596 0% 0% no-repeat padding-box;
    border-radius: 7px;
    opacity: 1;
    margin-top: 40px;

    color: white;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;
    line-height: 45px;
    cursor: pointer;
    &--filters {
      background: #ffff 0% 0% no-repeat padding-box;
      color: #16a596;
      border-radius: 0px;
      border: none;
      text-align: left;
    }
  }
}
</style>