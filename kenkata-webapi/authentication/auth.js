const jwt = require('jsonwebtoken')
const secretKey = '023f7dab-02aa-4e98-a4f2-282ed79c0ff8-e476193d-3bde-4fde-acd4-4875201e8232'

exports.genToken = (id) => {
    return jwt.sign({ id: id }, secretKey, { expiresIn: '1h' })
}

exports.checkToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        req.userData = jwt.verify(token, secretKey)
        next()
    }
    catch {
        res.status(401).json({
            statusCode: 401,
            status: false,
            message: 'Access Restricted! Please Login.'
        })
    }
}