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
        <span>3/8</span>
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
          image: "/images/customization/icings/001.png",
          icon: "#fff",
          value: "White"
        },
        {
          id: 2,
          image: "/images/customization/icings/002.png",
          icon: "#f8e2db",
          value: "Light Pink"
        },
        {
          id: 3,
          image: "/images/customization/icings/003.png",
          icon: "#fe64a1",
          value: "Pink"
        },
        {
          id: 4,
          image: "/images/customization/icings/004.png",
          icon: "#ff6225",
          value: "Red"
        },
        {
          id: 5,
          image: "/images/customization/icings/005.png",
          icon: "#ff6225",
          value: "Orange"
        },
        {
          id: 6,
          image: "/images/customization/icings/006.png",
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
