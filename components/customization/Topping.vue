<template>
  <section>
    <h5 class="mb-3">Topping</h5>

    <div class="mb-5">
      <button
        v-for="option in toppings"
        :key="option.value"
        class="btn btn-light"
        @click="setTopping(option)"
        :class="{ active: cake.topping.id === option.id }"
      >
        <span
          :src="option.icon"
          width="40"
          class="img-fluid p-0"
          v-if="option.id === 0"
        >
          <i class="las la-times la-2x" />
        </span>

        <img :src="option.icon" width="40" class="img-fluid p-0" v-else />
      </button>
    </div>

    <span class="fw-bold">Seleted Topping: </span
    ><span>{{ cake.topping.value }}</span>
    <hr />

    <div class="row">
      <div class="col-5">
        <nuxt-link
          tag="button"
          class="btn btn-light navigation py-2"
          to="/customize/flower"
        >
          <i class="las la-arrow-left"></i>
        </nuxt-link>
        <span>Flower</span>
      </div>
      <div class="col-2 d-flex align-items-center">
        <span>7/8</span>
      </div>
      <div class="col-5 text-end">
        <span>Instruction</span>
        <nuxt-link
          tag="button"
          class="btn btn-dark navigation py-2"
          to="/customize/instruction"
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
      toppings: [
        {
          id: 0,
          image: null,
          value: "None"
        },
        {
          id: 1,
          image: "/images/customization/toppings/001.png",
          icon: "/images/customization/topping_options/001.png",
          value: "Sprinkles"
        }
      ]
    };
  },

  computed: {
    cake() {
      return this.$store.getters["customize/cake"];
    }
  },

  methods: {
    setTopping(option) {
      this.$store.commit("customize/set", { component: "topping", option });
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
  margin-bottom: 8px;
  display: inline-block;
  div {
    border-radius: 100%;
    width: 42px;
    height: 42px;
    border: 2px solid #d3d3d3;
  }
}

li.selected {
  div {
    border-radius: 100%;
    border: 2px solid #000;
  }
}

i.la-times {
  font-size: 2.5em;
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
