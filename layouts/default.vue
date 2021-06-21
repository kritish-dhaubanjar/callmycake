<template>
  <div id="top">
    <Offers />
    <Topbar />
    <Navigation />
    <NavigationBar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import "bootstrap";
import Offers from "@/components/includes/Offers";
import Topbar from "@/components/includes/Topbar";
import Navigation from "@/components/includes/Navigation";
import NavigationBar from "@/components/includes/NavigationBar";
import Footer from "@/components/includes/Footer";

export default {
  components: {
    Offers,
    Topbar,
    Navigation,
    NavigationBar,
    Footer
  }
};
</script>

<style>
@import "@/assets/scss/styles.scss";

#top {
  background-image: url("/images/home_best_selling_img_24fba90c-1178-4549-8a03-35e116b04ffc.webp");
  background-position: center;
  background-size: cover;
}
</style>
