<template>
<div>
  <h2>登录页</h2>
  <input type="text" v-model="user">
  <input type="text" v-model="pwd">
  <button @click="handleLogin">登录</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      user: '',
      pwd: ''
    }
  },
  methods: {
    handleLogin() {
      //1.获取用户名和密码
      //2.与后端发生交互
      setTimeout(() => {
        let data = {
          user: this.user
        }
        //保存用户名到本地
        localStorage.setItem('user', JSON.stringify(data))
        this.$router.push({
          name: 'notes'
        })
      }, 1000)
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
