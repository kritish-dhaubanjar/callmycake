export default function({ store }) {
  store.commit("init");

  // Facebook Messenger

  const fbRoot = document.createElement("div");
  fbRoot.setAttribute("id", "fb-root");
  const fbCustomerChat = document.createElement("div");
  fbCustomerChat.setAttribute("id", "fb-customer-chat");

  const nuxt = document.getElementById("__nuxt");
  document.body.insertBefore(fbRoot, nuxt);
  document.body.insertBefore(fbCustomerChat, nuxt);

  var chatbox = document.getElementById("fb-customer-chat");
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
}
