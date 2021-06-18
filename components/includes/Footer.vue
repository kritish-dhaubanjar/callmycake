<template>
  <footer class="bg-light">
    <div class="container">
      <div class="row pt-5">
        <!--  -->
        <div class="col-lg-3 mb-5">
          <img src="/images/logo.webp" class="img-fluid mb-2" width="128" />
          <p>
            {{ footer.info }}
          </p>
        </div>
        <!--  -->

        <div class="col-lg-3 mb-5">
          <h5 class="fw-bold">OPENING HOURS</h5>
          <ul class="list-group">
            <li>
              Sunday: {{ footer.opening_hour_sunday }}
            </li>
            <li>
              Monday: {{ footer.opening_hour_monday }}
            </li>
            <li>
              Tuesday: {{ footer.opening_hour_tuesday }}
            </li>
            <li>
              Wednesday: {{ footer.opening_hour_wednesday }}
            </li>
            <li>
              Thursday: {{ footer.opening_hour_thursday }}
            </li>
            <li>
              Friday: {{ footer.opening_hour_friday }}
            </li>
            <li>
              Saturday: {{ footer.opening_hour_saturday }}
            </li>
          </ul>
        </div>
        <!--  -->

        <div class="col-lg-3 mb-5">
          <h5 class="fw-bold">INSTAGRAM FEED</h5>
          <div class="row mt-3 no-gutters pe-lg-3">
            <div class="col-4 col-md-2 col-lg-4 mb-3" v-for="i in 6" :key="i">
              <a href="#"
                ><img
                  src="https://via.placeholder.com/128x128"
                  class="img-fluid"
              /></a>
            </div>
          </div>
        </div>
        <!--  -->

        <div class="col-lg-3 mb-5">
          <h5 class="fw-bold">CONTACT US</h5>
          <ul class="list-group">
            <li>
              <i class="las la-map-marker" /> Fiot Fashion Demo Store Demo Store
              USA
            </li>
            <li><i class="las la-phone" /> <a href="#">123-456-7898</a></li>
            <li>
              <i class="las la-envelope-open" />
              <a href="#">Support@Fiot.com</a>
            </li>
          </ul>

          <ul class="list-group social">
            <li>
              <a target="_blank" :href="footer.facebook"><i class="lab la-facebook la-2x"/></a>
            </li>
            <li>
              <a target="_blank" :href="footer.instagram"><i class="lab la-instagram la-2x"/></a>
            </li>
            <li>
              <a target="_blank" :href="footer.twitter"><i class="lab la-twitter la-2x"/></a>
            </li>
          </ul>
        </div>
      </div>
      <!--  -->
      <div class="row py-4">
        <div class="col-12 text-center">
          2021 &copy; Copy Right by Kritish Dhaubanjar
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    data() {
      return {
        footer: {}
      }
    },

    created() {
      this.$axios
        .get('api/singletons/get/footer')
        .then(({ data }) => this.footer = data);
    }
  };
</script>
<style scoped lang="scss">
li {
  padding-bottom: 8px;
  &:first-child {
    padding-top: 8px;
  }
}

.social {
  display: inline-block;
  li {
    display: inline-block;
  }
}

.text-center {
  color: #777777;
}
</style>
