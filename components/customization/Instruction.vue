<template>
  <section>
    <h5 class="mb-3">Instruction</h5>

    <div class="row mt-4">
      <div class="col-12">
        <div class="mb-3">
          <label class="form-label fw-bold mb-0">Message on Cake</label><br />
          <small>Handwritten message on icing. 50 charactes max.</small>
          <input
            type="text"
            class="form-control py-2 mt-3"
            v-model="instruction.message"
            placeholder="eg: Happy Birthday"
            required
          />
        </div>
      </div>

      <div class="col-12">
        <div class="mb-3">
          <label class="form-label fw-bold">Order Notes</label>
          <textarea
            v-model="instruction.notes"
            class="form-control py-2"
            rows="4"
            placeholder="Special Preference, Sender Details (or others)"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-5">
        <nuxt-link
          tag="button"
          class="btn btn-light navigation py-2"
          to="/customize/topping"
        >
          <i class="las la-arrow-left"></i>
        </nuxt-link>
        <span>Topping</span>
      </div>
      <div class="col-2 d-flex align-items-center">
        <span>10/10</span>
      </div>
      <div class="col-5 text-end">
        <span>Order</span>
        <button
          class="btn btn-dark navigation py-2"
          @click="$emit('addToCart')"
        >
          <i class="las la-arrow-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      instruction: {
        message: "",
        notes: ""
      }
    };
  },

  beforeDestroy() {
    this.setInstruction();
  },

  mounted() {
    this.instruction = { ...this.cake.instruction };
  },

  computed: {
    cake() {
      return this.$store.getters["customize/cake"];
    }
  },

  methods: {
    setInstruction() {
      this.$store.commit("customize/set", {
        component: "instruction",
        option: { ...this.instruction }
      });
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

input,
textarea {
  color: #000;
  font-weight: 500;
  border-width: 2px;
  box-shadow: none !important;
  outline: none !important;

  &:active,
  &:focus {
    border-color: $primary;
  }
}
</style>
