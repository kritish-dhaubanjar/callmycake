<template>
  <div id="top">
    <Offers />
    <Topbar />
    <Navigation />
    <NavigationBar />
    <nuxt />
    <Footer />
    <div id="fb-root"></div>
    <div id="fb-customer-chat" class="fb-customerchat"></div>
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
  },

  mounted() {
    this.$nextTick(() => {
      const chatbox = document.getElementById("fb-customer-chat");
      chatbox.setAttribute("page_id", "105343014140550");
      chatbox.setAttribute("attribution", "page_inbox");

      window.fbAsyncInit = function() {
        FB.init({
          xfbml: true,
          version: "v11.0"
        });
      };

      (function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    });
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
