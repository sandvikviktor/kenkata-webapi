const mongodb = require('mongoose')

const orderSchema = mongodb.Schema({
    _id: mongodb.Schema.Types.ObjectId,
    userId: { type: String, required: true },
    products: { type: Array, require: true },
    total: {type: String, required: true},
})

module.exports = mongodb.model("Order", orderSchema)