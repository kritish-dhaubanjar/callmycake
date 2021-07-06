<template>
  <footer class="bg-light">
    <div class="container">
      <div class="row pt-5">
        <!--  -->
        <div class="col-lg-3 mb-5">
          <img src="/images/cmc.png" class="img-fluid mb-2" width="128" />
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
          <iframe
            src="https://www.instagram.com/p/CQ8QIbjMs01/embed"
            frameborder="0"
            scrolling="yes"
            height="300"
            class="w-100"
          >
          </iframe>
        </div>
        <!--  -->

        <div class="col-lg-3 mb-5">
          <h5 class="fw-bold">CONTACT US</h5>
          <ul class="list-group">
            <li>
              <i class="las la-map-marker" /> {{ footer.address1 }}
            </li>
            <li><i class="las la-phone" /> <a href="#">{{ footer.phone_primary }}</a></li>
            <li>
              <i class="las la-envelope-open" />
              <a href="#">{{ footer.email_primary }}</a>
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
            <li>
              <a :href="`viber://add?number=${footer.viber || ''}`"><i class="lab la-viber la-2x"/></a>
            </li>
            <li>
              <a :href="`https://wa.me/${footer.whatsapp || ''}`"><i class="lab la-whatsapp la-2x"/></a>
            </li>
          </ul>
        </div>
      </div>
      <!--  -->
      <div class="row py-4">
        <div class="col-12 text-center">
          {{ new Date().getFullYear() }} &copy; Copyright. Crafted with
          <i class="las la-heart text-danger" /> theGimmickBox
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    props: ['footer'],
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
