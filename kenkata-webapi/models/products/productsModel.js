const mongodb = require('mongoose')
const Product = require('./productsSchema')

//Lägg till produkter i databasen
exports.addProducts = (req, res) => {
   try {
      for (product of req.body) {
         new Product({
            _id:              new mongodb.Types.ObjectId,
            category:         product.category,
            brand:            product.brand,
            name:             product.name,
            shortDescription: product.shortDescription,
            description:      product.description,
            image:            product.image,
            inStockAmount:    product.inStockAmount,
            price:            product.price,
            discount:         product.discount,
            status:           product.status
         }).save()
      }
      return res.status(200).json()
   }
   catch {
      return res.status(400).json()
   }
}

//Hämta alla produkter
exports.getProducts = (req, res) => {
   Product.find()
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error))
}

//Hämta en specifik produkt
exports.getProduct = (req, res) => {
   Product.findOne({ _id: req.params.id })
      .then(product => {
         if (product === null)
            return res.status(404).json({
               statusCode: 404,
               status: false,
               message: "Unable to get product from database."
            })

         return res.status(200).json({
            statusCode: 200,
            status: true,
            message: "Getting product was successful.",
            product: {
               id:               product._id,
               category:         product.category,
               brand:            product.brand,
               name:             product.name,
               shortDescription: product.shortDescription,
               description:      product.description,
               image:            product.image,
               inStockAmount:    product.inStockAmount,
               price:            product.price,
               discount:         product.discount,
               status:           product.status               
            }
         })
      })
      .catch(error => res.status(500).json({
         statusCode: 500,
         status: false,
         message: "Unable to get product from database."
      }))
}
