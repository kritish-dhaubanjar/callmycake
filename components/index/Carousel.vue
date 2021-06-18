<template>
  <section>
    <div class="container mt-5">
      <div class="row">
        <!-- <div class="col-12">
          <img
            src="/images/backrey_collection_banner_1340x.png"
            class="img-fluid"
          />
        </div> -->

        <div class="col-12">
          <div id="carousels" class="carousel slide" data-bs-ride="carousel">
            <ol class="carousel-indicators">
              <li
                data-bs-target="#carousels"
                data-bs-slide-to="0"
                class="active"
              ></li>
              <li data-bs-target="#carousels" data-bs-slide-to="1"></li>
              <li data-bs-target="#carousels" data-bs-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div v-for="(carousel, i) in carousels" :key="i" class="carousel-item" :class="i==0 ? 'active': ''">
                <img
                  :src="`${$axios.defaults.baseURL}${carousel.image.path}`"
                  class="d-block w-100"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carousels"
              role="button"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carousels"
              role="button"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        carousels: [],
      };
    },

    created() {
      this.$axios
        .get('api/collections/get/carousels')
        .then(({ data }) => {
          this.carousels = data.entries
        });
    }
  }
</script>
<style scoped lang="scss"></style>
