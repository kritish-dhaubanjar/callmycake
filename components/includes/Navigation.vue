<template>
  <section class="py-4 sticky-top bg-white">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div
            class="text-md-center  d-flex align-items-center justify-content-between"
          >
            <div class="m-0 m-md-auto">
              <nuxt-link
                to="/"
                tag="img"
                src="/images/cmc.png"
                class="img-fluid py-1"
                width="70"
              />
            </div>
            <div class="float-end">
              <nuxt-link to="/cart#top">
                <i class="las la-shopping-cart la-3x my-4"></i>
                <span class="badge">{{ count }}</span>
              </nuxt-link>

              <button
                class="navbar-toggler px-0 border-0 my-4 ms-2"
                type="button"
                @click="$emit('show')"
              >
                <i class="las la-bars la-2x d-md-none"></i>
              </button>

              <!-- <i class="las la-bars la-2x my-4 ms-2 d-md-none"></i> -->
            </div>
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
    if (section.offsetTop > 100) {
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

button {
  outline: none !important;
  box-shadow: none !important;
}
</style>
