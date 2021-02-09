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
          <div class="modal-body px-0">
            <div class="row">
              <div class="col-lg-5">
                <div class="text-center">
                  <img
                    :src="$store.getters.detailcake.image"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div class="col-lg-7">
                <div
                  class="d-flex justify-content-between align-items-center px-4"
                >
                  <h5 class="cake">Anniversary Cake</h5>
                  <h5 class="price">
                    {{ npr($store.getters.detailcake.price) }}
                  </h5>
                </div>

                <div class="px-4 mt-3">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <h6 class="cake mb-0">
                      Variants (in pounds)
                    </h6>
                  </div>
                  <div class="my-3 pounds">
                    <span class="badge bg-light text-dark p-2">2 Pound</span>
                    <span class="badge bg-light text-dark p-2">3 Pound</span>
                    <span class="badge bg-light text-dark p-2">4 Pound</span>
                  </div>

                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Nam obcaecati veritatis aliquam quo cumque consequuntur?
                      Tempora mollitia perferendis alias quis illo adipisci
                      vero, in dolorum, quod maiores odio! Voluptatum, eos?
                    </p>
                  </div>

                  <button
                    @click="addToCart"
                    type="button"
                    class="btn btn-detail"
                    data-bs-dismiss="modal"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="modal-footer border-0">
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
            >
              Add to Cart
            </button>
          </div> -->
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
}

.form-check-input:checked {
  background-color: #ee6f7c;
  border-color: #ee6f7c;
}

.form-check-input:focus {
  outline: 0;
  box-shadow: none;
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
</style>
