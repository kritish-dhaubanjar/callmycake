<template>
  <section>
    <h5 class="mb-3">Type</h5>
    <div>
      <h6>Shape</h6>

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
      <h6>Design</h6>

      <button
        class="btn btn-light"
        @click="setDesign('tall')"
        :class="{ active: cake.design === 'tall' }"
      >
        Tall Design
      </button>
      <button
        class="btn btn-light"
        @click="setDesign('wide')"
        :class="{ active: cake.design === 'wide' }"
      >
        Wide Design
      </button>
    </div>

    <br />

    <div>
      <h6>Layers</h6>

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

    <br />

    <div>
      <h6>Available Pounds/Size</h6>
      <button
        v-for="option in this[this.cake.design]"
        :key="option.pound"
        class="btn btn-light"
        @click="customPound = option.pound"
        :class="{ active: cake.pound == option.pound }"
      >
        {{ option.pound }} Pound
        <span v-if="option.size"> / {{ option.size }} </span>
      </button>
    </div>
    <br />

    <div>
      <h6>Custom Pound</h6>
      <div class="input-group mb-3">
        <input
          type="number"
          class="form-control"
          v-model="customPound"
          step="0.5"
          :min="min"
          placeholder='10" / 48 servings / 1.5 pounds'
        />
        <span class="input-group-text fw-bold"
          >Pound&nbsp;
          <small>(Min: {{ min }} Pound)</small>
        </span>
      </div>
    </div>
    <br />

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
  data() {
    return {
      customPound: 1,
      min: 1,
      wide: [{ pound: 1 }, { pound: 2 }, { pound: 3 }],
      tall: [
        { pound: 1, size: '3" tall' },
        { pound: 1.5, size: '4.5-5" tall' },
        { pound: 2, size: '7-8" tall' }
      ]
    };
  },

  watch: {
    customPound(newVal, oldVal) {
      this.setPound(newVal);
    }
  },

  computed: {
    deck() {
      const deck_option = [{ pound: 1 }, { pound: 3 }, { pound: 5 }];
      this.min = deck_option[this.cake.layer - 1].pound;
      this.customPound = this.min;
      return [deck_option[this.cake.layer - 1]];
    },
    cake() {
      return this.$store.getters["customize/cake"];
    }
  },

  methods: {
    setType(option) {
      this.$store.commit("customize/setType", option);
    },

    setDesign(option) {
      if (option !== "layer") {
        this.min = 1;
        this.customPound = 1;
      }
      this.$store.commit("customize/set", { component: "design", option });
      this.$store.commit("customize/set", { component: "layer", option: 1 });
    },

    setLayer(option) {
      this.$store.commit("customize/set", {
        component: "design",
        option: "deck"
      });
      this.$store.commit("customize/set", { component: "layer", option });
    },

    setPound(option) {
      this.$store.commit("customize/set", {
        component: "price",
        option: {
          ...this.cake.price,
          pound: 600 * option
        }
      });
      this.$store.commit("customize/set", { component: "pound", option });
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

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
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

.input-group {
  max-width: 256px;
}
</style>
