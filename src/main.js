
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

//vue loader
import 'vue-loaders/dist/vue-loaders.css';
import VueLoaders from 'vue-loaders';


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

Vue.use(VueLoaders)
Vue.use(Toast, options);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
