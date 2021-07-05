<template>
  <section>
    <h5 class="mb-3">Type</h5>

    <div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder='10" / 48 servings / 1.5 pounds'
        />
        <span class="input-group-text">Size / Diameter / Servings</span>
      </div>
    </div>

    <br />

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

    <br />

    <div>
      <button
        class="btn btn-light"
        @click="setLayer(1)"
        :class="{ active: cake.layer === 1 }"
      >
        1 Layer
      </button>
      <button
        class="btn btn-light"
        @click="setLayer(2)"
        :class="{ active: cake.layer === 2 }"
      >
        2 Layer
      </button>
      <button
        class="btn btn-light"
        @click="setLayer(3)"
        :class="{ active: cake.layer === 3 }"
      >
        3 Layer
      </button>
    </div>

    <hr />
    <div class="row">
      <div class="col-5">
        <!-- <button class="btn btn-light navigation py-2">
          <i class="las la-arrow-left"></i>
        </button>
        <span>Size</span> -->
      </div>
      <div class="col-2 d-flex align-items-center">
        <span>1/9</span>
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
    },

    setLayer(option) {
      this.$store.commit("customize/set", { component: "layer", option });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/colors.scss";
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

input {
  resize: none;
  border-radius: 0;
  outline: none !important;
  box-shadow: none !important;
  border-color: rgb(229, 229, 229);
  &:focus,
  &:active {
    background-color: #f7f7f7;
    border-color: rgb(229, 229, 229);
  }
}

input,
textarea {
  color: #000;
  font-weight: 500;
  border-width: 2px;

  &:active,
  &:focus {
    border-color: $primary;
  }
}
input::placeholder,
textarea::placeholder {
  color: #d1d1d1;
}
</style>
