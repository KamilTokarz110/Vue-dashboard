<template lang="pug">
nav.nav
  .nav__logo
    img.nav__image(src="../assets/nav_logo.svg")

  .nav__mobile
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
    .wrap
      input.nav__search(type="search", name="search", placeholder="Search")

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
  padding: 10px 20px;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 20px #c4c8d066;
  border-radius: 20px;
  opacity: 1;
  &__mobile {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
    /*background-color: red;*/
    padding: 5px 5px;
    @include md {
      justify-content: flex-end;
      /*background-color: red;*/
      margin-left: auto;
      width: 200px;
      gap: 40px;
    }
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
    justify-content: space-between;
    .fa-bars {
      font-size: 4rem;
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
  }

  @include lg {
    // background-color: yellowgreen;
    display: Flex;
    flex-basis: 100%;
    justify-content: flex-start;
    align-items: center;

    margin: 80px 0px 50px 0px;
    padding: 40px;
    height: 85px;

    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 10px 20px #c4c8d066;
    border-radius: 20px;
    opacity: 1;

    color: $nav-font-color;
    .fa-bars {
      display: none;
    }
    .fa-search {
      display: none;
    }
    .fa-user {
      display: none;
    }
    &__logo {
      // width: 63px;
      // height: 45px;
      margin-right: 40px;
      // background-color: red;
    }

    &__list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      height: 24px;
      min-width: 800px;
      flex-basis: 776px;
      padding: 0px 20px;
      margin-right: 60px;
    }

    &__item {
      display: block;
      font-size: 1.8rem;

      cursor: pointer;
      line-height: 24px;
      text-align: left;
    }
    &__link {
      position: relative;
      display: block;
      transition: 0.2s;

      &:after {
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: $active-color;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
      }

      &:hover:after {
        width: 100%;
        left: 0;
      }
    }
    &__search-container {
      position: relative;
      display: none;
      align-items: center;
      justify-content: center;
      width: 100%;
      @include xl {
        display: flex;
      }
    }
    .wrap {
      width: 100%;
    }
    &__search {
      display: flex;
      // position: relative;
      align-items: center;
      justify-content: center;

      height: 45px;
      width: 100%;
      /*max-width: 350px;*/

      padding: 0px 60px;

      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #aab6cc;
      border-radius: 7px;
      opacity: 1;

      &::placeholder {
        display: block;
        font-size: 1.6rem;
        color: $nav-font-color;
        opacity: 1;
      }
    }
    &__mobile {
      display: none;
    }

    /*&__search-container {*/
    /*display: block;*/
    /*position: relative;*/
    /*}*/

    &__search-image {
      display: block;
      position: absolute;
      top: 15px;
      left: 25px;
    }

    &__profile {
      display: none;
      align-items: center;
      justify-content: space-between;
      min-width: 245px;
      gap: 15px;
      margin-left: auto;
      @include xl {
        display: flex;
        margin-left: 50px;
      }

      &-info {
        display: block;

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
        cursor: pointer;
      }

      &-picture {
        display: block;
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
