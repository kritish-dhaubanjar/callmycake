<template>
  <section>
    <h5 class="mb-3">Instruction</h5>

    <form @submit.prevent="placeOrder">
      <div class="row mt-4">
        <div class="col-12">
          <div class="mb-3">
            <label class="form-label fw-bold mb-0">Message on Cake</label><br />
            <small>Handwritten message on icing. 50 charactes max.</small>
            <input
              type="text"
              class="form-control py-2 mt-3"
              v-model="instruction.message"
              placeholder="eg: Happy Birthday"
              required
            />
          </div>
        </div>

        <div class="col-12">
          <div class="mb-3">
            <label class="form-label fw-bold">Order Notes</label>
            <textarea
              v-model="instruction.notes"
              class="form-control py-2"
              rows="4"
              placeholder="Special Preference, Sender Details (or others)"
            />
          </div>
        </div>

        <div class="col-12 mt-3">
          <h5>Upload an image to be printed on cake</h5>

          <img :src="result" class="img-fluid" width="256" />

          <div class="d-grid gap-2 my-4">
            <button class="btn btn-info" type="button" @click="open">
              <i class="las la-upload"></i> Upload
            </button>
          </div>

          <input
            class="form-control d-none"
            type="file"
            id="formFile"
            ref="file"
            @change="preview"
            accept="image/*"
          />
        </div>

        <div class="col-12 mb-3">
            <div class="row mt-4">
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label">Name *</label>
                  <input
                    type="text"
                    class="form-control py-2"
                    placeholder="eg: Jane Doe"
                    v-model="instruction.name"
                    required
                  />
                </div>
              </div>

              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control py-2"
                    placeholder="eg: janedoe@example.org"
                    v-model="instruction.email"
                    required
                  />
                </div>
              </div>

              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label">Phone Number *</label>
                  <input
                    type="text"
                    class="form-control py-2"
                    required
                    placeholder="eg: +977 987654321"
                    v-model = "instruction.phone"
                  />
                </div>
              </div>

            </div>
        </div>
      </div>

      <div class="row">
        <div class="col-5">
          <nuxt-link
            tag="button"
            class="btn btn-light navigation py-2"
            to="/customize/topping"
          >
            <i class="las la-arrow-left"></i>
          </nuxt-link>
          <span>Topping</span>
        </div>
        <div class="col-2 d-flex align-items-center">
          <span>9/9</span>
        </div>
        <div class="col-5 text-end">
          <span>Order</span>
          <button
            type="submit"
            class="btn btn-dark navigation py-2"
            :disabled="$store.state.isLoading"
          >
            <Loader v-if="$store.state.isLoading" />
            <i v-else class="las la-arrow-right"></i>
          </button>
        </div>
      </div>
    </form>

  </section>
</template>

<script>
const fileReader = new FileReader();
import Loader from "@/components/UI/Loader";

export default {
  data() {
    return {
      result: "/images/placeholder-image.jpg",
      instruction: {
        message: '',
        notes: '',
        name: '',
        email: '',
        phone: '',
        cake_topper_image: null,
      },
    };
  },

  beforeDestroy() {
    this.setInstruction();
  },

  mounted() {
    this.instruction = { ...this.cake.instruction };
  },

  computed: {
    cake() {
      return this.$store.getters["customize/cake"];
    }
  },

  created() {
    fileReader.onload = ({ target }) => {
      this.result = target.result;
    };
  },

  methods: {
    setInstruction() {
      this.$store.commit("customize/set", {
        component: "instruction",
        option: { ...this.instruction }
      });
    },

    open() {
      this.$refs.file.click();
    },

    preview(e) {
      const files = e.target.files;

      if (files.length > 0) {
        fileReader.readAsDataURL(files[0]);
        this.instruction.cake_topper_image = files[0];
      }
    },

    placeOrder() {
      this.$emit('addToCart', this.instruction);
    }
  },

  components: {
    Loader,
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/colors.scss";

.navigation {
  border-radius: 100%;
  border-color: #000;
}

li {
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  div {
    border-radius: 100%;
    border: 2px solid #d3d3d3;
  }
}

li.selected {
  div {
    border-radius: 100%;
    border: 2px solid #000;
  }
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
