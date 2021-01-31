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
                    <th scope="col"></th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <!--  -->
                  <tr v-if="cakes.length == 0">
                    <td colspan="5" class="text-center py-5">
                      <h4 class="py-5 my-5">No items in you cart!</h4>
                    </td>
                  </tr>
                  <!--  -->
                  <tr v-for="cake in cakes" :key="cake.id">
                    <th scope="row" class="py-5">
                      <i class="las la-times la-1x" @click="del(cake)" />
                    </th>
                    <td class="py-4">
                      <img
                        src="https://via.placeholder.com/64x64"
                        class="img-fluid me-2"
                      />
                      {{ cake.title }}
                    </td>
                    <td class="py-5">{{ npr(cake.price) }}</td>
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
                          class="form-control text-center"
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
                    <td class="py-5">{{ npr(cake.price * cake.qty) }}</td>
                  </tr>

                  <tr>
                    <th scope="col" class="py-4"></th>
                    <th scope="col" class="py-4"></th>
                    <th scope="col" class="py-4"></th>
                    <th scope="col" class="py-4">Total</th>
                    <th scope="col" class="py-4">{{ npr(total) }}</th>
                  </tr>
                </tbody>
              </table>
            </div>
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
input {
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
</style>
