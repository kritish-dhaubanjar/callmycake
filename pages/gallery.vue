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
          v-for="(item, i) in items"
          :key="i"
          :class="`All ${item.category.display} ${item.tag.join(' ')}`"
          :href="`${$axios.defaults.baseURL}${item.image.path}`"
        >
          <img :src="`${$axios.defaults.baseURL}${item.image.path}`" class="d-none" />
          <div class="position-relative" :style="`background-image: url('${$axios.defaults.baseURL}${item.image.path}')`">
            <div class="position-absolute text-center w-100 py-3">
              <h6 class="pb-2">{{ item.title }}</h6>
              <em>{{ item.category.display }}</em>
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
  head() {
    return {
      title: "CallMyCake | Gallery"
    };
  },
  data() {
    return {
      isotope: null,
      activeTag: "All",
      tags: [],
      items: [],
    };
  },

  beforeCreate() {
    this.$axios
      .get('api/collections/get/categories')
      .then(({ data }) => {
        this.tags = [
          'All',
          ... data.entries.map(el => el.name)
        ];
      });
  },

  mounted() {
    this.$axios
      .get('api/collections/get/gallery')
      .then(({ data }) => {
        this.items = data.entries;
        // this.tags = this.getUniqueTagsFromItems(data.entries);
          this.$nextTick(() => {
            this.isotope = new Isotope(".grid");
          });
          this.$nextTick(() => {
            lightGallery(document.getElementById("lightgallery"), {
              plugins: [lgZoom, lgThumbnail],
              speed: 500
            });
          });
      });

  },

  methods: {
    getUniqueTagsFromItems(items) {
      if( !items || items.length == 0 ) return [];
      let totalTags = items.reduce((current, prev) => {
        console.log('prev',prev.tag, 'current', current)
        return [
          ...current,
          ...prev.tag
        ];
      },['All']);

      return [... new Set(totalTags)];
    },

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
  border: 2px solid !important;
  color: $primary !important;
}

.grid-item > div {
  min-height: 254px;
  background-image: url("/images/image_4_570x.webp");
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
