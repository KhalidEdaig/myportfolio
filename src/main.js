import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import Tailwindcss
import "./assets/css/main.css";
//import material-icon scss

Vue.config.productionTip = false;

Vue.filter("readMore", function(text, length, suffix) {
  if (text.length > length) {
    return text.substring(0, length) + suffix;
  } else {
    return text.substring(0, length);
  }
});
Vue.filter("toUpperCase", function(value) {
  return value.toUpperCase();
});
Vue.filter("toLowerCase", function(value) {
  return value.toLowerCase();
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
