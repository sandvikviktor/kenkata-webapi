const bodyParser = require('body-parser')
const express = require('express')
const app = express()

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, Origin, X-Requested-With')

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
        return res.status(200).json({})
    }

    next()
})

//BODY-PARSER
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//CONTROLLERS
app.use('/api/users', require('./controllers/usersController'))
app.use('/api/products', require('./controllers/productsController'))
app.use('/api/orders', require('./controllers/orderController'))
app.use('/api/blogs', require('./controllers/blogsController'))

module.exports = app;