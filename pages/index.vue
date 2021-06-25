<template>
  <div>
    <Carousel />
    <Menu />
    <Advertisement :popupAdImage="popupAdImage" />
    <DetailModal />
    <div class="toast-container">
      <div
        v-for="(toast, index) in toasts"
        :key="index"
        class="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        data-bs-animation="3000"
      >
        <div class="toast-header">
          <strong class="me-auto">House of Cakes</strong>
          <small class="text-muted">just now</small>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">
          <b>{{ toast.title }}</b> added to cart.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/index/Carousel";
import Menu from "@/components/index/Menu";
import Advertisement from "@/components/UI/Advertisement";
import DetailModal from "@/components/UI/DetailModal";
import { Toast, Modal } from "bootstrap";

export default {
  data() {
    return {
      toasts: [],
      popupAdImage: '/images/cakes_advertising_banner_colorful_decor_webpage_design_6837239.jpg',
    };
  },

  mounted() {
    this.$axios
      .get('api/singletons/get/advertisements')
      .then(({ data }) => {
        if(data.popup_ad_enabled) {
          // configure ad modal
          this.popupAdImage = `${this.$axios.defaults.baseURL}${data.popup_ad_image.path}`;
          this.$nextTick(() => {
            const modal = document.getElementById("advertisement");
            if (modal && this.$store.getters.showAdvertisement) {
              new Modal(modal).show();
              this.$store.commit("unsetShowAdvertisement");
            }
          });
        }
    });

  },

  watch: {
    "$store.getters.cake": function(newVal, oldVal) {
      if (this.$store.getters.cake != null) {
        let cake = this.$store.getters.cake;
        this.toasts.push({ ...cake });
        this.$store.commit("reset");
      }
    },

    toasts: function() {
      this.$nextTick(() => {
        let toastElList = [].slice.call(document.querySelectorAll(".toast"));
        let toastList = toastElList.map(function(toastEl) {
          return new Toast(toastEl, {
            animation: true,
            autohide: true,
            delay: 3000
          });
        });

        toastList.forEach(toast => {
          toast.show();
          toast._element.addEventListener("hidden.bs.toast", function() {
            toast._element.classList = "d-none";
          });
        });
      });
    }
  },
  components: {
    Carousel,
    Menu,
    Advertisement,
    DetailModal
  }
};
</script>

<style scoped>
.toast-container {
  position: fixed;
  top: 100px;
  right: 16px;
  z-index: 1024;
}

@media screen and (max-width: 412px) {
  .toast-container {
    position: fixed;
    top: 100px;
    right: 0;
    left: 0;
    padding: 8px;
    margin: auto;
    z-index: 1024;
  }
}

.toast {
  z-index: 1024;
}

.toast-body {
  background: #fff !important;
}
</style>
