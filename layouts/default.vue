<template>
  <div>
    <Offers />
    <Topbar />
    <Navigation />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import "bootstrap";
import Offers from "@/components/includes/Offers";
import Topbar from "@/components/includes/Topbar";
import Navigation from "@/components/includes/Navigation";
import Footer from "@/components/includes/Footer";

export default {
  components: {
    Offers,
    Topbar,
    Navigation,
    Footer
  }
};
</script>

<style>
@import "@/assets/scss/styles.scss";
</style>
