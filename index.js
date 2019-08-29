const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const api = require('./routes/api')

const app = express()
const apiPort = 3001
mongoose.connect('mongodb://localhost:27017/LoginPage', { useNewUrlParser: true },
    () => console.log('Concted with MongoDB!'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api', api)

app.get('/', (req, res) => {
    res.send('Main Page')
})

app.listen(apiPort, () => console.log(`Servidor rodando na porta ${apiPort}`))