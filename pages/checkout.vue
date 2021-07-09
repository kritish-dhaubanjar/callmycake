<template>
  <main>
    <section class="bg-light">
      <div class="container py-5">
        <div class="row my-3">
          <div class="col-12">
            <h1 class="mb-0">CHECKOUT</h1>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-6">
            <form @submit.prevent="placeOrder">
              <h3>
                BILLING DETAILS
              </h3>
              <div class="row mt-4">
                <div class="col-6">
                  <div
                    class="card p-3 text-center "
                    :class="{ selected: order.delivery }"
                    @click="order.delivery = true"
                  >
                    <i class="las la-shipping-fast la-4x"></i>
                    <p class="mb-0">Delivery</p>
                  </div>
                </div>
                <div class="col-6">
                  <div
                    class="card p-3 text-center"
                    :class="{ selected: !order.delivery }"
                    @click="order.delivery = false"
                  >
                    <i class="las la-shopping-bag la-4x"></i>
                    <p class="mb-0">Pick Up</p>
                  </div>
                </div>
              </div>

              <div class="row mt-4">
                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label">Receiver's Name *</label>
                    <input
                      type="text"
                      class="form-control py-2"
                      v-model="order.name"
                      placeholder="eg: Jane Doe"
                      required
                    />
                  </div>
                </div>

                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label">Receiver's Email</label>
                    <input
                      type="email"
                      class="form-control py-2"
                      v-model="order.email"
                      placeholder="eg: janedoe@example.org"
                    />
                  </div>
                </div>

                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label">Phone Number *</label>
                    <input
                      type="text"
                      class="form-control py-2"
                      v-model="order.phone"
                      required
                      placeholder="eg: +977 987654321"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label">Receiver's Address *</label>
                    <input
                      type="text"
                      class="form-control py-2"
                      v-model="order.address"
                      required
                      placeholder="eg: Koteshwor-32, Kathmandu"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label">Location *</label>

                    <select
                      :disabled="!order.delivery"
                      class="form-select py-2"
                      v-model="order.location"
                      :required="order.delivery"
                    >
                      <option selected disabled value=""
                        >Select Location</option
                      >
                      <option value="Inside Ringroad">Inside Ringroad</option>
                      <option
                        value="Outside Ringroad [Delivery Charge Applicable]"
                        >Outside Ringroad [Delivery Charge Applicable]</option
                      >
                    </select>
                  </div>
                </div>
                <div class="col-6">
                  <div class="mb-3">
                    <label class="form-label">Date *</label>
                    <input
                      type="date"
                      class="form-control py-2"
                      v-model="order.date"
                      required
                    />
                  </div>
                </div>
                <div class="col-6">
                  <div class="mb-3">
                    <label class="form-label">Time *</label>
                    <input
                      type="time"
                      class="form-control py-2"
                      v-model="order.time"
                      required
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-3">
                    <label class="form-label">Order Notes</label>
                    <textarea
                      v-model="order.notes"
                      class="form-control py-2"
                      rows="4"
                      placeholder="Special Preference, Sender Details (or others)"
                    />
                  </div>
                </div>

                <div class="col-12 pt-4">
                  <button class="btn btn-dark px-4 py-3" type="submit" :disabled="$store.state.isLoading">
                    PLACE ORDER
                    <Loader v-if="$store.state.isLoading" />
                  </button>
                </div>
              </div>
            </form>
          </div>
          <!--  -->

          <div class="col-lg-6 pt-5 mt-2">
            <iframe
              class="d-block"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.397813013546!2d85.34563879165013!3d27.674097051585925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19368d93793d%3A0x6d5df4b96d26999!2sCall%20My%20Cake!5e0!3m2!1sen!2snp!4v1625646316491!5m2!1sen!2snp"
              width="100%"
              height="700"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Swal from "sweetalert2";
import Loader from "@/components/UI/Loader";

export default {
  middleware: ["hasItem"],

  head() {
    return {
      title: "CallMyCake | CheckOut"
    };
  },

  data() {
    return {
      order: {
        delivery: true,
        name: "",
        email: "",
        phone: "",
        address: "",
        location: "",
        date: new Date().toISOString().slice(0, 10),
        time: new Date().toISOString().slice(11, ),
        notes: ""
      }
    };
  },

  methods: {
    placeOrder() {
      //
      const items = this.$store.getters.cart.map(el => {
        return {
          "field": {
            "type": "set",
            "label": "item",
            "display": "$value",
            "options": {
              "display": "{qty} x {item_title} [ {variant}, {egg_eggless} ]",
              "fields": [
                {
                  "type": "text",
                  "name": "item_title",
                  "label": "Item",
                  "display": "$value"
                },
                {
                  "type": "text",
                  "name": "qty",
                  "label": "Qty",
                  "display": "$value",
                  "options": {
                    "type": "number"
                  }
                },
                {
                  "type": "text",
                  "name": "variant",
                  "label": "Variant",
                  "display": "$value"
                },
                {
                  "type": "text",
                  "name": "addons",
                  "label": "Addons",
                  "display": "$value"
                },
                {
                  "type": "text",
                  "name": "egg_eggless",
                  "label": "Egg or Eggless",
                  "display": "$value"
                },
                {
                  "type": "textarea",
                  "name": "message",
                  "label": "Message",
                  "display": "$value"
                },
                {
                  "type": "collectionlink",
                  "name": "cake",
                  "label": "Cake",
                  "display": "$value",
                  "options": {
                    "link": "cakes",
                    "display": "title",
                    "multiple": false,
                    "limit": false
                  }
                }
              ]
            }
          },
          value: {
            item_title: el.title,
            qty: el.qty,
            variant: el.variant_selected,
            addons: el.addons_selected ? el.addons_selected.map(el => el.name).join(', ') : '',
            egg_eggless: el.hasEgg ? 'Egg' : 'Eggless',
            message: el.message,
            cake: {
              _id: el._id,
              link: 'cakes',
              display: el.title,
            }
          }
        }
      });

      let orderData = null;
      if(this.$store.getters.discountCoupon) {
        let discountCoupon = {
          _id: this.$store.getters.discountCoupon._id,
          link: 'coupons',
          display: 'code',
        };
        orderData = {
          ... this.order,
          delivery: this.order.delivery ? 'Delivery' : 'PickUp',
          items: items,
          coupon: discountCoupon,
        }
      } else  {
        orderData = {
          ... this.order,
          delivery: this.order.delivery ? 'Delivery' : 'PickUp',
          items: items,
        }
      }

      this.$store.commit('setIsLoading', true);
      this.$axios
        .post('api/collections/save/orders', { data: orderData })
        .then(({ data }) => {
          //
          let formData = new FormData();
          formData.append('order_id', data._id);
          this.$axios
            .post('api/public/updateprice', formData)
            .then(res => {})
            .finally(res => {
              this.$store.commit('resetDiscountCoupon');
              Swal.fire({
                icon: "success",
                title: "Success",
                text:
                  "Your order has been placed successfully ! We will reach out to you shortly."
                // footer: "<a href>Why do I have this issue?</a>"
              }).then(() => {
                this.$store.commit("checkout");
                this.$router.replace("/");
              });
            });
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          this.$store.commit('setIsLoading', false);
        });
    }
  },

  components: {
    Loader,
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";
button {
  outline: none !important;
  box-shadow: none !important;
}

.btn-dark {
  font-size: 14px;
  font-weight: bold;
  border-radius: 0 !important;
  letter-spacing: 2px;
}

input,
select,
textarea {
  resize: none;
  border-radius: 0;
  outline: none !important;
  box-shadow: none !important;
  border-color: rgb(229, 229, 229);
  &:focus,
  &:active {
    background-color: #f7f7f7;
    border-color: rgb(229, 229, 229);
  }
}

label {
  color: #444;
  font-weight: 500;
}

.card {
  color: #e3e3e3;
  border-width: 2px;
  &:hover {
    cursor: pointer;
  }
  &.selected {
    color: $primary;
    border-color: $primary;
  }
}

input,
textarea {
  color: #000;
  font-weight: 500;
  border-width: 2px;

  &:active,
  &:focus {
    border-color: $primary;
  }
}

input::placeholder,
textarea::placeholder {
  color: #d1d1d1;
}
</style>
