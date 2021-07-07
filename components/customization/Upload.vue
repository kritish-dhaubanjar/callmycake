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

        <form @submit.prevent="request">
          <div class="row mt-4">
            <div class="col-12">
              <div class="mb-3">
                <label class="form-label">Name *</label>
                <input
                  type="text"
                  class="form-control py-2"
                  placeholder="eg: Jane Doe"
                  v-model="data.name"
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
                  v-model="data.email"
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
                  v-model="data.phone"
                />
              </div>
            </div>

            <div class="col-12">
              <div class="mb-3">
                <label class="form-label fw-bold mb-0">Message on Cake</label><br />
                <small>Handwritten message on icing. 50 charactes max.</small>
                <input
                  type="text"
                  class="form-control py-2 mt-3"
                  v-model="data.message"
                  placeholder="eg: Happy Birthday"
                  required
                />
              </div>
            </div>
            <div class="col-12">
              <div class="mb-3">
                <label class="form-label">Notes</label>
                <textarea
                  class="form-control py-2"
                  rows="4"
                  placeholder="Special Preference, Sender Details (or others)"
                  v-model="data.notes"
                />
              </div>
            </div>

            <div class="col-12 pt-4">
              <button
                class="btn btn-dark px-4 py-3"
                type="submit"
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
      result: "/images/placeholder-image.jpg",
      data: {
        name: '',
        email: '',
        phone: '',
        message: '',
        notes: '',
        type: 'Upload Photo'
      },
      cake_image: null,
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
        this.cake_image = files[0];
      }
    },

    request() {
      //
      if(this.cake_image) {
        let formData = new FormData();
        formData.append('files[]', this.cake_image);
        this.$axios
          .post('api/cockpit/addAssets?token=b25b0bb3eb766c53531916bcf5fd6b', formData)
          .then(({ data }) => {
            if(data.assets.length > 0) {
              const newData = {
                ...this.data,
                cake_image: { path: '/storage/uploads' + data.assets[0].path },
              }
              // finally store order with cake_image
              this.$axios
                .post('api/collections/save/custom_orders', { data: newData })
                .then(({ data }) => {
                  let formData = new FormData();
                  formData.append('order_id', data._id);
                  this.$axios
                    .post('api/public/customorder', formData)
                    .then(res => {})
                    .finally(res => {
                      Swal.fire({
                        icon: "success",
                        title: "Success",
                        text:
                          "Your order request has been sent successfully ! We will reach out to you shortly."
                        // footer: "<a href>Why do I have this issue?</a>"
                      }).then(() => {
                        this.$router.replace("/");
                      }); 
                    });
                });
            }
          });
      }
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
