<template>
  <div class="card mb-4 shadow-sm">
    <img src="/images/cake_sample.jpg" class="card-img-top" />
    <div class="card-body text-center">
      <h6 class="card-title">Choc-Honeycomb Ice-Cream Cake</h6>
      <p class="card-text price fw-bold">
        NPR 2,000.00
      </p>
      <div class="options">
        <button class="btn btn-success" @click="addToCart">
          <!-- 
        data-bs-toggle="modal"
        data-bs-target="#addtocart"
       -->
          <i class="las la-plus" />
        </button>
        <button
          @click="setDetailCake"
          tag="button"
          class="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#detail"
        >
          <i class="las la-search" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["_cake"],

  data() {
    return {
      cake: {
        id: "6016607b5bd73b00122003b6",
        title: "Choc-Honeycomb Ice-Cream Cake",
        price: 2000,
        image: "http://127.0.0.1:3000/images/cake_sample.jpg"
      }
    };
  },

  created() {
    this.cake.title += this._cake;
  },

  methods: {
    addToCart() {
      this.$store.commit("add", this.cake);
    },

    setDetailCake() {
      this.$store.commit("setDetailCake", this.cake);
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";
.card {
  h6 {
    color: #666666;
  }
  .price {
    color: $primary;
  }

  border-color: rgba(0, 0, 0, 0) !important;

  position: relative;

  &:hover {
    .options {
      opacity: 1;
      transition: 256ms;
    }
  }
  .options {
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    transition: 256ms;
    background-color: $primary;
    border: 2px solid $primary;
    border-radius: 0;
    color: #fff;
    font-weight: bold;
    box-shadow: none !important;
    outline: none !important;
    height: 40px;
    margin: 4px;
  }
}
</style>
