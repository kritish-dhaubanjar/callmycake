<template>
  <section>
    <transition name="fade">
      <div class="text-center py-2 fw-bold" v-if="show">
        {{ text }}
        <i class="las la-times float-end me-3 mt-1" @click="show = false" />
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      text: ''
    };
  },
  created() {
    this.$axios
      .get('api/singletons/get/advertisements')
      .then(({ data }) => {
        this.show = data.top_offer_enabled || false;
        this.text = data.top_offer_text;
      });
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
