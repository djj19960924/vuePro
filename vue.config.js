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
    }
  }
}