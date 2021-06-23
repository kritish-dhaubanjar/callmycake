<template>
  <section>
    <h5 class="mb-3">Type</h5>

    <div>
      <button
        class="btn btn-light"
        @click="setType('round')"
        :class="{ active: cake.type === 'round' }"
      >
        Round
      </button>
      <button
        class="btn btn-light"
        @click="setType('square')"
        :class="{ active: cake.type === 'square' }"
      >
        Square
      </button>
    </div>

    <hr />
    <div class="row">
      <div class="col-5">
        <button class="btn btn-light navigation py-2">
          <i class="las la-arrow-left"></i>
        </button>
        <span>Size</span>
      </div>
      <div class="col-2 d-flex align-items-center">
        <span>2/10</span>
      </div>
      <div class="col-5 text-end">
        <span>Flavor</span>
        <nuxt-link
          to="/customize/flavor"
          tag="button"
          class="btn btn-dark navigation py-2"
        >
          <i class="las la-arrow-right"></i>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    cake() {
      return this.$store.getters["customize/cake"];
    }
  },

  methods: {
    setType(option) {
      this.$store.commit("customize/setType", option);
    }
  }
};
</script>

<style lang="scss" scoped>
.navigation {
  border-radius: 100%;
  border-color: #000;
}

li {
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  div {
    border-radius: 100%;
    border: 2px solid #d3d3d3;
  }
}

li.selected {
  div {
    border-radius: 100%;
    border: 2px solid #000;
  }
}

button {
  border: 2px solid #fff;
  box-shadow: none !important;
  outline: none !important;
  &.active {
    border: 2px solid #000;
  }
}
</style>
