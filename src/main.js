import Vue from 'vue'
import App from './App.vue'
import AppTest from './AppTest.vue'
import axios from 'axios'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$bus = new Vue()

//全局守卫
router.beforeEach((to,from,next)=>{
  console.log(to)
  //用户访问了 /notes
  if(to.path === '/notes') {
    const user = JSON.parse(localStorage.getItem('user'))
    if(user) {
      //用户已登录
      next()
    }else{
      //用户没有登录 跳转到登陆页面进行登录
      next('/login')
    }
  }
  next()
})

new Vue({
  router,
  render: h => h(AppTest),
}).$mount('#app')
