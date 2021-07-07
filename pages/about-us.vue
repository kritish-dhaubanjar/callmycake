<template>
  <section>
    <div class="container my-5">
      <div class="row">
        <div class="col-12">
          <h5 class="display-6 fw-bold">About Us</h5>
        </div>

        <div class="col-12 my-5">
          <img :src="(aboutUs.image) ? `${$axios.defaults.baseURL}${aboutUs.image.path}`: '/images/about_us_banner_2_1296x.webp'" class="img-fluid" />
        </div>

        <div class="col-12 mt-4" v-html="aboutUs.content">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "CallMyCake | About Us"
    };
  },

  data() {
    return {
      aboutUs: {}
    };
  },

  created() {
    this.$axios
      .get('api/singletons/get/about_us')
      .then(({ data }) => this.aboutUs = data);
  }
};
</script>

<style scoped>
p {
  line-height: 180%;
  color: #777;
}
</style>
