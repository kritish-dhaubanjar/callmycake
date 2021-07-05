<template>
  <section>
    <h5 class="mb-3">Icing</h5>

    <ul class="p-0">
      <li
        v-for="option in icings"
        :key="option.value"
        :class="{ selected: cake.icing.id === option.id }"
        @click="setIcing(option)"
        class="me-1"
      >
        <div :style="`background-color: ${option.icon}`"></div>
      </li>
    </ul>

    <span class="fw-bold">Seleted Color: </span
    ><span>{{ cake.icing.value }}</span>
    <hr />

    <div class="row">
      <div class="col-5">
        <nuxt-link
          tag="button"
          class="btn btn-light navigation py-2"
          to="/customize/filling"
        >
          <i class="las la-arrow-left"></i>
        </nuxt-link>
        <span>Filling</span>
      </div>
      <div class="col-2 d-flex align-items-center">
        <span>4/9</span>
      </div>
      <div class="col-5 text-end">
        <span>Top Border</span>
        <nuxt-link
          tag="button"
          class="btn btn-dark navigation py-2"
          to="/customize/topBorder"
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
      icings: [
        {
          id: 1,
          image: "/images/customization/icings/<type>/001.png",
          icon: "#fff",
          value: "White"
        },
        {
          id: 2,
          image: "/images/customization/icings/<type>/002.png",
          icon: "#f8e2db",
          value: "Light Pink"
        },
        {
          id: 3,
          image: "/images/customization/icings/<type>/003.png",
          icon: "#fe64a1",
          value: "Pink"
        },
        {
          id: 4,
          image: "/images/customization/icings/<type>/004.png",
          icon: "#c22b38",
          value: "Red"
        },
        {
          id: 5,
          image: "/images/customization/icings/<type>/005.png",
          icon: "#ff6225",
          value: "Orange"
        },
        {
          id: 6,
          image: "/images/customization/icings/<type>/006.png",
          icon: "#ffd802",
          value: "Yellow"
        },
        {
          id: 7,
          image: "/images/customization/icings/<type>/007.png",
          icon: "#90dae5",
          value: "Light Blue"
        },
        {
          id: 8,
          image: "/images/customization/icings/<type>/008.png",
          icon: "#0254bb",
          value: "Royal Blue"
        },
        {
          id: 9,
          image: "/images/customization/icings/<type>/009.png",
          icon: "#6d419c",
          value: "Purple"
        },
        {
          id: 10,
          image: "/images/customization/icings/<type>/010.png",
          icon: "#098a1d",
          value: "Green"
        },
        {
          id: 11,
          image: "/images/customization/icings/<type>/011.png",
          icon: "#a6cd4e",
          value: "Bright Green"
        },
        {
          id: 12,
          image: "/images/customization/icings/<type>/012.png",
          icon: "#07a99c",
          value: "Teal"
        },
        {
          id: 13,
          image: "/images/customization/icings/<type>/013.png",
          icon: "#1c1b16",
          value: "Black"
        },
        {
          id: 14,
          image: "/images/customization/icings/<type>/014.png",
          icon: "#c0b8ab",
          value: "Grey"
        },
        {
          id: 15,
          image: "/images/customization/icings/<type>/015.png",
          icon: "#663a2f",
          value: "Chocolate"
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
    setIcing(option) {
      this.$store.commit("customize/set", { component: "icing", option });
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
</style>
