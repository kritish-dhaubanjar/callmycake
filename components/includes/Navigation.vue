<template>
  <section class="py-4 sticky-top bg-white">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="text-md-center">
            <nuxt-link
              to="/"
              tag="img"
              src="/images/logo.webp"
              class="img-fluid py-1"
              width="178"
            />
            <nuxt-link to="/cart#top" class="float-end">
              <i class="las la-shopping-cart la-3x mt-4"></i>
              <span class="badge">{{ count }}</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.getters.cart.reduce((acc, cake, index) => {
        return acc + cake.qty;
      }, 0);
    }
  }
};

let debounce = function(func, delay) {
  var timeout = null;

  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func();
    }, delay);
  };
};

window.addEventListener(
  "scroll",
  debounce(() => {
    let section = document.querySelector(".sticky-top");
    if (section.offsetTop > 96) {
      section.className = "my-4 sticky-top bg-white shadow-sm";
    } else {
      section.className = "py-4 sticky-top bg-white";
    }
  }, 10)
);
</script>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";

span.badge {
  position: relative;
  top: -18px;
  background-color: $primary !important;
  color: #fff !important;
}

section {
  z-index: 1023 !important;
}

img {
  cursor: pointer;
}
</style>
