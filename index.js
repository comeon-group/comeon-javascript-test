const express = require('express')

const mockData = require('./mock/mock-data.json')
const html = require('./template.js')
const server = express()

const { players } = mockData

server.get('/', (_, res) => res.send(html))
server.get('/games', (_, res) => res.json(mockData.games))
server.get('/categories', (_, res) => res.json(mockData.categories))
server.use(express.json())
server.post('/login', (req, res) => {
  const username = req.body.username
  const password = req.body.password
  if (username in players && players[username].password === password) {
    const player = Object.assign({}, players[username])
    delete player.password
    res.status(200).json({
      status: 'success',
      player
    })
  } else {
    res.status(400).json({
      status: 'fail',
      error: 'player does not exist or wrong password'
    })
  }
})
server.post('/logout', (req, res) => {
  const username = req.body.username
  if (username in players) {
    res.status(200).json({
      status: 'success'
    })
  } else {
    res.status(400).json({
      status: 'fail',
      error: 'Username do not match!'
    })
  }
})

server.use(express.static('public'))

server.get('*', (_, res) => res.sendStatus(404))

server.listen(3000, (error) => {
  if (error) console.error(error)
  console.log('listening to port 3000')
})
