const mongodb = require('mongoose')
const Blog = require('./blogSchema')

exports.saveBlog = (req, res) => {
    const blog = new Blog(
        {
            _id: new mongodb.Types.ObjectId
        }
    )
    blog.save().then(() => {
        res.status(201).json({
            statusCode: 201,
            status: true,
            message: 'Blog post was saved'
        })
        .catch(error => {
            res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Unable to save blog post',
                error
            })
        })
    })
}