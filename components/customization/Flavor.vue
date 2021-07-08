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
      <div class="col-5">
        <nuxt-link
          to="/customize/type"
          tag="button"
          class="btn navigation py-2"
        >
          <i class="las la-arrow-left"></i>
        </nuxt-link>
        <span>Type</span>
      </div>
      <div class="col-2 d-flex align-items-center">
        <span>2/9</span>
      </div>
      <div class="col-5 text-end">
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
        // {
        //   id: 1,
        //   image: "/images/customization/flavors/<type>/001.png",
        //   icon: "/images/customization/flavor_options/001.png",
        //   value: "Top: White/Bottom: White",
        //   rate: 0
        // },
        // {
        //   id: 2,
        //   image: "/images/customization/flavors/<type>/002.png",
        //   icon: "/images/customization/flavor_options/002.png",
        //   value: "Top: Chocolate/Bottom: Chocolate",
        //   rate: 150
        // },
        // {
        //   id: 3,
        //   image: "/images/customization/flavors/<type>/003.png",
        //   icon: "/images/customization/flavor_options/003.png",
        //   value: "Top: White/Bottom: Chocolate"
        // },
        // {
        //   id: 4,
        //   image: "/images/customization/flavors/<type>/004.png",
        //   icon: "/images/customization/flavor_options/004.png",
        //   value: "Top: Chocolate/Bottom: White"
        // },
        {
          id: 5,
          image: "/images/customization/flavors/<type>/005.png",
          icon: "/images/customization/flavor_options/005.png",
          value: "Top: Red Velvet/Bottom: Red Velvet",
          rate: 400
        },
        {
          id: 6,
          image: "/images/customization/flavors/<type>/006.png",
          icon: "/images/customization/flavor_options/006.png",
          value: "Top: Black Forest/Bottom: Black Forest",
          rate: 0
        },
        {
          id: 7,
          image: "/images/customization/flavors/<type>/007.png",
          icon: "/images/customization/flavor_options/007.png",
          value: "Top: Blueberry/Bottom: Blueberry",
          rate: 100
        },
        {
          id: 8,
          image: "/images/customization/flavors/<type>/008.png",
          icon: "/images/customization/flavor_options/008.png",
          value: "Top: Butter Scotch/Bottom: Butter Scotch",
          rate: 100
        },
        {
          id: 9,
          image: "/images/customization/flavors/<type>/009.png",
          icon: "/images/customization/flavor_options/009.png",
          value: "Top: Chocolate/Bottom: Chocolate",
          rate: 150
        },
        {
          id: 10,
          image: "/images/customization/flavors/<type>/010.png",
          icon: "/images/customization/flavor_options/010.png",
          value: "Top: Chocolate Truffel/Bottom: Chocolate Truffel",
          rate: 400
        },
        {
          id: 11,
          image: "/images/customization/flavors/<type>/011.png",
          icon: "/images/customization/flavor_options/011.png",
          value: "Top: Mocha/Bottom: Mocha",
          rate: 200
        },
        {
          id: 12,
          image: "/images/customization/flavors/<type>/012.png",
          icon: "/images/customization/flavor_options/012.png",
          value: "Top: Oreo/Bottom: Oreo",
          rate: 200
        },
        {
          id: 13,
          image: "/images/customization/flavors/<type>/013.png",
          icon: "/images/customization/flavor_options/013.png",
          value: "Top: Vanilla/Bottom: Vanilla",
          rate: 0
        },
        {
          id: 14,
          image: "/images/customization/flavors/<type>/014.png",
          icon: "/images/customization/flavor_options/014.png",
          value: "Top: White Chocolate/Bottom: White Chocolate",
          rate: 300
        },
        {
          id: 15,
          image: "/images/customization/flavors/<type>/015.png",
          icon: "/images/customization/flavor_options/015.png",
          value: "Top: White Forest/Bottom: White Forest",
          rate: 0
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
