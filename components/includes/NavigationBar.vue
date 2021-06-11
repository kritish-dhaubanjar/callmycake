<template>
  <div class="container">
    <div class="row">
      <hr class="mb-0" />
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <!-- <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button> -->
          <div
            class="collapse navbar-collapse justify-content-center pe-5"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item pe-2">
                <nuxt-link
                  exact-active-class="active"
                  to="/"
                  class="nav-link fw-bold"
                  aria-current="page"
                  href="#"
                  >HOME</nuxt-link
                >
              </li>
              <li class="nav-item px-2">
                <nuxt-link to="/" class="nav-link fw-bold" href="#"
                  >SHOP</nuxt-link
                >
              </li>
              <li class="nav-item px-2">
                <nuxt-link
                  to="/gallery"
                  class="nav-link fw-bold"
                  href="#"
                  exact-active-class="active"
                  >GALLERY</nuxt-link
                >
              </li>
              <li class="nav-item px-2">
                <nuxt-link to="/blogs" class="nav-link fw-bold" href="#"
                  >BLOGS</nuxt-link
                >
              </li>
              <li class="nav-item px-2">
                <nuxt-link to="/about-us" class="nav-link fw-bold" href="#"
                  >ABOUT US</nuxt-link
                >
              </li>
              <li class="nav-item ps-2">
                <nuxt-link to="/" class="nav-link fw-bold" href="#"
                  >CONTACT US</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="scss">
.active {
  color: #ee6f7c !important;
}
a.nav-link.fw-bold {
  color: #000;
}
</style>
