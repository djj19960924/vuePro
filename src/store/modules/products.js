import Axios from "axios"

export default {
  namespaced: true,
  state: {
    products: []
  },
  getters: {

  },
  mutations: {
    getAllProducts(state,products) {
      console.log(products)
      state.products = products
    }
  },
  actions: {
    async getAllProducts({commit}) {
      //发送请求 获取数据 提交mutation
      try {
        const res = await Axios.get('/api/products')
        const result = res.data.result
        commit('getAllProducts',result)
      } catch (error) {
        console.log(error)
      }
      
    }
  }
}