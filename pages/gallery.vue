<template>
  <section>
    <section class="bg-light">
      <div class="container py-5 ">
        <div class="row my-3">
          <div class="col-12">
            <h1 class="mb-0">OUR GALLERY</h1>
          </div>
        </div>
      </div>
    </section>
    <div class="container py-5 my-5">
      <div class="row mb-4">
        <div class="col-12">
          <ul
            class="nav nav-pills mb-3 justify-content-center"
            id="pills-tab"
            role="tablist"
          >
            <li
              class="nav-item my-1"
              role="presentation"
              v-for="tag in tags"
              :key="tag"
            >
              <p
                class="nav-link"
                @click="filter(tag)"
                :class="{ active: activeTag === tag }"
              >
                {{ tag }}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div class="row grid" id="lightgallery">
        <a
          class="grid-item col-12 col-md-6 col-lg-4 p-3"
          v-for="i in 10"
          :key="i"
          :class="tags[i % 4]"
          href="https://via.placeholder.com/1024x720"
        >
          <img src="https://via.placeholder.com/1024x720" class="d-none" />
          <div class="position-relative">
            <div class="position-absolute text-center w-100 py-3">
              <h6 class="pb-2">Baby Shower Cake</h6>
              <em>ANNIVERSARY CAKE</em>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Isotope from "isotope-layout";
import lightGallery from "lightgallery";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lightgallery.css";

export default {
  data() {
    return {
      isotope: null,
      activeTag: "grid-item",
      tags: ["grid-item", "metal", "transition", "alkali", "alkalaine-earth"]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.isotope = new Isotope(".grid");
    });

    this.$nextTick(() => {
      lightGallery(document.getElementById("lightgallery"), {
        plugins: [lgZoom, lgThumbnail],
        speed: 500
      });
    });
  },

  methods: {
    filter(tag) {
      this.activeTag = tag;
      this.isotope.arrange({ filter: `.${tag}` });
    }
  },

  components: {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/colors.scss";
.nav-link {
  border: 2px solid #fff;
  font-weight: 500;
  color: #212529;
  &:hover {
    cursor: pointer;
  }
}

.nav-link.active {
  background-color: #fff !important;
  border-radius: 0;
  border: 2px solid;
  color: $primary;
}

.grid-item > div {
  min-height: 254px;
  background-image: url(https://via.placeholder.com/1024x720);
  background-position: center;
  background-size: cover;

  //
  overflow: hidden;
  hr {
    border-color: #fff;
  }
  div {
    background-color: #ee6f7c !important;
    color: #fff;
    bottom: -40px;
    transition: 256ms;
  }

  &:hover {
    div {
      transition: 256ms;
      bottom: 0px;
    }
  }
}
</style>
