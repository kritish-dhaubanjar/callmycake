<template>
  <div class="card mb-4 shadow-sm">
    <img :src="cake.image ? `${$axios.defaults.baseURL}${cake.image.path}`:'/images/modal_cake.jpg'" class="card-img-top" />
    <div class="card-body text-center">
      <p class="sale fw-bold" v-if="cake.discounted_price">SALE</p>
      <h6 class="card-title">{{ cake.title }}</h6>
      <p class="card-text price fw-bold">
        <span v-if="cake.discounted_price" class="text-decoration-line-through text-muted"
          >NPR {{ $utils.npr(parseFloat(cake.price) * parseFloat(cake.variants[0])) }}</span
        >
        NPR {{ cake.discounted_price ? $utils.npr(parseFloat(cake.discounted_price) * parseFloat(cake.variants[0])) : $utils.npr(parseFloat(cake.price) * parseFloat(cake.variants[0])) }}
      </p>
      <div class="options">
        <!-- <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#detail" @click="setDetailCake">
          
        data-bs-toggle="modal"
        data-bs-target="#addtocart"
      
          <i class="las la-plus" />
        </button> -->
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
      <button
        @click="setDetailCake"
        tag="button"
        class="btn btn-primary btn-sm showDetails"
        data-bs-toggle="modal"
        data-bs-target="#detail"
      >
        <i class="las la-plus" /> Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["_cake"],

  data() {
    const sale = Math.random() > 0.5;

    return {
      cake: {
        ...this._cake,
        // id: "6016607b5bd73b00122003b6",
        // title: "Choc-Honeycomb Ice-Cream Cake",
        // price: 2000,
        // oldPrice: sale ? 1800 : 2000,
        // image: "/images/cake_sample.jpg",
        // sale: sale
      }
    };
  },

  created() {
    // this.cake.title += this._cake;
  },

  methods: {
    // addToCart() {
    //   this.$store.commit("add", this.cake);
    // },

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
    bottom: 60px;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .options button {
    transition: 256ms;
    background-color: $primary;
    border: 2px solid $primary;
    border-radius: 100%;
    color: #fff;
    font-weight: bold;
    box-shadow: none !important;
    outline: none !important;
    height: 40px;
    margin: 4px;
  }
}

.sale {
  position: absolute;
  right: 0;
  top: 24px;
  transform: rotate(270deg);
}

.showDetails {
  background-color: $primary;
  color: #fff;
  border: 2px solid $primary;
  box-shadow: none !important;
  outline: none !important;
  border-radius: 50em;
}
</style>
