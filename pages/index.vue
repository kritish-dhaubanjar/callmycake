<template>
  <div>
    <Carousel />
    <Menu />
    <!-- <AddModal /> -->
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
import AddModal from "@/components/UI/AddModal";
import DetailModal from "@/components/UI/DetailModal";
import { Toast } from "bootstrap";

export default {
  data() {
    return {
      toasts: []
    };
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
    AddModal,
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
