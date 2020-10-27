
const products = [
  {id:1,title:'iphone11',price: 800,inventory:10},
  {id:2,title:'iphone11 pro',price: 1200,inventory:15},
  {id:3,title:'iphone11 max',price: 1500,inventory:5}
]

module.exports = {
  devServer: {
    // mock数据模拟
    before(app,server) {
      //接口
      app.get('/api/cartList',(req,res)=>{
        res.json({
          result: [
            { id: 1, title: "Vue实战开发", price: 188, active: true, count: 1 },
            { id: 2, title: "React实战开发", price: 288, active: true, count: 1 }
          ]
        })
      })
      app.get('/api/products',(req,res)=>{
        res.json({
          result: products
        })
      })
    }
  }
}