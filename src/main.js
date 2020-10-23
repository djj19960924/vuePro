import Vue from 'vue'
import App from './App.vue'
import AppTest from './AppTest.vue'
import axios from 'axios'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(AppTest),
}).$mount('#app')
