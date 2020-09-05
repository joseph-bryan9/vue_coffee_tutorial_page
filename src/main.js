import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "../src/assets/bootstrap.min.css";
import "../src/assets/business-casual.min.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
