<template>
  <footer class="bg-light">
    <div class="container">
      <div class="row pt-5">
        <!--  -->
        <div class="col-lg-3 mb-5">
          <img src="/images/cmc.png" class="img-fluid mb-2" width="128" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            ex deserunt quisquam error iure ab perspiciatis.
          </p>
        </div>
        <!--  -->

        <div class="col-lg-3 mb-5">
          <h5 class="fw-bold">OPENING HOURS</h5>
          <ul class="list-group">
            <li>
              Sunday: 2:00am to 12:00pm
            </li>
            <li>
              Monday: 2:00am to 12:00pm
            </li>
            <li>
              Tuesday: 2:00am to 12:00pm
            </li>
            <li>
              Wednesday: 2:00am to 12:00pm
            </li>
            <li>
              Thursday: 2:00am to 12:00pm
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
              <a href="#"><i class="lab la-facebook la-2x"/></a>
            </li>
            <li>
              <a href="#"><i class="lab la-instagram la-2x"/></a>
            </li>
            <li>
              <a href="#"><i class="lab la-twitter la-2x"/></a>
            </li>
            <li>
              <a href="#"><i class="lab la-viber la-2x"/></a>
            </li>
            <li>
              <a href="#"><i class="lab la-whatsapp la-2x"/></a>
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
