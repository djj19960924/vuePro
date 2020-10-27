<template>
<div>
  <h2>我的商铺</h2>
  <ul>
    <li v-for="(product) in products" :key='product.id'>
      {{product.title}} - {{product.price | currency}}
    </li>
  </ul>
</div>
</template>

<script>
import {
  mapState,
  mapMutations,
  mapActions
} from 'vuex'
export default {
  computed: {
    ...mapState('products', ['products'])
  },
  created() {
    this.$store.dispatch('products/getAllProducts')
  },
}
</script>

<style lang="scss" scoped>

</style>
