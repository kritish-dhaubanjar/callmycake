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
                        :src="cake.image ? `${$axios.defaults.baseURL}${cake.image.path}`:'/images/modal_cake.jpg'"
                        height="64"
                        width="64"
                        class="img-fluid me-2"
                      />
                    </td>
                    <td class="py-5">
                      {{ cake.title }}
                      <p>
                      <span class="badge badge-success bg-danger">{{cake.variant_selected}}</span>
                      <span class="badge badge-success bg-danger">{{ !cake.hasEgg ? 'Eggless': '' }}</span>
                      <br/>
                      <span v-for="(a,i) in cake.addons_selected"class="badge badge-success bg-secondary me-1" :key="i">{{ a.name }}</span>
                      </p>
                    </td>
                    <td class="py-5">
                      <h6>{{ $utils.npr(cake.price) }}</h6>
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
                      <h6>{{ $utils.npr(cake.price * cake.qty) }}</h6>
                    </td>
                  </tr>

                  <tr class="total">
                    <th scope="col" class="py-4"></th>
                    <th scope="col" class="py-4"></th>
                    <th scope="col" class="py-4"></th>
                    <th scope="col" class="py-4">
                      Total <br/>
                      Discount <br/>
                      Grand Total
                    </th>
                    <th scope="col" class="py-4">
                      NPR {{ $utils.npr(total) }}
                      <div v-if="discountCoupon.value" class="discount"> 
                        -{{ discountCoupon.discount_type == 'Percentage' ? `${discountCoupon.value}%` : `NPR ${discountCoupon.value}`}}
                      </div>
                      <div v-else>0</div>
                      NPR {{ $utils.npr(grandTotal) }}
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
            <div class="mb-1 coupon-code d-flex">
              <input
                type="text"
                class="form-control py-2"
                placeholder="eg: AIYPWZQP"
                v-model="coupon_code"
                :style="`border-color: ${coupon_code_input_border_color}`"
                :disabled="discountCoupon.value"
              />
              <button class="btn btn-dark px-4 py-2 ms-1" @click="applyCouponCode()" :disabled="discountCoupon.value">
                APPLY
              </button>
            </div>
            <div v-if="message" class="" v-html="message"></div>
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

export default {
  head() {
    return {
      title: "CallMyCake | Cart"
    };
  },

  data() {
    return {
      coupon_code: '',
      message: '',
      coupon_code_input_border_color: '#ced4da',
    }
  },

  mounted() {
    if(this.$store.getters.discountCoupon.value) {
      this.coupon_code = this.$store.getters.discountCoupon.code;
      this.message = `<strong class="text-success">Yay! The coupon was applied successfully.</strong>`;
    }
  },

  computed: {
    discountCoupon() {
      return this.$store.getters.discountCoupon;
    },

    cakes() {
      return this.$store.getters.cart;
    },

    total() {
      return this.cakes.reduce((acc, cake, index) => {
        return acc + cake.qty * cake.price;
      }, 0);
    },

    grandTotal() {
      let total = this.cakes.reduce((acc, cake, index) => {
        return acc + cake.qty * cake.price;
      }, 0);

      if(!this.discountCoupon.value) return total;

      const discount_amount = this.discountCoupon.discount_type=='Percentage'
        ? (parseFloat(this.discountCoupon.value)/100) * total
        : this.discountCoupon.value;

      return String(total - discount_amount);
    }
  },

  methods: {

    del(cake) {
      this.$store.commit("del", cake);
    },

    inc(cake) {
      this.$store.commit("inc", cake);
    },

    dec(cake) {
      this.$store.commit("dec", cake);
    },

    applyCouponCode() {
      if(this.coupon_code == '') return;
      let formData = new FormData();
      formData.append('coupon_code', this.coupon_code);
      this.$axios.
        post('api/public/checkcoupon', formData)
        .then(({ data }) => {
          if(data.status == 'success') {
            this.coupon_code_input_border_color = 'green';
            this.$store.commit('setDiscountCoupon', data.coupon);
          }
          else {
            this.coupon_code_input_border_color = 'red';
            this.$store.commit('resetDiscountCoupon');
          }
          this.message = data.message;
        })
        .catch(err => console.log(err));
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
