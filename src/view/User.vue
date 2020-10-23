<template>
<div>
  用户页面{{$route.params.id}}
  <div>{{id}}-{{title}}</div>
  <button @click='goHome'>跳转到首页</button>
  <button @click='goBack'>后退</button>
  <!-- 子路由组件出口 -->
  <router-view></router-view>
</div>
</template>

<script>
export default {
  created() {
    // console.log(this.$route.params.id)
  },
  methods: {
    goHome() {
      //编程式导航
      //可以是字符串，可以使name,可以是对象,可以是命名的路由
      // this.$router.push('/')
      // this.$router.push('name')
      // this.$router.push({
      //   path: '/'
      // })
      // this.$router.push({
      //   name: 'user',
      //   params: {id: 2}
      // })
      this.$router.push({
        path: '/register',
        query: {
          plan: '123'
        }
      })
    },
    goBack() {
      this.$router.go(-1)
    }
  },
  props: ['id', 'title'],
  // 响应路由参数的变化
  // watch: {
  //   $route: (to, from) => {
  //     console.log(to.params.id)
  //     //发起ajax请求后端接口数据 数据驱动视图
  //   }
  // }
  beforeRouteUpdate(to, from, next) {
    // ...
    console.log(to.params.id)
    //一定要调用next，不然会阻塞整个路由 放行
    next()
  }
}
</script>

<style>

</style>
