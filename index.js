const express = require('express')
const routerApi = require('./routes')

const  router = express.Router()


routes.get('/', (req, res) => {
  res.send('Hola mi server en express')
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta')
})

routerApi(app)


//app.get('/user', (req, res) => {
 // const { limit, offset } = req.query
//if (limit && offset) {
  //res.json({
    //limit,
    //offset
  //})
//}else{
//  res.send('No hay parameros')
//}
//})
//app.get('/categories/:categoryId/products/:productId', (req, res) =>{
//  const { categoryId, productId } = req.params
//  res.json({
//    categoryId,
//    productId,
//  })
//})
//app.listen(port, () => {
//  console.log(`Example app listening on port ${port}`)
//})
