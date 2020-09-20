const mongodb = require('mongoose')

const productSchema = mongodb.Schema({

    _id:                mongodb.Schema.Types.ObjectId,
    category:           { type: String, required: true },
    brand:              { type: String, required: true },
    name:               { type: String, required: true },
    shortDescription:   { type: String, required: true },
    description:        { type: String, required: true },
    image:              { type: String, required: true },
    inStockAmount:      { type: Number, required: true },
    price:              { type: Number, required: true },
    discount:           { type: String, required: true },
    status:             { type: String, required: true },

    created:            { type: Date, default: Date.now },
    modified:           { type: Date, default: Date.now }    
    
})

module.exports = mongodb.model("Product", productSchema)