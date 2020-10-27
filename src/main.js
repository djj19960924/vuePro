import Vue from 'vue'
import App from './App.vue'
import AppTest from './AppTest.vue'
import AppVuex from './AppVuex.vue'
import axios from 'axios'
import router from './router'
//导入创建的store
import store from './store'
//注册全局组件
import ShoppingCart from '@/components/ShoppingCart'
Vue.component(ShoppingCart.name,ShoppingCart)

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$bus = new Vue()
//全局注册过滤器
Vue.filter('currency',(value)=>{
  return '$' + value
})


//全局守卫
// router.beforeEach((to,from,next)=>{
//   console.log(to)
//   //用户访问了 /notes
//   if(to.path === '/notes') {
//     const user = JSON.parse(localStorage.getItem('user'))
//     if(user) {
//       //用户已登录
//       next()
//     }else{
//       //用户没有登录 跳转到登陆页面进行登录
//       next('/login')
//     }
//   }
//   next()
// })

// router.beforeEach((to,from,next)=>{
//   console.log(to)
//   if(to.matched.some(record=>record.meta.requireAuth)) {
//     //需要权限,在黑名单
//     if(!localStorage.getItem('user')) {
//       next({
//         path: '/login',
//         query: {
//           redirect: to.fullPath
//         }
//       })
//     }else{
//       next()
//     }
//   }
//   next()
// })

new Vue({
  router,
  store,
  render: h => h(AppVuex),
}).$mount('#app')
