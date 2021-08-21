<template lang="pug">
nav.nav
  .nav__logo
    img.nav__image(src="../assets/nav_logo.png")
  ul.nav__list
    li.nav__item 
      a.nav__link Home
    li.nav__item 
      a.nav__link Ongoing shipments
    li.nav__item 
      a.nav__link Rejected shipments
    li.nav__item 
      a.nav__link Previous Shipments
    li.nav__item 
      a.nav__link Reports
  .nav__search-container 
    input.nav__search(type="search", name="search", placeholder="")
    span.nav__search-text Search
    img.nav__search-image(src="../assets/icons/magnifier.png")

  .nav__profile 
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style lang="scss">
.nav {
  display: Flex;
  flex-basis: 100%;
  justify-content: space-between;
  align-items: center;

  margin: 80px 0px 50px 0px;
  padding: 40px;
  height: 85px;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 20px #c4c8d066;
  border-radius: 20px;
  opacity: 1;

  color: $nav-font-color;

  &__logo {
    // width: 63px;
    // height: 45px;
    // margin-left: 40px;
    // background-color: red;
  }

  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    height: 24px;
    flex-basis: 776px;
  }
  &__item {
    display: block;
    font-size: 1.8rem;

    cursor: pointer;
    line-height: 24px;
    text-align: left;
  }

  &__search {
    // position: relative;
    height: 45px;
    width: 452px;

    padding: 20px 7px;

    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #aab6cc;
    border-radius: 7px;
    opacity: 1;
  }
  &__search-text {
    position: absolute;
    // top: 22px;
    left: 53px;
    bottom: 13px;
    text-align: left;

    font-size: 1.6rem;
  }
  &__search-container {
    position: relative;
  }
  &__search-image {
    position: absolute;
    top: 15px;
    left: 25px;
  }

  &__profile {
    height: 70px;
    width: 231px;
    background-color: red;
  }
}
</style>