const WebSocket = require('ws')
const express = require('express')
const Sequalize = require('sequelize')


/* const dbConnection = new Sequalize(
  'postgres://latpvjyc:2zdveBxa-uHhMdoROxI_U2HdvsdeETfb@dumbo.db.elephantsql.com:5432/latpvjyc' , 'latpvjyc', '2zdveBxa-uHhMdoROxI_U2HdvsdeETfb',
  {
    dialect: 'postgres'
  }
)

const User = dbConnection.define('User', {
  username: Sequalize.DataTypes.STRING
})

dbConnection.sync().then(() => User.create({
  username: 'Admin'
}))

const app = express()


const server = app.listen(8080, () => {
  console.log('server is running on port 8080')
})
*/
const wss = new WebSocket.Server({ port: 8989 })

const users = []

const broadcast = (data, ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data))
    }
  })
}

wss.on('connection', (ws) => {
  let index
  ws.on('message', (message) => {
    const data = JSON.parse(message)
    console.log(message)
    switch (data.type) {
      case 'ADD_USER': {
        index = users.length
        users.push({ name: data.name, id: index + 1 })
        ws.send(JSON.stringify({
          type: 'USERS_LIST',
          users
        }))
        broadcast({
          type: 'USERS_LIST',
          users
        }, ws)
        break
      }
      case 'ADD_MESSAGE':
        broadcast({
          type: 'ADD_MESSAGE',
          message: data.message,
          author: data.author
        }, ws)
        break
      default:
        break
    }
  })

  ws.on('close', () => {
    users.splice(index, 1)
    broadcast({
      type: 'USERS_LIST',
      users
    }, ws)
  })
})
/*
const noop = () => {}
function heartbeat() {
    this.isAlive = true
}

const interval = setInterval(() => {
    wss.users.forEach((ws) => {
        if (ws.isAlive === false) return ws.terminate()
        ws.isAlive = false
        ws.ping(noop)
    })
}, 30000)
*/
