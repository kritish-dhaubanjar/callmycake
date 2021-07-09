<template>
  <nav class="shadow" :class="{ show: show }">
    <div class="my-3 text-end me-3">
      <i class="las la-times la-2x mr-3" @click="$emit('hide')" />
    </div>
    <ul class="list-group list-group-flush mb-4">
      <nuxt-link
        to="/"
        tag="li"
        class="list-group-item sidebar-link"
        exact-active-class="active"
        >Home</nuxt-link
      >

      <nuxt-link
        to="/customize"
        tag="li"
        class="list-group-item sidebar-link"
        exact-active-class="active"
        >Custom Shop</nuxt-link
      >

      <nuxt-link
        to="/gallery"
        tag="li"
        class="list-group-item sidebar-link"
        exact-active-class="active"
        >Gallery</nuxt-link
      >

      <nuxt-link
        to="/blogs"
        tag="li"
        class="list-group-item sidebar-link"
        exact-active-class="active"
        >Blogs</nuxt-link
      >

      <nuxt-link
        to="/about-us"
        tag="li"
        class="list-group-item sidebar-link"
        exact-active-class="active"
        >About Us</nuxt-link
      >

      <li class="list-group-item text-krish-light">
        <i class="las la-phone mr-2" />
        <a :href="`tel:${contactInfo.phone_primary}`">
          <i class="las la-phone" /> {{ contactInfo.phone_primary }}
        </a>
      </li>

      <li class="list-group-item text-krish-light">
        <i class="las la-home mr-2" />
        Koteshwor-32, Kathmandu
      </li>

      <li class="list-group-item text-krish-light">
        <i class="las la-envelope mr-2" />
        <a href="mailto:info@callmycake.com">info@callmycake.com</a>
      </li>

      <li class="list-group-item">
        <nuxt-link
          to="/contact-us"
          tag="button"
          class="btn btn-primary is-radiusless btn-block"
        >
          <span>Contact Us <i class="las la-arrow-right"/></span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["show", "contactInfo"],
  data() {
    return {
      about: false,
      academics: false,
      admission: false,
      facilities: false,
      others: false
    };
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";
nav {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
nav::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome, Safari and Opera */
}
nav {
  position: fixed;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 320px;
  background: #fff;
  z-index: 1024;
  overflow-y: scroll;
  overflow-x: hidden !important;
  transform: translateX(-328px);
  transition: 128ms;
  &.show {
    transform: translateX(0);
    transition: 128ms;
  }
}
ul {
  .list-group-item {
    border-color: rgba(255, 255, 255, 0.1);
  }
  li {
    background-color: #fff;
    font-weight: bold;
    font-size: 15px;
    a {
      color: black !important;
    }
    i {
      font-size: 18px;
    }
    &.active {
      color: $primary;
      background-color: #fff;
    }
    &.sidebar-link {
      &:hover {
        cursor: pointer;
      }
    }
    &.sub-menu {
      padding-left: 48px;
    }
  }
}
.btn-primary {
  background: $primary;
  border: $primary;
  &:hover,
  &:active,
  &:focus {
    box-shadow: none !important;
    outline: none !important;
    background: $primary !important;
  }
  &:active {
    opacity: 0.7;
  }
}
.la-times {
  cursor: pointer;
}
@media screen and(min-width: 1200px) {
  nav {
    display: none;
  }
}
</style>
