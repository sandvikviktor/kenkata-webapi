const route = require('express').Router()
const productsModel = require('../models/products/productsModel')

route.post('/import', productsModel.addProducts)

route.get('/', productsModel.getProducts)
route.get('/:id', productsModel.getProduct)


module.exports = route