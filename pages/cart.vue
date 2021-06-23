<template>
  <main>
    <section class="bg-light">
      <div class="container py-5 ">
        <div class="row my-3">
          <div class="col-12">
            <h1 class="mb-0">CART</h1>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="container py-5">
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Preview</th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Action</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <!--  -->
                  <tr v-if="cakes.length == 0">
                    <td colspan="5" class="text-center py-5">
                      <h4 class="py-5 my-5">
                        No items in you cart!<br />
                        <nuxt-link
                          to="/"
                          tag="button"
                          class="btn btn-detail mt-4"
                        >
                          Continue Shopping
                        </nuxt-link>
                      </h4>
                    </td>
                  </tr>
                  <!--  -->
                  <tr v-for="cake in cakes" :key="cake.id">
                    <td class="py-4">
                      <img
                        src="https://via.placeholder.com/64x64"
                        class="img-fluid me-2"
                      />
                    </td>
                    <td class="py-5">
                      {{ cake.title }}
                    </td>
                    <td class="py-5">
                      <h6>{{ npr(cake.price) }}</h6>
                    </td>
                    <td class="py-5">
                      <div class="input-group">
                        <button
                          class="btn btn-outline-secondary btn-sm"
                          type="button"
                          @click="inc(cake)"
                        >
                          <i class="las la-plus" />
                        </button>
                        <input
                          type="text"
                          class="form-control text-center h-100"
                          :placeholder="cake.qty"
                          disabled
                        />
                        <button
                          class="btn btn-outline-secondary btn-sm"
                          type="button"
                          @click="dec(cake)"
                        >
                          <i class="las la-minus" />
                        </button>
                      </div>
                    </td>
                    <td scope="row" class="py-5">
                      <i class="las la-times la-1x" @click="del(cake)" />
                    </td>
                    <td class="py-5">
                      <h6>{{ npr(cake.price * cake.qty) }}</h6>
                    </td>
                  </tr>

                  <tr class="total">
                    <th scope="col" class="py-4"></th>
                    <th scope="col" class="py-4"></th>
                    <th scope="col" class="py-4"></th>
                    <th scope="col" class="py-4"></th>
                    <th scope="col" class="py-4">
                      Total<br />Discount<br />Grand Total
                    </th>
                    <th scope="col" class="py-4">
                      {{ npr(total) }}<br />
                      15% <br />
                      {{ npr(total) }}
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-12">
            <label class="mb-3 fw-bold">COUPON CODE</label>
            <div class="mb-3 coupon-code d-flex">
              <input
                type="text"
                class="form-control py-2"
                placeholder="eg: AIYPWZQP"
              />
              <button class="btn btn-dark px-4 py-2 ms-1">APPLY</button>
            </div>

            <strong class="text-danger"
              >Whoops, the coupon appears to be out of date. Contact
              Support.</strong
            ><br />

            <strong class="text-danger"
              >Whoops, the coupon appears to be invalid. Contact
              Support.</strong
            ><br />

            <strong class="text-success"
              >Yay! The coupon was applied successfully.</strong
            >
          </div>
        </div>

        <div class="row py-5">
          <div class="col-12">
            <nuxt-link
              to="/checkout"
              tag="button"
              class="btn btn-dark px-4 py-3"
              :disabled="cakes.length == 0"
            >
              PROCEED TO CHECKOUT
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
let formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR"
});

export default {
  head() {
    return {
      title: "CallMyCake | Cart"
    };
  },

  computed: {
    cakes() {
      return this.$store.getters.cart;
    },

    total() {
      return this.cakes.reduce((acc, cake, index) => {
        return acc + cake.qty * cake.price;
      }, 0);
    }
  },

  methods: {
    npr(price) {
      return formatter.format(price);
    },

    del(cake) {
      this.$store.commit("del", cake);
    },

    inc(cake) {
      this.$store.commit("inc", cake);
    },

    dec(cake) {
      this.$store.commit("dec", cake);
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";

.input-group input {
  max-width: 48px !important;
  height: 28px;
}

button {
  outline: none !important;
  box-shadow: none !important;
}

th {
  &:nth-child(1) {
    min-width: 32px;
  }
  &:nth-child(2) {
    min-width: 200px;
  }
  &:nth-child(3) {
    min-width: 128px;
  }
  &:nth-child(4) {
    min-width: 128px;
  }
  &:nth-child(5) {
    min-width: 128px;
  }
}

.btn-dark {
  font-size: 14px;
  font-weight: bold;
  border-radius: 0 !important;
  letter-spacing: 2px;
}

i {
  cursor: pointer;
}

.btn-detail {
  background-color: #ee6f7c;
  border: 2px solid #ee6f7c;
  color: #fff;
  font-weight: bold;
  box-shadow: none !important;
  outline: none !important;
}

.coupon-code {
  input {
    color: #000;
    font-weight: 500;
    border-width: 2px;
    box-shadow: none;
    height: 39px;
    max-width: 200px;
    border-radius: 0;

    &:active,
    &:focus {
      border-color: $primary;
    }
  }
}

.total {
  line-height: 250%;
}
</style>
