<template>
  <section>
    <div
      class="modal fade p-0"
      id="advertisement"
      tabindex="-1"
      aria-labelledby="advertisementLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header border-0">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body px-0">
            <div class="row px-3 text-center">
              <div class="col-12 col-lg-8">
                <div class="text-center">
                  <img
                    src="/images/cakes_advertising_banner_colorful_decor_webpage_design_6837239.jpg"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div class="col-12 col-lg-4">
                <div class="py-4">
                  <i class="las la-birthday-cake la-4x text-primary" />
                  <h5>Design your cake</h5>
                  Choose from our many flavors & decorative options.
                </div>

                <div class="py-4">
                  <i class="las la-holly-berry la-4x text-primary" />
                  <h5>We hand-decorate it</h5>
                  Our bakery will create the perfect custom cake for your
                  special occasion.
                </div>

                <div class="py-4">
                  <i class="las la-truck-loading la-4x text-primary" />
                  <h5>We'll Deliver & enjoy!</h5>
                  Your order will be delivered for you at your location.
                </div>

                <div class="col-12 pb-3">
                  <button
                    data-bs-dismiss="modal"
                    class="btn btn-advertisement"
                    @click="go"
                  >
                    Customize Cake
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    go() {
      this.$router.push("/customize#top");
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
    cursor: pointer;
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

.btn-advertisement {
  background-color: #ee6f7c;
  border: 2px solid #ee6f7c;
  color: #fff;
  font-weight: bold;
  box-shadow: none !important;
  outline: none !important;
}

// .modal-content
#advertisement {
  background-image: url("/images/home_best_selling_img_24fba90c-1178-4549-8a03-35e116b04ffc.webp");
  background-position: center;
  background-size: cover;
}
</style>
