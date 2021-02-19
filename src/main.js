import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"
import { Flexible } from "@/assets/javascript/flexible.js";
Vue.config.productionTip = false;
Flexible(750)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
