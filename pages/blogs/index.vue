<template>
  <section>
    <section class="bg-light">
      <div class="container py-5 ">
        <div class="row my-3">
          <div class="col-12">
            <h1 class="mb-0">BLOGS</h1>
          </div>
        </div>
      </div>
    </section>
    <div class="container my-5">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-12" v-for="i in 5" :key="i">
          <div class="row">
            <div class="col-12 col-md-12 col-lg-6 mb-5">
              <img src="/images/image_4_570x.webp" class="img-fluid" />
            </div>

            <div class="col-12 col-md-12 col-lg-6 mb-5">
              <h6>January 28, 2020</h6>
              <div class="my-2">
                <nuxt-link
                  to="/blogs/sometimes-on-purpose"
                  class="fw-bold fs-4"
                  tag="a"
                >
                  Sometimes on purpose ected humour. dummy text.
                </nuxt-link>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                distinctio magnam rem doloribus praesentium maiores aperiam
                expedita explicabo, culpa quis a, quibusdam animi delectus unde.
                Culpa temporibus dolorem ut atque! Lorem ipsum dolor sit amet
                consectetur...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
p {
  line-height: 150%;
  color: #777;
}

h6 {
  color: #ee6f7c;
  text-transform: uppercase;
}
</style>
