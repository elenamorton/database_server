const express = require('express')
const bodyParser = require('body-parser');

const server = express()
const PORT = 4000

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

let dataBase = {}

server.get('/', (req, res) => {
  res.send('Hello Database Server')
})


server.listen(4000, () => {
  console.log(`Server listening on Port: ${PORT}`)
})

module.exports = server
