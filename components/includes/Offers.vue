<template>
  <section>
    <transition name="fade">
      <div class="text-center py-2 fw-bold" v-if="show">
        FREE SHIPPING FOR ORDERS ABOVE $500.00 USD
        <i class="las la-times float-end me-3 mt-1" @click="show = false" />
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";
div {
  background-color: $primary;
  color: #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
