<template>
<div>
  <h2>{{title}}</h2>
  <table border="1">
    <tr>
      <th>#</th>
      <th>课程</th>
      <th>单价</th>
      <th>数量</th>
      <th>总价</th>
    </tr>
    <tr v-for='(c,index) in cart' :key='c.id'>
      <td>
        <input type="checkbox" v-model='c.active'>
      </td>
      <td>{{c.title}}</td>
      <td>{{c.price}}</td>
      <td>
        <button @click='substract(index)'>-</button>
        {{c.count}}
        <button @click='add(index)'>+</button>
      </td>
      <td>
        {{c.price*c.count}}
      </td>
    </tr>
    <tr>
      <td></td>
      <td colspan="2">{{activeCount}}/{{count}}</td>
      <td colspan="2">￥{{total}}</td>
    </tr>
  </table>
</div>
</template>

<script>
export default {
  name: "cart",
  props: ['title'],
  data() {
    return {
      cart: JSON.parse(localStorage.getItem('cart')) || []
    }
  },
  watch: {
    cart: {
      handler(n, o) {
        this.setLocalData(n)
      },
      deep: true
    }
  },
  created() {
    this.$bus.$on('addCart', good => {
      const ret = this.cart.find(v => v.id === good.id)
      if (!ret) {
        //购物车没有数据
        this.cart.push(good)
      } else {
        ret.count += 1
      }
    })
  },
  methods: {
    substract(i) {
      this.$emit('parentsubstract', i)
      // let count = this.cart[i].count
      // count > 1 ? this.cart[i].count -= 1 : this.remove(i)
    },
    add(i) {
      this.$emit('parentadd', i)
    },
    setLocalData(n) {
      localStorage.setItem('cart', JSON.stringify(n))
    }
  },
  computed: {
    count() {
      return this.cart.length
    },
    activeCount() {
      return this.cart.filter(v => v.active).length
    },
    total() {
      let sum = 0
      this.cart.forEach(c => {
        if (c.active) {
          sum += c.price * c.count
        }
      })
      return sum
    }
  },
}
</script>

<style scoped>

</style>
