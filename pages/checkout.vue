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
                      v-model="order.datetime"
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
                      v-model="order.datetime"
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
                  <button class="btn btn-dark px-4 py-3" type="submit">
                    PLACE ORDER
                  </button>
                </div>
              </div>
            </form>
          </div>
          <!--  -->

          <div class="col-lg-6 pt-5 mt-2">
            <iframe
              class="d-block"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14133.97620191589!2d85.3358764197754!3d27.67112124999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1612086926922!5m2!1sen!2snp"
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

export default {
  middleware: ["hasItem"],

  data() {
    return {
      order: {
        delivery: true,
        name: "",
        email: "",
        phone: "",
        address: "",
        location: "",
        datetime: new Date().toISOString().slice(0, 16),
        notes: ""
      }
    };
  },

  methods: {
    placeOrder() {
      Swal.fire({
        icon: "success",
        title: "Success",
        text:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae eum vero ipsum nostrum mollitia! Aut eum ab unde asperiores rerum minima aliquid ipsum repudiandae recusandae ut quae, nostrum sequi quis?"
        // footer: "<a href>Why do I have this issue?</a>"
      }).then(() => {
        this.$store.commit("checkout");
        this.$router.replace("/");
      });
    }
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
