<template>
  <section>
    <h5 class="mb-3">Flavor</h5>

    <ul class="p-0">
      <li
        v-for="option in flavors"
        :key="option.value"
        :class="{ selected: cake.flavor.id === option.id }"
        @click="setFlavor(option)"
      >
        <div>
          <img :src="option.icon" class="img-fluid" width="40px" />
        </div>
        <span class="ms-3">{{ option.value }}</span>
      </li>
    </ul>

    <hr />
    <div class="row">
      <div class="col-6">
        <button class="btn btn-light navigation py-2">
          <i class="las la-arrow-left"></i>
        </button>
        <span>Size</span>
      </div>
      <div class="col-6 text-end">
        <span>Filling</span>
        <nuxt-link
          to="/customize/filling"
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
      flavors: [
        {
          id: 1,
          image: "/images/customization/flavors/001.png",
          icon: "/images/customization/flavor_options/001.png",
          value: "Top: White/Bottom: White"
        },
        {
          id: 2,
          image: "/images/customization/flavors/002.png",
          icon: "/images/customization/flavor_options/002.png",
          value: "Top: Chocolate/Bottom: Chocolate"
        },
        {
          id: 3,
          image: "/images/customization/flavors/003.png",
          icon: "/images/customization/flavor_options/003.png",
          value: "Top: White/Bottom: Chocolate"
        },
        {
          id: 4,
          image: "/images/customization/flavors/004.png",
          icon: "/images/customization/flavor_options/004.png",
          value: "Top: Chocolate/Bottom: White"
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
    setFlavor(option) {
      this.$store.commit("customize/set", { component: "flavor", option });
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
