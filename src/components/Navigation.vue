<template lang="pug">
nav.nav
  .nav__logo
    img.nav__image(src="../assets/nav_logo.svg")

  i.fas.fa-search.icon
  i.far.fa-user.icon
  i.fas.fa-bars.icon
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

    img.nav__search-image(src="../assets/icons/magnifier.png")

  .nav__profile
    .nav__profile-info
      p.nav__profile-text-name Abby Anderson
      p.nav__profile-logout Logout
    .nav__profile-picture 
      img.profile-image(src="../assets/profile_picture.png")
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style lang="scss">
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-basis: 100%;

  margin: 20px 0px 30px 0px;
  padding: 10px 10px;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 20px #c4c8d066;
  border-radius: 20px;
  opacity: 1;

  .fa-bars {
    font-size: 2.4rem;
    color: $nav-font-color;
  }
  .fa-search {
    font-size: 2.4rem;

    color: $nav-font-color;
  }
  .fa-user {
    font-size: 2.4rem;

    color: $nav-font-color;
  }
  &__list {
    display: none;
  }

  &__item {
    display: none;
  }

  &__link {
    display: none;
  }

  &__search {
    display: none;
  }

  &__profile {
    display: none;

    &-picture {
      display: none;
    }

    &-info {
      // background-color: green;
      display: none;

      &-text-name {
        display: none;
      }

      &-logout {
        display: none;
      }

      &-picture {
        display: none;
      }

      &-image {
        opacity: 0;
        display: none;
      }

      &__search-container {
        display: none;
      }
    }

    &__search-text {
      display: none;
    }
  }
  &__search-image {
    display: none;
  }

  @include md {
    // background-color: red;
    flex-basis: 100%;
  }

  @include lg {
    // background-color: yellowgreen;
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
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
      width: 231px;

      &-info {
        // background-color: green;

        height: 46px;

        text-align: left;
        font-size: 1.8rem;
        padding-left: 20px;
      }

      &-text-name {
        font-weight: bold;
      }

      &-logout {
        text-align: right;
        opacity: 0.5;
        padding-top: 0px;
      }

      &-picture {
        // background-color: yellow;
        flex-basis: 70px;
        height: 70px;
        // margin-left: 50px;
        border-radius: 50%;
      }

      &-image {
        // display: block;
      }
    }
  }
}
</style>