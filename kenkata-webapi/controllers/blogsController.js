const route = require('express').Router()
const blogModel = require('../models/blogs/blogModel')


route.post('/saveblog', blogModel.saveBlog)



module.exports = route