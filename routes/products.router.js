router.get('/products', (req, res) => {
  const product = []
  for(let index = 0; index < 100; index++){
    const products = []
    const { size } = req.query
    const limit =size || 10
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      Image: faker.image.imageUrl(),
    })
  }
  res.json(products)
})

router.get('/filter', (req, res) => {
  res.send('yo soy un filter')
})

router.get('/:id', (req, res) =>{
  const { id } = req.params
  res.json({
    id,
    name: 'product 2',
    price: 2000
  })
})

module.exports = router
