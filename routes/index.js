const products = require('./products.router')
//const userRouter = require('./user.router')

function routerApi(app){
  const router = express.router()
  app.use('/api/v1', router)
  app.use('api/v1/products', productsRouter)
  app.use('api/v1/users', usersRouter)
  app.use('api/v1/categories', categoriesRouter)
}

module.exports = routerApi;
