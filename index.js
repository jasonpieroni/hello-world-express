const express = require('express')

const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    const name = req.body.name
    const message = `Welcome ${name}!`
    res.send(message)
})

app.listen(3000, () => {
    console.log('Server is listening at port 3000.');
})