<template>
  <div class="row">
    <div class="col-lg-7">
      <img :src="result" class="img-fluid" />
    </div>
    <div class="col-lg-5">
      <div class="my-3">
        <h5>Upload an image of cake</h5>
        <div class="d-grid gap-2 my-4">
          <button class="btn btn-info" type="button" @click="open">
            <i class="las la-upload"></i> Upload
          </button>
        </div>

        <form @submit.prevent="placeOrder">
          <div class="row mt-4">
            <div class="col-12">
              <div class="mb-3">
                <label class="form-label">Name *</label>
                <input
                  type="text"
                  class="form-control py-2"
                  placeholder="eg: Jane Doe"
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
                />
              </div>
            </div>

            <div class="col-12">
              <div class="mb-3">
                <label class="form-label">Message *</label>
                <textarea
                  class="form-control py-2"
                  rows="4"
                  placeholder="Special Preference, Sender Details (or others)"
                />
              </div>
            </div>

            <div class="col-12 pt-4">
              <button
                class="btn btn-dark px-4 py-3"
                type="submit"
                @click="request"
              >
                REQUEST ORDER
              </button>
            </div>
          </div>
        </form>

        <input
          class="form-control d-none"
          type="file"
          id="formFile"
          ref="file"
          @change="preview"
          accept="image/*"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

const fileReader = new FileReader();

export default {
  data() {
    return {
      result: "/images/placeholder-image.jpg"
    };
  },

  created() {
    fileReader.onload = ({ target }) => {
      this.result = target.result;
    };
  },

  methods: {
    open() {
      this.$refs.file.click();
    },

    preview(e) {
      const files = e.target.files;

      if (files.length > 0) {
        fileReader.readAsDataURL(files[0]);
      }
    },

    request() {
      Swal.fire({
        icon: "success",
        title: "Success",
        text:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae eum vero ipsum nostrum mollitia! Aut eum ab unde asperiores rerum minima aliquid ipsum repudiandae recusandae ut quae, nostrum sequi quis?"
        // footer: "<a href>Why do I have this issue?</a>"
      }).then(() => {});
    }
  }
};
</script>

<style lang="scss" scoped>
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
