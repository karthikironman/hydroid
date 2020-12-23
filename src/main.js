import Vue from 'vue'
import App from './App.vue'
import router from "@/router/index.js";
// register the plugin on vue
import Toasted from 'vue-toasted';
Vue.use(Toasted)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
