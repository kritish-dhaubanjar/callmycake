<template>
  <section>
    <h5 class="mb-3">Filling</h5>

    <ul class="p-0">
      <li
        v-for="option in fillings"
        :key="option.value"
        :class="{ selected: cake.filling.id === option.id }"
        @click="setFilling(option)"
      >
        <div>
          <img :src="option.icon" class="img-fluid" width="40px" />
        </div>
        <span class="ms-3">{{ option.value }}</span>
      </li>
    </ul>

    <hr />
    <div class="row">
      <div class="col-5">
        <nuxt-link
          tag="button"
          class="btn btn-light navigation py-2"
          to="/customize/flavor"
        >
          <i class="las la-arrow-left"></i>
        </nuxt-link>
        <span>Flavor</span>
      </div>
      <div class="col-2 d-flex align-items-center">
        <span>2/8</span>
      </div>
      <div class="col-5 text-end">
        <span>Icing</span>
        <nuxt-link
          tag="button"
          class="btn btn-dark navigation py-2"
          to="/customize/icing"
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
      fillings: [
        {
          id: 1,
          image: null,
          icon: "/images/customization/filling_options/001.png",
          value: "No Selection"
        },
        {
          id: 2,
          image: "/images/customization/fillings/002.png",
          icon: "/images/customization/filling_options/002.png",
          value: "Strawberry"
        },
        {
          id: 3,
          image: "/images/customization/fillings/003.png",
          icon: "/images/customization/filling_options/003.png",
          value: "Bavarian creme"
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
    setFilling(option) {
      this.$store.commit("customize/set", { component: "filling", option });
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
</style>
