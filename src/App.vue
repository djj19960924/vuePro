<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png">
  <ul>
    <li v-for="(item,index) in cartList" :key="item.id">
      <h2>{{item.title}}</h2>
      <p>￥{{item.price}}</p>
      <button @click='addCart(index)'>加入购物车</button>
    </li>

  </ul>
  <my-cart :title='title' :cart='cartList' @parentsubstract="substract" @parentadd="add">
  </my-cart>
</div>
</template>

<script>
import MyCart from "./components/Cart"

export default {
  name: 'App',
  data() {
    return {
      cartList: [],
      title: '购物车'
    }
  },
  async created() {
    // this.$http.get('/api/cartList')
    //   .then(res => {
    //     this.cartList = res.data.result
    //   }).catch(err => {
    //     console.log(err)
    //   })
    try {
      const res = await this.$http.get('/api/cartList')
      this.cartList = res.data.result
    } catch (error) {
      console.log(error)
    }
  },
  components: {
    MyCart
  },
  methods: {
    substract(i) {
      let count = this.cartList[i].count
      count > 1 ? this.cartList[i].count -= 1 : this.remove(i)
    },
    remove(i) {
      if (window.confirm('确定是否要删除？')) {
        this.cartList.splice(i, 1)
      }
    },
    add(i) {
      this.cartList[i].count++
    },
    addCart(i) {
      const good = this.cartList[i]
      this.$bus.$emit('addCart', good)
    }

  },
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
