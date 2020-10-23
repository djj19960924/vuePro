<template>
<div id="app">
  <div id="nav">
    <router-link :to="{name:'home'}">首页</router-link>|
    <router-link :to="{name:'about'}">关于</router-link>|
    <router-link :to="{name:'user',params:{id:1}}">User1</router-link>|
    <router-link :to="{name:'user',params:{id:2}}">User2</router-link>|
    <router-link :to="{name:'page',query:{id:1,title:'foo'}}">Page</router-link>|
    <!-- 路由嵌套 -->
    <router-link to="/user/1/profile">user/1/profile</router-link>|
    <router-link to="/user/1/posts">user/1/posts</router-link>
  </div>
  <!-- router-view相当于路由组件的出口  -->
  <!-- Home组件 -->
  <router-view></router-view>
  <router-view name="main"></router-view>
  <router-view name="sideBar"></router-view>
</div>
</template>

<script>
import MyCart from "./components/Cart"

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
