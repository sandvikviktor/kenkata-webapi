const mongodb = require('mongoose')

const blogSchema = mongodb.Schema({
    _id: mongodb.Schema.Types.ObjectId
})

module.exports = mongodb.model("Blog", blogSchema)