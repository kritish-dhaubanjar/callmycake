<template>
  <section>
    <h5 class="mb-3">Top Border</h5>

    <div>
      <button
        class="btn btn-light"
        @click="setTopBorderType('beads')"
        :class="{ active: cake.topBorder.type === 'beads' }"
      >
        <img
          src="/images/customization/topBorders/beads.png"
          width="40"
          class="img-fluid p-0"
        />
      </button>
      <button
        class="btn btn-light"
        @click="setTopBorderType('shells')"
        :class="{ active: cake.topBorder.type === 'shells' }"
      >
        <img
          src="/images/customization/topBorders/shells.png"
          width="40"
          class="img-fluid p-0"
        />
      </button>
    </div>

    <ul class="p-0 mt-3">
      <li
        v-for="option in type == 'shells' ? shellBorders : beadBorders"
        :key="option.value"
        :class="{ selected: cake.topBorder.id === option.id }"
        @click="setTopBorder(option)"
        class="me-1"
      >
        <div v-if="option.id === 0" :style="`background-color: ${option.icon}`">
          <i class="las la-times la-2x  position-absolute mt-1 ms-1" />
        </div>
        <div v-else :style="`background-color: ${option.icon}`" />
      </li>
    </ul>

    <span class="fw-bold">Seleted Color: </span
    ><span>{{ cake.topBorder.value }}</span>
    <hr />

    <div class="row">
      <div class="col-5">
        <nuxt-link
          tag="button"
          class="btn btn-light navigation py-2"
          to="/customize/icing"
        >
          <i class="las la-arrow-left"></i>
        </nuxt-link>
        <span>Icing</span>
      </div>
      <div class="col-2 d-flex align-items-center">
        <span>4/8</span>
      </div>
      <div class="col-5 text-end">
        <span>Bottom Border</span>
        <nuxt-link
          tag="button"
          class="btn btn-dark navigation py-2"
          to="/customize/bottomBorder"
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
      type: "shells",
      shellBorders: [
        {
          id: 0,
          image: null,
          type: "shells",
          icon: "#fff",
          value: "None"
        },
        {
          id: 1,
          image: "/images/customization/topBorders/shells/001.png",
          type: "shells",
          icon: "#fff",
          value: "White"
        },
        {
          id: 2,
          image: "/images/customization/topBorders/shells/002.png",
          type: "shells",
          icon: "#f8e2db",
          value: "Light Pink"
        },
        {
          id: 3,
          image: "/images/customization/topBorders/shells/003.png",
          type: "shells",
          icon: "#fe64a1",
          value: "Pink"
        },
        {
          id: 4,
          image: "/images/customization/topBorders/shells/004.png",
          type: "shells",
          icon: "#ff6225",
          value: "Red"
        },
        {
          id: 5,
          image: "/images/customization/topBorders/shells/005.png",
          type: "shells",
          icon: "#ff6225",
          value: "Orange"
        },
        {
          id: 6,
          image: "/images/customization/topBorders/shells/006.png",
          type: "shells",
          icon: "#ffd802",
          value: "Yellow"
        }
      ],

      beadBorders: [
        {
          id: 0,
          image: null,
          icon: "#fff",
          type: "beads",
          value: "None"
        },
        {
          id: 1,
          image: "/images/customization/topBorders/beads/001.png",
          type: "beads",
          icon: "#fff",
          value: "White"
        },
        {
          id: 2,
          image: "/images/customization/topBorders/beads/002.png",
          icon: "#f8e2db",
          type: "beads",
          value: "Light Pink"
        },
        {
          id: 3,
          image: "/images/customization/topBorders/beads/003.png",
          type: "beads",
          icon: "#fe64a1",
          value: "Pink"
        },
        {
          id: 4,
          image: "/images/customization/topBorders/beads/004.png",
          type: "beads",
          icon: "#ff6225",
          value: "Red"
        },
        {
          id: 5,
          image: "/images/customization/topBorders/beads/005.png",
          type: "beads",
          icon: "#ff6225",
          value: "Orange"
        },
        {
          id: 6,
          image: "/images/customization/topBorders/beads/006.png",
          type: "beads",
          icon: "#ffd802",
          value: "Yellow"
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
    setTopBorder(option) {
      option.type = this.type;
      this.$store.commit("customize/set", { component: "topBorder", option });
    },

    setTopBorderType(type) {
      this.type = type;

      const topBorder =
        type === "shells"
          ? this.shellBorders.find(e => e.id === this.cake.topBorder.id)
          : this.beadBorders.find(e => e.id === this.cake.topBorder.id);

      this.setTopBorder(topBorder);
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

button {
  border: 2px solid #fff;
  box-shadow: none !important;
  outline: none !important;
  &.active {
    border: 2px solid #000;
  }
}
</style>
