<template>
  <div id="top">
    <SideNav :show="show" @hide="show = false" />
    <!--  -->
    <main>
      <Offers />
      <Topbar />
      <Navigation @show="show = true" />
      <NavigationBar />
      <nuxt />
      <Footer />
    </main>
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
import SideNav from "@/components/includes/SideNav";

export default {
  data() {
    return {
      show: false
    };
  },

  watch: {
    show() {
      if (this.show) {
        document.body.classList = "sidebar";
      } else {
        document.body.classList = "";
      }
    }
  },

  created() {
    this.$router.afterEach(() => {
      this.show = false;
    });
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
  },

  components: {
    Offers,
    Topbar,
    Navigation,
    NavigationBar,
    Footer,
    SideNav
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/styles.scss";

#top {
  background-image: url("/images/home_best_selling_img_24fba90c-1178-4549-8a03-35e116b04ffc.webp");
  background-position: center;
  background-size: cover;
}
</style>
