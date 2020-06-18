
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

require("../node_modules/bootstrap/dist/css/bootstrap.css")
require("../node_modules/font-awesome/css/font-awesome.min.css")

// require ('./assets/css/font-awesome.min.css');
require ("../public/assets/css/style.css")
require('../public/assets/css/feathericon.min.css')

//vue toaster

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


const options = {
  position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false
};


Vue.use(Toast, options);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
