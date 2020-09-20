const mongodb = require('mongoose')
const Order = require('./orderSchema')

exports.saveOrder = (req, res) => {
   const order = new Order(
      {
         _id: new mongodb.Types.ObjectId,
         userId: req.body.userId,
         products: req.body.order,
         total: req.body.total
      }
   )
   order.save()
      .then(() => {
         res.status(201).json({
            statusCode: 201,
            status: true,
            message: 'Order was successfully placed.'
         })
      })
      .catch(error => {
         res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Unable to place order. Please contact the System Administrator.',
            error
         })
      })
}

exports.getOrders = (req, res) => {
   Order.find()
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error))
}

exports.getOrder = (req, res) => {
   Order.find({ userId: req.params.id })
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error))
}

exports.deleteOrder = (req, res) => {
   Order.deleteOne({ _id: req.params.id })
      .then(data => res.status(200).json(data))
      .catch(error => res.status(400).json(error))
}