// import Vue from "vue";
// import App from "./App.vue";

// Vue.config.productionTip = false;

// new Vue({
//   render: h => h(App)
// }).$mount("#app");

import {PluginFunction} from 'vue' // eslint-disable-line
import cookie from "js-cookie";

const install: PluginFunction<any> = Vue => {
  console.log("enter install jscookie...");

  // eslint-disable-next-line no-param-reassign
  Vue.prototype.$AppName = "boyaa.app";
  Vue.prototype.$Version = "1.0.1";
  Vue.prototype.$JsCookie = cookie;
};

export default install;
