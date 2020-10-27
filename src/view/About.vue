<template>
<div>
  <h1>This is AboutPage!</h1>
  {{count}}
  {{evenOrOdd}}
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
  <button @click="incrementAsync">异步+1</button>
  <ProductList />
  <hr>
  <shopping-cart />
</div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'
import ProductList from '@/components/ProductList'
// import ShoppingCart from '@/components/ShoppingCart'
export default {
  name: 'About',
  data() {
    return {}
  },
  components: {
    ProductList,
    // ShoppingCart
  },
  created() {},
  computed: {
    // count() {
    //   return this.$store.state.count
    // },
    // username() {
    //   return this.$store.state.username
    // }
    ...mapState(['count', 'username']),
    // evenOrOdd() {
    //   return this.$store.getters.evenOrOdd
    // }
    ...mapGetters(['evenOrOdd'])
  },
  methods: {
    //同步方法直接用commit调用
    // increment() {
    //   //dispatch触发actions中声明的方法
    //   //this.$store.dispatch('increment')
    //   this.$store.commit('increment')
    // },
    // decrement() {
    //   //this.$store.dispatch('decrement')
    //   this.$store.commit('decrement')
    // },
    ...mapMutations(['increment', 'decrement']),
    //异步方法用dispatch触发actions中声明的方法
    incrementAsync() {
      //在组件内部提交数据 载荷形式分发
      // this.$store.dispatch('incrementAsync', {
      //   amount: 10
      // })
      this.$store.dispatch({
        type: 'incrementAsync',
        amount: 10
      })
    }
    // ...mapActions(['incrementAsync'])
  },
}
</script>

<style>

</style>
