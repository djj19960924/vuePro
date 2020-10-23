import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/view/Home.vue'
import About from '@/view/About.vue'
import User from '@/view/User.vue'
import UserAdmin from '@/view/User-admin.vue'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/',
    name: 'home',
    // component: Home
    components: {
      default: Home, //默认的名字
      main: ()=> import('@/view/Main'),
      sideBar: ()=> import('@/view/SideBar')
    }
  },
  // 同一个路径可以匹配多个路由，匹配的有限见着路由的定义顺序：
  // 谁先定义的，谁的优先级最高
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User,
    // props: true
    props: (route)=>({
      id: route.params.id,
      title: route.query.title
    }),
    children: [
      {
        path: 'profile',
        component : ()=>import('@/view/Profile')
      },
      {
        path: 'posts',
        component : ()=>import('@/view/Posts')
      },
    ]
  },
  {
    path: 'notes',
    name: 'notes',
    component: () => import('@/view/Notes')
  },
  //http://localhost:8080/page?id=1&title=foo query
  {
    path: '/page',
    name: 'page',
    component: () => import('@/view/Page')
  },
  {
    path: '/user-*',
    component: UserAdmin
  },
  {
    path: '*',
    component: () => import('@/view/404')
  }
]

const router = new VueRouter({
  // mode:'history',
  routes
})
export default router