<template>
  <section>
    <h5 class="mb-3">Flower</h5>

    <div>
      <button
        class="btn btn-light"
        @click="setFlowerType('openMums')"
        :class="{ active: cake.flower.type === 'openMums' }"
      >
        <img
          src="/images/customization/flower_options/openMums.png"
          width="40"
          class="img-fluid p-0"
        />
      </button>
      <button
        class="btn btn-light"
        @click="setFlowerType('closedMums')"
        :class="{ active: cake.flower.type === 'closedMums' }"
      >
        <img
          src="/images/customization/flower_options/closedMums.png"
          width="40"
          class="img-fluid p-0"
        />
      </button>
    </div>

    <ul class="p-0 mt-3">
      <li
        v-for="option in getFlowerOptions()"
        :key="option.value"
        :class="{ selected: cake.flower.id === option.id }"
        @click="setFlower(option)"
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
          to="/customize/bottomBorder"
        >
          <i class="las la-arrow-left"></i>
        </nuxt-link>
        <span>Bottom Border</span>
      </div>
      <div class="col-2 d-flex align-items-center">
        <span>6/8</span>
      </div>
      <div class="col-5 text-end">
        <span>Topping</span>
        <nuxt-link
          tag="button"
          class="btn btn-dark navigation py-2"
          to="/customize/topping"
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
      type: "openMums",
      openMums: [
        {
          id: 0,
          image: null,
          icon: "#fff",
          value: "None",
          type: "openMums"
        },
        {
          id: 1,
          image: "/images/customization/flowers/openMums/001.png",
          icon: "#fff",
          value: "White",
          type: "openMums"
        },
        {
          id: 2,
          image: "/images/customization/flowers/openMums/002.png",
          icon: "#f8e2db",
          value: "Light Pink",
          type: "openMums"
        },
        {
          id: 3,
          image: "/images/customization/flowers/openMums/003.png",
          icon: "#fe64a1",
          value: "Pink",
          type: "openMums"
        }
      ],

      closedMums: [
        {
          id: 0,
          image: null,
          icon: "#fff",
          value: "None",
          type: "closedMums"
        },
        {
          id: 1,
          image: "/images/customization/flowers/closedMums/001.png",
          icon: "#fff",
          value: "White",
          type: "closedMums"
        },
        {
          id: 2,
          image: "/images/customization/flowers/closedMums/002.png",
          icon: "#f8e2db",
          value: "Light Pink",
          type: "closedMums"
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
    getFlowerOptions() {
      switch (this.type) {
        case "openMums":
          return this.openMums;
        case "closedMums":
          return this.closedMums;
      }
    },

    setFlower(option) {
      option.type = this.type;
      this.$store.commit("customize/set", { component: "flower", option });
    },

    setFlowerType(type) {
      this.type = type;

      const flower = this.getFlowerOptions().find(
        e => e.id === this.cake.flower.id
      );

      this.setFlower(flower);
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
