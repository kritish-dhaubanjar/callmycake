<template>
  <section>
    <div class="container py-5 my-5">
      <div class="row mb-5">
        <div class="col-12 text-center">
          <h1>OUR GALLERY</h1>
          <hr />
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-12 text-center">
          <button
            class="btn btn-outline-primary"
            @click="filter('grid-item')"
            :class="{ 'btn-primary': activeTag === 'grid-item' }"
          >
            All
          </button>
          <button
            class="btn btn-outline-primary"
            @click="filter('metal')"
            :class="{ 'btn-primary': activeTag === 'metal' }"
          >
            Metal
          </button>
          <button
            class="btn btn-outline-primary"
            @click="filter('transition')"
            :class="{ 'btn-primary': activeTag === 'transition' }"
          >
            Transition
          </button>
          <button
            class="btn btn-outline-primary"
            @click="filter('alkali')"
            :class="{ 'btn-primary': activeTag === 'alkali' }"
          >
            Alkali
          </button>
          <button
            class="btn btn-outline-primary"
            @click="filter('alkalaine-earth')"
            :class="{ 'btn-primary': activeTag === 'alkalaine-earth' }"
          >
            Alkaline Earth
          </button>
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
              <h6>Baby Shower Cake</h6>
              <hr class="my-2" />
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
      activeTag: "all",
      tags: ["metal", "transition", "alkali", "alkalaine-earth"]
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
h1,
h4 {
  color: #000;
}

hr {
  margin: auto;
  width: 64px;
  border-top: 2px solid #000;
  opacity: 1;
}

p {
  line-height: 170%;
  color: #444444;
}

ul {
  list-style-type: square;
  li {
    padding-top: 12px;
    color: #444444;
    &::marker {
      color: #000;
    }
  }
}

.btn-primary {
  color: #fff !important;
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
    background-color: rgba(0, 115, 177, 0.8);
    color: #fff;
    bottom: -32px;
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
