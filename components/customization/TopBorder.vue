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
        <span>5/9</span>
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
          image: "/images/customization/topBorders/<type>/shells/001.png",
          type: "shells",
          icon: "#fff",
          value: "White"
        },
        {
          id: 2,
          image: "/images/customization/topBorders/<type>/shells/002.png",
          type: "shells",
          icon: "#f8e2db",
          value: "Light Pink"
        },
        {
          id: 3,
          image: "/images/customization/topBorders/<type>/shells/003.png",
          type: "shells",
          icon: "#fe64a1",
          value: "Pink"
        },
        {
          id: 4,
          image: "/images/customization/topBorders/<type>/shells/004.png",
          type: "shells",
          icon: "#c22b38",
          value: "Red"
        },
        {
          id: 5,
          image: "/images/customization/topBorders/<type>/shells/005.png",
          type: "shells",
          icon: "#ff6225",
          value: "Orange"
        },
        {
          id: 6,
          image: "/images/customization/topBorders/<type>/shells/006.png",
          type: "shells",
          icon: "#ffd802",
          value: "Yellow"
        },
        {
          id: 7,
          image: "/images/customization/topBorders/<type>/shells/007.png",
          type: "shells",
          icon: "#90dae5",
          value: "Light Blue"
        },
        {
          id: 8,
          image: "/images/customization/topBorders/<type>/shells/008.png",
          type: "shells",
          icon: "#0254bb",
          value: "Royal Blue"
        },
        {
          id: 9,
          image: "/images/customization/topBorders/<type>/shells/009.png",
          type: "shells",
          icon: "#6d419c",
          value: "Purple"
        },
        {
          id: 10,
          image: "/images/customization/topBorders/<type>/shells/010.png",
          type: "shells",
          icon: "#098a1d",
          value: "Green"
        },
        {
          id: 11,
          image: "/images/customization/topBorders/<type>/shells/011.png",
          type: "shells",
          icon: "#a6cd4e",
          value: "Bright Green"
        },
        {
          id: 12,
          image: "/images/customization/topBorders/<type>/shells/012.png",
          type: "shells",
          icon: "#07a99c",
          value: "Teal"
        },
        {
          id: 13,
          image: "/images/customization/topBorders/<type>/shells/013.png",
          type: "shells",
          icon: "#1c1b16",
          value: "Black"
        },
        {
          id: 14,
          image: "/images/customization/topBorders/<type>/shells/014.png",
          type: "shells",
          icon: "#c0b8ab",
          value: "Grey"
        },
        {
          id: 15,
          image: "/images/customization/topBorders/<type>/shells/015.png",
          type: "shells",
          icon: "#663a2f",
          value: "Chocolate"
        }
      ],

      beadBorders: [
        {
          id: 0,
          image: null,
          type: "beads",
          icon: "#fff",
          value: "None"
        },
        {
          id: 1,
          image: "/images/customization/topBorders/<type>/beads/001.png",
          type: "beads",
          icon: "#fff",
          value: "White"
        },
        {
          id: 2,
          image: "/images/customization/topBorders/<type>/beads/002.png",
          type: "beads",
          icon: "#f8e2db",
          value: "Light Pink"
        },
        {
          id: 3,
          image: "/images/customization/topBorders/<type>/beads/003.png",
          type: "beads",
          icon: "#fe64a1",
          value: "Pink"
        },
        {
          id: 4,
          image: "/images/customization/topBorders/<type>/beads/004.png",
          type: "beads",
          icon: "#c22b38",
          value: "Red"
        },
        {
          id: 5,
          image: "/images/customization/topBorders/<type>/beads/005.png",
          type: "beads",
          icon: "#ff6225",
          value: "Orange"
        },
        {
          id: 6,
          image: "/images/customization/topBorders/<type>/beads/006.png",
          type: "beads",
          icon: "#ffd802",
          value: "Yellow"
        },
        {
          id: 7,
          image: "/images/customization/topBorders/<type>/beads/007.png",
          type: "beads",
          icon: "#90dae5",
          value: "Light Blue"
        },
        {
          id: 8,
          image: "/images/customization/topBorders/<type>/beads/008.png",
          type: "beads",
          icon: "#0254bb",
          value: "Royal Blue"
        },
        {
          id: 9,
          image: "/images/customization/topBorders/<type>/beads/009.png",
          type: "beads",
          icon: "#6d419c",
          value: "Purple"
        },
        {
          id: 10,
          image: "/images/customization/topBorders/<type>/beads/010.png",
          type: "beads",
          icon: "#098a1d",
          value: "Green"
        },
        {
          id: 11,
          image: "/images/customization/topBorders/<type>/beads/011.png",
          type: "beads",
          icon: "#a6cd4e",
          value: "Bright Green"
        },
        {
          id: 12,
          image: "/images/customization/topBorders/<type>/beads/012.png",
          type: "beads",
          icon: "#07a99c",
          value: "Teal"
        },
        {
          id: 13,
          image: "/images/customization/topBorders/<type>/beads/013.png",
          type: "beads",
          icon: "#1c1b16",
          value: "Black"
        },
        {
          id: 14,
          image: "/images/customization/topBorders/<type>/beads/014.png",
          type: "beads",
          icon: "#c0b8ab",
          value: "Grey"
        },
        {
          id: 15,
          image: "/images/customization/topBorders/<type>/beads/015.png",
          type: "beads",
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
