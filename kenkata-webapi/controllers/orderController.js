const route = require('express').Router()
const orderModel = require('../models/orders/orderModel')

route.post('/saveorder', orderModel.saveOrder)

route.get('/getorders', orderModel.getOrders)
route.get('/getorders/:id', orderModel.getOrder)

route.delete('/deleteorder/:id', orderModel.deleteOrder)

module.exports = route