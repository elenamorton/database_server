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

server.get('/set', (req, res, next) => {
  if (Object.keys(req.query).length === 0) {
    res.send('Error: no query has been made')
  }
  for (let key in req.query) {
    dataBase[key] = req.query[key]
  }
  res.status(200)
     .end('complete')
})

server.listen(4000, () => {
  console.log(`Server listening on Port: ${PORT}`)
})

module.exports = server
