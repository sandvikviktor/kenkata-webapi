const http = require('http')
const port = process.env.port || 9999
const app = require('./app')
const mongodb = require('mongoose')

const serverUri = 'http://localhost:' + port
const mongoUri = 'mongodb+srv://viktor:Oriflame1@cluster0-hvnpc.mongodb.net/kenkata?retryWrites=true&w=majority'

//starting webserver
http.createServer(app).listen(port, () => console.log('Webserver:' + serverUri))

//starting mongodb database
mongodb
.set('useCreateIndex', true)
.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Mongodb: Running'))
.catch((error) => console.log(error))