<template>
  <section>
    <div
      class="modal fade p-0"
      id="detail"
      tabindex="-1"
      aria-labelledby="detailLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="detailLabel">
              {{ $store.getters.detailcake.title }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <!--  -->
          <div class="modal-body px-0">
            <div class="text-center">
              <img src="/images/modal_cake.jpg" class="img-fluid" />
            </div>

            <div class="d-flex justify-content-between align-items-center px-4">
              <h5 class="cake price fw-bold">
                Anniversary Cake
              </h5>
              <h5 class="price">
                <span class="badge bg-danger">
                  <h5 class="mb-0">NRP 2,000.00</h5></span
                >
              </h5>
            </div>

            <div class="px-4 mt-3">
              <div class="row">
                <div class="col-12 col-sm-6 my-1">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <h6 class="cake mb-0">
                      Variants (in pounds)
                    </h6>
                  </div>
                  <small class="text-muted">Select one</small>
                  <div class="my-3 pounds">
                    <span class="badge selected p-2 mb-1">2 Pound</span>
                    <span class="badge bg-light text-dark p-2 mb-1"
                      >3 Pound</span
                    >
                    <span class="badge bg-light text-dark p-2 mb-1"
                      >4 Pound</span
                    >
                    <span class="badge bg-light text-dark p-2 mb-1"
                      >5 Pound</span
                    >
                    <span class="badge bg-light text-dark p-2 mb-1"
                      >6 Pound</span
                    >
                    <span class="badge bg-light text-dark p-2 mb-1"
                      >7 Pound</span
                    >
                  </div>
                </div>
                <div class="col-12 col-sm-6 my-1">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <h6 class="cake mb-0">
                      Variants (in pounds)
                    </h6>
                  </div>
                  <small class="text-muted">Select one</small>
                  <div class="my-3 pounds">
                    <span class="badge selected p-2">Egg</span>
                    <span class="badge bg-light text-dark p-2">Eggless</span>
                  </div>
                </div>
              </div>

              <!--  -->
              <br />

              <div class="d-flex justify-content-between align-items-center">
                <h6 class="cake mb-0">Add-Ons</h6>
              </div>
              <small class="text-muted"
                >Select one or multiple (optional)</small
              >
              <div class="my-3">
                <div class="row">
                  <div class="col-12 col-lg-4 mb-2" v-for="i in 6" :key="i">
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input mt-3"
                        type="checkbox"
                        id="Small-Red-Rose-Buckey"
                      />
                      <!-- checked -->
                      <label
                        class="form-check-label"
                        for="Small-Red-Rose-Buckey"
                      >
                        <div class="d-flex">
                          <div>
                            <img
                              src="https://via.placeholder.com/48x48"
                              class="img-fluid"
                            />
                          </div>
                          <p class="mb-0 ms-2">
                            <small class="addon">Small Red Rose Buckey</small
                            ><br />
                            <small>NPR 1,650.00</small>
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <br />

              <div class="my-3">
                <h6 class="cake mb-0">Cake Message / Special instructions</h6>
                <textarea
                  class="form-control mt-2"
                  rows="3"
                  placeholder="You can write down here any special instructions"
                ></textarea>
              </div>
            </div>
          </div>

          <!--  -->

          <div class="modal-footer border-0">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-detail"
              data-bs-dismiss="modal"
              @click="addToCart"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
let formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR"
});
export default {
  methods: {
    npr(price) {
      return formatter.format(price);
    },

    addToCart() {
      this.$store.commit("add", this.$store.getters.detailcake);
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";

.modal-content {
  border-radius: 0;
}

.cake {
  color: #333333;
}

.price {
  color: #ee6f7c;
}

.selected {
  background-color: #99ff99;
  color: #198754;
}

.pounds {
  font-size: 18px;
  span {
    // cursor: pointer;
  }
}

textarea {
  border-radius: 0;
  resize: none;
  box-shadow: none !important;
  outline: none !important;
  color: #000;
  font-weight: 500;
  border-width: 2px;

  &:active,
  &:focus {
    border-color: #ced4da;
  }
}

.form-check-input:checked {
  background-color: #ee6f7c;
  border-color: #ee6f7c;
}

.form-check-input:focus {
  outline: 0;
  box-shadow: none;
  border-color: #ee6f7c;
}

.addon {
  font-weight: 500;
}

.btn-detail {
  background-color: #ee6f7c;
  border: 2px solid #ee6f7c;
  color: #fff;
  font-weight: bold;
  box-shadow: none !important;
  outline: none !important;
}

.pounds .badge {
  cursor: pointer;
}
</style>
